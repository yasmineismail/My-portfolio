import React from "react";
import { useState } from "react";
import Data from "./Data";
import Menu from "./Menu";

const Porto = (props) => {
  const [current, setCurrent] = useState(0);
  const length = Menu.length;
  console.log(length);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(Menu) || Menu.length <= 0) {
    return null;
  }
  return (
    <div className={props.project == 1 ? "slide active" : "slide none"}>
      {Menu.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <img src={slide.image} alt="travel image" className="image" />
            )}
          </div>
        );
      })}
      <div className="pp-prev">
        <i className="fa-solid fa-arrow-left prev" onClick={prevSlide}></i>{" "}
      </div>
      <div className="pp-next">
        <i className="fa-solid fa-arrow-right next" onClick={nextSlide}></i>{" "}
      </div>
    </div>
  );
};

export default Porto;
