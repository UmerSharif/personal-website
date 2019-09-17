import React from "react";
import "./Hero.scss";

import { Link } from "react-router-dom";

export default function Section() {
  return (
    <section className="hero">
      <div className="container">
        <div className="main-message">
          <h3>The great portfolio</h3>
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
