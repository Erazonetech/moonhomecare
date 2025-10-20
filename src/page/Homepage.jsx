import React from 'react'
// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'
// import About from '../components/About'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Services from '../components/Services'
import Downloads from '../components/Downloads'
import Contact from '../components/Contact'

function Homepage() {
  return (
    <div className="overflow-hidden">
      {/* <Navbar /> */}
      <Hero />
      <Stats />
      <Services />
      {/* <About /> */}
      <Downloads />
      <Contact />
      {/* <Footer /> */}
    </div>
  )
}

export default Homepage