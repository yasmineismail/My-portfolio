import React from "react";
import "./home2.css";
import Me from "../../assets/images/yy3.png";
import Logo from "../../assets/images/yy3.png";
import HeaderSocials from "./HeaderSocials";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Home2 = (props) => {
  console.log(props);

  return (
    <>
      {/* ------------Home section start---------*/}
      <section
        className={
          props.toggleState === 1 || window.location.pathname === "/"
            ? "home-section section1 "
            : " sec hide"
        }
      >
        {/* ---------Effect wrap start ------  */}
        <div className="effect-wrap">
          <div className="effect effect-1">
            <i class="fa-solid fa-code"></i>
          </div>
          <div className="effect effect-2">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="effect effect-3"></div>
          <div className="effect effect-4">&#9881;</div>
          <div className="effect effect-5">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        {/* ---------Effect wrap end ------  */}

        <div className="container1">
          <div className="row full-screen align-items-center">
            <div className="home-text">
              <p>Hello</p>
              <h2>I'm Yasmine</h2>
              <h1>Junior Full stack developer</h1>
              <HeaderSocials />
              <Link
                to="/about"
                className="link-item btn-1 outer-shadow hover-in-shadow"
              >
                More About Me
              </Link>
            </div>
            <div className="home-img">
              <div className="img-box inner-shadow">
                <img src={Me} alt="profile-pic" className="outer-shadow" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home2;
