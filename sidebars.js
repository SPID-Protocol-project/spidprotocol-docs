// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'SPID Protocol',
      collapsed: false,
      items: [
        'intro',
        'getting-started',
        'packet-format',
        'pulseid',
        'spec',
        'use-cases',
        'contributing',
        'roadmap',
        'story-of-our-logo',
      ],
    },
  ],
};

export default sidebars;
