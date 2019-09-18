import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import Misc from "./Misc";

import "./About.scss";
export default function About() {
  return (
    <>
      <section className="testimonials">
        <div className="container">
          <div className="testimonial">
            <div className="testimonial-text-box">
              <p>
                "I belive that anything can be achieved through Determination,
                Hardwork and Perseverance."
              </p>
              <FaQuoteRight className="fa__icons" />
            </div>
            <div className="testimonial-customer">
              <img src="/images/profile-me.jpg" alt="" />
              <h1>Umer K.</h1>
            </div>
          </div>
        </div>
      </section>
      <Misc />
    </>
  );
}
