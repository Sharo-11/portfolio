import React from 'react'
import Navbar from '../components/Navbar'
import GalaxyImg2 from '../components/GalaxyImg2'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <Navbar />
      <GalaxyImg2 heading = "About" text = "Some facts about me." />
      <Footer />
    </div>
  )
}

export default About