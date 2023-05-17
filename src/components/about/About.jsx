import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__typography">
          <span>about me</span>
          <span>about me</span>
          <span>about me</span>
        </div>
        <div className="about__text">
          <span>
            Hello! I am Sull, I'm very interested
            <span className="about__outline">
              {" "}
              in back-end development,
            </span>{" "}
            but <span className="about__outline"> I'm curious </span> About
            Syber Security <span className="about__outline"> I aspire to secure</span> Jokowi's data #Jokowi 3 Periode.
          </span>
          <span className="about__button">
            <Link to="/me">
              Read More About Me <i class="uil uil-arrow-up-right"></i>
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
