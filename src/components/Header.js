import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaWindowClose, FaCode } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import "./Header.scss";

export default function Header() {
  const [active, setActive] = useState(false);
  return (
    <header>
      <div className="container">
        <nav>
          <div className="nav-brand">
            <Link to="#">
              <FaCode className="fa__icons" />
            </Link>
          </div>
          <div className="menu-icons">
            <FaBars className="fa__icons" onClick={() => setActive(!active)} />
          </div>
          <ul className={active ? "nav-list active" : "nav-list"}>
            <div className="menu-icons close">
              <MdClose
                className="fa__icons"
                onClick={() => setActive(!active)}
              />
            </div>
            <li className="nav-item">
              <Link to="#" className="nav-link current">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">
                Portfolio
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
      </div>
    </header>
  );
}
