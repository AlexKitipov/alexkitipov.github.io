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
    'Portfolio for Aleksandar Kitipov featuring Algorithm of the Day, React projects, learning notes, skills, and safe public contact links.',
  defaultImagePath: '/og-image.svg',
} as const;

export type SiteMetadata = typeof site;
