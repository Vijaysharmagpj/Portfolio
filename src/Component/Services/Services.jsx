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
            <h3>Front-End Developer</h3>
          </div>
          <ul className="service__list">
            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Dynamic UI Development</p>
            </li>

            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Component-Based Architecture</p>
            </li>

            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Responsive Design</p>
            </li>

            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>State Management</p>
            </li>

            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Client-Side Routing</p>
            </li>

            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Responsive Design</p>
            </li>

            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Third-Party Library Integration</p>
            </li>
          </ul>
        </artical>

        <artical className="service">
          <div className="service__head">
            <h3>Back-End Developement</h3>
          </div>
          <ul className="service__list">
            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>RESTful API Development</p>
            </li>

            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Server-Side Logic Implementation</p>
            </li>

            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Database Integration</p>
            </li>

            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Authentication and Authorization</p>
            </li>

            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Real-Time Communication</p>
            </li>

            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Middleware Development</p>
            </li>

            <li>
              <IoMdCheckmark className="service__list-icon" />
              <p>Scalability and Performance Optimization</p>
            </li>
          </ul>
        </artical>
        {/* end of  backend developement*/}

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
