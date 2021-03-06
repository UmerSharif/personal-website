import React, { useState } from "react";
import { FaBars, FaCode } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import "./Header.scss";

import { Link } from "react-scroll";

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
              <Link
                to="/"
                className="nav-link current"
                onClick={() => setActive(!active)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projectcontainer"
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setActive(!active)}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setActive(!active)}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="footer"
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setActive(!active)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
