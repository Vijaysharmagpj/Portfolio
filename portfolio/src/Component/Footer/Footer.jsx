import React from 'react'
import './Footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { SiHackerrank } from "react-icons/si";


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Vijay Kumar Sharma</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testemonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">   
    <a
      href="https://www.linkedin.com/in/vijay-sharma2011/"
      target="_blank"
      rel="noreferrer"
    >
      <FaLinkedin />
    </a>
    <a
      href="https://github.com/Vijaysharmagpj"
      target="_blank"
      rel="noreferrer"
    >
      <FaSquareGithub />
    </a>
    <a
      href="https://leetcode.com/vijaysharmagpj65/"
      target="_blank"
      rel="noreferrer"
    >
      <SiLeetcode />
    </a>
    <a
      href="https://www.hackerrank.com/profile/vijaysharmagpj65"
      target="_blank"
      rel="noreferrer"
    >
      <SiHackerrank />
    </a>
  </div>
      <div className="footer__copyright">
        <small>&copy; VIJAY. All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer