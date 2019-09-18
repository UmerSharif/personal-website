import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import ProjectContainer from "./components/ProjectContainer";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Section />
        <ProjectContainer />
        <About />
        <Footer />
      </>
    </Router>
  );
}

export default App;
