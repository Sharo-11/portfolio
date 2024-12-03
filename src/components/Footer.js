import './FooterStyles.css'
import React from 'react'
import {
  FaHome,
  FaMailBulk,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaHackerrank
} from 'react-icons/fa'
import {SiTryhackme} from 'react-icons/si'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome
              size={20}
              style={{ color: '#ffffff', marginRight: '2rem' }}
            />
            <h4>
              <p>Navi Mumbai.</p>
              <p>Maharashtra.</p>
            </h4>
          </div>
          
            <h4>
              <p>+91 9403564996</p>
            </h4>
          </div>
          <div className='email'>
            <FaMailBulk
              size={20}
              style={{ color: '#ffffff', marginRight: '2rem' }}
            />
            <h4>
              <p>sharodubey1312@gmail.com</p>
            </h4>
          </div>
        </div>
        <div className='right'>
          <h4>Python Maestro & Architect of Secure Cyberscapes.</h4>
          <p>
            A dedicated cybersecurity enthusiast skilled in crafting captivating
            digital experiences. With an arsenal comprising Python, HTML, CSS,
            JavaScript, React, and Flask, I specialize in constructing robust
            and secure digital landscapes.
          </p>
          <div className='social'>
            <a href='https://www.linkedin.com/in/sharvari-dubey-806717227/' target='_blank'>
              <FaLinkedin
                size={30}
                style={{ color: '#ffffff', marginRight: '2rem' }}
              />
            </a>
            <a href='https://tryhackme.com/p/Sharo11' target='_blank'>
              <SiTryhackme
                size={30}
                style={{ color: '#ffffff', marginRight: '2rem' }}
              />
            </a>
            <a href='https://github.com/Sharo-11' target='_blank'>
              <FaGithub
                size={30}
                style={{ color: '#ffffff', marginRight: '2rem' }}
              />
            </a>
            <a href='https://www.hackerrank.com/sharo_11?hr_r=1' target='_blank'>
              <FaHackerrank
                size={30}
                style={{ color: '#ffffff', marginRight: '2rem' }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
