import { Link } from 'react-router-dom';
import type { Project } from '../../types/project';
import { getProjectDetailPath } from '../../utils/routes';
import ProjectLinks from './ProjectLinks';

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={`info-panel project-card${project.featured ? ' featured-card' : ''}`}>
      <div className="project-card-header">
        <p className="status-label">{project.status}</p>
        {project.featured ? <span className="featured-pill">Featured</span> : null}
      </div>
      <h2>{project.title}</h2>
      {project.subtitle ? <p className="project-subtitle">{project.subtitle}</p> : null}
      <p>{project.summary}</p>

      <div className="project-meta-grid" aria-label={`${project.title} metadata`}>
        <div>
          <strong>Status</strong>
          <span>{project.status}</span>
        </div>
        <div>
          <strong>Technologies</strong>
          <span>{project.technologies.slice(0, 3).join(' · ')}</span>
        </div>
      </div>

      <div className="tag-list" aria-label={`${project.title} technologies`}>
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <div className="project-card-actions">
        <Link className="text-action" to={getProjectDetailPath(project.id)}>
          {project.placeholder ? 'Preview concept' : 'View case study'}
        </Link>
        <ProjectLinks links={project.links} />
      </div>
    </article>
  );
}

export default ProjectCard;
