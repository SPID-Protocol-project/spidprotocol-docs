// docusaurus.config.js
module.exports = {
  title: 'SPID Protocol',
  tagline: 'Smart Packets. Structured Answers. Voice-Ready.',
  url: 'https://SPID-Protocol-project.github.io', // GitHub org/user URL
  baseUrl: '/spidprotocol-docs/',                // GitHub repo name with slashes
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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
