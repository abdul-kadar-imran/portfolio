import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles.css'

// ✅ Dynamically set favicon using JavaScript
const setFavicon = (url) => {
  let link = document.querySelector("link[rel~='icon']")
  if (!link) {
    link = document.createElement('link')
    link.rel = 'icon'
    document.head.appendChild(link)
  }
  link.href = url
}

// ✅ Set your favicon
import favicon from '../public/images/Khalifa logo bg.png'
setFavicon(favicon)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter
      basename={import.meta.env.BASE_URL}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <App />
    </HashRouter>
  </React.StrictMode>
)
