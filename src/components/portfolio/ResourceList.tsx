import type { SocialLink } from '../../types/contact';

type ResourceListProps = {
  links: readonly SocialLink[];
};

const resourceKindLabels: Record<SocialLink['kind'], string> = {
  github: 'GitHub',
  facebook: 'Social profile',
  learning: 'Learning resource',
  tool: 'Tool',
  legacy: 'Legacy archive',
  python: 'Python',
  ai: 'AI collaboration',
  other: 'Resource',
};

function ResourceList({ links }: ResourceListProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <div className="resource-list" aria-label="Curated external resources">
      {links.map((link) => (
        <a
          aria-label={`${link.label}: ${link.description ?? resourceKindLabels[link.kind]} (opens in a new tab)`}
          className="resource-card"
          key={link.label}
          href={link.url}
          rel="noreferrer"
          target="_blank"
        >
          <span className="status-label">{resourceKindLabels[link.kind]}</span>
          <strong>{link.label}</strong>
          {link.description ? <small>{link.description}</small> : null}
        </a>
      ))}
    </div>
  );
}

export default ResourceList;
