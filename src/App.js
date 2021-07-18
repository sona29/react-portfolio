import React from "react";
import Header from "./components/Header";
import Work from "./components/Work";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import "./styles/Reset.css";
import "./styles/Style.css";

function App() {
  return (
    <div class="container-fluid">
      <Navbar />
      <Header />
      <Work />
      <About />
      <Contact />
    </div>
  );
}

export default App;
