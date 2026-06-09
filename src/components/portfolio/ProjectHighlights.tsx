import type { Project } from '../../types/project';

type ProjectHighlightsProps = {
  project: Project;
};

function ProjectHighlights({ project }: ProjectHighlightsProps) {
  return (
    <article className="info-panel project-highlights">
      <h2>Highlights</h2>
      <ul>
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      <div className="tag-list" aria-label={`${project.title} tags`}>
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}

export default ProjectHighlights;
