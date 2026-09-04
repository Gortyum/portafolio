import { profile } from '../data/profile'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {year} {profile.name} — {profile.title}
        </span>
        <span className="jap" aria-hidden="true">
          簡素
        </span>
      </div>
    </footer>
  )
}
