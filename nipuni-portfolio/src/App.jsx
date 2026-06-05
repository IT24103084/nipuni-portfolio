// App.jsx — Root component. Assembles all sections in order.

import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Certifications from './sections/Certifications'
import Education from './sections/Education'
import CareerGoals from './sections/CareerGoals'
import CareerTimeline from './sections/CareerTimeline'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      {/* Animated particle canvas — fixed behind everything */}
      <ParticleBackground />

      {/* Sticky navigation */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <CareerGoals />
        <CareerTimeline />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
