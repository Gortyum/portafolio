import { experiences } from '../data/experience'
import { SectionHeading } from './SectionHeading'

function formatPeriod(start: string | null, end: string | null, isCurrent: boolean): string {
  const startYear = start ? new Date(start).getFullYear() : '—'
  const endYear = isCurrent ? 'Presente' : end ? new Date(end).getFullYear() : '—'
  return `${startYear} — ${endYear}`
}

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeading index="04" title="Experience & Education" jap="経歴" />
        <div className="timeline">
          {experiences.map((exp) => (
            <article className="timeline-item" key={exp.id}>
              <div className="timeline-period">
                <span>{formatPeriod(exp.start_date, exp.end_date, exp.is_current)}</span>
                <span className="kind-tag">{exp.kind === 'Education' ? 'Educación' : 'Experiencia Laboral'}</span>
                {exp.location ? <span className="muted">· {exp.location}</span> : null}
              </div>
              <h3>{exp.company}</h3>
              <div className="role">{exp.role}</div>
              <p>{exp.description}</p>
              {exp.highlights && exp.highlights.length > 0 ? (
                <ul className="timeline-bullets">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
