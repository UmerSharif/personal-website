import React from "react";
import "./MainMessage.scss";

import { Link } from "react-router-dom";

export default function MainMessage() {
  return (
    <section className="hero">
      <div className="container">
        <div className="main-message">
          <h1>
            Hello, I am <span style={{ color: "#ff4081" }}>Umer Khan</span>
          </h1>
          <h1>I'm full-stack Web developer</h1>
          <div className="cta">
            <Link to="#" className="btn">
              <span>See Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
