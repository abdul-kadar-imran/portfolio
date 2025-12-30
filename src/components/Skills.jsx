import { i, link } from "framer-motion/client"

export default function Skills() {
  const core = [
    'HTML5',
    'CSS3',
    'Bootstrap',
    'React JS',
    'Git & GitHub',
    'Responsive Design',
  ]

  const tools = ['AI Prompt Engineering','VS Code','Figma', 'NPM', 'Photoshop' , 'Illustrator', ]

  const other = [
    'Designing',
    'Problem Solving',
    'Communication',
    'Team Collaboration',
    'Branding & Social Media Marketing',
    'Silambam'
  ]

  return (
    <section className="section">
      <h2>Skills</h2>
      <p className="lead">The toolbox I reach for daily.</p>

      {/* Core Skills */}
      <div className="grid grid-3" style={{ marginTop: '1rem' }}>
        {core.map((s) => (
          <span key={s} className="skill-chip">
            {s}
          </span>
        ))}
      </div>

      {/* Tools Section */}
      <h3 style={{ marginTop: '1.5rem' }}>Tools</h3>
      <div className="grid grid-3" style={{ marginTop: '1rem' }}>
        {tools.map((t) => (
          <span key={t} className="skill-chip">
            {t}
          </span>
        ))}
      </div>

      {/* Other Skills Section */}
      <h3 style={{ marginTop: '1.5rem' }}>Other Skills</h3>
      <div className="grid grid-3" style={{ marginTop: '1rem' }}>
        {other.map((o) => (
          <span key={o} className="skill-chip">
            {o}
          </span>
        ))}
      </div>
    </section>
  )
}
