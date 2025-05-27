const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
  title: 'SPID Protocol',
  tagline: 'Smart Packets. Structured Answers. Voice-Ready.',
  url: 'https://SPID-Protocol-project.github.io',
  baseUrl: '/spidprotocol-docs/',
  organizationName: 'SPID-Protocol-project',
  projectName: 'spidprotocol-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
  navbar: {
    title: 'SPID Protocol',
    logo: {
      alt: 'SPID Protocol Logo',
      src: 'img/logo.svg',
    },
    items: [
      {
        type: 'doc',
        docId: 'intro',
        position: 'left',
        label: 'Docs',
      },
      {
        href: 'https://github.com/SPID-Protocol-project/spidprotocol-docs',
        label: 'GitHub',
        position: 'right',
      },
      {
        type: 'search',
        position: 'right',
      },
    ],
  },
  colorMode: {
    defaultMode: 'dark',
    disableSwitch: false,
    respectPrefersColorScheme: true,
  },
  prism: {
    theme: require('prism-react-renderer/themes/github'),
    darkTheme: require('prism-react-renderer/themes/dracula'),
  },
  docs: {
    sidebar: {
      hideable: true,
      autoCollapseCategories: true,
    },
  },
},
};
