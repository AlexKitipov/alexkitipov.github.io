import type { SkillGroup as SkillGroupData } from '../../types/skill';

type SkillGroupProps = {
  group: SkillGroupData;
};

function SkillGroup({ group }: SkillGroupProps) {
  return (
    <article
      className="info-panel skill-group-card"
      aria-labelledby={`skill-${group.id}`}
    >
      <div className="skill-group-heading">
        <p className="status-label">{group.categoryLabel}</p>
        <h2 id={`skill-${group.id}`}>{group.title}</h2>
      </div>
      <p>{group.description}</p>
      <div className="skill-list" aria-label={`${group.title} skills`}>
        {group.skills.map((skill) => (
          <div key={skill.name}>
            <strong>{skill.name}</strong>
            <span>{skill.level}</span>
            <p>{skill.summary}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default SkillGroup;
