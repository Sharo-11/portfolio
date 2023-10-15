import "./FooterStyles.css"
import React from 'react'
import {FaHome, FaPhone, FaMailBulk, FaLinkedin, FaInstagram, FaGithub, FaHackerrank} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#ffffff", marginRight: "2rem"}} />
                    <h4>
                    <p>Navi Mumbai.</p>
                    <p>Maharashtra.</p>
                    </h4>
                </div>
                <div className="phone">
                    <FaPhone size={20} style={{color: "#ffffff", marginRight: "2rem"}} />
                    <h4>
                    <p>+91 9403564996</p>
                    </h4>
                </div>
                <div className="email">
                <FaMailBulk size={20} style={{color: "#ffffff", marginRight: "1rem"}} />
                <h4>
                    <p>sharodubey1312@gmail.com</p>   
                </h4>
                </div>
            </div>
            <div className="right">
                <h4>Python Maestro & Architect of Secure Cyberscapes.</h4>
                <p>A dedicated cybersecurity enthusiast skilled in crafting captivating digital experiences. With an arsenal comprising Python, HTML, CSS, JavaScript, React, and Flask, I specialize in constructing robust and secure digital landscapes.</p>
                <div className="social">
                <FaLinkedin size={30} style={{color: "#ffffff", marginRight: "2rem"}} />
                <FaInstagram size={30} style={{color: "#ffffff", marginRight: "2rem"}} />
                <FaGithub size={30} style={{color: "#ffffff", marginRight: "2rem"}} />
                <FaHackerrank size={30} style={{color: "#ffffff", marginRight: "2rem"}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer