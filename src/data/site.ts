export const site = {
  name: 'Aleksandar Kitipov Portfolio',
  shortName: 'Kitipov Portfolio',
  author: 'Aleksandar Kitipov',
  domain: 'kitipov.net',
  origin: 'https://kitipov.net',
  locale: 'en_US',
  language: 'en',
  defaultTitle: 'Aleksandar Kitipov | Algorithm of the Day',
  defaultDescription:
    'Official portfolio of Aleksandar Kitipov, architect of Algorithm of the Day. Exploring the intersection of web publishing, algorithm practice, and AI-assisted creative media.',
  defaultImagePath: '/og-image.svg',
} as const;

export type SiteMetadata = typeof site;
