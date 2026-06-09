import { Link, useParams } from 'react-router-dom';
import Seo from '../components/seo/Seo';
import ProjectHero from '../components/portfolio/ProjectHero';
import ProjectHighlights from '../components/portfolio/ProjectHighlights';
import {
  algorithmOfTheDayCaseStudy,
  episodeFormat,
  projectArchiveStructure,
} from '../data/algorithmOfTheDay';
import { projects } from '../data/projects';
import { routes } from '../utils/routes';
import { getProjectSeo, routeSeo } from '../utils/seo';

function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <section className="page-card" aria-labelledby="page-title">
        <Seo {...routeSeo.notFound} title="Project Not Found | Aleksandar Kitipov" />
        <p className="eyebrow">Project detail</p>
        <h1 id="page-title">Project not found</h1>
        <p className="intro">
          The requested project does not exist in the typed project data.
        </p>
        <Link className="text-action" to={routes.projects}>
          Back to all projects
        </Link>
      </section>
    );
  }

  const projectSeo = getProjectSeo(project.id);
  const isAlgorithmOfTheDay = project.id === 'algorithm-of-the-day';

  return (
    <section className="page-card project-detail-page" aria-labelledby="page-title">
      <Seo {...projectSeo} />
      <ProjectHero project={project} />

      <div className="section-stack">
        <ProjectHighlights project={project} />

        {isAlgorithmOfTheDay ? (
          <>
            <article className="info-panel case-study-panel">
              <h2>Case study</h2>
              <div className="case-study-grid">
                <section>
                  <h3>Overview</h3>
                  <p>{algorithmOfTheDayCaseStudy.overview}</p>
                </section>
                <section>
                  <h3>Role</h3>
                  <p>{algorithmOfTheDayCaseStudy.role}</p>
                </section>
                <section>
                  <h3>Audience</h3>
                  <p>{algorithmOfTheDayCaseStudy.audience}</p>
                </section>
                <section>
                  <h3>Current state</h3>
                  <p>{algorithmOfTheDayCaseStudy.currentState}</p>
                </section>
              </div>
            </article>

            <article className="info-panel">
              <h2>Episode format</h2>
              <ol className="episode-steps">
                {episodeFormat.map((step) => (
                  <li key={step.title}>
                    <strong>{step.title}</strong>
                    <span>{step.description}</span>
                  </li>
                ))}
              </ol>
            </article>

            <article className="info-panel case-study-grid two-column-grid">
              <section>
                <h2>Planned archive structure</h2>
                <ul>
                  {projectArchiveStructure.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2>Next steps</h2>
                <ul>
                  {algorithmOfTheDayCaseStudy.nextSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </section>
            </article>
          </>
        ) : (
          <article className="info-panel">
            <h2>Project notes</h2>
            <p>{project.description}</p>
            {project.placeholder ? (
              <p>
                This card is intentionally labeled as a concept so visitors can separate
                future roadmap ideas from shipped portfolio work.
              </p>
            ) : null}
          </article>
        )}
      </div>

      <Link className="text-action" to={routes.projects}>
        Back to all projects
      </Link>
    </section>
  );
}

export default ProjectDetailPage;
