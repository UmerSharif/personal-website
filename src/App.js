import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import ProjectContainer from "./components/ProjectContainer";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Section />
        <ProjectContainer />
      </>
    </Router>
  );
}

export default App;
