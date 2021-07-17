import React from "react";
import "../styles/Navbar.css";

// We use JSX curly braces to evaluate the style object on the JSX tag

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark header">
      Sona Shrestha
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse navbar-a" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#about-me">
              About Me{" "}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#work">
              Work
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact-me">
              Contact Me
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="./assets/images/cv-sona.pdf"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
