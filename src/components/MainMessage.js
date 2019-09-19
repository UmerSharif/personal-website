import React from "react";
import "./MainMessage.scss";

import { Link } from "react-router-dom";

export default function MainMessage() {
  return (
    <section className="hero">
      <div className="container">
        <div className="main-message">
          <h3 style={{ fontSize: "1.8rem" }}>
            Hi, I am <span style={{ color: "#ff4081" }}>Umer Khan</span>
          </h3>
          <h1>Frontend Web developer</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            ipsum adipisci quos deleniti totam illo nisi perspiciatis
            aliasnostrum voluptatem.
          </p>
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
