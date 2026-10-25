import { useState } from 'react'
const links = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact']

export default function Navbar({ name }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>{name}</a>
        <button className="menu-btn" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
        <nav className={open ? 'links open' : 'links'} aria-label="Main">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
