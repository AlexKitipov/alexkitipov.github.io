import { Link } from 'react-router-dom';
import { biography } from '../../data/biography';
import { featuredProject } from '../../data/projects';
import { routes, getProjectDetailPath } from '../../utils/routes';

function Hero() {
  return (
    <section className="portfolio-hero" aria-labelledby="page-title">
      <div className="hero-copy">
        <p className="eyebrow">Portfolio home</p>
        <h1 id="page-title">{biography.name}</h1>
        <p className="hero-subtitle">{biography.title}</p>
        <p className="intro">{biography.shortBio}</p>
        <p className="bilingual-line">{biography.bilingualTagline}</p>
        <div className="actions hero-actions">
          <Link
            className="primary-action"
            to={getProjectDetailPath(featuredProject.id)}
          >
            Explore featured project
          </Link>
          <Link className="secondary-action" to={routes.about}>
            Read the biography
          </Link>
        </div>
      </div>
      <aside className="hero-highlight" aria-label="Featured focus">
        <span className="status-label">Current focus</span>
        <h2>{featuredProject.title}</h2>
        <p>{featuredProject.summary}</p>
        <div className="tag-list" aria-label="Featured project tags">
          {featuredProject.tags.slice(0, 4).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </aside>
    </section>
  );
}

export default Hero;
