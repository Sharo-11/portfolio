import "./ServiceCardStyles.css"
import React from 'react'
import {Link} from "react-router-dom"

const ServiceCard = () => {
  return (
    <div className="services">
        <h1 className="service-heading">Services</h1>
        <div className="card-container">
            <div className="card">
                <h3> Python Developer </h3>
                <p>
                Harness the power of Python to deliver tailored software solutions, from script automation to foundational web development, all within my Python skill set.
                </p>
                <Link to = "/contact" className="btn">Details</Link>
            </div>

            <div className="card">
                <h3> Cyber Security Analyst </h3>
                <span className="bar"></span>
                <p>
                Offering fundamental cyber security analysis services, including risk assessments and vulnerability identification, to ensure the protection of your digital assets and data.
                </p>
                <Link to = "/contact" className="btn">Details</Link>
            </div>

            <div className="card">
                <h3> Web Devlopment </h3>
                <span className="bar"></span>
                <p>
                Build a captivating online presence with custom websites designed to reflect your brand's unique identity and engage your audience effectively.
                </p>
                <Link to = "/contact" className="btn">Details</Link>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard;