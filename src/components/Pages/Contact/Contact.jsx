import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from './Contact.module.css'

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <div className={classes.contactForm}>
              <div className={classes.form}>
                <form action="">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                  <br />
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                  <br />
                  <input
                    type="number"
                    className="form-control"
                    name="number"
                    placeholder="Enter your number"
                    required
                  />
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Enter your subject"
                    required
                  />
                  <br />
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Write your message..."
                    cols="30"
                    rows="7"
                  ></textarea>
                  <br />
                  <input
                    type="submit"
                    className={`form-control ${classes.button}`}
                    value="SUBMIT"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
