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
  favicon: 'img/spid_icon.ico',

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
    <div style="display: flex; align-items: center; gap: 8px;">
      <a href="https://github.com/SPID-Protocol-project/spidprotocol-docs" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/github/v/release/SPID-Protocol-project/spidprotocol-docs?label=version&color=brightgreen" alt="version" />
      </a>
      <a href="https://github.com/SPID-Protocol-project/spidprotocol-docs/stargazers" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/github/stars/SPID-Protocol-project/spidprotocol-docs?style=social" alt="stars" />
      </a>
      <a href="https://github.com/SPID-Protocol-project/spidprotocol-docs/network/members" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/github/forks/SPID-Protocol-project/spidprotocol-docs?style=social" alt="forks" />
      </a>
    </div>
  `,
},

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
