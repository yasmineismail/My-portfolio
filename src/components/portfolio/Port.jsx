import React from "react";
import Menu from "./Menu";
const Port = () => {
  return (
    <div className="work__container grid">
      {Menu.map((elem) => {
        const { id, image, title, category } = elem;
        return (
          <div className="work__card outer-shadow" key={id}>
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
  );
};

export default Port;
