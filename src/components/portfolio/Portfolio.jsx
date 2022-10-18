import React from "react";
import "./portfolio.css";
import Menu from "./Menu";
import { useState } from "react";
import Project1 from "../../assets/images/projet1.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import CircularSpinner from "./circulair";

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
  const [description, setDescription] = useState();
  const [info, setInfo] = useState([]);
  const [category, setCategory] = useState();
  const [current, setCurrent] = useState(0);
  const [length, setLength] = useState(0);
  const [Loaded, setLoaded] = useState(false);

  const imageLoad = () => {
    setLoaded(true);
  };

  const nextSlide = () => {
    setCurrent(current == length - 1 ? 0 : current + 1);
    setLoaded(false);
  };
  const prevSlide = () => {
    setCurrent(current == 0 ? length - 1 : current - 1);
    setLoaded(false);
  };

  return (
    <>
      <section
        className={
          props.toggleState === 5 || window.location.pathname === "/portfolio"
            ? "work container section "
            : " sec hide"
        }
      >
        <div className={project == 0 ? "active" : "none"}>
          <h2 className="section__title">Recent Works</h2>
          <div className="work__filters">
            <span className="work__item" onClick={() => setItems(Menu)}>
              Everything
            </span>
            <span className="work__item" onClick={() => filterItem("Django")}>
              Django
            </span>
            <span className="work__item" onClick={() => filterItem("React")}>
              React
            </span>
          </div>
          <div className="work__container grid">
            {items.map((elem) => {
              const { id, image, title, category, images, description, info } =
                elem;
              return (
                <div
                  className="work__card outer-shadow"
                  key={id}
                  onClick={() => {
                    setProject(1);
                    setName(title);
                    setImages(images);
                    setLength(images.length);
                    setCurrent(0);
                    setDescription(description);
                    setInfo(info);
                    setCategory(category);
                  }}
                >
                  <div className="work__thumbnal">
                    <LazyLoadImage
                      effect="blur"
                      src={image}
                      alt=""
                      className="work__img"
                    />
                    <div className="work__mask"></div>
                  </div>
                  <span className="work__category">{category}</span>
                  <h3 className="work__title">{title}</h3>
                  <a className="work__button">
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
                    <span className="pp-project-category">{category}</span>
                  </p>
                </div>
                <div className="pp-project-details">
                  <div className="row">
                    <div className="description">
                      <h3>{name}</h3>
                      <p> {description}</p>
                    </div>
                    <div className="info">
                      <h3>Project Info</h3>
                      <ul>
                        <li>
                          Date - <span>{info[0]}</span>
                        </li>

                        <li>
                          Tools - <span>{info[1]}</span>
                        </li>
                        {/*<li>
                          web -{" "}
                          <span>{/*<a href={info[2]}>{info[2]}</a></span>
                        </li>*/}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="separator"></div>

            <div className="pp-main-inner ">
              <h3>Project Details</h3>
              <div
                className="pp-close outer-shadow hover-in-shadow"
                onClick={() => setProject(0)}
              >
                &times;
              </div>

              {/* ------pp navigation */}
            </div>

            <div className="pp-image">
              {images.map((slide, index) => {
                return (
                  <div key={index}>
                    {current == index && (
                      <img
                        src={slide}
                        alt="travel image"
                        className="pp-img"
                        onLoad={imageLoad}
                      />
                    )}
                  </div>
                );
              })}
              {Loaded == false && (
                <div className="image-container-overlay">
                  <CircularSpinner />
                </div>
              )}
              {/*<div className="pp-counter">1 of 6</div>*/}
              <div className="pp-prev" onClick={prevSlide}>
                <i class="fa-sharp fa-solid fa-chevron-left"></i>{" "}
              </div>
              <div className="pp-next" onClick={nextSlide}>
                <i class="fa-sharp fa-solid fa-chevron-right"></i>{" "}
              </div>
            </div>
            <div className="space"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
