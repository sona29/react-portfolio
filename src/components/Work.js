import React from "react";
import "../styles/Section.css";

import pantry from "../images/pantry.png";
import capture from "../images/Capture.PNG";
import screenshot from "../images/screenshot.png";
import teamprofile from "../images/teamprofile.png";
import techblog from "../images/techblog.png";
import tracker from "../images/tracker.png";
import pony from "../images/pony.JPG";
import { FaGithub } from "react-icons/fa";

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

// We use JSX curly braces to evaluate the style object on the JSX tag

function Work() {
  return (
    <section className="page-section portfolio py-5" id="work">
      <div className="container">
        <h1 className="text-center">
          <span className="underline-magical">Work</span>
        </h1>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-5 f-image position-relative">
            <img className="img-fluid" src={pony} alt="pantry" />
            <div className="overlay">
              <div className="text">
                <a
                  href="https://github.com/sona29/little-pony"
                  className="text-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
                <br></br>
                <a
                  href="https://infinite-reef-88558-7338f8f53097.herokuapp.com/"
                  className="work-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Little Pony
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5 f-image position-relative">
            <img className="img-fluid" src={pantry} alt="pantry" />
            <div className="overlay">
              <div className="text">
                <a
                  href="https://github.com/sona29/whats-in-my-pantry"
                  className="text-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
                <br></br>
                <a
                  href="https://sona29.github.io/whats-in-my-pantry/"
                  className="work-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  What's in my Pantry?
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5 f-image position-relative">
            <img className="img-fluid" src={capture} alt="forecast" />
            <div className="overlay">
              <div className="text">
                <a
                  href="https://github.com/sona29/weatherdashboard"
                  className="text-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
                <br></br>
                <a
                  href="https://sona29.github.io/weatherdashboard/"
                  className="work-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Weather Dashboard
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5 f-image position-relative">
            <img className="img-fluid" src={screenshot} alt="schedular" />
            <div className="overlay">
              <div className="text">
                <a
                  href="https://github.com/sona29/dayschedular"
                  className="text-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
                <br></br>
                <a
                  href="https://sona29.github.io/dayschedular/"
                  className="work-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Day Schedular
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5 f-image position-relative">
            <img className="img-fluid" src={teamprofile} alt="generator" />
            <div className="overlay">
              <div className="text">
                <a
                  href="https://github.com/sona29/teamprofilegenerator"
                  className="text-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
                <br></br>
                <a
                  href="https://drive.google.com/file/d/1xpg35eNshSvpFfMv1DTstRLhJj6fJBHl/view"
                  className="work-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Team Profile Generator
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-5 f-image position-relative">
            <img className="img-fluid" src={techblog} alt="blog" />
            <div className="overlay">
              <div className="text">
                <a
                  href="https://github.com/sona29/techblog"
                  className="text-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
                <br></br>
                <a
                  href="https://damp-badlands-21790.herokuapp.com/"
                  className="work-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tech Blog
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-5 f-image position-relative">
            <img className="img-fluid" src={tracker} alt="tracker" />
            <div className="overlay">
              <div className="text">
                <a
                  href="https://github.com/sona29/procrastination-tracker"
                  className="text-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
                <br></br>
                <a
                  href="https://procrastination-tracker.herokuapp.com/"
                  className="work-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Procrastination Tracker
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
