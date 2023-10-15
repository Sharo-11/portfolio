import "./GalaxyImgStyles.css";
import Galaxy from "../assets/aesthetics.jpg"
import React from 'react'
import { Link } from "react-router-dom";

const GalaxyImg = () => {
  return (
    <div className="galaxy">
        <div className="mask">
            <img className="intro-bg" src = {Galaxy} alt="Galaxy" />
        </div>
        <div className="content">
            <p>Hi, I am Freelancer.</p>
            <h1>Cybersecurity Analyst and Python Developer.</h1>
            <Link to = "/Projects" className="btn">Projects</Link>
            <Link to = "/About" className="btn-light">About</Link>
        </div>
    </div>
  )
}

export default GalaxyImg