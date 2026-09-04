import { projects } from '../data/projects'
import type { Project } from '../types'
import { SectionHeading } from './SectionHeading'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <a
        className="project-media"
        href={project.github_url ?? undefined}
        target="_blank"
        rel="noreferrer"
        title={`Ver proyecto ${project.title}`}
      >
        <span className="project-num">{String(index + 1).padStart(2, '0')}</span>
        {project.image_url ? <img src={project.image_url} alt={project.title} loading="lazy" /> : null}
      </a>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-meta">
          {project.technologies.map((tech) => (
            <span className="tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="project-links">
        {project.github_url ? (
          <a className="link-line" href={project.github_url} target="_blank" rel="noreferrer">
            <span>Repository & Code</span> →
          </a>
        ) : null}
        {project.live_url ? (
          <a className="link-line" href={project.live_url} target="_blank" rel="noreferrer">
            <span>Live Demo</span> ↗
          </a>
        ) : null}
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading index="02" title="Featured Projects" jap="制作物" />
        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
