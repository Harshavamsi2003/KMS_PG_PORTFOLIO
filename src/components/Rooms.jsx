import { useState, useEffect, useRef } from 'react'
import '../styles/rooms.css'

const menRooms = [
  { sharing: '1', label: '1 Sharing', withFood: 15000, noFood: 12000, featured: false },
  { sharing: '2', label: '2 Sharing', withFood: 12000, noFood: 9000,  featured: true  },
  { sharing: '3', label: '3 Sharing', withFood: 10000, noFood: 7000,  featured: false },
  { sharing: '4', label: '4 Sharing', withFood: 9500,  noFood: 6500,  featured: false },
  { sharing: '6', label: '6 Sharing', withFood: 8500,  noFood: 5500,  featured: false },
]

const ladiesRooms = [
  { sharing: '1', label: '1 Sharing', withFood: 15000, noFood: 13000, featured: false },
  { sharing: '2', label: '2 Sharing', withFood: 12000, noFood: 10000, featured: true  },
  { sharing: '3', label: '3 Sharing', withFood: 11500, noFood: 9500,  featured: false },
  { sharing: '4', label: '4 Sharing', withFood: 9500,  noFood: 7500,  featured: false },
  { sharing: '6', label: '6 Sharing', withFood: 8500,  noFood: 6000,  featured: false },
]

export default function Rooms() {
  const [tab, setTab] = useState('men')
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('vis')),
      { threshold: 0.05 }
    )
    const els = ref.current ? ref.current.querySelectorAll('.rv,.rvl,.rvr') : []
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const rooms = tab === 'men' ? menRooms : ladiesRooms

  return (
    <section className="rooms" id="rooms" ref={ref}>
      <div className="container">

        <div className="rooms-header rv">
          <span className="eyebrow">Accommodation</span>
          <h2 className="sec-title">Choose Your <em>Perfect Room</em></h2>
          <p className="sec-sub">
            Fully furnished, AC-equipped rooms, cleaned every single day —
            pick the sharing that fits your comfort and your budget.
          </p>
        </div>

        {/* Gender Toggle */}
        <div className="rooms-toggle rv">
          <button
            className={'rt-btn' + (tab === 'men' ? ' active' : '')}
            onClick={() => setTab('men')}
          >
            <span className="rt-icon">👨</span>
            Men&apos;s PG
          </button>
          <button
            className={'rt-btn' + (tab === 'ladies' ? ' active' : '')}
            onClick={() => setTab('ladies')}
          >
            <span className="rt-icon">👩</span>
            Ladies Hostel
          </button>
        </div>

        <div className="rooms-cat-label rv">
          {tab === 'men'
            ? <span>🏠 Men&apos;s PG — Ramapuram · 4 Branches</span>
            : <span>🏠 Ladies Hostel · Kothari Nagar, Ramapuram (2 more branches nearby)</span>
          }
        </div>

        {/* Pricing note */}
        <div className="rooms-pricing-note rv">
          <div className="rpn-item">
            <span className="rpn-icon">🍽</span>
            <div>
              <span className="rpn-title">With Food</span>
              <span className="rpn-desc">3 meals/day included</span>
            </div>
          </div>
          <div className="rpn-divider" />
          <div className="rpn-item">
            <span className="rpn-icon">🏠</span>
            <div>
              <span className="rpn-title">Without Food</span>
              <span className="rpn-desc">Room only — no food charges</span>
            </div>
          </div>
          <div className="rpn-divider" />
          <div className="rpn-item">
            <span className="rpn-icon">❄️</span>
            <div>
              <span className="rpn-title">All AC Rooms</span>
              <span className="rpn-desc">Every room is air-conditioned</span>
            </div>
          </div>
        </div>

        {/* Room cards */}
        <div className="rooms-grid">
          {rooms.map((room, i) => (
            <div
              key={tab + room.sharing}
              className={'room-card rv' + (room.featured ? ' featured' : '')}
              style={{ transitionDelay: (i * 0.08) + 's' }}
            >
              {room.featured && <div className="room-badge">Most Popular</div>}

              <div className={'room-visual rv-' + room.sharing}>
                <span className="room-visual-num">{room.sharing}</span>
                <span className="room-visual-label">SHARING</span>
              </div>

              <div className="room-body">
                <div className="room-pricing">
                  <div className="room-price-row">
                    <div className="rpr-left">
                      <span className="rpr-type">Without Food</span>
                      <span className="rpr-rent">
                        ₹{room.noFood.toLocaleString()}
                        <span className="rpr-mo">/mo</span>
                      </span>
                      <span className="rpr-note">room only</span>
                    </div>
                    <div className="rpr-divider" />
                    <div className="rpr-right">
                      <span className="rpr-plus-food">With Food</span>
                      <span className="rpr-total">
                        ₹{room.withFood.toLocaleString()}
                        <span className="rpr-mo">/mo</span>
                      </span>
                      <span className="rpr-note">room + 3 meals</span>
                    </div>
                  </div>
                </div>

                <a href="#contact" className="room-cta">Enquire Now</a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
