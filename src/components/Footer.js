import React from "react";
import "../styles/Footer.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We use JSX curly braces to evaluate the style object

function Footer() {
  return (
    <section className="page-section text-white py-5" id="footer">
      <div className="container">
        <small>Copyright &copy; Sona Shrestha 2021</small>
      </div>
    </section>
  );
}

export default Footer;
