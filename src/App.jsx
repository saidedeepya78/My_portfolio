import Navbar from './components/Navbar.jsx'
import Section from './components/Section.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import { profile, skills, experience, projects, education, certifications } from './data.js'

const ext = { target: '_blank', rel: 'noopener noreferrer' }

export default function App() {
  return (
    <>
      <Navbar name="Chillarige Sai Dedeepya" />
      <main>
        <section id="home" className="hero">
          <div className="container hero-inner">
            <p className="loc">{profile.location}</p>
            <h1>{profile.name}</h1>
            <p className="role">{profile.title}</p>
            <p className="lead">
              I build AI-powered applications and data-driven tools in Python, from predictive models to Generative AI agents.
            </p>
            <div className="actions">
              <a className="btn primary" href="#projects">Explore My Projects</a>
              <a className="btn" href="/resume.pdf" download="Sai-Dedeepya-Resume.pdf">Download Resume</a>
              <a className="btn ghost" href="#contact">Contact Me</a>
            </div>
          </div>
        </section>

        <Section id="about" title="About me" alt>
          <p className="prose">{profile.summary}</p>
          <p className="prose">
            I am especially interested in AI, machine learning, and data science, and in turning them into practical software that people can use.
          </p>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid skills">
            {skills.map((s) => (
              <div className="card" key={s.group}>
                <h3>{s.group}</h3>
                <div className="chips">{s.items.map((i) => <span className="chip" key={i}>{i}</span>)}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience" alt>
          <div className="card exp">
            <h3>{experience.role}, {experience.org}</h3>
            <p className="meta">{experience.period}</p>
            <ul className="ticks">{experience.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
        </Section>

        <Section id="projects" title="Featured projects">
          <div className="grid projects">{projects.map((p) => <ProjectCard key={p.name} p={p} />)}</div>
        </Section>

        <Section id="education" title="Education" alt>
          <div className="card exp">
            <h3>{education.degree}</h3>
            <p>{education.school}</p>
            <p className="meta">{education.period} · {education.score}</p>
          </div>
        </Section>

        <Section id="certifications" title="Certifications">
          <ul className="certs">{certifications.map((c) => <li key={c}>{c}</li>)}</ul>
        </Section>

        <Section id="contact" title="Contact" alt>
          <p className="prose">The best way to reach me is by email. I am happy to talk about roles, projects, or collaborations.</p>
          <div className="actions">
            <a className="btn primary" href={`mailto:${profile.email}`}>Email Me</a>
            <a className="btn" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`} {...ext}>Write in Gmail</a>
            <a className="btn" href={profile.linkedin} {...ext}>LinkedIn</a>
            <a className="btn" href={profile.github} {...ext}>GitHub</a>
          </div>
          <p className="prose">Or write to {profile.email}</p>
        </Section>
      </main>

      <footer className="footer">
        <div className="container foot">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>
            <a href={profile.linkedin} {...ext}>LinkedIn</a> · <a href={profile.github} {...ext}>GitHub</a> · <a href={`mailto:${profile.email}`}>Email</a>
          </span>
        </div>
      </footer>
    </>
  )
}