import { algorithmOfTheDayProject } from './algorithmOfTheDay';
import type { Project } from '../types/project';

export const projects: readonly Project[] = [
  algorithmOfTheDayProject,
  {
    id: 'portfolio-foundation',
    title: 'Portfolio Foundation',
    subtitle: 'A modern React shell for reusable personal content.',
    summary:
      'A routed portfolio application that preserves legacy content while preparing professional project, skills, blog, and contact sections.',
    description:
      'Portfolio Foundation introduces typed local data, route-based pages, responsive cards, and safe public contact defaults for the next publishing iterations.',
    status: 'active',
    tags: ['React', 'TypeScript', 'Vite', 'Portfolio'],
    technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
    highlights: [
      'Migrates static legacy content into reusable modules.',
      'Separates private contact information from rendered public channels.',
      'Creates a maintainable base for project case studies and future writing.',
    ],
    links: [
      {
        label: 'Legacy archive',
        url: '/docs/legacy/index.html',
        kind: 'archive',
        isPublic: false,
      },
    ],
  },
  {
    id: 'legacy-learning-archive',
    title: 'Legacy Learning Archive',
    subtitle: 'Original static pages preserved as the portfolio origin story.',
    summary:
      'A historical snapshot of early HTML pages, contact content, and learning links that informs the current bilingual experience.',
    description:
      'The archive keeps the original learning material available while the React portfolio extracts durable content into typed project, biography, and skill data.',
    status: 'archived',
    tags: ['HTML', 'Learning archive', 'Migration', 'Documentation'],
    technologies: ['HTML', 'CSS', 'Static assets'],
    highlights: [
      'Documents the transition from hand-authored static pages to reusable React views.',
      'Preserves screenshots and legacy routes for context without exposing private contact details.',
      'Provides source material for future biography, links, and project milestones.',
    ],
    links: [
      {
        label: 'Legacy home page',
        url: '/docs/legacy/index.html',
        kind: 'archive',
        isPublic: true,
      },
    ],
  },
  {
    id: 'bilingual-learning-notes',
    title: 'Bilingual Learning Notes',
    subtitle: 'A planned space for Bulgarian-English study notes and reflections.',
    summary:
      'A concept placeholder for future writing that will connect portfolio updates with language learning and technical practice.',
    description:
      'Bilingual Learning Notes is a planned portfolio section, not a completed product. It is included to show the roadmap while keeping project maturity transparent.',
    status: 'concept',
    tags: ['Writing', 'Bulgarian', 'English', 'Learning'],
    technologies: ['Markdown', 'React', 'Content modeling'],
    highlights: [
      'Reserved as a transparent placeholder for future project work.',
      'Will focus on bilingual explanations rather than production software claims.',
      'Can reuse the same typed data structure as mature case studies when content is ready.',
    ],
    links: [],
    placeholder: true,
  },
];

export const featuredProject =
  projects.find((project) => project.featured) ?? projects[0];

export const featuredProjects = projects.filter(
  (project) => project.featured || project.status === 'active',
);
