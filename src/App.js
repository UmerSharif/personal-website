import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MainMessage from "./components/MainMessage";
import ProjectContainer from "./components/ProjectContainer";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <>
        <Header />
        <MainMessage />
        <ProjectContainer id="projectcontainer" />
        <About id="about" />
        <Footer id="footer" />
      </>
    </Router>
  );
}

export default App;
