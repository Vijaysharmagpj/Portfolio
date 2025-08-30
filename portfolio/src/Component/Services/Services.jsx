import React from "react";
import "./Services.css";
import { IoMdCheckmark } from "react-icons/io";

const services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <artical className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Clear and Concise Headline</p>
            </li>

            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Engaging Visuals</p>
            </li>

            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Benefits-Oriented Content</p>
            </li>

            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Clear Call-to-Action (CTA)</p>
            </li>

            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Easy-to-Scan Content</p>
            </li>

            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Responsive Design</p>
            </li>
          </ul>
        </artical>
        {/* END OF UI/UX */}
        <artical className="service">
          <div className="service__head">
            <h3>Web Developement</h3>
          </div>
          <ul className="service__list">
            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Responsive Design</p>
            </li>

            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Performance Optimization</p>
            </li>

            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Accessibility Compliance</p>
            </li>

            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Cross-Browser Compatibility</p>
            </li>

            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Content Management System Integration</p>
            </li>

            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Security Measures</p>
            </li>

            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Continuous Testing and Optimization</p>
            </li>
          </ul>
        </artical>
        {/* end of  web developement*/}

        <artical className="service">
          <div className="service__head">
            <h3>Java Developer</h3>
          </div>
          <ul className="service__list">
            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Backend Development</p>
            </li>

            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Data Validation and Security</p>
            </li>

            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Error Handling and Logging</p>
            </li>

            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Concurrency and Performance Optimization</p>
            </li>

            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Integration with External Services</p>
            </li>

            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Testing and Quality Assurance</p>
            </li>
          </ul>
        </artical>
      </div>
    </section>
  );
};
export default services;
