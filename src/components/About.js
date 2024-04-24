import React from "react";
import "../styles/About.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import Zoom from "react-reveal/Zoom";
// By importing the Header.css file, it is added to the DOM whenever this component loads

// We use JSX curly braces to evaluate the style object

function About() {
  return (
    <section className="page-section text-white about-section py-5" id="about">
      <div className="container">
        <Zoom>
          <h1 className="text-center text-uppercase text-white ">
            <span className="underline-magical">About</span>
          </h1>

          <div className="row">
            <p>
              Highly motivated Full Stack Developer with a strong educational
              background in Computer Engineering and extensive hands-on
              experience in Full Stack Development. Skilled in collaborating
              with cross-functional teams to design, develop, and implement
              robust software solutions. Expertise in Java, JavaScript, and
              Grails programming languages and a strong grasp of browser-based
              technologies
            </p>
          </div>
        </Zoom>

        <div className="text-center social-icons">
          <a
            href="https://github.com/sona29"
            target="_blank"
            className="text-light mx-2"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sona-shrestha-0603652a/"
            target="_blank"
            className="text-light mx-2"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:sona.shrestha004@gmail.com"
            target="_blank"
            className="text-light mx-2"
            rel="noreferrer"
          >
            <FaEnvelope />
          </a>
          <a
            href="tel:+61042491227"
            target="_blank"
            className="text-light mx-2"
            rel="noreferrer"
          >
            <FaPhoneSquareAlt />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
