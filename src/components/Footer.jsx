import '../styles/footer.css'

const WA = '919710669944'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-topline" />
      <div className="footer-glow" />

      <div className="container">
        <div className="footer-main">

          <div className="footer-brand">
            <div className="footer-logo-row">
              <div className="footer-logo-badge">
                <span>KMS</span>
              </div>
              <div>
                <div className="footer-logo-name">KMS Men's PG</div>
                <div className="footer-logo-sub">Ramapuram, Chennai</div>
              </div>
            </div>
            <p className="footer-brand-desc">
              Chennai's most trusted men's paying guest — clean rooms,
              home-cooked food and a safe environment. 3 branches in
              Ramapuram, near DLF IT Park.
            </p>
            <div className="footer-rating-pill">
              <div className="frp-stars">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <span className="frp-text">Rated 4.8 / 5 · 354+ Google Reviews</span>
            </div>
          </div>

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

          <div className="footer-col">
            <div className="footer-col-head">Room Types</div>
            <ul className="footer-links">
              <li><a href="#rooms">2 Sharing — from ₹6,500</a></li>
              <li><a href="#rooms">3 Sharing — from ₹5,500</a></li>
              <li><a href="#rooms">4 Sharing — from ₹5,000</a></li>
              <li><a href="#rooms">5 Sharing — from ₹4,500</a></li>
              <li><a href="#rooms">AC Rooms Available</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-col-head">Contact</div>
            <div className="footer-contacts">

              <div className="fci">
                <svg className="fci-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 010 2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                </svg>
                <a href="tel:+919710669944">+91 97106 69944</a>
              </div>

              <div className="fci">
                <svg className="fci-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </div>

              <div className="fci">
                <svg className="fci-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Plot 1/39C, 1st Main Rd, Venkateshwara Nagar, Ramapuram 600089</span>
              </div>

              <div className="fci">
                <svg className="fci-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Plot 1/8B, 8th Cross St, Venkateshwara Nagar, Ramapuram 600089</span>
              </div>

              <div className="fci">
                <svg className="fci-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Plot 1/42, Naidu Street, Ramapuram 600089</span>
              </div>

              <div className="fci">
                <svg className="fci-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Open 9 AM – 8 PM, All Days</span>
              </div>

            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} KMS Men's PG, Ramapuram, Chennai. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#home">Privacy Policy</a>
            <a href="#home">Terms of Service</a>
            <a
              href="https://maps.google.com/?q=KMS+Mens+PG+Ramapuram+Chennai"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}