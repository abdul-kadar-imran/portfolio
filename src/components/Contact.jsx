// src/components/Contact.jsx
import React from 'react'

export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-white text-center">
          Get in Touch
        </h1>
        <p className="lead text-center" style={{ marginTop: '.5rem' }}>
          Have questions or want to join our community? We’d love to hear from you!
        </p>

        {/* Contact block title */}
        <h2 className="text-xl md:text-2xl font-semibold" style={{ marginTop: '2rem' }}>
          Contact Information
        </h2>

        {/* Responsive grid */}
        <div className="contact-grid" style={{ marginTop: '1rem' }}>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/abdulkadarimran/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="icon-tile linkedin">
              {/* LinkedIn Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4 8.98h2v12H4v-12zM8.5 8.98h1.9v1.62h.03c.27-.5.93-1.03 1.9-1.03 2.03 0 2.4 1.34 2.4 3.08v8.33h-2v-7.38c0-.88-.02-2-1.22-2-1.22 0-1.4.95-1.4 1.93v7.45h-2v-12z" />
              </svg>
            </span>

            <div className="contact-body">
              <div className="font-semibold">LinkedIn</div>
              <div className="small" style={{ marginTop: '.25rem', wordBreak: 'break-all' }}>
                https://www.linkedin.com/in/abdulkadarimran/</div>
                
                <div className="tag-row" style={{ marginTop: '.6rem' }}>
                <span className="badge">Open in New Tab</span>
                </div>
            </div>
          </a>


          {/* Email */}
          <a href="mailto:abdulkadarimran@gmail.com" className="contact-card">
            <span className="icon-tile email">
              {/* Mail */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M4 6l8 6 8-6v12H4V6Z" stroke="white" strokeWidth="1.7" fill="none" />
              </svg>
            </span>

            <div className="contact-body">
              <div className="font-semibold">Email</div>
              <div className="small" style={{ marginTop: '.25rem' }}>abdulkadarimran@gmail.com</div><br />
              <div className="tag-row" style={{ marginTop: '.6rem' }}>
                <span className="badge">Compose Email</span>
              </div>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/abdul-kadar-imran"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="icon-tile github">
              {/* GitHub Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.85 10.95c.58.1.79-.25.79-.56v-2.07c-3.19.69-3.87-1.54-3.87-1.54a3.05 3.05 0 0 0-1.28-1.69c-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.21 1.78 1.21 1.03 1.78 2.69 1.26 3.34.97a2.43 2.43 0 0 1 .72-1.53c-2.55-.29-5.24-1.28-5.24-5.67a4.46 4.46 0 0 1 1.19-3.08 4.16 4.16 0 0 1 .11-3.04s.97-.31 3.18 1.18a11.02 11.02 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.39.95.4 2.06.11 3.04a4.46 4.46 0 0 1 1.19 3.08c0 4.41-2.7 5.38-5.27 5.66a2.66 2.66 0 0 1 .77 2.07v3.07c0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
              </svg>
            </span>

            <div className="contact-body">
              <div className="font-semibold">GitHub</div>
              <div className="small" style={{ marginTop: '.25rem', wordBreak: 'break-all' }}>
                https://github.com/abdul-kadar-imran
              </div>
              <div className="tag-row" style={{ marginTop: '.6rem' }}>
                <span className="badge">Open in New Tab</span>
              </div>
            </div>
          </a>

          {/* Address */}
          <a
            href="https://maps.app.goo.gl/x9Sy4ttqtNm3V1vt5"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="icon-tile address">
              {/* MapPin */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 21s-7-4.5-7-10a7 7 0 1 1 14 0c0 5.5-7 10-7 10Z" stroke="white" strokeWidth="1.7" />
                <circle cx="12" cy="11" r="3" fill="white" />
              </svg>
            </span>

            <div className="contact-body">
              <div className="font-semibold">Address</div>
              <div className="small" style={{ marginTop: '.25rem' }}>
                C.K.M Complex, BDO office Road ,Padappai
              </div>
              <div className="tag-row" style={{ marginTop: '.6rem' }}>
                <span className="badge">Open in Google Maps</span>
              </div>
            </div>
          </a>

          {/* Phone (WhatsApp) */}
          <div className="contact-card">
            <span className="icon-tile phone">
              {/* Phone */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M6 4h4l2 4-3 2a12 12 0 0 0 5 5l2-3 4 2v4a2 2 0 0 1-2 2c-8 0-14-6-14-14a2 2 0 0 1 2-2z" stroke="white" strokeWidth="1.7" />
              </svg>
            </span>
            <div className="contact-body">
              <div className="font-semibold">Phone (WhatsApp)</div>
              <div className="small" style={{ marginTop: '.25rem' }}>
                +91 93630 01680<br />
                Mon–Fri: 9:00 AM – 6:00 PM
              </div>
              <div className="tag-row" style={{ marginTop: '.6rem', gap: '.5rem' }}>
                <a className="btn" href="tel:+919363001680">Call</a>
                <a className="btn" href="https://wa.me/919363001680" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </div>
            </div>
          </div>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/mr_khalifa_imran/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="icon-tile instagram">
              {/* Instagram */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" stroke="white" strokeWidth="1.7" />
                <circle cx="12" cy="12" r="3.6" stroke="white" strokeWidth="1.7" fill="none" />
                <circle cx="16.6" cy="7.6" r="1" fill="white" />
              </svg>
            </span>
            <div className="contact-body">
              <div className="font-semibold">Instagram</div>
              <div className="small" style={{ marginTop: '.25rem' }}>@mr_khalifa_imran</div>
              <div className="tag-row" style={{ marginTop: '.6rem' }}>
                <span className="badge">Open in New Tab</span>
                </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
