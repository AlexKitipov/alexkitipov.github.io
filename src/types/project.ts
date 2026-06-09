export type ProjectStatus = 'featured' | 'active' | 'in-progress' | 'concept' | 'archived' | 'planned';

export type ProjectLink = {
  label: string;
  url: string;
  kind: 'repository' | 'notebook' | 'demo' | 'archive' | 'resource';
  isPublic: boolean;
};

export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  summary: string;
  description: string;
  status: ProjectStatus;
  tags: readonly string[];
  technologies: readonly string[];
  highlights: readonly string[];
  links: readonly ProjectLink[];
  featured?: boolean;
  placeholder?: boolean;
};
