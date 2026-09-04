import { profile } from '../data/profile'

export function Hero() {
  return (
    <section className="container hero" id="top">
      <div>
        <div className="hero-eyebrow">{profile.location} · Software Engineer</div>
        <h1 className="display">{profile.name}</h1>
        <p className="role">
          <strong>{profile.title}</strong> — {profile.headline}
        </p>
        <div className="hero-links">
          <a className="link-line" href={`mailto:${profile.email}`}>
            Email ↗
          </a>
          <a className="link-line" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a className="link-line" href={profile.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a className="link-line" href="#projects">
            Ver Proyectos ↓
          </a>
        </div>
      </div>
      <aside className="hero-about">
        <div className="label">Perfil — 概要</div>
        {profile.about.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </aside>
      <span className="hero-scroll" aria-hidden="true">
        scroll
      </span>
    </section>
  )
}
