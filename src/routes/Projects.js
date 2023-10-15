import React from 'react';
import Navbar from '../components/Navbar';
import GalaxyImg2 from '../components/GalaxyImg2';
import Work from "../components/Works"
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <GalaxyImg2 heading = "PROJECTS" text = "Some of my most recent works." />
      <Work />
      <ServiceCard />
      <Footer />
    </div>
  )
}

export default Projects