import React from "react";
import "./portfolio2.css";
import Project1 from "../../assets/images/projet1.png";
import Data from "./Data";
const Portfolio2 = (props) => {
  return (
    <>
      <div
        className={
          props.project == 1 && props.proj == 0 ? "pp portfolio-popup" : " none"
        }
      >
        <div className="pp-details">
          <div className="pp-details-inner">
            <div className="pp-title">
              <h2>Personal potfolio</h2>
              <p>
                Category -{" "}
                <span className="pp-project-category">Web Application</span>
              </p>
            </div>
            <div className="pp-project-details">
              <div className="row">
                <div className="description">
                  <h3>Project Brief:</h3>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias, eaque? Nemo, earum. Dolorum culpa tenetur ad quisquam
                    quod perferendis dolor vero unde voluptates incidunt, eum
                    est, vitae veniam vel quae.
                  </p>
                </div>
                <div className="info">
                  <h3>Project Info</h3>
                  <ul>
                    <li>
                      Date - <span>2020</span>
                    </li>
                    <li>
                      Client - <span>xyz</span>
                    </li>
                    <li>
                      Tools - <span>html, css, javascript</span>
                    </li>
                    <li>
                      web -{" "}
                      <span>
                        <a href="#">www.domain.com</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separator"></div>
      </div>
      <div className="pp-main">
        <div className="pp-main-inner ">
          <div className="pp-project-details-btn outer-shadow hover-in-shadow">
            Project Details
            <i class="fa-solid fa-plus"></i>
          </div>
          <div className="pp-close outer-shadow hover-in-shadow">&times;</div>
          <img src={Project1} className="pp-img outer-shadow " alt="" />
          {/*<div className="pp-counter">1 of 6</div>*/}

          <div className="pp-prev">
            <i className="fa-solid fa-arrow-left prev"></i>{" "}
          </div>
          <div className="pp-next">
            <i className="fa-solid fa-arrow-right next"></i>{" "}
          </div>
        </div>

        {/* ------pp navigation */}
      </div>
    </>
  );
};

export default Portfolio2;
