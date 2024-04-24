import React from "react";
import "../styles/Header.css";
import profile from "../images/profile.JPG";

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <header className=" text-white text-center about-section py-5">
      <div className="container d-flex align-items-center flex-column ">
        <img className="profile-picture" src={profile} alt="profilePic" />

        <h1>Sona Shrestha</h1>

        <p className="font-weight-light">Full Stack Web Developer</p>
      </div>
    </header>
  );
}

export default Header;
