import '../styles/footer.css'

const WA1 = '919710669944'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-topline" />

      <div className="container">
        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo-row">
              <div className="footer-logo-badge">
                <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                  <path d="M16 4L3 14v14h8V20h10v8h8V14L16 4z" fill="white" fillOpacity="0.95"/>
                  <rect x="13" y="20" width="6" height="8" rx="1" fill="#3b6cf4"/>
                  <circle cx="22" cy="11" r="4" fill="#e8b84b" fillOpacity="0.9"/>
                  <path d="M20.5 11h3M22 9.5v3" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div className="footer-logo-name">KMS PG</div>
                <div className="footer-logo-sub">Ramapuram, Chennai</div>
              </div>
            </div>
            <p className="footer-brand-desc">
              Chennai&apos;s most trusted paying guest accommodation — clean rooms,
              home-cooked food and a safe environment for both men and women.
              4 Men&apos;s branches + Ladies Hostel in Ramapuram, near DLF IT Park &amp; SRM College.
            </p>
            <div className="footer-rating-pill">
              <div className="frp-stars">
                {[1,2,3,4,5].map(s => <span key={s}>★</span>)}
              </div>
              <span className="frp-text">4.8 / 5 · 354+ Google Reviews</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <div className="footer-col-head">Quick Links</div>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#rooms">Rooms &amp; Pricing</a></li>
              <li><a href="#facilities">Facilities</a></li>
              <li><a href="#menu">Food Menu</a></li>
              <li><a href="#branches">Our Branches</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <div className="footer-col-head">Contact</div>
            <div className="footer-contacts">

              <div className="fci">
                <svg className="fci-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 010 2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                </svg>
                <div>
                  <a href="tel:+919710669944">+91 97106 69944</a>
                  <a href="tel:+918825733398">+91 88257 33398</a>
                </div>
              </div>

              <div className="fci">
                <svg className="fci-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:kmuruganandam1975@gmail.com">kmuruganandam1975@gmail.com</a>
              </div>

              <div className="fci">
                <svg className="fci-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>39C, 1st Main Rd, Venkateshwara Nagar, Ramapuram 600116</span>
              </div>

              <div className="fci">
                <svg className="fci-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>Open 9 AM – 8 PM · All Days</span>
              </div>

            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} KMS PG, Ramapuram, Chennai. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#home">Privacy Policy</a>
            <a href="#home">Terms</a>
            <a href="https://www.google.com/maps/place/KMS+Mens+PG/@13.0292459,80.1727729,17z" target="_blank" rel="noopener noreferrer">Google Maps</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
