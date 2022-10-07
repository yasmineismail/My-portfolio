import React from "react";
import "./portfolio.css";
import Menu from "./Menu";
import { useState } from "react";
import Project1 from "../../assets/images/projet1.png";

import Portfolio2 from "./Portfolio2";
const Portfolio = (props) => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category == categoryItem;
    });
    setItems(updatedItems);
  };
  const [project, setProject] = useState(0);
  const [name, setName] = useState("");
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);

  const func = () => {
    if (props.proj == 1) {
      setProject(0);
    }
  };

  const length = images.length;
  const nextSlide = () => {
    setCurrent(current == length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current == 0 ? length - 1 : current - 1);
  };

  return (
    <>
      <section
        className={
          props.toggleState === 5 ? "work container section " : " sec hide"
        }
        id="work"
      >
        <div className={project == 0 ? "active" : "none"}>
          <h2 className="section__title">Recent Works</h2>
          <div className="work__filters">
            <span className="work__item" onClick={() => setItems(Menu)}>
              Everything
            </span>
            <span className="work__item" onClick={() => filterItem("Creative")}>
              Creative
            </span>
            <span className="work__item" onClick={() => filterItem("Art")}>
              Art
            </span>
            <span className="work__item" onClick={() => filterItem("Design")}>
              Design
            </span>
            <span className="work__item" onClick={() => filterItem("Branding")}>
              Branding
            </span>
          </div>
          <div className="work__container grid">
            {items.map((elem) => {
              const { id, image, title, category, images } = elem;
              return (
                <div
                  className="work__card outer-shadow"
                  key={id}
                  onClick={() => {
                    setProject(1);
                    setName(title);
                    setImages(images);
                  }}
                >
                  <div className="work__thumbnal">
                    <img src={image} alt="" className="work__img" />
                    <div className="work__mask"></div>
                  </div>
                  <span className="work__category">{category}</span>
                  <h3 className="work__title">{title}</h3>
                  <a href="" className="work__button">
                    <i className="icon-link work__button-icon"></i>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="projet">
          <div className={project == 1 ? "pp portfolio-popup" : " none"}>
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
                      <h3>{name}</h3>
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Alias, eaque? Nemo, earum. Dolorum culpa tenetur ad
                        quisquam quod perferendis dolor vero unde voluptates
                        incidunt, eum est, vitae veniam vel quae.
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
            <div className="pp-main">
              <div className="pp-main-inner ">
                <div className="pp-project-details-btn outer-shadow hover-in-shadow">
                  Project Details
                  <i className="fa-solid fa-plus"></i>
                </div>
                <div
                  className="pp-close outer-shadow hover-in-shadow"
                  onClick={() => setProject(0)}
                >
                  &times;
                </div>

                {images.map((slide, index) => {
                  return (
                    <div key={index}>
                      {current == index && (
                        <img
                          src={slide}
                          alt="travel image"
                          className="pp-img"
                        />
                      )}
                    </div>
                  );
                })}

                {/*<div className="pp-counter">1 of 6</div>*/}

                <div className="pp-prev" onClick={prevSlide}>
                  <i class="fa-sharp fa-solid fa-chevron-left"></i>{" "}
                </div>
                <div className="pp-next" onClick={nextSlide}>
                  <i class="fa-sharp fa-solid fa-chevron-right"></i>{" "}
                </div>
              </div>

              {/* ------pp navigation */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
