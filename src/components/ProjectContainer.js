import React from "react";
import { Link } from "react-router-dom";
import "./ProjectContainer.scss";

export default function ProjectContainer() {
  return (
    <section className="work-experience">
      <div className="container">
        <div className="title-heading">
          <h3>Experience</h3>
          <h1>Thrilling Projects</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit . Ullam,
            quam vel quae consequuntur hic consectetur eveniet molestias tenetur{" "}
          </p>
        </div>
        <div className="activities-grid">
          <div className="activities-grid-item star-gazing">
            <h1>Project 1</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              blanditiis a veritatis molestiae enim molestias ipsa magnam.
            </p>
            {/* button */}
            <div className="cta">
              <Link to="#" className="btn">
                <span>See Projects</span>
              </Link>
            </div>

            {/* bottom buttons */}
            <div className="bottom-buttons">
              <div className="btn-github">github</div>
              <div className="btn-info">info</div>
            </div>
          </div>

          <div className="activities-grid-item star-gazing">
            <h1>Project 2</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              blanditiis a veritatis molestiae enim molestias ipsa magnam.
            </p>
          </div>

          <div className="activities-grid-item star-gazing">
            <h1>Project 3</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              blanditiis a veritatis molestiae enim molestias ipsa magnam.
            </p>
          </div>
          <div className="activities-grid-item star-gazing">
            <h1>Project 4</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              blanditiis a veritatis molestiae enim molestias ipsa magnam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
