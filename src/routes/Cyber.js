import React from 'react';
import Navbar from '../components/Navbar';
import GalaxyImg2 from '../components/GalaxyImg2';
import CyberWork from "../components/CyberWork";
import Footer from '../components/Footer';

const Cyber = () => {
  return (
    <div>
      <Navbar />
      <GalaxyImg2 heading = "Cyber Security Reports" text = "Some of the reports I recently completed during my internship." />
      <CyberWork />
      <Footer />
    </div>
  )
}

export default Cyber;