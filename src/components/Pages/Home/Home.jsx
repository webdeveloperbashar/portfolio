import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import Typewriter from "typewriter-effect";
import {
  RiFacebookCircleFill,
  RiGithubFill,
  RiLinkedinBoxFill
} from "react-icons/ri";
import { Link } from "react-router-dom";
import Me from "../../Image/me.png";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <section>
      <div className={classes.homeSection}>
        <div className="effect-wrapper">
          <div className={classes.effect1}></div>
          <div className={classes.effect2}></div>
          <div className={classes.effect3}></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={classes.homeDescription}>
                <div className={classes.description}>
                  <h2>I'm abul bashar</h2>
                  <p>
                    Now, I Am Learning Many Things, Exploring, Expanding only
                    gain for Knowledge
                  </p>
                  <div className={classes.socialLink}>
                    <span>
                      <Link
                        to={{
                          pathname: "https://facebook.com/webdeveloperbashar",
                        }}
                        target="_blank"
                      >
                        {<RiFacebookCircleFill />}
                      </Link>
                    </span>
                    <span>
                      <Link
                        to={{
                          pathname:
                            "https://www.linkedin.com/in/webdeveloperbashar/",
                        }}
                        target="_blank"
                      >
                        {<RiLinkedinBoxFill />}
                      </Link>
                    </span>
                    <span>
                      <Link
                        to={{
                          pathname: "https://github.com/webdeveloperbashar",
                        }}
                        target="_blank"
                      >
                        {<RiGithubFill />}
                      </Link>
                    </span>
                  </div>
                  <button>
                    <a
                      href="https://drive.google.com/u/0/uc?id=1lENq7xCaZUtppB8HYgHKPnT40mxTnrdD&export=download"
                      download
                    >
                      Download Resume
                    </a>
                  </button>
                </div>
                <div className={`text-end ${classes.homeImage}`}>
                  <div className={classes.img}>
                    <img src={Me} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
