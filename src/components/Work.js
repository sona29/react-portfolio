import React from "react";
import "../styles/Section.css";

import pantry from "../images/pantry.png";
import capture from "../images/Capture.PNG";
import screenshot from "../images/screenshot.png";
import teamprofile from "../images/teamprofile.png";
import techblog from "../images/techblog.png";
import tracker from "../images/tracker.png";

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
        <h2 className="text-center text-uppercase">Work</h2>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-5 f-image position-relative">
            <img className="img-fluid" src={pantry} alt="pantry" />
            <div className="overlay">
              <div className="text">Hello World</div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <img className="img-fluid" src={capture} alt="forecast" />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <img className="img-fluid" src={screenshot} alt="schedular" />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <img className="img-fluid" src={teamprofile} alt="generator" />
          </div>

          <div className="col-md-6 col-lg-4 mb-5">
            <img className="img-fluid" src={techblog} alt="blog" />
          </div>

          <div className="col-md-6 col-lg-4 mb-5">
            <img className="img-fluid" src={tracker} alt="tracker" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
