import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const nav = [
    {to:'/', label:' 🏚️ Home'},
    {to:'/about', label:'About'},
    {to:'/skills', label:'Skills'},
    {to:'/projects', label:'Projects'},
    {to:'/certifications', label:'Certifications'},
    {to:'/resume', label:'Resume'},
    {to:'/contact', label:'Contact'}
  ]
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 16 }}
    >
      <div className="container navbar-inner">
        <Link to="/" className="brand">
          <span className="brand-badge" />
          <span>Frontend.dev</span>
        </Link>

        <div className="nav-links">
          {nav.map(n => (
            <NavLink key={n.to} to={n.to} className={({isActive}) => 'nav-link' + (isActive ? ' active' : '')}>
              {n.label}
            </NavLink>
          ))}
        </div>

        <button className="btn mobile-toggle" onClick={()=>setOpen(o=>!o)} aria-label="Toggle navigation">
          Menu
        </button>
      </div>
      <div className={'mobile-menu ' + (open ? 'open' : '')}>
        <div className="container">
          {nav.map(n => (
            <NavLink key={n.to} to={n.to} onClick={()=>setOpen(false)} className={({isActive}) => (isActive ? 'nav-link active' : 'nav-link')}>
              {n.label}
            </NavLink>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
