import React from "react";
import { useState } from "react";
export const Nav = () => {
  const [classM, setClass] = useState("nav-menu");
  const [active, setActive] = useState("active");
  return (
    <>
      <header className="header">
        <div className="container1">
          <div className="row">
            <div className="logo">
              <a href="index.html">Y</a>
            </div>
            <div
              className="hamburger-btn outer-shadow hover-in-shadow"
              onClick={() => setClass("nav-menu open")}
            >
              <span></span>
            </div>
          </div>
        </div>
      </header>

      {/* --------------------Nav menu-------------- */}
      <nav className={classM}>
        <div
          className="close-nav-menu outer-shadow hover-in-shadow"
          onClick={() => setClass("nav-menu")}
        >
          &times;
        </div>
        <div className="nav-menu-inner">
          <ul>
            <li>
              <a href="#home" className="link-item inner-shadow active">
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="link-item outer-shadow hover-in-shadow"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="link-item outer-shadow hover-in-shadow"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="link-item outer-shadow hover-in-shadow"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="link-item outer-shadow hover-in-shadow"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="outer-shadow hover-in-shadow">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* ------------copyright text ---------*/}
        <p className="copyright-text">&copy; 2022 the WEBshale</p>
      </nav>
      {/* ------------Navigation menu end---------*/}
    </>
  );
};
