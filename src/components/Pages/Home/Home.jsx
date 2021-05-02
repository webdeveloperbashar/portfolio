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
  const colors = ["#FDA7DF", "#12ddb2;", "#ED4C67", "#FFC312"];
  const createAnimation = () => {
    const body = document.querySelector("body");
    const square = document.createElement("span");
    square.className = `${classes.animationSquare}`;
    const size = Math.random() * 60;
    square.style.width = 20 + size + "px";
    square.style.height = 20 + size + "px";

    square.style.bottom = Math.random() * window.innerHeight + "px";
    square.style.left = Math.random() * window.innerWidth + "px";

    const bg = colors[Math.floor(Math.random() * colors.length)];

    square.style.background = bg;
    body.appendChild(square);
    setTimeout(() => {
      square.remove();
    }, 5000);
  };
  setInterval(createAnimation, 1000);
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
                    now, I am learning many things, exploring, expanding, earn
                    to knowledge
                  </p>
                  <div className={classes.socialLink}>
                    <span>
                      <Link
                        to={{
                          pathname: "https://facebook.com/webdeveloperbashar",
                        }}
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
                      >
                        {<RiLinkedinBoxFill />}
                      </Link>
                    </span>
                    <span>
                      <Link
                        to={{
                          pathname:
                            "https://github.com/webdeveloperbashar",
                        }}
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
