import { useState, useEffect, useRef } from 'react'
import '../styles/branches.css'

const WA = '919710669944'
const WA_MSG = encodeURIComponent("Hi KMS PG! I'm interested in a room.")

const branches = [
  {
    id: 'B1',
    name: "KMS Men's Paying Guest",
    tag: 'Branch 1', type: 'men',
    typeLabel: "Men's PG · Main Branch",
    address: 'No1, 39C, 1st Main Rd, Venkateshwara Nagar, Ramapuram, Chennai — 600116',
    chips: ['Near DLF IT Park', 'Near SRM College', '5-Min Walk to DLF'],
    mapLink: 'https://maps.app.goo.gl/kz4hoFfm9RVYNUGc9',
    photos: Array.from({length:10}, (_,i) => `/src/assets/KMS/MEN/B1/${i+1}.jpg`),
    icon: '🏢', main: true,
  },
  {
    id: 'B2',
    name: "KMS Men's Paying Guest",
    tag: 'Branch 2', type: 'men',
    typeLabel: "Men's PG",
    address: 'Plot No:1, 8B, 8th Cross St, Shanthi Nagar, Venkateswara Nagar, Ramapuram — 600089',
    chips: ['Venkateswara Nagar', 'Near DLF IT Park', 'Easy Transport'],
    mapLink: 'https://maps.app.goo.gl/9u5xCaVQczhW287GA',
    photos: Array.from({length:10}, (_,i) => `/src/assets/KMS/MEN/B2/${i+1}.jpg`),
    icon: '🏠', main: false,
  },
  {
    id: 'B3',
    name: "KMS Men's Hostel",
    tag: 'Branch 3', type: 'men',
    typeLabel: "Men's Hostel",
    address: 'No:1/42, Naidu St, Suresh Nagar, Ramapuram, Chennai — 600089',
    chips: ['Ramapuram Junction', 'Near Porur', 'Bus Route Access'],
    mapLink: 'https://share.google/z6S58UlX7k3406YTJ',
    photos: Array.from({length:11}, (_,i) => `/src/assets/KMS/MEN/B3/${i+1}.jpg`),
    icon: '🏘️', main: false,
  },
  {
    id: 'B4',
    name: "KMS Men's Paying Guest",
    tag: 'Branch 4', type: 'men',
    typeLabel: "Men's PG",
    address: 'Plot No:1/5, 2nd Cross St, Venkateshwara Nagar, Ramapuram, Chennai — 600089',
    chips: ['Venkateshwara Nagar', 'Near IT Hub', 'Gated Community'],
    mapLink: 'https://maps.app.goo.gl/izXP8RziZR414ekz5',
    photos: Array.from({length:12}, (_,i) => `/src/assets/KMS/MEN/B4/${i+1}.jpg`),
    icon: '🏗️', main: false,
  },
  {
    id: 'WB1',
    name: "KMS Ladies Hostel",
    tag: 'Ladies Branch', type: 'ladies',
    typeLabel: "Ladies Hostel · Main",
    address: 'No:3, Kalyani Ponnappan Ave, Kothari Nagar, Ramapuram, Chennai — 600089',
    chips: ['Ladies Only', 'Kothari Nagar', 'Fully Secured', '2 More Branches Nearby'],
    mapLink: 'https://maps.app.goo.gl/2DXYAuydgQvdyoxj8',
    photos: Array.from({length:15}, (_,i) => `/src/assets/KMS/WOMEN/B1/${i+1}.jpg`),
    icon: '🏛️', main: false,
    extraNote: '2 additional ladies branches within walking distance of this location.',
  },
]

const nearby = [
  { icon: '🏢', name: 'DLF IT Park',        dist: '5 min walk' },
  { icon: '🎓', name: 'SRM College',         dist: '10 min drive' },
  { icon: '🚌', name: 'Porur Bus Terminus',  dist: '8 min walk' },
  { icon: '📍', name: 'Ramapuram Junction',  dist: '5 min auto' },
]

const areas = ['Ramapuram','Porur','Manapakkam','Mugalivakkam','Valasaravakkam','Saligramam','Virugambakkam','Ekkatuthangal','Vadapalani','Ashok Nagar']

/* ── Photo Gallery Modal ── */
function Gallery({ branch, onClose }) {
  const [idx, setIdx] = useState(0)
  const photos = branch.photos

  useEffect(() => {
    const handler = e => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setIdx(i => (i+1) % photos.length)
      if (e.key === 'ArrowLeft')  setIdx(i => (i-1+photos.length) % photos.length)
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', handler); document.body.style.overflow = '' }
  }, [photos.length, onClose])

  const prev = () => setIdx(i => (i-1+photos.length) % photos.length)
  const next = () => setIdx(i => (i+1) % photos.length)

  /* Touch swipe */
  const touchX = useRef(null)
  const onTouchStart = e => { touchX.current = e.touches[0].clientX }
  const onTouchEnd   = e => {
    if (touchX.current === null) return
    const diff = touchX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
    touchX.current = null
  }

  return (
    <div className="gal-overlay" onClick={onClose}>
      <div className="gal-modal" onClick={e => e.stopPropagation()} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>

        <button className="gal-close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        <div className="gal-header">
          <span className="gal-branch-tag">{branch.tag}</span>
          <span className="gal-count">{idx+1} / {photos.length}</span>
        </div>

        <div className="gal-img-wrap">
          <img
            key={idx}
            src={photos[idx]}
            alt={`${branch.name} - Photo ${idx+1}`}
            className="gal-img"
            onError={e => { e.target.src = `https://picsum.photos/seed/${branch.id}${idx}/900/600` }}
          />

          <button className="gal-nav gal-prev" onClick={prev} aria-label="Previous">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button className="gal-nav gal-next" onClick={next} aria-label="Next">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>

        <div className="gal-dots">
          {photos.map((_, i) => (
            <button key={i} className={`gal-dot ${i === idx ? 'active' : ''}`} onClick={() => setIdx(i)} aria-label={`Photo ${i+1}`} />
          ))}
        </div>

        <div className="gal-footer">
          <span>{branch.name}</span>
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="gal-wa-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Enquire Now
          </a>
        </div>

      </div>
    </div>
  )
}

export default function Branches() {
  const ref = useRef(null)
  const [gallery, setGallery] = useState(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('vis')),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.rv,.rvl,.rvr').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="branches" id="branches" ref={ref}>
      {gallery && <Gallery branch={gallery} onClose={() => setGallery(null)} />}

      <div className="container">

        <div className="branches-hdr rv">
          <div className="eyebrow">Our Locations</div>
          <h2 className="sec-title">5 Branches in <em>Ramapuram</em></h2>
          <p className="sec-sub">All branches are in prime areas of Ramapuram, Chennai — close to DLF IT Park, SRM College and major bus routes.</p>
        </div>

        {/* Nearby landmarks */}
        <div className="br-nearby rv">
          {nearby.map(n => (
            <div key={n.name} className="br-nearby-item">
              <span className="bni-icon">{n.icon}</span>
              <div>
                <div className="bni-name">{n.name}</div>
                <div className="bni-dist">{n.dist}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="br-grid">
          {branches.map((b, i) => (
            <div
              key={b.id}
              className={`br-card rv ${b.main ? 'main' : ''} ${b.type === 'ladies' ? 'ladies' : ''}`}
              style={{ transitionDelay: `${i * 0.09}s` }}
            >
              {b.main && <div className="br-main-badge">Main Branch</div>}
              {b.type === 'ladies' && <div className="br-ladies-badge">Ladies Only</div>}

              <div className={`br-header br-header-${b.type}`}>
                <div className="br-header-bg" />
                <div className="br-header-grid" />
                <div className="br-header-content">
                  <div className="br-icon-wrap">{b.icon}</div>
                  <div className="br-tag-pill">{b.tag}</div>
                </div>
                <div className="br-header-dots"><span /><span /><span /></div>
              </div>

              <div className="br-body">
                <div className="br-type-label">{b.typeLabel}</div>
                <div className="br-name">{b.name}</div>

                <div className="br-addr">
                  <span className="br-addr-pin">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </span>
                  {b.address}
                </div>

                {b.extraNote && (
                  <div className="br-extra-note">ℹ️ {b.extraNote}</div>
                )}

                <div className="br-chips">
                  {b.chips.map(c => <span key={c} className="br-chip">{c}</span>)}
                </div>

                <div className="br-btns">
                  <a href={b.mapLink} target="_blank" rel="noopener noreferrer" className="br-btn outline">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    Map
                  </a>

                  <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="br-btn wa">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>

                  <button className="br-btn gallery" onClick={() => setGallery(b)} aria-label="View photos">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
                      <polyline points="21 15 16 10 5 21"/>
                    </svg>
                    Photos
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="br-contacts rv">
          <div className="br-contact-item">
            <span className="bci-icon">📞</span>
            <div>
              <div className="bci-label">Primary</div>
              <a href="tel:+919710669944" className="bci-num">+91 97106 69944</a>
            </div>
          </div>
          <div className="br-contact-divider" />
          <div className="br-contact-item">
            <span className="bci-icon">📞</span>
            <div>
              <div className="bci-label">Alternate</div>
              <a href="tel:+918825733398" className="bci-num">+91 88257 33398</a>
            </div>
          </div>
          <div className="br-contact-divider" />
          <div className="br-contact-item">
            <span className="bci-icon">✉️</span>
            <div>
              <div className="bci-label">Email</div>
              <a href="mailto:kmuruganandam1975@gmail.com" className="bci-num">kmuruganandam1975@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="br-areas rv">
          <div className="br-areas-label">Serving Residents From</div>
          <div className="br-areas-tags">
            {areas.map(a => <span key={a} className="br-area">{a}</span>)}
          </div>
        </div>

      </div>
    </section>
  )
}
