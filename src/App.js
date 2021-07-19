import React from "react";
import Header from "./components/Header";
import Work from "./components/Work";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/Reset.css";
import "./styles/Style.css";

function App() {
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <Header />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
