import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Section />
      </>
    </Router>
  );
}

export default App;
