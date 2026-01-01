import { motion } from 'framer-motion'
import p1 from '../../public/images/project-1.jpg'
import p2 from '../../public/images/Project-2.jpg'
import p3 from '../../public/images/project-3.jpg'
import p4 from '../../public/images/project-4.jpg'
import logo1 from '../../public/images/logo-1.jpg'
import logo2 from '../../public/images/logo-2.jpg'
import logo3 from '../../public/images/logo-3.jpg'

// 🧩 Website Projects
const projects = [
  {
    id: 1,
    title: 'Challenge Tuition Project Website',
    img: p1,
    desc: 'A Model Webpage for a Tutorial Center',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://abdul-kadar-imran.github.io/tution-website/',
  },
  {
    id: 2,
    title: 'Ethernote ',
    img: p4,
    desc: 'Created a marketing Page for a Coffee shop',
    tags: ['AI', 'JSON', 'TypeScript', 'React JS'],
    github: 'https://ethernote.vercel.app',
  },
  {
    id: 3,
    title: 'Crescent Connect',
    img: p3,
    desc: 'University Cultural Community Web Application',
    tags: ['AI', 'JSON', 'TypeScript', 'React JS'],
    github: 'https://college-website-henna-phi.vercel.app/',
  },
]

const logos = [
  {
    id: 1,
    title: 'CDFS (Disciplinary Club)', 
    img: logo1,
  },
  {
    id: 2,
    title: 'Cres Crew (Racing Club)',
    img: logo2,
  },
  {
    id: 3,
    title: 'CIC(Islamic Club)',
    img: logo3,
  },
]

export default function Projects() {
  return (
    <section className="section">
      {/* 🔹 Web Projects Section */}
      <h2>My Web Development Projects</h2>
      <p className="lead">A few highlights. Click “View on GitHub” to explore the code.</p>

      <div className="grid grid-3" style={{ marginTop: '1rem' }}>
        {projects.map((p, i) => (
          <motion.article
            key={p.id}
            className="card project-card"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <img src={p.img} alt={p.title} />
            <div className="content">
              <h3 style={{ margin: '0 0 .4rem' }}>{p.title}</h3>
              <p className="small">{p.desc}</p>

              <div className="project-meta">
                {p.tags.map((t) => (
                  <span key={t} className="badge">
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ marginTop: '1rem' }}>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  🔗 View on GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* 🔹 Logo Design Showcase */}
      <div style={{ marginTop: '3rem' }}>
        <h2>My Designing Projects</h2>
        <p className="lead">Here are a few of my logo design works for the University's Cultural Communities</p>

        <div className="grid grid-3" style={{ marginTop: '1rem' }}>
          {logos.map((logo, i) => (
            <motion.article
              key={logo.id}
              className="card logo-card"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              style={{
                textAlign: 'center',
                padding: '1rem',
              }}
            >
              <img
                src={logo.img}
                alt={logo.title}
                style={{
                  borderRadius: '12px',
                  width: '100%',
                  height: '300px', // 🔸 Square ratio
                  objectFit: 'cover',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                }}
              />
              <h4 style={{ marginTop: '.8rem' }}>{logo.title}</h4>

              {/* ✅ View Logo Button */}
              <a
                href={logo.img}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  display: 'inline-block',
                  marginTop: '.6rem',
                  fontSize: '.9rem',
                }}
              >
                👁️ View Logo
              </a>
            </motion.article>
          ))}
        </div>
       </div>
    </section>
  )
}
