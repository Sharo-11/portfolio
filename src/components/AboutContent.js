import './AboutContentStyles.css'
import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/Python_certificate.png'
import img2 from '../assets/NSE_1_Certification.png'

const AboutContent = () => {
  return (
    <div className='about'>
      <div className='left'>
        <h2>Skills</h2>
        <div className="skills">
          <ol>
            <li>
              Python: Proficient in Python programming with experience in
              developing various applications and tools.
            </li>
            <li>
              Web Development: Skilled in building dynamic and responsive websites
              using HTML, CSS, and JavaScript.
            </li>
            <li>
              React: Experienced in creating interactive and user-friendly
              interfaces with the React JavaScript library.
            </li>
            <li>Profound understanding of database management with SQLite.</li>
            <li>
              Flask: Proficient in utilizing Flask, a micro web framework in
              Python, for developing web applications.
            </li>
            <li>
              Cybersecurity: Knowledgeable about cybersecurity practices,
              including threat detection, prevention, and risk management.
            </li>
          </ol>
        </div>
        <div className='about-btn'>
          <Link to='/contact' target='_blank'>
            <button className='btn'>Contact</button>
          </Link>
          <Link
            to='https://drive.google.com/file/d/1DzMgej7aZv82MpW-GYOEa66dv5YkcAaI/view?usp=drive_link'
            target='_blank'
          >
            <button className='btn btn-light'>Resume</button>
          </Link>
        </div>
      </div>
      <div className='right'>
        <div className='img-container'>
          <div className='img-stack top'>
            <Link
              to='https://drive.google.com/file/d/1I3qNFfwAe5LzyZyQIVx-kzXj06hbyCNn/view?usp=drive_link'
              target='_blank'
            >
              <img src={img1} className='img' alt='image' />
            </Link>
          </div>
          <div className='img-stack bottom'>
            <Link
              to='https://drive.google.com/file/d/1PedP5BVkjxt8xC5MnAvOewAxnO8QPHpD/view?usp=drive_link'
              target='_blank'
            >
              <img src={img2} className='img' alt='image' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
