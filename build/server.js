const { createServer } = require('http');
const URL = require('url');
const next = require('next');
const httpProxy = require('http-proxy');
const config = require('config');
const { getRedirectMatch, getApiUrl } = require('./helpers/server/redirect');
const { redirect, setDefaultHeaders } = require('./helpers/server/response');
const { getProxyMatch } = require('./helpers/server/proxy');

const port = parseInt(process.env.PORT, 10) || 4000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const proxy = httpProxy.createProxyServer({ target: config.tutorialsUrl, changeOrigin: true });

proxy.on('proxyReq', (proxyReq) => {
  proxyReq.setHeader('forwarded-api', config.tutorialToken);
});

app.prepare()
  .then(() => {
    createServer((req, res) => {
      const parsedUrl = URL.parse(req.url, true);
      if (getProxyMatch(parsedUrl.path)) {
        proxy.web(req, res);
      } else {
        const redirectMatch = getRedirectMatch(parsedUrl);
        if (redirectMatch) {
          const { redirectUrl, statusCode } = redirectMatch;

          redirect(res, redirectUrl, statusCode);
        } else {
          setDefaultHeaders(res);

          const apiUrl = getApiUrl(parsedUrl);
          if (apiUrl) {
            req.url = apiUrl.path;
            handle(req, res, apiUrl);
          } else {
            handle(req, res, parsedUrl);
          }
        }
      }
    })
      .listen(port, (err) => {
        if (err) {
          throw err;
        }
        console.log(`> Ready on http://localhost:${port}`);
      });
  });
