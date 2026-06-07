import { useNavigate } from 'react-router-dom'
import { Scissors, Paintbrush, Sparkles, Droplet, MapPin, Phone, Mail, Clock } from 'lucide-react'
import './hairdresser_service.css'

function Home() {
  const navigate = useNavigate()

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <>
      <div className="outside-navbar">
        <header className="navbar">
          <button className="logo" onClick={() => scrollToSection('heroSection')}>Maison de Beauté</button>
          <nav className="nav-links">
            <button className="home"    onClick={() => scrollToSection('aboutSection')}>ABOUT</button>
            <button className="services" onClick={() => scrollToSection('servicesSection')}>SERVICES</button>
            <button className="contact" onClick={() => scrollToSection('contactSection')}>CONTACT</button>
          </nav>
          <button className="btn-nav" onClick={() => navigate('/booking')}>BOOK NOW</button>
        </header>
      </div>

      <div id="heroSection"className="hero">
        <div className="hero-content">
          <span className="hero-subtitle-top">WELCOME TO</span>
          <h1 className="hero-title">Maison de Beauté</h1>
          <p className="hero-subtitle-bottom">Discover Your Best Self</p>
          <button className="btn-hero" onClick={() => navigate('/booking')}>BOOK A VISIT</button>
        </div>
      </div>

      <div id="aboutSection" className="about">
        <h1>About</h1>
        <p>At Maison de Beauté, we believe your hair is your ultimate signature. Our luxury salon is designed to be a sanctuary where artistry meets relaxation. From transformative color and precision cuts to bespoke styling, our expert team is dedicated to crafting a look that complements your unique individuality. Step into our world, unwind, and let us help you discover your best self.</p>
      </div>

      <div id="servicesSection" className="services">
        <h1>Services</h1>
        <div className="services-grid">
          <div className="cut-and-style">
            <Scissors className="service-icon" size={32} strokeWidth={1.5} />
            <h1>Cut & Style</h1>
            <p>$85</p>
          </div>
          <div className="colour">
            <Paintbrush className="service-icon" size={32} strokeWidth={1.5} />
            <h1>Colour</h1>
            <p>$140</p>
          </div>
          <div className="balayage">
            <Sparkles className="service-icon" size={32} strokeWidth={1.5} />
            <h1>Balayage</h1>
            <p>$210</p>
          </div>
          <div className="treatment">
            <Droplet className="service-icon" size={32} strokeWidth={1.5} />
            <h1>Treatment</h1>
            <p>$120</p>
          </div>
        </div>
      </div>

      <div id="contactSection" className="contact">
        <h1>Contact</h1>
        <div className="contact-grid">
          <div className="address">
            <MapPin className="contact-icon" size={32} strokeWidth={1.5} />
            <h1>Address</h1>
            <p>842 Avenue de l'Étoile, Suite 400, New York</p>
          </div>
          <div className="phone-number">
            <Phone className="contact-icon" size={32} strokeWidth={1.5} />
            <h1>Phone Number</h1>
            <p>+1 (555) 019-2834</p>
          </div>
          <div className="email">
            <Mail className="contact-icon" size={32} strokeWidth={1.5} />
            <h1>Email</h1>
            <p>maisonDeBeaute@gmail.com</p>
          </div>
          <div className="hours">
            <Clock className="contact-icon" size={32} strokeWidth={1.5} />
            <h1>Hours</h1>
            <p>8:00 am - 4:00 pm</p>
          </div>
        </div>         
      </div>
    </>
  )
}

export default Home