import type { BlogCategory, BlogPost } from '../types/blog';

export const blogCategories: readonly BlogCategory[] = [
  {
    id: 'algorithm-of-the-day',
    label: 'Algorithm of the Day',
    description:
      'Episode scripts, rituals, and production notes for the Algorithm of the Day learning format.',
  },
  {
    id: 'technical-notes',
    label: 'Technical Notes',
    description:
      'Short implementation notes about React, TypeScript, portfolio architecture, and AI-assisted workflows.',
  },
  {
    id: 'case-studies',
    label: 'Case Studies',
    description:
      'Longer retrospectives that connect portfolio projects with goals, decisions, tradeoffs, and next steps.',
  },
  {
    id: 'learning-log',
    label: 'Learning Log',
    description:
      'Transparent learning entries that record practice, experiments, questions, and future improvements.',
  },
];

export const blogPosts: readonly BlogPost[] = [
  {
    id: 'algorithm-of-the-day-introduction',
    title: 'Algorithm of the Day: Introduction',
    summary:
      'Placeholder introduction for the daily learning ritual: a fact, a metaphor, a small action, and a community question.',
    category: 'algorithm-of-the-day',
    status: 'planned',
    source: 'markdown-placeholder',
    dateLabel: 'Planned foundation post',
    readingTime: '3 min concept',
    tags: ['Algorithm of the Day', 'Education', 'Ritual', 'Placeholder'],
    placeholder: true,
    contentPath: 'src/content/posts/algorithm-of-the-day-introduction.md',
    relatedProjectId: 'algorithm-of-the-day',
  },
  {
    id: 'portfolio-react-routing-notes',
    title: 'React Portfolio Routing Notes',
    summary:
      'Placeholder technical note for documenting routing decisions, typed data modules, and reusable portfolio components.',
    category: 'technical-notes',
    status: 'planned',
    source: 'typescript-data',
    dateLabel: 'Planned technical note',
    readingTime: '4 min outline',
    tags: ['React', 'TypeScript', 'Routing', 'Placeholder'],
    placeholder: true,
  },
  {
    id: 'algorithm-of-the-day-case-study-draft',
    title: 'Case Study Draft: Building a Learning Ritual',
    summary:
      'Placeholder case study connecting the Algorithm of the Day concept, audience, publishing workflow, and next milestones.',
    category: 'case-studies',
    status: 'draft',
    source: 'future-mdx',
    dateLabel: 'Draft case study',
    readingTime: '6 min outline',
    tags: ['Case Study', 'AI Collaboration', 'Publishing', 'Placeholder'],
    placeholder: true,
    relatedProjectId: 'algorithm-of-the-day',
  },
  {
    id: 'learning-log-blog-foundation',
    title: 'Learning Log: Blog Foundation',
    summary:
      'Placeholder log for tracking how this blog area evolves from typed previews into Markdown or MDX-powered writing.',
    category: 'learning-log',
    status: 'planned',
    source: 'typescript-data',
    dateLabel: 'Planned learning log',
    readingTime: '2 min outline',
    tags: ['Learning Log', 'Content Strategy', 'Markdown', 'Placeholder'],
    placeholder: true,
  },
];

export const markdownSupportNotes = [
  'Current previews are plain TypeScript data so the route can launch without a content pipeline.',
  'Markdown files can be introduced with frontmatter and imported through Vite glob imports in a later phase.',
  'MDX is a future option when posts need interactive React examples, diagrams, or reusable portfolio components.',
] as const;
