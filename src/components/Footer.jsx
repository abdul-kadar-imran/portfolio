import React from 'react'

// Import your PNG icons
import linkedinIcon from '../assets/icons/linkedin.png'
import Github from '../assets/icons/github.png'
import instagramIcon from '../assets/icons/instagram.png'
import facebookIcon from '../assets/icons/facebook.png'
import gmailIcon from '../assets/icons/gmail.png'
import phoneIcon from '../assets/icons/phone.png'

import './footer.css' // 👈 Import the CSS file

export default function Footer() {
  const socials = [
    {
      name: 'LinkedIn',
      icon: linkedinIcon,
      link: 'https://www.linkedin.com/in/abdulkadarimran/',
    },
    {
      name: 'Github',
      icon: Github,
      link: 'https://github.com/abdul-kadar-imran',
    },
    {
      name: 'Gmail',
      icon: gmailIcon,
      link: 'mailto:abdulkadarimran@gmail.com',
    },
    {
      name: 'Instagram',
      icon: instagramIcon,
      link: 'https://www.instagram.com/mr_khalifa_imran/?hl=ene',
    },
    {
      name: 'Facebook',
      icon: facebookIcon,
      link: 'https://www.facebook.com/share/17d6ZjT3ac/',
    },
    
    {
      name: 'Phone',
      icon: phoneIcon,
      link: 'tel:+919363001680',
    },
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <h2>Abdul Kadar Imran</h2>
            <p>
              "Building interactive, user-focused web experiences with passion
              and precision."
            </p>
          </div>
          
          {/* Social Links */}
          <div className="socials">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                title={s.name}
              >
                <img src={s.icon} alt={s.name} className="social-icon" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr />

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Your Name — All Rights Reserved.</p>
          <p>Designed with ❤️ using React</p>
        </div>
      </div>
    </footer>
  )
}
