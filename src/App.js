import React from "react";
import Header from "./components/Header";
import Work from "./components/Work";
import Navbar from "./components/Navbar";
import About from "./components/About";
import "./styles/Reset.css";
import "./styles/Style.css";

function App() {
  return (
    <div class="container-fluid">
      <Navbar />
      <Header />
      <Work />
      <About />
    </div>
  );
}

export default App;
