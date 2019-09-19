import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
        <ProjectContainer />
        <About />
        <Footer />
      </>
    </Router>
  );
}

export default App;
