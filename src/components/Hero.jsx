import { useEffect, useRef } from 'react'
import '../styles/hero.css'

const WA = '919710669944'
const WA_MSG = encodeURIComponent("Hi KMS PG! I'm interested in a room. Please share details.")

const stats = [
  { val: '4.8★', lbl: 'Google Rating' },
  { val: '354+', lbl: 'Reviews'       },
  { val: '5',    lbl: 'Branches'      },
  { val: '10+',  lbl: 'Years Trust'   },
]

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handleMove = e => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 14
      el.style.setProperty('--px', `${x}px`)
      el.style.setProperty('--py', `${y}px`)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <section className="hero" id="home" ref={ref}>

      <div className="hero-bg-base" />
      <div className="hero-grid-overlay" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />
      <div className="hero-noise" />
      <div className="hero-topline" />

      <div className="hero-container">

        {/* ══ LEFT ══ */}
        <div className="hero-left">

          <div className="hero-eyebrow">
            Ramapuram, Chennai — Men's PG &amp; Ladies Hostel
          </div>

          <h1 className="hero-title">
            <span className="hero-title-line">A Home</span>
            <span className="hero-title-line">Away <em>from Home</em></span>
          </h1>

          <p className="hero-desc">
            Five well-kept residences near DLF IT Park, built around one idea —{' '}
            <strong>every resident is family.</strong> Clean rooms, warm
            home-cooked meals, real care.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="hero-btn-primary">
              Book a Visit
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#rooms" className="hero-link-ghost">
              View Rooms &amp; Pricing
            </a>
          </div>

        </div>

        {/* ══ RIGHT — Resident Access Card ══ */}
        <div className="hero-right">
          <div className="hero-card">
            <div className="hero-card-glow" />

            <div className="hero-card-top">
              <span className="hero-card-label">Resident Access Card</span>
              <div className="hero-card-available">
                <span className="hero-live-dot" />
                Rooms Available
              </div>
            </div>

            <div className="hero-stats">
              {stats.map((s, i) => (
                <div key={s.lbl} className="hero-stat" style={{ animationDelay: `${0.45 + i * 0.09}s` }}>
                  <span className="hero-stat-val">{s.val}</span>
                  <span className="hero-stat-lbl">{s.lbl}</span>
                </div>
              ))}
            </div>

            <div className="hero-card-divider" />

            <div className="hero-price-row">
              <span className="hero-price-from">Starting from</span>
              <span className="hero-price-val">₹5,500<em>/month</em></span>
            </div>

            <a href="#contact" className="hero-card-cta">
              Enquire Now →
            </a>

          </div>
        </div>

      </div>

      {/* Fixed WA float */}
      <a
        href={`https://wa.me/${WA}?text=${WA_MSG}`}
        className="wa-float" target="_blank" rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="wa-float-icon" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="wa-float-text">Chat on WhatsApp</span>
      </a>

    </section>
  )
}
