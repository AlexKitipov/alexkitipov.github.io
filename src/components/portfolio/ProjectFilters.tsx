import type { ProjectStatus } from '../../types/project';

export type ProjectFilter = 'all' | ProjectStatus;

type ProjectFiltersProps = {
  activeFilter: ProjectFilter;
  filters: readonly ProjectFilter[];
  onFilterChange: (filter: ProjectFilter) => void;
};

const filterLabels: Record<ProjectFilter, string> = {
  active: 'Active',
  all: 'All',
  archived: 'Archived',
  concept: 'Concept',
  featured: 'Featured',
  'in-progress': 'In progress',
  planned: 'Planned',
};

function ProjectFilters({ activeFilter, filters, onFilterChange }: ProjectFiltersProps) {
  if (filters.length <= 2) {
    return null;
  }

  return (
    <div className="project-filters" aria-label="Filter projects by status">
      {filters.map((filter) => (
        <button
          aria-pressed={activeFilter === filter}
          key={filter}
          onClick={() => onFilterChange(filter)}
          type="button"
        >
          {filterLabels[filter]}
        </button>
      ))}
    </div>
  );
}

export default ProjectFilters;
