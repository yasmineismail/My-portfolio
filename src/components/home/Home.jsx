import React from "react";
import "./home.css";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import Me from "../../assets/images/yy3.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" width="150px" />

        <h1 className="home__name">Yasmine ISMAIL</h1>
        <span className="home__education">I'm a Full-Stack developer</span>
        <HeaderSocials />
        <a href="#contact" className="btn">
          Hire Me
        </a>
        <ScrollDown />
      </div>
    </section>
  );
};
