import React from "react";
import "./Misc.scss";
import { FaRocket, FaLaptopCode, FaLightbulb } from "react-icons/fa";
import { MdImportantDevices } from "react-icons/md";
export default function Misc() {
  return (
    <section className="miscellenous">
      <div className="container">
        <div className="title-heading">
          <span className="border-bottom">What I Strive for</span>
        </div>
        <div className="miscellenous-grid">
          <div className="miscellenous-grid-item">
            <FaLightbulb className="fa__icons" />
            <h2>Intuitive</h2>
            <p>
              Designing and developing Apps, with strong emphasis on Intuitve
              UX/UI.
            </p>
          </div>
          <div className="miscellenous-grid-item">
            <MdImportantDevices className="fa__icons" />
            <h2>Responsive</h2>
            <p>
              Focused on crafting responsive UIs that will work on all devices.
            </p>
          </div>
          <div className="miscellenous-grid-item">
            <FaRocket className="fa__icons" />
            <h2>Dynamic</h2>
            <p>
              I love bringing Apps to life, by creating amazing animation
              effects.
            </p>
          </div>
          <div className="miscellenous-grid-item">
            <FaLaptopCode className="fa__icons" />
            <h2>Code</h2>
            <p>
              Love writing clean and simple code that is easy to maintain and
              read.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
