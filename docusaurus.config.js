const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const sidebars = require('./sidebars.js');

module.exports = {
  title: 'SPID Protocol',
  tagline: 'Smart Packets. Structured Answers. Voice-Ready.',
  url: 'https://spidprotocol-project.github.io',
  baseUrl: '/spidprotocol-docs/',
  organizationName: 'SPID-Protocol-project',
  projectName: 'spidprotocol-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/spid_favicon.ico',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'zh'],
    localeConfigs: {
      en: { label: 'English' },
      fr: { label: 'Français' },
      zh: { label: '中文' },
    },
  },

  stylesheets: [
    'https://cdn.jsdelivr.net/npm/@docsearch/css@3',
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editLocalizedFiles: true,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
        },
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
          type: 'search',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          type: 'html',
          position: 'right',
          value: `
            <div style="display: flex; align-items: center; gap: 6px;">
              <a href="https://github.com/SPID-Protocol-project/spidprotocol-docs" target="_blank">
                <img src="https://img.shields.io/github/v/release/SPID-Protocol-project/spidprotocol-docs?label=version&color=brightgreen" />
              </a>
              <a href="https://github.com/SPID-Protocol-project/spidprotocol-docs/stargazers" target="_blank">
                <img src="https://img.shields.io/github/stars/SPID-Protocol-project/spidprotocol-docs?style=social" />
              </a>
              <a href="https://github.com/SPID-Protocol-project/spidprotocol-docs/network/members" target="_blank">
                <img src="https://img.shields.io/github/forks/SPID-Protocol-project/spidprotocol-docs?style=social" />
              </a>
            </div>
          `,
        },
      ],
    },

    algolia: {
      appId: '6SO3NK58E1',
      apiKey: '28b9141bf7ced7e91430110f1ba9896e',
      indexName: 'spid-protocol-projectio',
      insights: true,
    },

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

    metadata: [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'SPID Protocol' },
      { name: 'twitter:description', content: 'Smart Packets. Structured Answers. Voice-Ready.' },
      { name: 'twitter:image', content: '/img/SPID-social-card.png' },
      { property: 'og:image', content: '/img/SPID-social-card.png' },
      { property: 'og:title', content: 'SPID Protocol' },
      { property: 'og:description', content: 'Smart Packets. Structured Answers. Voice-Ready.' },
    ],
  },
};
footer: {
  style: 'dark',
  links: [
    // your existing links go here
  ],
  copyright: `Copyright © ${new Date().getFullYear()} VoiceMate / ChatSites LLC.`,
  // Add this custom license HTML badge below as a new field
  // (this part is not standard, but you can move it into a custom component later)
  // If needed, this can be part of a page instead.
},
