import React from "react";
// import { FaQuoteRight } from "react-icons/fa";
import Misc from "./Misc";

import "./About.scss";
import Skills from "./Skills";
export default function About({ id }) {
  return (
    <>
      <section className="testimonials" id={id}>
        <div className="container">
          <div className="testimonial">
            <div className="testimonial-text-box">
              <p>
                I am a web developer living in Espoo, Finland. I enjoy building
                everything from user friendly <br /> and responsive web UIs to
                rich interactive web apps. With every line of code, I strive to
                <br />
                make the web a beautiful place. "I belive that anything can be
                achieved through <br />
                Determination, Hardwork and Perseverance."
              </p>

              <span className="about-text">ABOUT</span>
              {/* <FaQuoteRight className="fa__icons" /> */}
            </div>
            <div className="testimonial-customer">
              <img src="/images/profile-me.jpg" alt="" />
              <h1>Umer K.</h1>
            </div>
          </div>
        </div>
      </section>
      <Misc />
      <Skills />
    </>
  );
}
