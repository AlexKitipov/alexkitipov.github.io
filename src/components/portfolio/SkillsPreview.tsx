import { Link } from 'react-router-dom';
import { skillPreviewGroups } from '../../data/skills';
import { routes } from '../../utils/routes';

function SkillsPreview() {
  return (
    <section className="portfolio-section" aria-labelledby="skills-preview-title">
      <div className="section-heading">
        <p className="eyebrow">Skills preview</p>
        <h2 id="skills-preview-title">Practical tools, creative systems</h2>
        <p>
          The skill set combines front-end foundations, publishing workflow, and AI-assisted
          creative practice.
        </p>
      </div>
      <div className="skill-preview-grid">
        {skillPreviewGroups.map((group) => (
          <article className="info-panel" key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <div className="skill-list compact-skill-list">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <strong>{skill.name}</strong>
                  <span>{skill.level}</span>
                  <p>{skill.summary}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
      <Link className="secondary-action inline-action" to={routes.skills}>
        See full skills map
      </Link>
    </section>
  );
}

export default SkillsPreview;
