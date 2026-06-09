import type { EpisodeFormatStep } from '../types/blog';
import type { Project } from '../types/project';

export const algorithmOfTheDayProject: Project = {
  id: 'algorithm-of-the-day',
  title: 'Алгоритъмът на деня | Algorithm of the Day',
  subtitle: 'A concept-stage media ritual where people and algorithms learn together.',
  summary:
    'An educational web page, digital business card, and creative learning prototype created by Aleksandar Kitipov with AI collaborators.',
  description:
    'Algorithm of the Day is an in-progress case study for transforming current facts, news, and ideas into concise poetic rituals that combine commentary, metaphor, music, and a question for the community.',
  status: 'in-progress',
  featured: true,
  tags: ['AI collaboration', 'Education', 'Media ritual', 'Community', 'Prototype'],
  technologies: ['HTML', 'Google Colab', 'Markdown', 'AI-assisted writing'],
  highlights: [
    'Frames Aleksandar as the conductor and architect of the project vision without presenting the concept as a finished product.',
    'Combines facts, metaphors, rituals, music, and community prompts into a repeatable episode format.',
    'Preserves the educational spirit of the original Notepad++ static website while moving toward typed React content.',
  ],
  links: [
    {
      label: 'GitHub repository',
      url: 'https://github.com/AlexKitipov/-Algorithm-of-the-Day-',
      kind: 'repository',
      isPublic: true,
    },
    {
      label: 'Google Colab notebook',
      url: 'https://colab.research.google.com/drive/1QFMujrV8aajNQTwUCzmd_V74PKa_2e4L#scrollTo=eba04bcd',
      kind: 'notebook',
      isPublic: true,
    },
  ],
};

export const algorithmOfTheDayCaseStudy = {
  overview:
    'The project explores a small daily format: choose a signal from the world, translate it through an accessible metaphor, and invite people to respond. It is intentionally labeled in progress because the public artifact is still evolving from static notes into a polished publishing workflow.',
  role:
    'Aleksandar owns the concept, editorial direction, learning goals, and public presentation. AI tools support drafting, structuring, and iteration, but the portfolio presents the work as a human-led creative learning system.',
  audience:
    'Curious learners, friends, collaborators, and community members who enjoy bilingual education, reflective technology, and lightweight daily rituals.',
  currentState:
    'The repository and Colab notebook document the idea and experimentation path. The next milestone is turning the format into a repeatable archive with scripts, audio, journal entries, and community prompts.',
  nextSteps: [
    'Publish a small set of sample episodes before claiming a complete season.',
    'Create a consistent Markdown template for scripts and notes.',
    'Use the Colab notebook as a transparent workspace for experiments and generation support.',
    'Collect community responses carefully before expanding the format.',
  ],
} as const;

export const episodeFormat: readonly EpisodeFormatStep[] = [
  {
    title: 'Prologue',
    description: 'A short sound or musical motif that opens the episode.',
  },
  {
    title: 'Fact',
    description: 'A current news item, idea, or piece of knowledge.',
  },
  {
    title: 'Metaphor',
    description: 'A translation of the fact into an image, legend, or poetic frame.',
  },
  {
    title: 'Ritual',
    description: 'A small action listeners can try or reflect on.',
  },
  {
    title: 'Music',
    description: 'A song or playlist connected to the theme.',
  },
  {
    title: 'Community question',
    description: 'A prompt whose responses can shape the next episode.',
  },
];

export const projectArchiveStructure = [
  '/episodes/ — Markdown episode scripts',
  '/audio/ — completed MP3 audio recordings',
  '/journal/ — CSV episode index',
  '/community/ — collected responses and comments',
  '/assets/ — musical motifs and graphics',
] as const;
