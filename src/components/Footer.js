import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="social">
          <div>
            <Link to="#">
              <FaFacebookSquare className="social-icons" />
            </Link>
          </div>
          <div>
            <Link to="#">
              <FaGithub className="social-icons" />
            </Link>
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
          <p>&copy; 2019 Umer K. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
