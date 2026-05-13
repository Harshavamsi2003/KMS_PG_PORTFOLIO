import { useEffect, useRef } from 'react'
import '../styles/branches.css'

const WA = '919710669944'
const WA_MSG = encodeURIComponent(
  "Hi KMS PG! I'm interested in a room."
)

const branches = [
  {
    name: "KMS Men's Paying Guest",
    tag: 'Branch 1',
    address:
      'Plot No.1/39C, 1st Main Road, Venkateshwara Nagar, Ramapuram, Chennai — 600089',
    chips: ['Main Branch', 'Near DLF IT Park', 'Near SRM College'],
    mapLink:
      'https://maps.google.com/?q=Plot+1+39C+1st+Main+Road+Venkateshwara+Nagar+Ramapuram+Chennai',
    bg: 'brm-1',
    main: true,
  },
  {
    name: "KMS Men's Paying Guest",
    tag: 'Branch 2',
    address:
      'Plot No.1/8B, 8th Cross Street, Venkateshwara Nagar, Ramapuram, Chennai — 600089',
    chips: ['Venkateshwara Nagar', 'Near DLF', 'Easy Transport'],
    mapLink:
      'https://maps.google.com/?q=Plot+1+8B+8th+Cross+Street+Venkateshwara+Nagar+Ramapuram+Chennai',
    bg: 'brm-2',
    main: false,
  },
  {
    name: "KMS Men's Hostel",
    tag: 'Branch 3',
    address:
      'Plot No.1/42, Naidu Street, Ramapuram, Chennai — 600089',
    chips: ['Ramapuram Junction', 'Near Porur', 'Bus Route Access'],
    mapLink:
      'https://maps.google.com/?q=Plot+1+42+Naidu+Street+Ramapuram+Chennai',
    bg: 'brm-3',
    main: false,
  },
]

const areas = [
  'Ramapuram',
  'Porur',
  'Manapakkam',
  'Mugalivakkam',
  'Valasaravakkam',
  'Saligramam',
  'Virugambakkam',
  'Ekkatuthangal',
  'Vadapalani',
  'Ashok Nagar',
]

export default function Branches() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('vis')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements =
      ref.current?.querySelectorAll('.rv, .rvl, .rvr') || []

    elements.forEach((el) => obs.observe(el))

    return () => obs.disconnect()
  }, [])

  return (
    <section className="branches" id="branches" ref={ref}>
      <div className="container">

        <div className="branches-hdr rv">
          <div className="eyebrow">Our Locations</div>

          <h2 className="sec-title">
            3 Branches in <em>Ramapuram</em>
          </h2>

          <p className="sec-sub">
            All three branches are in prime areas of Ramapuram,
            Chennai — close to IT parks, engineering colleges
            and major bus routes.
          </p>
        </div>

        <div className="br-grid">
          {branches.map((b, i) => (
            <div
              key={b.tag}
              className={`br-card rv ${b.main ? 'main' : ''}`}
              style={{
                transitionDelay: `${i * 0.13}s`,
              }}
            >
              <div className="br-map">

                <div
                  className={b.bg}
                  style={{
                    position: 'absolute',
                    inset: 0,
                  }}
                />

                <div className="br-map-grid" />

                <div className="br-pin-wrap">
                  <div className="br-pin-circle" />
                  <div className="br-pin-shadow" />
                </div>

                <div className="br-tag-badge">
                  {b.tag}
                </div>
              </div>

              <div className="br-body">

                <div className="br-name">
                  {b.name}
                </div>

                <div className="br-addr">
                  <span className="br-addr-pin">📍</span>
                  {b.address}
                </div>

                <div className="br-chips">
                  {b.chips.map((c) => (
                    <span
                      key={c}
                      className="br-chip"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <div className="br-btns">

                  <a
                    href={b.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="br-btn outline"
                  >
                    View Map
                  </a>

                  <a
                    href={`https://wa.me/${WA}?text=${WA_MSG}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="br-btn primary"
                  >
                    WhatsApp
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="br-areas rv">

          <div className="br-areas-label">
            Serving Residents From
          </div>

          <div className="br-areas-tags">
            {areas.map((a) => (
              <span
                key={a}
                className="br-area"
              >
                {a}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}