import React from "react";
import "../styles/About.css";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneSquareAlt } from 'react-icons/fa';



// By importing the Header.css file, it is added to the DOM whenever this component loads

// We use JSX curly braces to evaluate the style object

function About() {
  return (
    <section class="page-section text-white about-section" id="about">
      <div class="container">
        <h2 class="text-center text-uppercase text-white">
          About
        </h2>

        <div class="row">
          <p>
            I am Sona Shrestha. I live in Girraween. I am working as an
            Implementation Officer. Currently I am doing bootcamp course on Full
            Stack Web Development. It is helping to move forwards towards my
            career goal. I am looking for opportunity in Entry level Web
            Development.
          </p>
        </div>

        <div class="text-center social-icons">
          
        <a href="https://github.com/sona29" target="_blank"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/sona-shrestha-0603652a/" target="_blank"><FaLinkedin /></a>
        <a href="mailto:sona.shrestha004@gmail.com" target="_blank"><FaEnvelope /></a>
        <a href="tel:+61042491227" target="_blank"><FaPhoneSquareAlt /></a>
        </div>

        
      </div>
    </section>
  );
}

export default About;
