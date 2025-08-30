import React from "react";
import "./About.css";
import ME from '../../assets/me.jpg';
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
            <img src={ME} alt="Error aaya bhai photo me"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
            <FaAward className="about__icon"/>
            <h5>Experience</h5>
            <small>Fresher</small>
            </article>

            <article className="about__card">
            <FiUsers className="about__icon"/>
            <h5>Clients</h5>
            <small>Self</small>
            </article>

            <article className="about__card">
            <TbFolderPause className="about__icon"/>
            <h5>Projects</h5>
            <small>Self Project</small>
            </article>

          </div>
          <p>Hello, Welcome! I'm Vijay Kumar Sharma, a recent graduate with a degree in Computer Science from Dr. A.P.J. Abdul Kalam Technical University, Lucknow. Throughout my academic journey, I've honed my skills in Java, and I also possess a strong command of HTML, CSS, JavaScript, React.JS, and SQL.</p>

            <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>
      </div>
    </section>
  );
};
export default About;
