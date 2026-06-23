import { useState, useEffect, useRef } from 'react'
import '../styles/branches.css'

const WA = '919710669944'
const WA_MSG = encodeURIComponent("Hi KMS PG! I'm interested in a room.")

const branches = [
  {
    id: 'B1', tag: 'Branch 01', type: 'men', typeLabel: "Men's PG · Main Branch",
    name: "KMS Men's Paying Guest",
    address: 'No1, 39C, 1st Main Rd, Venkateshwara Nagar, Ramapuram, Chennai — 600116',
    mapLink: 'https://maps.app.goo.gl/kz4hoFfm9RVYNUGc9',
    photos: Array.from({ length: 10 }, (_, i) => `/KMS/MEN/B1/${i + 1}.jpg`),
    main: true,
  },
  {
    id: 'B2', tag: 'Branch 02', type: 'men', typeLabel: "Men's PG",
    name: "KMS Men's Paying Guest",
    address: 'Plot No:1, 8B, 8th Cross St, Shanthi Nagar, Venkateswara Nagar, Ramapuram — 600089',
    mapLink: 'https://maps.app.goo.gl/9u5xCaVQczhW287GA',
    photos: Array.from({ length: 10 }, (_, i) => `/KMS/MEN/B2/${i + 1}.jpg`),
    main: false,
  },
  {
    id: 'B3', tag: 'Branch 03', type: 'men', typeLabel: "Men's Hostel",
    name: "KMS Men's Hostel",
    address: 'No:1/42, Naidu St, Suresh Nagar, Ramapuram, Chennai — 600089',
    mapLink: 'https://share.google/z6S58UlX7k3406YTJ',
    photos: Array.from({ length: 11 }, (_, i) => `/KMS/MEN/B3/${i + 1}.jpg`),
    main: false,
  },
  {
    id: 'B4', tag: 'Branch 04', type: 'men', typeLabel: "Men's PG",
    name: "KMS Men's Paying Guest",
    address: 'Plot No:1/5, 2nd Cross St, Venkateshwara Nagar, Ramapuram, Chennai — 600089',
    mapLink: 'https://maps.app.goo.gl/izXP8RziZR414ekz5',
    photos: Array.from({ length: 12 }, (_, i) => `/KMS/MEN/B4/${i + 1}.jpg`),
    main: false,
  },
  {
    id: 'WB1', tag: 'Ladies Branch', type: 'ladies', typeLabel: "Ladies Hostel · Main",
    name: "KMS Ladies Hostel",
    address: 'No:3, Kalyani Ponnappan Ave, Kothari Nagar, Ramapuram, Chennai — 600089',
    mapLink: 'https://maps.app.goo.gl/2DXYAuydgQvdyoxj8',
    photos: Array.from({ length: 15 }, (_, i) => `/KMS/WOMEN/B1/${i + 1}.jpg`),
    main: false,
    extraNote: '2 additional ladies branches within walking distance.',
  },
]

const areas = [
  'Ramapuram', 'Porur', 'Manapakkam', 'Mugalivakkam',
  'Valasaravakkam', 'Saligramam', 'Virugambakkam',
  'Ekkatuthangal', 'Vadapalani', 'Ashok Nagar',
]

/* ── SVG Icons ── */
const IconPin = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)
const IconPhoto = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
  </svg>
)
const IconWA = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)
const IconClose = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)
const IconChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
)
const IconChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
)

/* ── Gallery Modal — untouched display logic ── */
function Gallery({ branch, onClose }) {
  const [idx, setIdx] = useState(0)
  const photos = branch.photos
  const touchX = useRef(null)

  useEffect(() => {
    const handler = e => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setIdx(i => (i + 1) % photos.length)
      if (e.key === 'ArrowLeft') setIdx(i => (i - 1 + photos.length) % photos.length)
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', handler); document.body.style.overflow = '' }
  }, [photos.length, onClose])

  const prev = () => setIdx(i => (i - 1 + photos.length) % photos.length)
  const next = () => setIdx(i => (i + 1) % photos.length)

  return (
    <div className="gal-overlay" onClick={onClose}>
      <div className="gal-modal" onClick={e => e.stopPropagation()}
        onTouchStart={e => { touchX.current = e.touches[0].clientX }}
        onTouchEnd={e => {
          if (touchX.current === null) return
          const diff = touchX.current - e.changedTouches[0].clientX
          if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
          touchX.current = null
        }}>

        <div className="gal-topbar">
          <div className="gal-topbar-left">
            <span className="gal-tag">{branch.tag}</span>
            <span className="gal-name">{branch.name}</span>
          </div>
          <div className="gal-topbar-right">
            <span className="gal-count">{idx + 1} <em>/</em> {photos.length}</span>
            <button className="gal-close" onClick={onClose} aria-label="Close"><IconClose /></button>
          </div>
        </div>

        <div className="gal-stage">
          <img
            key={idx}
            src={photos[idx]}
            alt={`${branch.name} photo ${idx + 1}`}
            className="gal-img"
            onError={e => { e.target.src = `https://picsum.photos/seed/${branch.id}${idx}/900/600` }}
          />
          <button className="gal-nav gal-prev" onClick={prev} aria-label="Previous"><IconChevronLeft /></button>
          <button className="gal-nav gal-next" onClick={next} aria-label="Next"><IconChevronRight /></button>
        </div>

        <div className="gal-footer">
          <div className="gal-dots">
            {photos.map((_, i) => (
              <button key={i} className={`gal-dot${i === idx ? ' active' : ''}`} onClick={() => setIdx(i)} aria-label={`Photo ${i + 1}`} />
            ))}
          </div>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="gal-wa">
            <IconWA /> Enquire Now
          </a>
        </div>
      </div>
    </div>
  )
}

/* ── Main Component ── */
export default function Branches() {
  const sectionRef = useRef(null)
  const [gallery, setGallery] = useState(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('vis')
          obs.unobserve(e.target)
        }
      }),
      { threshold: 0.03, rootMargin: '0px 0px -30px 0px' }
    )
    const els = sectionRef.current?.querySelectorAll('.rv, .rvl, .rvr, .br-card')
    els?.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="branches" id="branches" ref={sectionRef}>
      {/* Ambient orbs */}
      <div className="br-orb br-orb-1" aria-hidden="true" />
      <div className="br-orb br-orb-2" aria-hidden="true" />
      <div className="br-orb br-orb-3" aria-hidden="true" />

      {gallery && <Gallery branch={gallery} onClose={() => setGallery(null)} />}

      <div className="container">

        {/* ── Section header ── */}
        <div className="br-hdr rv">
          <div className="eyebrow">Our Locations</div>
          <h2 className="sec-title">5 Branches in <em>Ramapuram</em></h2>
          <p className="sec-sub">All branches are in prime areas of Ramapuram — close to DLF IT Park, SRM College and major transport routes.</p>
        </div>

        {/* ── Cards ── */}
        <div className="br-grid">
          {branches.map((b, i) => (
            <article
              key={b.id}
              className={`br-card rv${b.main ? ' is-main' : ''}${b.type === 'ladies' ? ' is-ladies' : ''}`}
              style={{ transitionDelay: `${i * 0.11}s` }}
            >
              {/* Top accent stripe */}
              <div className="br-stripe" />

              {/* Header */}
              <div className="br-card-head">
                <div className="br-tag-row">
                  <span className="br-tag">{b.tag}</span>
                  {b.main && <span className="br-badge-main foil-sheen">Main Branch</span>}
                  {b.type === 'ladies' && <span className="br-badge-ladies">Ladies Only</span>}
                </div>
                <div className="br-type-label">{b.typeLabel}</div>
                <div className="br-name">{b.name}</div>
              </div>

              {/* Ticket-stub divider */}
              <div className="br-rule" />

              {/* Address */}
              <div className="br-addr">
                <span className="br-addr-icon"><IconPin /></span>
                <span>{b.address}</span>
              </div>

              {b.extraNote && <div className="br-note">{b.extraNote}</div>}

              {/* Actions — NO WhatsApp button per card */}
              <div className="br-actions">
                <a href={b.mapLink} target="_blank" rel="noopener noreferrer" className="br-btn br-btn-map">
                  <IconPin /> Directions
                </a>
                <button className="br-btn br-btn-gallery" onClick={() => setGallery(b)}>
                  <IconPhoto /> Photos
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* ── Contact strip ── */}
        <div className="br-contact-strip rv">
          <div className="br-contact-item">
            <span className="br-contact-label">Primary</span>
            <a href="tel:+919710669944" className="br-contact-val">+91 97106 69944</a>
          </div>
          <div className="br-contact-sep" />
          <div className="br-contact-item">
            <span className="br-contact-label">Alternate</span>
            <a href="tel:+918825733398" className="br-contact-val">+91 88257 33398</a>
          </div>
          <div className="br-contact-sep" />
          <div className="br-contact-item">
            <span className="br-contact-label">Email</span>
            <a href="mailto:kmuruganandam1975@gmail.com" className="br-contact-val br-contact-val--email">kmuruganandam1975@gmail.com</a>
          </div>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="br-contact-wa">
            WhatsApp Us
          </a>
        </div>

        {/* ── Areas served ── */}
        <div className="br-areas rv">
          <p className="br-areas-label">Serving Residents From</p>
          <div className="br-areas-list">
            {areas.map(a => <span key={a} className="br-area">{a}</span>)}
          </div>
        </div>

      </div>
    </section>
  )
}
