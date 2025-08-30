import React from "react";
import "./Company.css";

const Company = () => {
  const companies = [
    {
        name: "Sun Integrated Technologies And Applications",
        location: "New Delhi",
        position: "Full-stack Developer",
        duration: "March 2024 - Till Date",
        project: "Tender Management System (PRA)",
        description:
          "Developed a web application for Ahluwalia Contracts, streamlining the entire tender lifecycle with features like tender submission, tracking, MOM logs management, file handling, and role-based access.",
      },
    {
      name: "Ducat",
      location: "Ghaziabad",
      position: "MERN Stack Trainee",
      duration: "November 2023 - July 2024",
      description:
        "Engaged in comprehensive MERN Stack training focusing on MongoDB, Express.js, React.js,Redux Toolkit, and Node.js.",
    },
    {
        name: "Live It Solution",
        location: "Lucknow",
        position: "Software Developer Trainee – Frontend React Developer",
        duration: "August 2023 - February 2024",
        description:
          "Exhibited outstanding dedication and proficiency as a Frontend Developer specializing in React Technology.",
      },
  ];

  return (
    <section id="company">
      <h5>Professional Journey</h5>
      <h2>Company Details</h2>
      <div className="container company__timeline">
        {companies.map((company, index) => (
          <div
            key={index}
            className={`company__card ${
              index % 2 === 0 ? "company__left" : "company__right"
            }`}
          >
            <div className="company__content">
              <h3>{company.name}</h3>
              <h4>{company.position}</h4>
              <small className="text-light">{company.location}</small>
              <p className="company__duration">{company.duration}</p>
              <p>{company.description}</p>
              {company.project && (
                <p>
                  <strong>Project:</strong> {company.project}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Company;
