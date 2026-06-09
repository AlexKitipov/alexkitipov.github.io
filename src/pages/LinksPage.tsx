import ResourceList from '../components/portfolio/ResourceList';
import Seo from '../components/seo/Seo';
import { publicSocialLinks } from '../data/socialLinks';
import { routeSeo } from '../utils/seo';

function LinksPage() {
  return (
    <section className="page-card links-page" aria-labelledby="page-title">
      <Seo {...routeSeo.links} />
      <p className="eyebrow">Links</p>
      <h1 id="page-title">Curated Links</h1>
      <p className="intro">
        Public project links, learning notebooks, GitHub resources, Python references,
        and AI collaboration tools are collected here. Unconfirmed social profiles stay
        private until an official URL is available.
      </p>
      <ResourceList links={publicSocialLinks} />
    </section>
  );
}

export default LinksPage;
