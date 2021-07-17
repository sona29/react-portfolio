import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import "./styles/Reset.css";
import "./styles/Style.css";

function App() {
  return (
    <div class="container-fluid">
      <Navbar />
      <Header />
      <Section />
    </div>
  );
}

export default App;
