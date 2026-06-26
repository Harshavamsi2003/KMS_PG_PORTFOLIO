import { useState, useEffect, useCallback, useRef } from 'react'
import '../styles/navbar.css'

const links = [
  { href: '#rooms',      label: 'Rooms'      },
  { href: '#facilities', label: 'Facilities' },
  { href: '#menu',       label: 'Food Menu'  },
  { href: '#branches',   label: 'Branches'   },
  { href: '#reviews',    label: 'Reviews'    },
]

const WA     = '919710669944'
const WA_MSG = encodeURIComponent("Hi KMS PG! I'm interested in a room.")

const DARK_SECTIONS  = ['home', 'reviews']
const LIGHT_SECTIONS = ['rooms', 'facilities', 'menu', 'branches', 'contact']

export default function Navbar() {
  const [theme, setTheme] = useState('top')   // 'top' | 'dark' | 'light'
  const [open,  setOpen]  = useState(false)
  const [atTop, setAtTop] = useState(true)
  const menuRef = useRef(null)

  /* ── Scroll-based theme ── */
  const updateTheme = useCallback(() => {
    const y = window.scrollY
    setAtTop(y < 40)
    if (y < 60) { setTheme('top'); return }

    const navH    = 76
    const probe   = y + navH + 20
    const allIds  = [...DARK_SECTIONS, ...LIGHT_SECTIONS]
    let activeId  = DARK_SECTIONS[0]
    let closest   = Infinity

    for (const id of allIds) {
      const el = document.getElementById(id)
      if (!el) continue
      const top = el.offsetTop, bot = top + el.offsetHeight
      if (probe >= top && probe <= bot) { activeId = id; break }
      const dist = Math.min(Math.abs(probe - top), Math.abs(probe - bot))
      if (dist < closest) { closest = dist; activeId = id }
    }
    setTheme(DARK_SECTIONS.includes(activeId) ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', updateTheme, { passive: true })
    updateTheme()
    return () => window.removeEventListener('scroll', updateTheme)
  }, [updateTheme])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setOpen(false) }
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
      {/* ════════════ MOBILE MENU ════════════ */}
      <div
        ref={menuRef}
        className={`nmm${open ? ' nmm--open' : ''}`}
        aria-hidden={!open}
      >
        {/* Decorative orbs */}
        <div className="nmm-orb nmm-orb-1" aria-hidden />
        <div className="nmm-orb nmm-orb-2" aria-hidden />
        <div className="nmm-grid"          aria-hidden />

        <div className="nmm-inner">

          {/* Header row */}
          <div className="nmm-header">
            <a href="#home" className="nmm-brand" onClick={close}>
              <div className="nmm-logo-badge">
                <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                  <path d="M16 4L3 14v14h8V20h10v8h8V14L16 4z" fill="white" fillOpacity=".95"/>
                  <rect x="13" y="20" width="6" height="8" rx="1" fill="#3b6cf4"/>
                  <circle cx="22" cy="11" r="4" fill="#e8b84b" fillOpacity=".90"/>
                  <path d="M20.5 11h3M22 9.5v3" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="nmm-brand-text">
                <span className="nmm-brand-name">KMS PG</span>
                <span className="nmm-brand-sub">Ramapuram, Chennai</span>
              </div>
            </a>

            <button className="nmm-close" onClick={close} aria-label="Close menu">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="18" y1="6"  x2="6"  y2="18"/>
                <line x1="6"  y1="6"  x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="nmm-nav">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                className="nmm-link"
                style={{ '--i': i }}
                onClick={close}
              >
                <span className="nmm-link-index">0{i + 1}</span>
                <span className="nmm-link-text">{l.label}</span>
                <span className="nmm-link-line" />
                <svg className="nmm-link-arrow" width="18" height="18"
                  viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            ))}
          </nav>

          {/* Contact footer */}
          <div className="nmm-foot">
            <div className="nmm-foot-label">Get in touch</div>

            <a href="#contact" className="nmm-cta" onClick={close}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Book a Room Now
            </a>

            <a
              href={`https://wa.me/${WA}?text=${WA_MSG}`}
              className="nmm-wa" target="_blank" rel="noopener noreferrer"
              onClick={close}
            >
              <svg viewBox="0 0 24 24" width="17" height="17" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp Us
            </a>

            <div className="nmm-phones">
              <a href="tel:+919710669944" className="nmm-phone">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.12-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                +91 97106 69944
              </a>
              <a href="tel:+918825733398" className="nmm-phone">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.12-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                +91 88257 33398
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════ MAIN NAVBAR ════════════ */}
      <nav className={`navbar navbar--${theme}${atTop ? ' navbar--top' : ''}`}>
        <div className="nav-shell">
          <div className="nav-inner">

            {/* Logo */}
            <a href="#home" className="nav-logo" onClick={close}>
              <div className="nav-logo-badge">
                <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                  <path d="M16 4L3 14v14h8V20h10v8h8V14L16 4z" fill="white" fillOpacity=".95"/>
                  <rect x="13" y="20" width="6" height="8" rx="1" fill="#3b6cf4"/>
                  <path d="M16 4L3 14" stroke="white" strokeOpacity=".35" strokeWidth=".5"/>
                  <circle cx="22" cy="11" r="4" fill="#e8b84b" fillOpacity=".90"/>
                  <path d="M20.5 11h3M22 9.5v3" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="nav-logo-text">
                <span className="nav-logo-name">KMS PG</span>
                <span className="nav-logo-sub">Ramapuram, Chennai</span>
              </div>
            </a>

            {/* Desktop links */}
            <div className="nav-links">
              {links.map(l => (
                <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
              ))}
            </div>

            {/* Hamburger */}
            <button
              className={`nav-ham${open ? ' nav-ham--open' : ''}`}
              onClick={() => setOpen(p => !p)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span className="nav-ham-bar" />
              <span className="nav-ham-bar" />
              <span className="nav-ham-bar" />
            </button>

          </div>
        </div>
      </nav>
    </>
  )
}
