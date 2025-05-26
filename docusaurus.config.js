module.exports = {
  title: 'SPID Protocol',
  tagline: 'Smart Packets. Structured Answers. Voice-Ready.',
  url: 'https://yourusername.github.io',
  baseUrl: '/spidprotocol-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'yourusername', // GitHub org/user
  projectName: 'spidprotocol-docs', // Repo name
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
};
