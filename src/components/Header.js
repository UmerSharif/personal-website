import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaWindowClose } from "react-icons/fa";
import "./Header.scss";

export default function Header() {
  return (
    <header className="container">
      <nav>
        <div className="nav-brand">
          <Link to="#">
            <img src="/images/logo.png" alt="" />
          </Link>
        </div>
        <div className="menu-icons open">
          <FaBars className="fa__icons" />
        </div>
        <ul className="nav-list">
          <div className="menu-icons close">
            <FaWindowClose className="fa__icons" />
          </div>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              Recent Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
