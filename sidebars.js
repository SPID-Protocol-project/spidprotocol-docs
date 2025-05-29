// sidebars.js

const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: {
        type: 'localized',
        id: 'sidebar.category.spid-protocol', // You'll define this translation
        default: 'SPID Protocol',
      },
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
