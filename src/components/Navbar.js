import React from "react";
import "../styles/Navbar.css";
// import { useState } from "react";
import cv from "../images/cv-sona.pdf";

// We use JSX curly braces to evaluate the style object on the JSX tag

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark header fixed-top ">
      Sona Shrestha
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse navbar-a" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link px-2" href="#about">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-2" href="#work">
              Work
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-2" href="#contact">
              Contact Me
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link px-2"
              href={cv}
              target="_blank"
              rel="noreferrer"
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
