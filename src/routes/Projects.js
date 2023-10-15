import React from 'react'
import Navbar from '../components/Navbar'
import GalaxyImg2 from '../components/GalaxyImg2'
import Footer from '../components/Footer'

const Projects = () => {
  return (
    <div>
      <Navbar />
      <GalaxyImg2 heading = "PROJECTS" text = "Some of my most recent works." />
      <Footer />
    </div>
  )
}

export default Projects