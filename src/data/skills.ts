import type { SkillGroup } from '../types/skill';

export const skillGroups: readonly SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    categoryLabel: 'Frontend craft',
    description:
      'Accessible page structure, responsive presentation, and component-based portfolio delivery.',
    skills: [
      {
        name: 'Semantic HTML',
        category: 'frontend',
        level: 'building',
        summary:
          'Uses landmark sections, labelled headings, and meaningful link text across portfolio pages.',
      },
      {
        name: 'CSS layout and responsive cards',
        category: 'frontend',
        level: 'practicing',
        summary:
          'Shapes the background, panels, cards, lists, mobile breakpoints, and readable content hierarchy.',
      },
      {
        name: 'React and Vite',
        category: 'frontend',
        level: 'building',
        summary:
          'Powers routed pages, typed data rendering, reusable portfolio components, and fast local iteration.',
      },
    ],
  },
  {
    id: 'programming',
    title: 'Programming',
    categoryLabel: 'Programming foundations',
    description:
      'Languages and algorithm-oriented learning practices used for project prototypes and notebooks.',
    skills: [
      {
        name: 'JavaScript and TypeScript',
        category: 'programming',
        level: 'practicing',
        summary:
          'Turns static content into typed reusable data, route-aware components, and maintainable UI logic.',
      },
      {
        name: 'Python learning environment',
        category: 'programming',
        level: 'learning',
        summary:
          'Explored through Google Colab notebooks and algorithm-centered learning resources.',
      },
      {
        name: 'Algorithmic thinking',
        category: 'programming',
        level: 'learning',
        summary:
          'Connects everyday metaphors, facts, and rituals to concrete programming concepts.',
      },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    categoryLabel: 'Publishing workflow',
    description:
      'Editors, hosting platforms, and learning environments represented in the portfolio origin story.',
    skills: [
      {
        name: 'GitHub project publishing',
        category: 'tools',
        level: 'practicing',
        summary:
          'Hosts code, repository links, and the GitHub Pages portfolio workflow.',
      },
      {
        name: 'Google Colab',
        category: 'tools',
        level: 'learning',
        summary: 'Provides a browser-based place to experiment with Python notebooks.',
      },
      {
        name: 'Notepad++ and browser prototyping',
        category: 'tools',
        level: 'building',
        summary: 'Part of the original website origin story and educational workflow.',
      },
    ],
  },
  {
    id: 'ai-collaboration',
    title: 'AI collaboration',
    categoryLabel: 'Human-directed AI',
    description:
      'AI tools are framed as collaborators for exploration while preserving Aleksandar’s editorial direction.',
    skills: [
      {
        name: 'Prompted code assistance',
        category: 'ai-collaboration',
        level: 'building',
        summary:
          'Uses AI assistants to generate, review, and refine portfolio code with human verification.',
      },
      {
        name: 'Research and explanation support',
        category: 'ai-collaboration',
        level: 'practicing',
        summary:
          'Turns learning questions into structured summaries, examples, and next-step prompts.',
      },
    ],
  },
  {
    id: 'creative-direction',
    title: 'Creative direction',
    categoryLabel: 'Algorithm of the Day',
    description:
      'Editorial structure for episodes, metaphors, and community-friendly learning moments.',
    skills: [
      {
        name: 'Episode design',
        category: 'creative-direction',
        level: 'practicing',
        summary:
          'Shapes prologue, fact, metaphor, ritual, music, and community question segments.',
      },
      {
        name: 'Bilingual content framing',
        category: 'creative-direction',
        level: 'practicing',
        summary:
          'Blends Bulgarian project identity with concise English explanations for a wider audience.',
      },
    ],
  },
  {
    id: 'communication',
    title: 'Communication',
    categoryLabel: 'Public presentation',
    description:
      'Clear, privacy-aware communication for readers, reviewers, and future collaborators.',
    skills: [
      {
        name: 'Community prompts',
        category: 'communication',
        level: 'learning',
        summary:
          'Turns listener participation and questions into material for future episodes.',
      },
      {
        name: 'Privacy-aware contact publishing',
        category: 'communication',
        level: 'building',
        summary:
          'Keeps street address and phone data private while publishing safe contact options.',
      },
    ],
  },
];

export const skillPreviewGroups = skillGroups.map((group) => ({
  ...group,
  skills: group.skills.slice(0, 2),
}));
