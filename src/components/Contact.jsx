import { useEffect, useRef, useState } from 'react'
import '../styles/contact.css'

const WA1 = '919710669944'
const WA2 = '918825733398'

export default function Contact() {
  const ref = useRef(null)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', email: '', hostelType: '', room: '', branch: '', message: ''
  })

  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add('vis')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.rv,.rvl,.rvr').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const set = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Hi KMS PG! I want to enquire about a room.\n\nName: ${form.name}\nPhone: ${form.phone}\nType: ${form.hostelType || 'Not specified'}\nRoom: ${form.room}\nBranch: ${form.branch || 'Any'}\nMessage: ${form.message || '—'}`
    )
    window.open(`https://wa.me/${WA1}?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container">
        <div className="contact-inner">

          {/* Left */}
          <div className="contact-left rvl">
            <div className="eyebrow">Get In Touch</div>
            <h2 className="sec-title">Book a Room <em>Today</em></h2>
            <p className="sec-sub">
              Reach out via WhatsApp or call — our owner personally responds to all enquiries within minutes.
            </p>

            <div className="ci-list">
              <div className="ci-item">
                <div className="ci-icon-wrap">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="var(--blue)" xmlns="http://www.w3.org/2000/svg" style={{flexShrink:0}}>
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.12-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                </div>
                <div>
                  <div className="ci-label">Primary Contact</div>
                  <div className="ci-value">
                    <a href="tel:+919710669944">+91 97106 69944</a>
                  </div>
                </div>
              </div>
              <div className="ci-item">
                <div className="ci-icon-wrap">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="var(--blue)" xmlns="http://www.w3.org/2000/svg" style={{flexShrink:0}}>
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.12-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                </div>
                <div>
                  <div className="ci-label">Alternate Contact</div>
                  <div className="ci-value">
                    <a href="tel:+918825733398">+91 88257 33398</a>
                  </div>
                </div>
              </div>
              <div className="ci-item">
                <div className="ci-icon-wrap">✉️</div>
                <div>
                  <div className="ci-label">Email</div>
                  <div className="ci-value">
                    <a href="mailto:kmuruganandam1975@gmail.com">kmuruganandam1975@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="ci-item">
                <div className="ci-icon-wrap">📍</div>
                <div>
                  <div className="ci-label">Branch 1 — Main (Men)</div>
                  <div className="ci-value">39C, 1st Main Rd, Venkateshwara Nagar, Ramapuram 600116</div>
                </div>
              </div>
              <div className="ci-item">
                <div className="ci-icon-wrap">📍</div>
                <div>
                  <div className="ci-label">Ladies Hostel — Main</div>
                  <div className="ci-value">No:3, Kalyani Ponnappan Ave, Kothari Nagar, Ramapuram 600089</div>
                </div>
              </div>
              <div className="ci-item">
                <div className="ci-icon-wrap">🕐</div>
                <div>
                  <div className="ci-label">Visit Timings</div>
                  <div className="ci-value">Mon – Sun: 9:00 AM – 8:00 PM</div>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <a
                href={`https://wa.me/${WA1}?text=${encodeURIComponent("Hi KMS PG! I'm interested in a room.")}`}
                target="_blank" rel="noopener noreferrer"
                className="csb csb-wa"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <a href="tel:+919710669944" className="csb csb-phone" aria-label="Call">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.12-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
              </a>
              <a href="mailto:kmuruganandam1975@gmail.com" className="csb csb-mail" aria-label="Email">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="rvr" style={{ transitionDelay: '0.15s' }}>
            <div className="contact-form-box">
              {submitted ? (
                <div className="f-success show">
                  <div className="f-success-icon">✅</div>
                  <h4>Enquiry Sent!</h4>
                  <p>Your message was sent via WhatsApp. We'll respond within minutes!</p>
                </div>
              ) : (
                <>
                  <div className="cfb-head">
                    <h3>Send an Enquiry</h3>
                    <p>Fill below — we'll respond on WhatsApp within minutes.</p>
                  </div>
                  <form onSubmit={submit}>
                    <div className="f2">
                      <div className="fg">
                        <label>Your Name *</label>
                        <input type="text" name="name" placeholder="e.g. Rahul Kumar" value={form.name} onChange={set} required />
                      </div>
                      <div className="fg">
                        <label>Phone Number *</label>
                        <input type="tel" name="phone" placeholder="+91 97106 69944" value={form.phone} onChange={set} required />
                      </div>
                    </div>

                    <div className="fg">
                      <label>Email (Optional)</label>
                      <input type="email" name="email" placeholder="your@email.com" value={form.email} onChange={set} />
                    </div>

                    <div className="f2">
                      <div className="fg">
                        <label>Hostel Type *</label>
                        <select name="hostelType" value={form.hostelType} onChange={set} required>
                          <option value="">Select type</option>
                          <option value="Men's PG">Men&apos;s PG</option>
                          <option value="Ladies Hostel">Ladies Hostel</option>
                        </select>
                      </div>
                      <div className="fg">
                        <label>Room Type *</label>
                        <select name="room" value={form.room} onChange={set} required>
                          <option value="">Select room</option>
                          <option value="1 Sharing">1 Sharing (Private)</option>
                          <option value="2 Sharing">2 Sharing</option>
                          <option value="3 Sharing">3 Sharing</option>
                          <option value="4 Sharing">4 Sharing</option>
                          <option value="6 Sharing">6 Sharing</option>
                        </select>
                      </div>
                    </div>

                    <div className="fg">
                      <label>Preferred Branch</label>
                      <select name="branch" value={form.branch} onChange={set}>
                        <option value="">Any branch</option>
                        <option value="Branch 1 — Men's PG, Venkateshwara Nagar">Branch 1 — Men's PG (Main)</option>
                        <option value="Branch 2 — Men's PG, 8th Cross St">Branch 2 — Men's PG</option>
                        <option value="Branch 3 — Men's Hostel, Naidu St">Branch 3 — Men's Hostel</option>
                        <option value="Branch 4 — Men's PG, 2nd Cross St">Branch 4 — Men's PG</option>
                        <option value="Ladies Hostel — Kothari Nagar">Ladies Hostel — Kothari Nagar</option>
                      </select>
                    </div>

                    <div className="fg">
                      <label>Message (Optional)</label>
                      <textarea name="message" placeholder="Joining date, any questions..." value={form.message} onChange={set} />
                    </div>

                    <button type="submit" className="f-submit">
                      Send via WhatsApp →
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
