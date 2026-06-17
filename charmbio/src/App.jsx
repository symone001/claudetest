import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Packs from './components/Packs'
import Entreprises from './components/Entreprises'
import Booking from './components/Booking'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <Packs />
        <Entreprises />
        <Booking />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
