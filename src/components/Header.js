import React from "react";
import "../styles/Header.css";
import profile from "../images/profile.JPG";

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <header class=" text-white text-center about-section">
      <div class="container d-flex align-items-center flex-column ">
        <img class="profile-picture" src={profile} alt="profilePic" />

        <h1>Sona Shrestha</h1>

        <p class="masthead-subheading font-weight-light">
          Full Stack Web Developer 
        </p>
      </div>
    </header>
  );
}

export default Header;
