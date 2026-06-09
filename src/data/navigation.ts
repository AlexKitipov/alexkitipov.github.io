import { routes } from '../utils/routes';

type NavigationItem = {
  to: string;
  label: string;
  end?: boolean;
};

export const navigationItems: readonly NavigationItem[] = [
  { to: routes.home, label: 'Home', end: true },
  { to: routes.about, label: 'About' },
  { to: routes.projects, label: 'Projects' },
  { to: routes.skills, label: 'Skills' },
  { to: routes.blog, label: 'Blog / Insights' },
  { to: routes.contact, label: 'Contact' },
  { to: routes.links, label: 'Links' },
];
