import { useEffect, useRef } from 'react'
import '../styles/rooms.css'

const rooms = [
  {
    type: '2 Sharing', num: '2', bg: 'rip-bg-2', emoji: '🛏', featured: false,
    desc: 'Spacious double-occupancy room with individual wardrobes, study table & comfortable beds. Ideal for working professionals.',
    tags: ['AC / Non-AC', 'Free WiFi', 'Wardrobe', 'Study Table', 'Attached Bath'],
    priceNonAC: '₹6,500', priceAC: '₹8,500',
  },
  {
    type: '3 Sharing', num: '3', bg: 'rip-bg-3', emoji: '🛌', featured: true,
    desc: 'Most popular! Comfortable triple-sharing with AC/Non-AC options, ample storage and easy access to shared bathrooms.',
    tags: ['AC / Non-AC', 'Free WiFi', 'Wardrobe', 'Fan', 'Common Bath'],
    priceNonAC: '₹5,500', priceAC: '₹7,000',
  },
  {
    type: '4 Sharing', num: '4', bg: 'rip-bg-4', emoji: '🏠', featured: false,
    desc: 'Affordable four-sharing fully furnished with beds, wardrobes & shared bathrooms. Great value with all amenities.',
    tags: ['Non-AC', 'Free WiFi', 'Wardrobe', 'Fan', 'Common Bath'],
    priceNonAC: '₹5,000', priceAC: null,
  },
  {
    type: '5 Sharing', num: '5', bg: 'rip-bg-5', emoji: '🏡', featured: false,
    desc: 'Most budget-friendly option — clean, WiFi-equipped rooms with daily meals and full amenities included.',
    tags: ['Non-AC', 'Free WiFi', 'Wardrobe', 'Fan', 'Common Bath'],
    priceNonAC: '₹4,500', priceAC: null,
  },
]

export default function Rooms() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add('vis')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.rv,.rvl,.rvr').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="rooms" id="rooms" ref={ref}>
      <div className="container">
        <div className="rooms-hdr rv">
          <div className="eyebrow">Accommodation</div>
          <h2 className="sec-title">Choose Your <em>Perfect Room</em></h2>
          <p className="sec-sub">
            All rooms are fully furnished, cleaned daily. AC & Non-AC options available.
            2, 3, 4 &amp; 5 sharing rooms — 3 meals included every day.
          </p>
        </div>

        <div className="rooms-grid">
          {rooms.map((r, i) => (
            <div
              key={r.type}
              className={`room-card rv ${r.featured ? 'featured' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {r.featured && <div className="room-badge">Most Popular</div>}

              {/* Image / Placeholder */}
              <div className="room-img">
                <div className={`room-img-placeholder ${r.bg}`}>
                  <div className="rip-num">{r.num}</div>
                  <div className="rip-icon">{r.emoji}</div>
                  <div className="rip-label">{r.type}</div>
                </div>
                <div className="room-img-add">+ Add Photo</div>
              </div>

              <div className="room-body">
                <div className="room-type">{r.type}</div>
                <p className="room-desc">{r.desc}</p>
                <div className="room-tags">
                  {r.tags.map(t => <span key={t} className="room-tag">{t}</span>)}
                </div>
                <div className="room-footer">
                  <div className="room-price">
                    <div className="room-price-num">
                      {r.priceNonAC}<span className="room-price-mo"> /mo</span>
                    </div>
                    {r.priceAC && <div className="room-price-ac">AC: {r.priceAC}/mo</div>}
                  </div>
                  <a href="#contact" className="room-enq">Enquire →</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rooms-food-banner rv">
          <div className="rfb-icon">🍛</div>
          <div>
            <div className="rfb-title">3 Home-Cooked Meals Included Every Day</div>
            <div className="rfb-desc">
              Breakfast, Lunch &amp; Dinner — authentic South Indian home-style food. Hygienic kitchen,
              quality ingredients. Veg options available. All included in monthly rent, no hidden charges.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}