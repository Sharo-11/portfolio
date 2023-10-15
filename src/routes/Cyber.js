import React from 'react';
import Navbar from '../components/Navbar';
import GalaxyImg2 from '../components/GalaxyImg2';
import CyberWork from "../components/CyberWork";
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

const Cyber = () => {
  return (
    <div>
      <Navbar />
      <GalaxyImg2 heading = "Cyber Security Reports" text = "Some of the reports I recently completed during my internship." />
      <CyberWork />
      <ServiceCard />
      <Footer />
    </div>
  )
}

export default Cyber;