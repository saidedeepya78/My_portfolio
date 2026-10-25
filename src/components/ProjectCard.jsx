export default function ProjectCard({ p }) {
  const initials = p.tech.slice(0, 3).map((t) => t[0]).join('')
  return (
    <article className="card project">
      <div className="art" aria-hidden="true">
        <span className="art-mark">{initials}</span>
        <div className="art-chips">{p.tech.slice(0, 3).map((t) => <i key={t}>{t}</i>)}</div>
      </div>
      <h3>{p.name}</h3>
      <p className="problem"><strong>Problem solved:</strong> {p.problem}</p>
      <ul className="ticks">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
      <div className="chips">{p.tech.map((t) => <span key={t} className="chip">{t}</span>)}</div>
      <a className="btn primary" href={p.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </article>
  )
}
