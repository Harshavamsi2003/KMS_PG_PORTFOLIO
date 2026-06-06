import { useState, useEffect } from 'react'
import '../styles/navbar.css'

const links = [
  { href: '#rooms',      label: 'Rooms'     },
  { href: '#facilities', label: 'Facilities'},
  { href: '#menu',       label: 'Food Menu' },
  { href: '#branches',   label: 'Branches'  },
  { href: '#reviews',    label: 'Reviews'   },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 860) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      {/* Dark overlay behind drawer */}
      <div className={`nav-overlay ${open ? 'visible' : ''}`} onClick={close} />

      <nav className={`navbar ${scrolled ? 'scrolled' : 'top'}`}>
        <div className="container">
          <div className="nav-inner">

            {/* Logo */}
            <a href="#home" className="nav-logo" onClick={close}>
              <div className="nav-logo-badge">
                {/* Custom PG house icon */}
                <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                  <path d="M16 4L3 14v14h8V20h10v8h8V14L16 4z" fill="white" fillOpacity="0.95"/>
                  <rect x="13" y="20" width="6" height="8" rx="1" fill="#3b6cf4"/>
                  <path d="M16 4L3 14" stroke="white" strokeOpacity="0.5" strokeWidth="0.5"/>
                  <circle cx="22" cy="11" r="4" fill="#e8b84b" fillOpacity="0.9"/>
                  <path d="M20.5 11h3M22 9.5v3" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="nav-logo-text">
                <span className="nav-logo-name">KMS PG</span>
                <span className="nav-logo-sub">Ramapuram, Chennai</span>
              </div>
            </a>

            {/* Desktop links */}
            <div className="nav-links-desktop">
              {links.map(l => (
                <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
              ))}
              <a href="#contact" className="nav-cta">Book Now</a>
            </div>

            {/* Hamburger */}
            <button
              className={`hamburger ${open ? 'open' : ''}`}
              onClick={() => setOpen(p => !p)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span /><span /><span />
            </button>

          </div>
        </div>

        {/* Mobile slide-in drawer */}
        <div className={`nav-drawer ${open ? 'open' : ''}`}>
          <div className="nav-drawer-top">
            <div className="nav-drawer-brand">
              <div className="nav-drawer-badge">
                <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
                  <path d="M16 4L3 14v14h8V20h10v8h8V14L16 4z" fill="white" fillOpacity="0.95"/>
                  <rect x="13" y="20" width="6" height="8" rx="1" fill="#3b6cf4"/>
                  <circle cx="22" cy="11" r="4" fill="#e8b84b" fillOpacity="0.9"/>
                  <path d="M20.5 11h3M22 9.5v3" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div className="nav-drawer-brand-name">KMS PG</div>
                <div className="nav-drawer-brand-sub">Ramapuram, Chennai</div>
              </div>
            </div>
            <button className="nav-drawer-close" onClick={close} aria-label="Close menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          <nav className="nav-drawer-links">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-drawer-link"
                style={{ transitionDelay: open ? `${i * 0.05}s` : '0s' }}
                onClick={close}
              >
                <span>{l.label}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
              </a>
            ))}
          </nav>

          <div className="nav-drawer-footer">
            <a href="#contact" className="nav-drawer-cta" onClick={close}>Book a Room Now</a>
            <div className="nav-drawer-phones">
              <a href="tel:+919710669944">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 010 2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
                +91 97106 69944
              </a>
              <a href="tel:+918825733398">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 010 2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
                +91 88257 33398
              </a>
            </div>
          </div>
        </div>

      </nav>
    </>
  )
}
