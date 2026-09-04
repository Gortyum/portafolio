import { profile } from '../data/profile'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeading index="01" title="About & Focus" jap="私について" />
        <div className="about-grid">
          <div className="about-text">
            {profile.about.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
            <div className="stack">
              <div className="stack-title">Core Technical Stack</div>
              <div className="tags">
                {profile.coreStack.map((tech) => (
                  <span className="tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <aside className="about-side">
            <div className="meta-item">
              <div className="label">Ubicación</div>
              <div className="value">{profile.location}</div>
            </div>
            <div className="meta-item">
              <div className="label">Especialidad</div>
              <div className="value">Software Engineering · Full Stack (Python & React)</div>
            </div>
            {profile.languages.map((lang) => (
              <div className="meta-item" key={lang.name}>
                <div className="label">Idioma</div>
                <div className="value">
                  {lang.name} · {lang.level}
                </div>
              </div>
            ))}
            <div className="meta-item">
              <div className="label">Enfoque Principal</div>
              <div className="value">Data Pipelines · Real-Time Systems · Robust APIs</div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
