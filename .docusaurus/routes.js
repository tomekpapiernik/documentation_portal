
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/documentation_portal/',
  component: ComponentCreator('/documentation_portal/','6f3'),
  exact: true,
},
{
  path: '/documentation_portal/blog',
  component: ComponentCreator('/documentation_portal/blog','13c'),
  exact: true,
},
{
  path: '/documentation_portal/blog/hello-world',
  component: ComponentCreator('/documentation_portal/blog/hello-world','43a'),
  exact: true,
},
{
  path: '/documentation_portal/blog/hola',
  component: ComponentCreator('/documentation_portal/blog/hola','e9c'),
  exact: true,
},
{
  path: '/documentation_portal/blog/tags',
  component: ComponentCreator('/documentation_portal/blog/tags','33f'),
  exact: true,
},
{
  path: '/documentation_portal/blog/tags/docusaurus',
  component: ComponentCreator('/documentation_portal/blog/tags/docusaurus','cbb'),
  exact: true,
},
{
  path: '/documentation_portal/blog/tags/facebook',
  component: ComponentCreator('/documentation_portal/blog/tags/facebook','791'),
  exact: true,
},
{
  path: '/documentation_portal/blog/tags/hello',
  component: ComponentCreator('/documentation_portal/blog/tags/hello','11e'),
  exact: true,
},
{
  path: '/documentation_portal/blog/tags/hola',
  component: ComponentCreator('/documentation_portal/blog/tags/hola','5d7'),
  exact: true,
},
{
  path: '/documentation_portal/blog/welcome',
  component: ComponentCreator('/documentation_portal/blog/welcome','454'),
  exact: true,
},
{
  path: '/documentation_portal/docs',
  component: ComponentCreator('/documentation_portal/docs','917'),
  
  routes: [
{
  path: '/documentation_portal/docs/',
  component: ComponentCreator('/documentation_portal/docs/','099'),
  exact: true,
},
{
  path: '/documentation_portal/docs/doc2',
  component: ComponentCreator('/documentation_portal/docs/doc2','c72'),
  exact: true,
},
{
  path: '/documentation_portal/docs/doc3',
  component: ComponentCreator('/documentation_portal/docs/doc3','181'),
  exact: true,
},
{
  path: '/documentation_portal/docs/mdx',
  component: ComponentCreator('/documentation_portal/docs/mdx','221'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
