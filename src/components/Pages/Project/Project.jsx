import React from "react";
import pro1 from "../../Image/pro-1.png";
import pro2 from "../../Image/pro-2.png";
import pro3 from "../../Image/pro-3.png";
import pro4 from "../../Image/pro-4.png";
import "./Project.css";
const Project = () => {
  return (
    <>
      <div className="projectSection">
        <div className="container">
          <div className="title">
            <h1 className="text-center">Our Awesome Project</h1>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="projectWrapper">
                <div className="project-img">
                  <img src={pro1} className="img-fluid" alt="1" />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="projectWrapper">
                <div className="project-img">
                  <img src={pro2} className="img-fluid" alt="2" />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="projectWrapper">
                <div className="project-img">
                  <img src={pro3} className="img-fluid" alt="3" />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="projectWrapper">
                <div className="project-img">
                  <img src={pro4} className="img-fluid" alt="4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
