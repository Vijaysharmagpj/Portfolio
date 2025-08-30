import React from "react";
import "./About.css";
import ME from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { TbFolderPause } from "react-icons/tb";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Error aaya bhai photo me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3 Year</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Company</h5>
              <small>Sun Integrated Technologies and Applications</small>
            </article>

            <article className="about__card">
              <TbFolderPause className="about__icon" />
              <h5>Projects</h5>
              <small>Professional & Self Projects</small>
            </article>
          </div>
          <p>
          Hello! I'm Vijay Kumar Sharma, a Full Stack Developer at SITA. With expertise in Java, SQL, HTML, CSS, JavaScript, React,Redux Toolkit, Node.js, Express, and MongoDB, I craft robust solutions for innovative projects. Let's connect and discuss opportunities at vijaysharmagpj65@gmail.com
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
