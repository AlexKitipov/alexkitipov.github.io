import FeaturedProjects from '../components/portfolio/FeaturedProjects';
import Seo from '../components/seo/Seo';
import Hero from '../components/portfolio/Hero';
import SkillsPreview from '../components/portfolio/SkillsPreview';
import { biography } from '../data/biography';
import { publicContactChannels } from '../data/socialLinks';
import { routeSeo } from '../utils/seo';

function HomePage() {
  const primaryEmail = publicContactChannels.find(
    (channel) => channel.kind === 'email',
  );

  return (
    <div className="portfolio-page" aria-label="Portfolio home">
      <Seo {...routeSeo.home} />
      <Hero />

      <section
        className="portfolio-section bio-preview"
        aria-labelledby="short-bio-title"
      >
        <div className="section-heading">
          <p className="eyebrow">Short bio</p>
          <h2 id="short-bio-title">Professional structure with a poetic signal</h2>
          <p>{biography.overview}</p>
        </div>
        <p className="intro">{biography.shortBio}</p>
      </section>

      <FeaturedProjects />
      <SkillsPreview />

      <section
        className="portfolio-section contact-cta"
        aria-labelledby="contact-cta-title"
      >
        <p className="eyebrow">Contact CTA</p>
        <h2 id="contact-cta-title">Build the next learning ritual together</h2>
        <p>
          For collaboration, portfolio feedback, or Algorithm of the Day ideas, use the
          public contact channel and keep the conversation focused on learning in
          public.
        </p>
        {primaryEmail?.href ? (
          <a className="primary-action" href={primaryEmail.href}>
            Contact Aleksandar
          </a>
        ) : null}
      </section>
    </div>
  );
}

export default HomePage;
