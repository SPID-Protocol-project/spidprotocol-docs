import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/spidprotocol-docs/markdown-page',
    component: ComponentCreator('/spidprotocol-docs/markdown-page', '0ae'),
    exact: true
  },
  {
    path: '/spidprotocol-docs/docs',
    component: ComponentCreator('/spidprotocol-docs/docs', '519'),
    routes: [
      {
        path: '/spidprotocol-docs/docs',
        component: ComponentCreator('/spidprotocol-docs/docs', '452'),
        routes: [
          {
            path: '/spidprotocol-docs/docs',
            component: ComponentCreator('/spidprotocol-docs/docs', '973'),
            routes: [
              {
                path: '/spidprotocol-docs/docs/category/tutorial---basics',
                component: ComponentCreator('/spidprotocol-docs/docs/category/tutorial---basics', 'dfb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spidprotocol-docs/docs/category/tutorial---extras',
                component: ComponentCreator('/spidprotocol-docs/docs/category/tutorial---extras', '4e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spidprotocol-docs/docs/intro',
                component: ComponentCreator('/spidprotocol-docs/docs/intro', '083'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spidprotocol-docs/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/spidprotocol-docs/docs/tutorial-basics/congratulations', '616'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spidprotocol-docs/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/spidprotocol-docs/docs/tutorial-basics/create-a-blog-post', 'e28'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spidprotocol-docs/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/spidprotocol-docs/docs/tutorial-basics/create-a-document', '7e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spidprotocol-docs/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/spidprotocol-docs/docs/tutorial-basics/create-a-page', '0bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spidprotocol-docs/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/spidprotocol-docs/docs/tutorial-basics/deploy-your-site', '154'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spidprotocol-docs/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/spidprotocol-docs/docs/tutorial-basics/markdown-features', '2a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spidprotocol-docs/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/spidprotocol-docs/docs/tutorial-extras/manage-docs-versions', '5d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spidprotocol-docs/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/spidprotocol-docs/docs/tutorial-extras/translate-your-site', '80d'),
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
