import { useEffect, useRef } from 'react'
import '../styles/hero.css'

const WA = '919710669944'
const WA_MSG = encodeURIComponent("Hi KMS PG! I'm interested in a room. Please share details.")

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add('vis')),
      { threshold: 0.05 }
    )
    ref.current?.querySelectorAll('.rv, .rvr').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="hero" id="home" ref={ref}>
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />
      <div className="hero-lines" />

      <div className="container">
        <div className="hero-body">

          {/* LEFT */}
          <div className="hero-left rv">

            <div className="hero-status">
              <span className="status-dot" />
              Rooms Available — All 3 Branches
            </div>

            <h1 className="hero-heading">
              Chennai's Most
              <span className="hero-heading-gold">Trusted</span>
              <span className="hero-heading-sub">Men's Paying Guest, Ramapuram</span>
            </h1>

            <p className="hero-desc">
              Fully-furnished rooms with home-cooked meals, free WiFi, AC
              &amp; 24/7 security — walking distance from DLF IT Park &amp; SRM College.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn-gold">Book a Visit</a>
              <a
                href={`https://wa.me/${WA}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                WhatsApp Us
              </a>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-num">4.8★</span>
                <span className="hero-stat-label">Google Rating</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-num">354+</span>
                <span className="hero-stat-label">Reviews</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-num">3</span>
                <span className="hero-stat-label">Branches</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-num">10+</span>
                <span className="hero-stat-label">Years</span>
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="hero-right rvr" style={{ transitionDelay: '0.15s' }}>

            <div className="hero-main-card">
              <div className="hmc-header">
                <div className="hmc-popular">MOST POPULAR</div>
                <div className="hmc-rating">
                  <div className="hmc-stars">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <span className="hmc-rating-num">4.8</span>
                  <span className="hmc-rating-sub">/ 5 on Google</span>
                </div>
                <div className="hmc-name">KMS Men's PG</div>
                <div className="hmc-loc">
                  <span className="hmc-loc-dot" />
                  Venkateshwara Nagar, Ramapuram, Chennai
                </div>
              </div>

              <div className="hmc-body">
                <div className="hmc-tags">
                  <span className="hmc-tag">Home Food</span>
                  <span className="hmc-tag">AC Rooms</span>
                  <span className="hmc-tag">Free WiFi</span>
                  <span className="hmc-tag">Gym</span>
                  <span className="hmc-tag">24/7 CCTV</span>
                  <span className="hmc-tag">Hot Water</span>
                </div>
                <div className="hmc-price-row">
                  <div>
                    <span className="hmc-from">Starting from</span>
                    <span className="hmc-amount">₹4,500</span>
                    <span className="hmc-period">per month · meals included</span>
                  </div>
                  <a href="#contact" className="hmc-book">Book Now →</a>
                </div>
              </div>
            </div>

            <div className="hero-mini-cards">
              <div className="hero-mini-card">
                <div className="hmc-icon">🏢</div>
                <div>
                  <div className="hmc-label">Walk to DLF IT Park</div>
                  <div className="hmc-sublabel">5 min distance</div>
                </div>
              </div>
              <div className="hero-mini-card">
                <div className="hmc-icon">🍛</div>
                <div>
                  <div className="hmc-label">3 Meals Daily</div>
                  <div className="hmc-sublabel">Included in rent</div>
                </div>
              </div>
              <div className="hero-mini-card">
                <div className="hmc-icon">🔒</div>
                <div>
                  <div className="hmc-label">24/7 CCTV Security</div>
                  <div className="hmc-sublabel">Safe &amp; secure</div>
                </div>
              </div>
              <div className="hero-mini-card">
                <div className="hmc-icon">📶</div>
                <div>
                  <div className="hmc-label">Free High-Speed WiFi</div>
                  <div className="hmc-sublabel">Every floor</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        Scroll to explore
        <div className="hero-scroll-line" />
      </div>

      <a
        href={`https://wa.me/${WA}?text=${WA_MSG}`}
        className="wa-sticky"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="wa-sticky-text">Chat on WhatsApp</span>
      </a>
    </section>
  )
}