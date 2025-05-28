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
  favicon: 'img/spid-icon.ico',

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
        src: 'img/spid_icon_dark.png',
      },
      items: [
  {
    type: 'doc',
    docId: 'intro',
    position: 'left',
    label: 'Docs',
  },
  {
    type: 'html',
    position: 'right',
    value: `
      <div style="display: flex; align-items: center; gap: 6px;">
        <a href="https://github.com/SPID-Protocol-project/spidprotocol-docs" target="_blank" title="GitHub Repo">
          <img alt="version" src="https://github.com/SPID-Protocol-project/spidprotocol-docs?label=SPID Protocol Project&color=red" />
        </a>
        <a href="https://github.com/SPID-Protocol-project/spidprotocol-docs/stargazers" target="_blank" title="Stars">
          <img alt="stars" src="https://img.shields.io/github/stars/SPID-Protocol-project/spidprotocol-docs?style=social" />
        </a>
        <a href="https://github.com/SPID-Protocol-project/spidprotocol-docs/network/members" target="_blank" title="Forks">
          <img alt="forks" src="https://img.shields.io/github/forks/SPID-Protocol-project/spidprotocol-docs?style=social" />
        </a>
      </div>
    `,
  }, // ← this comma was missing!
  {
    type: 'search',
    position: 'right',
  },
],


      style: 'dark',
    },

    metadata: [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'SPID Protocol' },
      { name: 'twitter:description', content: 'Smart Packets. Structured Answers. Voice-Ready.' },
      { name: 'twitter:image', content: '/img/SPID-social-card.png' },
      { property: 'og:image', content: '/img/SPID-social-card.png' },
      { property: 'og:title', content: 'SPID Protocol' },
      { property: 'og:description', content: 'Smart Packets. Structured Answers. Voice-Ready.' },
    ],

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },

    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
  },
};
