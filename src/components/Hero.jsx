// src/components/Hero.jsx
import { motion } from 'framer-motion'
import profile from '../../public/images/Profile.jpg'
import slide1 from '../../public/images/pic1.jpg'
import slide2 from '../../public/images/pic2.jpg'
import slide3 from '../../public/images/pic3.jpg'
import { Link } from 'react-router-dom';


export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div>
          <motion.div
            className="badge"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Frontend Developer
          </motion.div>
          <br />
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi,I'm Abdul Kadar Imran
          </motion.h1>

          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            A Frontend Developer with <b>4 months of Experience  </b>in Designing and Web Developing 
            worked as a <b>Digital marketing Junior Executive</b> at <b>Crescent University</b> Vandalur          
          </motion.p>

          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            I can Build smooth, responsive UIs with React and Combining clean design with smooth interactions, 
            I deliver accessible, responsive, and user-focused web experiences using modern web technologies.
            I'm a <b>Noble world Record Holder</b> In Silambam
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a className="btn primary" href="/resume/Imran__cv.pdf" download>
              Download Developer Resume
            </a>
            <Link className="btn" to="/projects">
              View Projects
            </Link>

          </motion.div>
        </div>

        <motion.div
          className="hero-image card"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 16, delay: 0.2 }}
        >
          <img src={profile} alt="Profile portrait" />
        </motion.div>
      </section>

      {/* New Profile Card Section */}
<section className="profile-section">
  <div className="card-container">
    {[slide1, slide2, slide3].map((img, i) => (
      <motion.div
        key={i}
        className="profile-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: i * 0.2, type: 'spring', stiffness: 120 }}
      >
        <img src={img} alt={`Slide ${i + 1}`} className="profile-card-img" />

        <div className="card-actions">
          <a
            href={img}
            className="btn view-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Picture
          </a>
        </div>
      </motion.div>
    ))}
  </div>
</section>

    </>
  )
}
