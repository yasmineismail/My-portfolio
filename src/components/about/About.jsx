import React from "react";
import "./about.css";
import Image from "../../assets/images/avatar-2.svg";
import AbouBox from "./AbouBox";
import Me from "../../assets/images/yasmine.png";
import { Routes, Route, useParams } from "react-router-dom";

const About = (props) => {
  console.log(window.location.pathname);
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Resume-YasmineIsmail.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume-YasmineIsmail.pdf";
        alink.click();
      });
    });
  };
  return (
    <section
      className={
        props.toggleState === 2 || window.location.pathname === "/about"
          ? "about container section "
          : " sec hide"
      }
    >
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Me} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Yasmine Ismail, Junior Full Stack web developer from Tunisia,
              based in UAE. I have one year of experience in web development,
              including front-end and back-end technologies and I'm passionate
              for learning new technologies and working with teams to create
              user-friendly web applications.
            </p>
            <a
              className="link-item btn-1 outer-shadow hover-in-shadow"
              onClick={onButtonClick}
            >
              Download CV
            </a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Front-End</h3>
                <span className="skills__number ">50%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage frontend"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Back-End</h3>
                <span className="skills__number ">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage backend"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Problem Solving</h3>
                <span className="skills__number ">50%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage problem"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<AbouBox />*/}
    </section>
  );
};

export default About;
