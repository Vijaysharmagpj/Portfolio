import React from "react";
import "./Portfolio.css";
import Img1 from "../../assets/metro.png";
import Img2 from "../../assets/javascript wether aap.png";
import Img3 from "../../assets/game.png";
import Img4 from "../../assets/password.png";
import Img5 from "../../assets/math.png";
import Img6 from "../../assets/quiz.jpg";
import Img7 from "../../assets/weatherapp.png";
import Img8 from "../../assets/chair.png";
import Img9 from "../../assets/notepad.png";
import Img10 from "../../assets/parallelx-effect.png";

const data = [
  {
    id: 1,
    image: Img1,
    title: "Lucknow-Metro-Bundler",
    github: "https://github.com/Vijaysharmagpj/Lucknow-Metro-Bundler",
    demo: "https://lucknowmetrobundler.netlify.app/",
  },
  {
    id: 2,
    image: Img2,
    title: "JavaScript-Weather-App",
    github: "https://github.com/Vijaysharmagpj/JavaScript-weather-App",
    demo: "https://vijay-javascript-weather-app.netlify.app/",
  },
  {
    id: 3,
    image: Img3,
    title: "Tic Tac Toe Game",
    github: "https://github.com/Vijaysharmagpj/Tic-Tac-Toe",
    demo: "https://tic-tac-toe-2-player-gamexoxo.netlify.app/",
  },
  {
    id: 4,
    image: Img4,
    title: "Password-Generator",
    github: "https://github.com/Vijaysharmagpj/Password-Generator",
    demo: "https://vijaypasswordgenerator.netlify.app/",
  },
  {
    id: 5,
    image: Img5,
    title: "MATH_GOODIES",
    github: "https://github.com/Vijaysharmagpj/MATH_GOODIES",
    // demo: 'https://figma.com'
  },
  {
    id: 6,
    image: Img6,
    title: "Quiz App",
    github: "https://github.com/Vijaysharmagpj/quizz-app-java",
    // demo: 'https://figma.com'
  },
  {
    id: 7,
    image: Img7,
    title: "React Weather App",
    github: "https://github.com/Vijaysharmagpj/weather-app",
    demo: "https://vijayweather-app.netlify.app/",
  },
  {
    id: 8,
    image: Img8,
    title: "Morden Chair",
    github: "https://github.com/Vijaysharmagpj/Modern-Chair",
    demo: "https://modern-chairs-website.netlify.app/",
  },
  {
    id: 9,
    image: Img9,
    title: "Note Pad",
    github: "https://github.com/Vijaysharmagpj/Notepad",
    // demo: "https://figma.com",
  },
  {
    id: 10,
    image: Img10,
    title: "ParallelX-Effect",
    github: "https://github.com/Vijaysharmagpj/ParallelX-Effect",
    demo: "https://parallelx-effect.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
