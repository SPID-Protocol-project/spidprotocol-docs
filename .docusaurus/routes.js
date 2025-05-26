import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/spidprotocol-docs/__docusaurus/debug',
    component: ComponentCreator('/spidprotocol-docs/__docusaurus/debug', '232'),
    exact: true
  },
  {
    path: '/spidprotocol-docs/__docusaurus/debug/config',
    component: ComponentCreator('/spidprotocol-docs/__docusaurus/debug/config', '4e4'),
    exact: true
  },
  {
    path: '/spidprotocol-docs/__docusaurus/debug/content',
    component: ComponentCreator('/spidprotocol-docs/__docusaurus/debug/content', '4cb'),
    exact: true
  },
  {
    path: '/spidprotocol-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/spidprotocol-docs/__docusaurus/debug/globalData', 'e35'),
    exact: true
  },
  {
    path: '/spidprotocol-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/spidprotocol-docs/__docusaurus/debug/metadata', '9ab'),
    exact: true
  },
  {
    path: '/spidprotocol-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/spidprotocol-docs/__docusaurus/debug/registry', '0e3'),
    exact: true
  },
  {
    path: '/spidprotocol-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/spidprotocol-docs/__docusaurus/debug/routes', '342'),
    exact: true
  },
  {
    path: '/spidprotocol-docs/docs',
    component: ComponentCreator('/spidprotocol-docs/docs', 'c04'),
    routes: [
      {
        path: '/spidprotocol-docs/docs',
        component: ComponentCreator('/spidprotocol-docs/docs', '74f'),
        routes: [
          {
            path: '/spidprotocol-docs/docs',
            component: ComponentCreator('/spidprotocol-docs/docs', 'c12'),
            routes: [
              {
                path: '/spidprotocol-docs/docs/intro',
                component: ComponentCreator('/spidprotocol-docs/docs/intro', '083'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/spidprotocol-docs/',
    component: ComponentCreator('/spidprotocol-docs/', '33d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
