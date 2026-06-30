import { useEffect, useRef, useState } from 'react'
import '../styles/hero.css'

const WA     = '919710669944'
const WA_MSG = encodeURIComponent("Hi KMS PG! I'm interested in a room. Please share details.")

const stats = [
  { val: '4.8', unit: '★', lbl: 'Google Rating' },
  { val: '354', unit: '+', lbl: 'Reviews'        },
  { val: '7',   unit: '',  lbl: 'Branches'       },
  { val: '10',  unit: '+', lbl: 'Years Trust'    },
]

const TARGETS = [48, 354, 7, 10]

/* Rotating hero backgrounds — landscape for desktop/tablet, portrait for phones */
const SLIDES_DESKTOP = ['/home1.png', '/home2.png', '/home3.png']
const SLIDES_MOBILE  = ['/homeph1.png', '/homeph2.png', '/homeph3.png']
const SLIDE_MS = 5500
const MOBILE_QUERY = '(max-width: 960px)'

export default function Hero() {
  const [ready,  setReady]  = useState(false)
  const [counts, setCounts] = useState([0, 0, 0, 0])
  const [slide,  setSlide]  = useState(0)
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches
  )
  const rafRef = useRef(null)

  /* Track viewport so we swap to the dedicated portrait photo set on phones/tablets */
  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY)
    const onChange = (e) => setIsMobile(e.matches)
    mql.addEventListener ? mql.addEventListener('change', onChange) : mql.addListener(onChange)
    return () => {
      mql.removeEventListener ? mql.removeEventListener('change', onChange) : mql.removeListener(onChange)
    }
  }, [])

  const SLIDES = isMobile ? SLIDES_MOBILE : SLIDES_DESKTOP

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 60)
    return () => clearTimeout(t)
  }, [])

  /* Cross-fade through the 3 background photos */
  useEffect(() => {
    const id = setInterval(() => {
      setSlide(s => (s + 1) % SLIDES.length)
    }, SLIDE_MS)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (!ready) return
    const id = setTimeout(() => {
      const start = performance.now()
      const dur   = 1800
      const tick  = (now) => {
        const p    = Math.min((now - start) / dur, 1)
        const ease = 1 - Math.pow(1 - p, 3)
        setCounts(TARGETS.map(t => Math.round(t * ease)))
        if (p < 1) rafRef.current = requestAnimationFrame(tick)
      }
      rafRef.current = requestAnimationFrame(tick)
    }, 800)
    return () => { clearTimeout(id); cancelAnimationFrame(rafRef.current) }
  }, [ready])

  const fmt = (i) => i === 0 ? (counts[0] / 10).toFixed(1) : counts[i]

  return (
    <section className={`hero${ready ? ' hero--in' : ''}`} id="home">

      {/* ── Background layers — 3-image crossfade ── */}
      <div className="hero-photo-stack" aria-hidden="true">
        {SLIDES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`hero-photo${i === slide ? ' is-active' : ''}`}
            loading={i === 0 ? 'eager' : 'lazy'}
            draggable="false"
          />
        ))}
      </div>
      <div className="hero-grad"     aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-topline"  aria-hidden="true" />

      {/* ── Main content ── */}
      <div className="hero-inner">

        {/* ════ LEFT / TOP — editorial text ════ */}
        <div className="hero-left">

          {/* Eyebrow location */}
          <p className="hero-eyebrow">
            Ramapuram, Chennai — Men's PG &amp; Ladies Hostel
          </p>

          {/* Headline */}
          <h1 className="hero-h1">
            <span className="hero-h1-brand">KMS PG</span>
            <span className="hero-h1-sub">
              <span className="hero-h1-plain">A Home</span>{' '}
              <span className="hero-h1-gold">Away from Home</span>
            </span>
          </h1>

          {/* Description */}
          <p className="hero-desc">
            Seven well-kept residences near DLF IT Park, built around one idea —{' '}
            <strong>every resident is family.</strong> Clean rooms, warm
            home-cooked meals, real care.
          </p>

          {/* CTA */}
          <div className="hero-btns">
            <a href="#rooms" className="hero-btn-gold">
              View Rooms &amp; Pricing
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>

        {/* ════ RIGHT / BOTTOM — Resident Access Card (glass) ════ */}
        <aside className="hero-card" aria-label="Resident Access Card">

          {/* Ambient glow decoration */}
          <div className="hc-glow"  aria-hidden="true" />

          {/* Card header */}
          <div className="hc-head">
            <span className="hc-eyebrow">Resident Access Card</span>
          </div>

          {/* Stats 2×2 */}
          <div className="hc-grid">
            {stats.map((s, i) => (
              <div key={s.lbl} className="hc-stat"
                style={{ '--d': `${0.42 + i * 0.10}s` }}>
                <span className="hc-num">
                  {fmt(i)}<span className="hc-sup">{s.unit}</span>
                </span>
                <span className="hc-lbl">{s.lbl}</span>
              </div>
            ))}
          </div>

          {/* Perforated divider */}
          <div className="hc-perf" aria-hidden="true" />

          {/* Price */}
          <div className="hc-price-row">
            <span className="hc-from">Starting from</span>
            <span className="hc-price">₹5,500<em>/month</em></span>
          </div>

          {/* CTA */}
          <a href="#contact" className="hc-cta">Enquire Now →</a>

        </aside>

      </div>

      {/* ── Scroll indicator ── */}
      <div className="hero-scroll" aria-hidden="true">
        <span className="hero-scroll-bar" />
        <span className="hero-scroll-lbl">Scroll</span>
      </div>

      {/* ── WA float ── */}
      <a href={`https://wa.me/${WA}?text=${WA_MSG}`}
        className="wa-float" target="_blank" rel="noopener noreferrer"
        aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" fill="white" width="18" height="18" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="wa-txt">Chat on WhatsApp</span>
      </a>

    </section>
  )
}
