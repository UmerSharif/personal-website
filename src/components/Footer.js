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
            <Link to="#">
              <FaFacebookSquare className="social-icons" />
            </Link>
          </div>
          <div>
            <a
              href="https://github.com/UmerSharif/event-manager"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icons" />
            </a>
          </div>
          <div>
            <Link to="#">
              <FaLinkedin className="social-icons" />
            </Link>
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
