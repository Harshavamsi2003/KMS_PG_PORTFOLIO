import { useState, useEffect } from 'react'
import '../styles/navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-inner">
          <a href="#home" className="nav-logo" onClick={close}>
            <div className="nav-logo-badge"><span>KMS</span></div>
            <div>
              <div className="nav-logo-name">KMS Men's PG</div>
              <div className="nav-logo-sub">Ramapuram, Chennai</div>
            </div>
          </a>

          <button
            className={`hamburger ${open ? 'open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>

          <div className={`nav-links ${open ? 'open' : ''}`}>
            <a href="#rooms" onClick={close}>Rooms</a>
            <a href="#facilities" onClick={close}>Facilities</a>
            <a href="#menu" onClick={close}>Food Menu</a>
            <a href="#branches" onClick={close}>Branches</a>
            <a href="#reviews" onClick={close}>Reviews</a>
            <a href="#contact" className="nav-cta" onClick={close}>Book Now</a>
          </div>
        </div>
      </div>
    </nav>
  )
}