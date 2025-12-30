import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import cert1 from '../../public/images/cert1.jpg'
import cert2 from '../../public/images/cert2.jpg'
import cert3 from '../../public/images/cert3.jpg'

export default function Certifications() {
  const certs = [
    { name: 'Tutorial Center', org: ' Internship ', year: '2024', img: cert3},
    { name: 'Prompt Engineering', org: 'SimpliLearn ', year: '2025', img: cert1 },
    { name: 'Noble Wolrd Record', org: 'Silambam', year: '2025', img: cert2 },
  ]

  const [viewerOpen, setViewerOpen] = useState(false)
  const [active, setActive] = useState(null) // { name, org, year, img }

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setViewerOpen(false)
    if (viewerOpen) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [viewerOpen])

  // Prevent body scroll when viewer is open
  useEffect(() => {
    document.body.style.overflow = viewerOpen ? 'hidden' : ''
  }, [viewerOpen])

  const openViewer = (cert) => {
    setActive(cert)
    setViewerOpen(true)
  }

  const closeViewer = () => setViewerOpen(false)

  return (
    <section className="section">
      <h2>Certifications</h2>
      <p className="lead">Selected certificates & courses.</p>

      <div className="grid grid-3" style={{ marginTop: '1rem' }}>
        {certs.map((c) => (
          <motion.article
            key={c.name}
            className="card"
            style={{ overflow: 'hidden' }}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={c.img}
              alt={c.name}
              style={{
                width: '100%',
                height: 180,
                objectFit: 'cover',
                borderBottom: '1px solid var(--border)',
                cursor: 'zoom-in',
              }}
              onClick={() => openViewer(c)}
            />
            <div style={{ padding: '1rem 1.2rem' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <strong>{c.name}</strong>
                  <div className="small">{c.org}</div>
                </div>
                <span className="badge">{c.year}</span>
              </div>

              <div style={{ marginTop: '.9rem', display: 'flex', gap: '.6rem', flexWrap: 'wrap' }}>
                <button className="btn" onClick={() => openViewer(c)}>View Certificate</button>
                <a className="btn" href={c.img} target="_blank" rel="noopener noreferrer">Open</a>
                <a className="btn" href={c.img} download>Download</a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Fullscreen Viewer */}
      <AnimatePresence>
        {viewerOpen && active && (
          <motion.div
            className="viewer-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label={`Certificate: ${active.name}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeViewer}
          >
            <motion.div
              className="viewer-modal"
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 10, opacity: 0, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 140, damping: 18 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'center' }}>
                <div>
                  <strong>{active.name}</strong>
                  <div className="small">{active.org} • {active.year}</div>
                </div>
                <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
                  <a className="btn" href={active.img} target="_blank" rel="noopener noreferrer">Open</a>
                  <a className="btn" href={active.img} download>Download</a>
                  <button className="btn primary" onClick={closeViewer}>Close</button>
                </div>
              </div>

              <img
                src={active.img}
                alt={active.name}
                className="viewer-img"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
