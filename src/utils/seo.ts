import { site } from '../data/site';
import { projects } from '../data/projects';
import { getProjectDetailPath, routes } from './routes';

export type SeoMeta = {
  title: string;
  description: string;
  path: string;
  imagePath?: string;
  type?: 'profile' | 'website' | 'article';
  noindex?: boolean;
};

export const defaultSeo: SeoMeta = {
  title: site.defaultTitle,
  description: site.defaultDescription,
  path: routes.home,
  imagePath: site.defaultImagePath,
  type: 'profile',
};

export const routeSeo = {
  home: defaultSeo,
  about: {
    title: 'About Aleksandar Kitipov | Portfolio',
    description:
      'Learn about Aleksandar Kitipov, the creator shaping Algorithm of the Day, practical web learning, and AI-assisted publishing.',
    path: routes.about,
    type: 'profile',
  },
  projects: {
    title: 'Projects | Aleksandar Kitipov',
    description:
      'Explore Aleksandar Kitipov portfolio projects, including Algorithm of the Day, the React portfolio foundation, and learning archive work.',
    path: routes.projects,
  },
  skills: {
    title: 'Skills Matrix | Aleksandar Kitipov',
    description:
      'Review Aleksandar Kitipov skills across frontend development, programming foundations, AI collaboration, creative direction, and communication.',
    path: routes.skills,
  },
  blog: {
    title: 'Blog and Learning Logs | Aleksandar Kitipov',
    description:
      'Read Algorithm of the Day notes, technical learning logs, project case study previews, and future writing plans from Aleksandar Kitipov.',
    path: routes.blog,
  },
  contact: {
    title: 'Contact Aleksandar Kitipov',
    description:
      'Use safe public contact channels to reach Aleksandar Kitipov for collaboration, portfolio feedback, and Algorithm of the Day ideas.',
    path: routes.contact,
  },
  links: {
    title: 'Curated Links | Aleksandar Kitipov',
    description:
      'Find public project links, learning resources, GitHub references, Python tools, and AI collaboration resources curated by Aleksandar Kitipov.',
    path: routes.links,
  },
  notFound: {
    title: 'Page Not Found | Aleksandar Kitipov',
    description:
      'This portfolio route does not exist yet. Return to the Aleksandar Kitipov portfolio home page.',
    path: routes.home,
    noindex: true,
  },
} as const satisfies Record<string, SeoMeta>;

export function getCanonicalUrl(path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return new URL(normalizedPath, site.origin).toString();
}

export function getAbsoluteAssetUrl(path: string) {
  return new URL(path, site.origin).toString();
}

export function getProjectSeo(projectId: string): SeoMeta {
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return routeSeo.notFound;
  }

  return {
    title: `${project.title} | Aleksandar Kitipov Projects`,
    description: project.summary,
    path: getProjectDetailPath(project.id),
  };
}
