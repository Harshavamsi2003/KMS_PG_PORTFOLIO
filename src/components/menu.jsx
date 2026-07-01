import { useState, useEffect, useRef } from 'react'
import '../styles/menu.css'

const menuData = [
  {
    dayEn: 'Monday',    dayTa: 'திங்கள்',
    morningEn: 'Semia, Sambar',               morningTa: 'சேமியா, சாம்பார்',
    afternoonEn: 'Rice, Sambar, Kootu, Rasam', afternoonTa: 'சாப்பாடு, சாம்பார், கூட்டு, ரசம்',
    nightEn: 'Dosai (5), Kuruma',             nightTa: 'தோசை (5) குருமா',
  },
  {
    dayEn: 'Tuesday',   dayTa: 'செவ்வாய்',
    morningEn: 'Pongal, Sambar',              morningTa: 'பொங்கல், சாம்பார்',
    afternoonEn: 'Veg Biriyani, Curd Pachidi', afternoonTa: 'வெஜ் பிரியாணி, தயிர் பச்சடி',
    nightEn: 'Idly (5), Sambar, Chutney',    nightTa: 'இட்லி (5), சாம்பார், சட்னி',
  },
  {
    dayEn: 'Wednesday', dayTa: 'புதன்',
    morningEn: 'Uppuma, Chutney',             morningTa: 'உப்புமா, சட்னி',
    afternoonEn: 'Variety Rice, Poriyal',      afternoonTa: 'வைரட்டி ரைஸ் பொரியல்',
    nightEn: 'Chappathi, Kuruma / Fried Rice & Chutney', nightTa: 'சப்பாத்தி குருமா அல்லது ஃப்ரைட் ரைஸ் & சட்னி',
  },
  {
    dayEn: 'Thursday',  dayTa: 'வியாழன்',
    morningEn: 'Idly (5), Vadacurry',         morningTa: 'இட்லி (5), வடகறி',
    afternoonEn: 'Rice, Spicy Curry, Egg (1)', afternoonTa: 'சாப்பாடு, கார குழம்பு, முட்டை (1)',
    nightEn: 'Dosa (5), Sambar, Chutney',    nightTa: 'தோசை (5), சாம்பார், சட்னி',
  },
  {
    dayEn: 'Friday',    dayTa: 'வெள்ளி',
    morningEn: 'Pongal, Sambar, Vadai (1)',   morningTa: 'பொங்கல், சாம்பார், வடை (1)',
    afternoonEn: 'Variety Rice, Poriyal',      afternoonTa: 'வைரட்டி ரைஸ், பொரியல்',
    nightEn: 'Chappathi (5), Channa Masala',  nightTa: 'சப்பாத்தி (5), சென்னா மசாலா',
  },
  {
    dayEn: 'Saturday',  dayTa: 'சனி',
    morningEn: 'Idly (5), Sambar',            morningTa: 'இட்லி (5), சாம்பார்',
    afternoonEn: 'Rice, Vatha Curry, Kootu',  afternoonTa: 'சாப்பாடு, வத்தக்குழம்பு, கூட்டு',
    nightEn: 'Veg Oothappam (5), Sambar',    nightTa: 'வெஜ். ஊத்தாப்பம் (5), சாம்பார்',
  },
  {
    dayEn: 'Sunday',    dayTa: 'ஞாயிறு',
    morningEn: 'Poori (5), Masala',           morningTa: 'பூரி (5), மசாலா',
    afternoonEn: 'Rice, Chicken Gravy (1), Rasam, Pickle (Veg)', afternoonTa: 'சாப்பாடு, சிக்கன் கிரேவி (1 கவர்), ரசம், ஊறுகாய்',
    nightEn: 'Sambar Sadam or Kushka',        nightTa: 'சாம்பார் சாதம் அல்லது குஸ்கா',
  },
]

export default function Menu() {
  const [lang, setLang] = useState('en')
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
    <section className="menu" id="menu" ref={ref}>
      <div className="container">
        <div className="menu-hdr rv">
          <div className="eyebrow">Weekly Meal Plan</div>
          <h2 className="sec-title">Our <em>Food Menu</em></h2>
          <p className="sec-sub">
            Home-style South Indian meals served fresh every day. 3 meals included in your monthly rent.
          </p>
        </div>

        {/* Language toggle */}
        <div className="menu-lang-toggle rv">
          <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>
            English
          </button>
          <button className={`lang-btn ${lang === 'ta' ? 'active' : ''}`} onClick={() => setLang('ta')}>
            தமிழ்
          </button>
        </div>

        {/* Timing bar */}
        <div className="menu-timing-bar rv">
          <div className="menu-timing-item">
            <div className="mti-dot mti-dot-m" />
            <div>
              <div className="mti-label">Morning</div>
              <div className="mti-time">7:30 – 9:30 AM</div>
            </div>
          </div>
          <div className="menu-timing-item">
            <div className="mti-dot mti-dot-a" />
            <div>
              <div className="mti-label">Afternoon</div>
              <div className="mti-time">12:30 – 2:30 PM</div>
            </div>
          </div>
          <div className="menu-timing-item">
            <div className="mti-dot mti-dot-n" />
            <div>
              <div className="mti-label">Night</div>
              <div className="mti-time">7:30 – 9:30 PM</div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="menu-table-wrap rv">
          <table className="menu-table">
            <thead>
              <tr>
                <th>Day</th>
                <th className="th-morning">Morning</th>
                <th className="th-afternoon">Afternoon</th>
                <th className="th-night">Night</th>
              </tr>
            </thead>
            <tbody>
              {menuData.map((row) => (
                <tr key={row.dayEn}>
                  <td className="menu-day-cell">
                    <div className="menu-day-en">{row.dayEn}</div>
                    <div className="menu-day-ta">{row.dayTa}</div>
                  </td>
                  <td className="td-morning">
                    <div className="menu-meal-en">{lang === 'en' ? row.morningEn : row.morningTa}</div>
                  </td>
                  <td className="td-afternoon">
                    <div className="menu-meal-en">{lang === 'en' ? row.afternoonEn : row.afternoonTa}</div>
                  </td>
                  <td className="td-night">
                    <div className="menu-meal-en">{lang === 'en' ? row.nightEn : row.nightTa}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="menu-note rv">
          Management has the full right to change the food menu due to situation / season.
          &nbsp;•&nbsp; சூழ்நிலை காரணமாக உணவு மாற்றம் செய்ய நிர்வாகத்திற்கு உரிமை உண்டு.   
        </div>
      </div>
    </section>
  )
}
