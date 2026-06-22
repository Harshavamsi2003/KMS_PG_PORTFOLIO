import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Rooms from './components/Rooms'
import Facilities from './components/Facilities'
import Menu from './components/menu'
import Branches from './components/Branches'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Rooms />
        <Facilities />
        <Menu />
        <Branches />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
