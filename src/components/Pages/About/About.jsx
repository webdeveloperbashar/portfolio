import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Progress from "../Progress/progressbar";
import "./About.css";

const About = () => {
  const now = 80;
  return (
    <>
      <div className="aboutSection">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="about-left-content">
                <div className="experience-count">
                  <span className="experience-number">
                    1 <span className="has-accent-color">.</span>
                  </span>
                  <h5 className="experience-text">
                    Year <br /> Experience <br />
                    Working
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 ml-auto">
              <div className="about-right-content">
                <h3>Great Experience</h3>
                <p>
                  Fill appear won’t may make moveth signs. Fourth. Good own.
                  Green you’re moveth us, lesser.
                </p>
                <div className="progressBar">
                  <h5>JavaScript</h5>
                  <Progress done="70" />
                  <h5>Mongoose</h5>
                  <Progress done="90" />
                  <h5>MERN</h5>
                  <Progress done="85" />
                  <h5>React Native</h5>
                  <Progress done="60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
