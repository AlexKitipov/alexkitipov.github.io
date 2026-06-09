import ContactCard from '../components/portfolio/ContactCard';
import SocialLinks from '../components/portfolio/SocialLinks';
import Seo from '../components/seo/Seo';
import { publicContactChannels, publicSocialLinks } from '../data/socialLinks';
import { routeSeo } from '../utils/seo';

function ContactPage() {
  const primaryEmail = publicContactChannels.find(
    (channel) => channel.kind === 'email',
  );

  return (
    <section className="page-card contact-page" aria-labelledby="page-title">
      <Seo {...routeSeo.contact} />
      <p className="eyebrow">Contact</p>
      <h1 id="page-title">Contact Aleksandar</h1>
      <p className="intro">
        Public contact details use safe defaults. Full street address, phone number, and
        unconfirmed profile URLs are marked private and are not rendered here.
      </p>
      <div className="section-stack contact-grid" aria-label="Public contact options">
        {publicContactChannels.map((channel) => (
          <ContactCard channel={channel} key={channel.id} />
        ))}
      </div>
      {primaryEmail?.href ? (
        <div className="actions">
          <a
            aria-label={
              primaryEmail.accessibleLabel ?? 'Send an email to Aleksandar Kitipov'
            }
            className="primary-action"
            href={primaryEmail.href}
          >
            Send email
          </a>
        </div>
      ) : null}
      <div className="contact-resources" aria-labelledby="contact-links-title">
        <h2 id="contact-links-title">Public project links</h2>
        <SocialLinks links={publicSocialLinks.slice(0, 3)} />
      </div>
    </section>
  );
}

export default ContactPage;
