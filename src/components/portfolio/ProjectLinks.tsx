import type { ProjectLink } from '../../types/project';

type ProjectLinksProps = {
  links: readonly ProjectLink[];
};

const linkKindLabels: Record<ProjectLink['kind'], string> = {
  archive: 'Archive',
  demo: 'Demo',
  notebook: 'Notebook',
  repository: 'Repository',
  resource: 'Resource',
};

function ProjectLinks({ links }: ProjectLinksProps) {
  const publicLinks = links.filter((link) => link.isPublic);

  if (publicLinks.length === 0) {
    return null;
  }

  return (
    <div className="project-links" aria-label="Project links">
      {publicLinks.map((link) => (
        <a key={link.url} href={link.url} rel="noreferrer" target="_blank">
          <span>{link.label}</span>
          <small>{linkKindLabels[link.kind]} · Opens in a new tab</small>
        </a>
      ))}
    </div>
  );
}

export default ProjectLinks;
