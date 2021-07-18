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

function Section() {
  return (
    <section class="page-section portfolio" id="work">
      <div class="container">
        <h2 class = "text-center text-uppercase">Work</h2>
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-4 mb-5">
            <img class="img-fluid" src={pantry} alt="..." />
          </div>
          <div class="col-md-6 col-lg-4 mb-5">
            <img class="img-fluid" src={capture} alt="..." />
          </div>
          <div class="col-md-6 col-lg-4 mb-5">
            <img class="img-fluid" src={screenshot} alt="..." />
          </div>
          <div class="col-md-6 col-lg-4 mb-5">
            <img class="img-fluid" src={teamprofile} alt="..." />
          </div>

          <div class="col-md-6 col-lg-4 mb-5">
            <img class="img-fluid" src={techblog} alt="..." />
          </div>

          <div class="col-md-6 col-lg-4 mb-5">
            <img class="img-fluid" src={tracker} alt="..." />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
