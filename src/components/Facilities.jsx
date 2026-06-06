import { useEffect, useRef } from 'react'
import '../styles/facilities.css'

const facs = [
  { icon: '📶', name: 'Free High-Speed WiFi',  detail: 'Separate router per floor, 24/7' },
  { icon: '❄️', name: 'Air Conditioning',       detail: 'AC in every room, all types' },
  { icon: '🔒', name: '24/7 CCTV',              detail: 'Full building surveillance' },
  { icon: '👆', name: 'Biometric Entry',         detail: 'Secure fingerprint access only' },
  { icon: '🏋️', name: 'In-House Gym',           detail: 'Fitness equipment on-site' },
  { icon: '🫧', name: 'Washing Machines',        detail: 'Laundry for all residents' },
  { icon: '🌡️', name: 'Hot Water 24/7',         detail: 'Geyser in all bathrooms' },
  { icon: '🧊', name: 'Refrigerator',            detail: 'Common fridge every floor' },
  { icon: '💧', name: 'RO Drinking Water',       detail: 'Pure water always available' },
  { icon: '🧹', name: 'Daily Housekeeping',      detail: 'Rooms cleaned every day' },
  { icon: '🅿️', name: '2-Wheeler Parking',      detail: 'Secure closed parking' },
  { icon: '🔧', name: 'Monthly Maintenance',     detail: 'AC & room upkeep included' },
]

const highlights = [
  {
    icon: '🏡',
    title: 'Feels Like Home',
    text: 'Owner personally ensures every resident\'s comfort — a welcoming, caring community that truly feels like home.',
    dark: false,
  },
  {
    icon: '📍',
    title: '5-Min Walk to DLF IT Park',
    text: 'Perfectly located at Venkateshwara Nagar, Ramapuram — walking distance to DLF IT Park, SRM College &amp; Porur bus terminus.',
    dark: false,
  },
  {
    icon: '🔒',
    title: 'Safe &amp; Secure 24/7',
    text: 'Biometric entry, full CCTV coverage and gated compound — your safety is our top priority at all times.',
    dark: false,
  },
  {
    icon: '🔧',
    title: 'Instant Maintenance',
    text: 'Owner responds immediately to any issue. Monthly AC servicing, window cleaning and full room maintenance included.',
    dark: true,
  },
]

export default function Facilities() {
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
    <section className="facilities" id="facilities" ref={ref}>
      <div className="container">
        <div className="fac-inner">
          <div>
            <div className="rvl">
              <div className="eyebrow">Amenities</div>
              <h2 className="sec-title">Everything <em>You Need</em></h2>
              <p className="sec-sub">
                We've thought of everything so you can focus on work, studies or rest.
                All amenities maintained monthly for a premium living experience.
              </p>
            </div>
            <div className="fac-grid">
              {facs.map((f, i) => (
                <div key={f.name} className="fac-item rv" style={{ transitionDelay: `${i * 0.05}s` }}>
                  <div className="fi-icon">{f.icon}</div>
                  <div className="fi-name">{f.name}</div>
                  <div className="fi-detail">{f.detail}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="fac-right">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className={`fac-hl rvr ${h.dark ? 'dark' : ''}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="fh-ico">{h.icon}</div>
                <div>
                  <div className="fh-title" dangerouslySetInnerHTML={{ __html: h.title }} />
                  <div className="fh-text" dangerouslySetInnerHTML={{ __html: h.text }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
