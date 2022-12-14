import React from "react";
import Skills from "../layouts/Skills";
import { about, section2title } from "../../profile";

const About = ({theme}) => {

  return (
    <div id="about" className="effect2">
      <div data-aos="zoom-in-up" data-aos-once="true" className="row">
        <div
          className="col-12 d-none d-md-block offset-md-1 col-md-4 Photo"
          id="not-dark2"
        ></div>

        <div className="col-12 offset-md-1 col-md-6 about">
          <div className="About-title-box">
            <h1 id="About" className="red-line">
              {section2title}
            </h1>
          </div>
          <img
            id="not-dark2"
            className={`about-pic ${theme === "Dark" ? "ab-pic" : ""}`}
            src="https://avatars.githubusercontent.com/u/102052466?v=4"
            alt="suraj-dongre"
          />

          <p className="lead about-text">{about.paragraph}</p>
        </div>
      </div>
      <div id="Skills">
        <div className="row d-flex justify-content-center skills">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;
