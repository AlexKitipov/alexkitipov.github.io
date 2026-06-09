export const routes = {
  home: '/',
  about: '/about',
  projects: '/projects',
  projectDetail: '/projects/:projectId',
  skills: '/skills',
  blog: '/blog',
  contact: '/contact',
  links: '/links',
} as const;

export type AppRouteKey = keyof typeof routes;

export function getProjectDetailPath(projectId: string) {
  return routes.projectDetail.replace(':projectId', projectId);
}
