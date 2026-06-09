import AboutNarrative from '../components/portfolio/AboutNarrative';
import Seo from '../components/seo/Seo';
import { routeSeo } from '../utils/seo';

function AboutPage() {
  return (
    <div className="portfolio-page about-page" aria-labelledby="page-title">
      <Seo {...routeSeo.about} />
      <section className="page-card about-hero">
        <p className="eyebrow">About</p>
        <h1 id="page-title">About Aleksandar Kitipov</h1>
        <p className="intro">
          A concise English profile for a creator shaping Algorithm of the Day,
          practical web learning, and AI-assisted project publishing.
        </p>
      </section>
      <AboutNarrative />
    </div>
  );
}

export default AboutPage;
