import type { Project } from '../../types/project';
import ProjectLinks from './ProjectLinks';

type ProjectHeroProps = {
  project: Project;
};

function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <header className="project-hero">
      <div>
        <p className="eyebrow">Project case study</p>
        <h1 id="page-title">{project.title}</h1>
        {project.subtitle ? <p className="hero-subtitle">{project.subtitle}</p> : null}
        <p className="intro">{project.description}</p>
        <ProjectLinks links={project.links} />
      </div>
      <aside className="project-fact-card" aria-label="Project facts">
        <p className="status-label">{project.featured ? 'Featured project' : 'Project'}</p>
        <dl>
          <div>
            <dt>Status</dt>
            <dd>{project.status}</dd>
          </div>
          <div>
            <dt>Technologies</dt>
            <dd>{project.technologies.join(', ')}</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>{project.tags.join(', ')}</dd>
          </div>
        </dl>
      </aside>
    </header>
  );
}

export default ProjectHero;
