import { Link } from 'react-router-dom';
import { featuredProjects } from '../../data/projects';
import { getProjectDetailPath, routes } from '../../utils/routes';

function FeaturedProjects() {
  return (
    <section className="portfolio-section" aria-labelledby="featured-projects-title">
      <div className="section-heading">
        <p className="eyebrow">Featured work</p>
        <h2 id="featured-projects-title">Projects with a clear learning story</h2>
        <p>
          Selected work presents the portfolio as both a professional React application
          and a creative English-language media experiment.
        </p>
      </div>
      <div className="feature-grid">
        {featuredProjects.map((project) => (
          <article className="info-panel feature-card" key={project.id}>
            <p className="status-label">{project.status}</p>
            <h3>{project.title}</h3>
            {project.subtitle ? <p>{project.subtitle}</p> : null}
            <p>{project.summary}</p>
            <div className="tag-list" aria-label={`${project.title} tags`}>
              {project.tags.slice(0, 4).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <Link className="text-action" to={getProjectDetailPath(project.id)}>
              View case study
            </Link>
          </article>
        ))}
      </div>
      <Link className="secondary-action inline-action" to={routes.projects}>
        Browse all projects
      </Link>
    </section>
  );
}

export default FeaturedProjects;
