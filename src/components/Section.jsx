export default function Section({ id, title, children, alt }) {
  return (
    <section id={id} className={alt ? 'section alt' : 'section'}>
      <div className="container">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  )
}
