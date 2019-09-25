import React from "react";
import "./Footer.scss";
// import { Link } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowCircleUp
} from "react-icons/fa";

export default function Footer({ id }) {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer>
      <div className="footer" id={id}>
        <div className="social">
          <div>
             <a
              href="https://www.facebook.com/umersharif.khan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare className="social-icons" />
			  </a>
         
          </div>
          <div>
            <a
              href="https://github.com/UmerSharif"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icons" />
            </a>
          </div>
          <div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icons" />
           </a>
          </div>
        </div>
        <div className="email-adress">
          <p>
            <FaEnvelope className="email-icon" />
          </p>
          &nbsp;&nbsp;
          <p>umer7614@gmail.com</p>
        </div>
        <div className="copyright">
          <p>
            <span>&copy;</span> 2019 Umer K. All Rights Reserved.
          </p>
        </div>
        <div className="up-button" onClick={() => scrollToTop()}>
          <span>
            <FaArrowCircleUp className="fa__icons" />
          </span>
        </div>
      </div>
    </footer>
  );
}
