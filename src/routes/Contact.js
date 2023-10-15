import React from 'react'
import Navbar from '../components/Navbar'
import GalaxyImg3 from '../components/GalaxyImg3'
import Forms from '../components/Forms'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <GalaxyImg3 heading="Contact me" text="Let's have a chat." />
      <Forms />
      <Footer />
    </div>
  )
}

export default Contact
