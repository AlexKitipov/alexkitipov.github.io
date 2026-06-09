import type { SocialLink } from '../../types/contact';

type SocialLinksProps = {
  links: readonly SocialLink[];
};

function SocialLinks({ links }: SocialLinksProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <div
      className="content-list social-link-list"
      aria-label="Public profiles and project links"
    >
      {links.map((link) => (
        <a
          aria-label={`${link.label}: ${link.description ?? 'external resource'} (opens in a new tab)`}
          key={link.label}
          href={link.url}
          rel="noreferrer"
          target="_blank"
        >
          <span>{link.label}</span>
          {link.description ? <small>{link.description}</small> : null}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
