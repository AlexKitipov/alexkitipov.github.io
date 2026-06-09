import { biography } from '../../data/biography';

function AboutNarrative() {
  return (
    <div className="about-narrative">
      <section className="info-panel narrative-lead" aria-labelledby="biography-title">
        <p className="eyebrow">Biography · Биография</p>
        <h2 id="biography-title">{biography.name}</h2>
        <p>{biography.overview}</p>
        <p>{biography.background}</p>
      </section>

      <div className="narrative-grid">
        <article className="info-panel">
          <h2>Professional role</h2>
          <p>{biography.role}</p>
          <ul>
            {biography.principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </article>

        <article className="info-panel">
          <h2>Philosophy</h2>
          <p>{biography.philosophy}</p>
          <p className="bilingual-line">{biography.bilingualTagline}</p>
        </article>

        <article className="info-panel">
          <h2>Collaboration style</h2>
          <p>{biography.collaborationStyle}</p>
          <ul>
            {biography.collaborators.map((collaborator) => (
              <li key={collaborator}>{collaborator}</li>
            ))}
          </ul>
        </article>

        <article className="info-panel">
          <h2>Current focus</h2>
          <p>{biography.currentFocus}</p>
        </article>
      </div>
    </div>
  );
}

export default AboutNarrative;
