import { useState } from 'react'
import CategorySection from './components/CategorySection'
import AIChat from './components/AIChat'
import './App.css'

function App() {
  const [showChat, setShowChat] = useState(false)

  return (
    <div className="App">
      <CategorySection onAIClick={() => setShowChat(true)} />
      {showChat && <AIChat onClose={() => setShowChat(false)} />}
      
      {/* Footer */}
      <section className="footer">
        <div className="footer-container">
          <div className="footer-links">
            <h6 className="footer-links-title">BROWSE</h6>
            <a href="/about.html" className="footer-link">About</a>
            <a href="/contact.html" className="footer-link">Contact</a>
            <a href="/legal.html" className="footer-link">Policies</a>
          </div>
          <div className="footer-links">
            <h6 className="footer-links-title">CONNECT</h6>
            <a href="https://www.instagram.com/Laundri_coza" className="footer-link">Instagram</a>
            <a href="https://www.facebook.com/Laundri.co.za" className="footer-link">Facebook</a>
            <a href="https://whatsapp.com/channel/0029VaJg2Ix3GJP7qt8U7p0m" className="footer-link">WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="navigation">
        <div className="nav-bar">
          <div className="button-hamburger">
            <img 
              src="https://assets-global.website-files.com/649b04d57440d4d5af67beb7/649b04d57440d4d5af67bec4_Hamburger.svg" 
              loading="lazy" 
              alt=""
            />
          </div>
          <a href="/" className="button-home w-inline-block w--current">
            <img src="/logo.svg" loading="lazy" alt="Laundri Logo" />
          </a>
        </div>
      </section>
    </div>
  )
}

export default App
