import { useMemo, useState } from 'react';
import ProjectCard from '../components/portfolio/ProjectCard';
import Seo from '../components/seo/Seo';
import ProjectFilters, {
  type ProjectFilter,
} from '../components/portfolio/ProjectFilters';
import { projects } from '../data/projects';
import { routeSeo } from '../utils/seo';

function ProjectsPage() {
  const availableFilters = useMemo<readonly ProjectFilter[]>(() => {
    const statuses = Array.from(new Set(projects.map((project) => project.status)));
    return ['all', ...statuses];
  }, []);
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.status === activeFilter,
  );

  return (
    <section className="page-card projects-page" aria-labelledby="page-title">
      <Seo {...routeSeo.projects} />
      <p className="eyebrow">Projects</p>
      <h1 id="page-title">Portfolio Projects</h1>
      <p className="intro">
        Featured applications, experiments, and transparent future placeholders are
        backed by reusable typed project data.
      </p>

      <ProjectFilters
        activeFilter={activeFilter}
        filters={availableFilters}
        onFilterChange={setActiveFilter}
      />

      <div className="card-grid project-grid" aria-label="Project links">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
