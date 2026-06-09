import type { ContactChannel } from '../../types/contact';

type ContactCardProps = {
  channel: ContactChannel;
};

function ContactCard({ channel }: ContactCardProps) {
  return (
    <article
      className="info-panel contact-card"
      aria-labelledby={`contact-${channel.id}`}
    >
      <h2 id={`contact-${channel.id}`}>{channel.label}</h2>
      {channel.href ? (
        <a aria-label={channel.accessibleLabel} href={channel.href}>
          {channel.value}
        </a>
      ) : (
        <p>{channel.value}</p>
      )}
      {channel.note ? <p className="page-note">{channel.note}</p> : null}
    </article>
  );
}

export default ContactCard;
