import { useEffect, useRef } from 'react'
import '../styles/reviews.css'

const reviews = [
  {
    name: 'Avinash R.',
    av: 'A', avClass: 'av-a',
    type: 'IT Professional',
    stars: 5, date: '2 years ago',
    quote: 'Good food, very good environment, AC available, free WiFi. The owner is a very kind person. Best PG around Ramapuram — highly recommend to anyone working near DLF.',
  },
  {
    name: 'Kabil A.',
    av: 'K', avClass: 'av-b',
    type: 'Working Professional',
    stars: 5, date: '1 year ago',
    quote: "Well maintained and disciplined Men's PG near DLF. Daily room cleaning, quality food three times a day, monthly AC cleaning — the owner ensures everything is top quality.",
  },
  {
    name: 'Dinesh S.',
    av: 'D', avClass: 'av-d',
    type: 'Resident',
    stars: 5, date: '1 year ago',
    quote: 'KMS PG is one of the best hostels near Ramapuram and DLF. Rooms are properly maintained with 24-hour CCTV. Truly feels like home — highly recommended.',
  },
  {
    name: 'Jyothi G.',
    av: 'J', avClass: 'av-c',
    type: 'Family Member',
    stars: 5, date: '2 years ago',
    quote: 'My brother is staying here and it is too clean and hygienic. It truly feels like home — food and all other facilities are just fabulous.',
  },
  {
    name: 'Akshayah M.',
    av: 'A', avClass: 'av-e',
    type: 'Resident',
    stars: 5, date: '2 years ago',
    quote: 'Excellent hospitality. The owners are so responsible — they respond immediately to any problems. Food is good, rooms are neat and clean. Highly recommended.',
  },
  {
    name: 'Tamizh P.',
    av: 'T', avClass: 'av-f',
    type: 'IT Professional',
    stars: 5, date: '10 months ago',
    quote: 'Good PG, best for working people. Walkable distance from DLF, friendly owner, feels like home. Exactly what you need after a long workday.',
  },
]

export default function Reviews() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add('vis')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.rv').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="reviews" id="reviews" ref={ref}>
      <div className="rev-glow rev-glow-1" />
      <div className="rev-glow rev-glow-2" />

      <div className="container">

        <div className="rev-header rv">
          <div className="eyebrow">Testimonials</div>
          <h2 className="sec-title sec-title-white">
            What Our{' '}
            <em style={{ color: '#e8b84b', fontStyle: 'italic' }}>Residents Say</em>
          </h2>
          <p className="sec-sub sec-sub-white">
            Real reviews from real residents — verified on Google and Justdial.
          </p>
        </div>

        {/* Score Bar */}
        <div className="rev-score-bar rv">
          <div className="rsb-left">
            <div className="rsb-num">4.8</div>
            <div className="rsb-stars">
              {[1,2,3,4,5].map(s => <span key={s}>★</span>)}
            </div>
            <div className="rsb-label">Overall Rating</div>
          </div>

          <div className="rsb-divider" />

          <div className="rsb-platforms">
            <div className="rsb-platform">
              <span className="rsb-name">Google</span>
              <div className="rsb-mini">{[1,2,3,4,5].map(s => <span key={s}>★</span>)}</div>
              <span className="rsb-count">4.8 · 350+ reviews</span>
            </div>
            <div className="rsb-platform">
              <span className="rsb-name">Justdial</span>
              <div className="rsb-mini">{[1,2,3,4,5].map(s => <span key={s}>★</span>)}</div>
              <span className="rsb-count">4.8 · 354 ratings</span>
            </div>
            <div className="rsb-platform">
              <span className="rsb-name">Hostel 2</span>
              <div className="rsb-mini">{[1,2,3,4,5].map(s => <span key={s}>★</span>)}</div>
              <span className="rsb-count">4.8 · 45 ratings</span>
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="rev-grid">
          {reviews.map((r, i) => (
            <div
              key={r.name + i}
              className="rev-card rv"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="rev-top">
                <div className="rev-reviewer">
                  <div className={`rev-av ${r.avClass}`}>{r.av}</div>
                  <div>
                    <div className="rev-name">{r.name}</div>
                    <div className="rev-type">{r.type}</div>
                  </div>
                </div>
                <div className="rev-stars">
                  {Array(r.stars).fill(0).map((_, j) => (
                    <span key={j}>★</span>
                  ))}
                </div>
              </div>

              <p className="rev-quote">{r.quote}</p>

              <div className="rev-meta">
                <span className="rev-source">Google</span>
                <span className="rev-date">{r.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="rev-cta rv">
          <p>See all verified reviews on Google Maps</p>
          <a
            href="https://www.google.com/maps/place/KMS+Mens+PG/@13.0292459,80.1727729,17z/data=!3m1!5s0x3a5260d9100dc78d:0x90e9862a3a991a34!4m8!3m7!1s0x3a5261145dab3883:0x79462a088909bf04!8m2!3d13.0292459!4d80.1727729!9m1!1b1!16s%2Fg%2F11hds28774?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            ★ Read All Reviews on Google
          </a>
        </div>

      </div>
    </section>
  )
}
