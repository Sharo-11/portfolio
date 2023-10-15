import React from 'react'
import Navbar from '../components/Navbar'
import GalaxyImg3 from '../components/GalaxyImg3'
import Footer from '../components/Footer'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar />
      <GalaxyImg3 heading = "About" text = "Some facts about me." />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About