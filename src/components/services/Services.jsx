import React from "react";
import "./services.css";
import Image1 from "../../assets/images/frontendsvg.svg";
import Image2 from "../../assets/images/service-2.svg";
import Image3 from "../../assets/images/databasesvg.svg";
const data = [
  {
    id: 1,
    image: Image1,
    title: "Front-end web development",
    description:
      "Writing optimized front-end code with React js ,HTML , CSS and JavaScript.",
  },
  {
    id: 2,
    image: Image2,
    title: "Backend-end web development",
    description:
      "Creating custom APIs and writing backend code in Python and Django.",
  },
  {
    id: 3,
    image: Image3,
    title: "Databases",
    description: "Creating and querying databases .",
  },
];

const Services = (props) => {
  return (
    <section
      className={
        props.toggleState === 3 || window.location.pathname === "/services"
          ? "services container section "
          : " sec hide"
      }
      id="services"
    >
      <h2 className="section__title">Services</h2>
      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
      .
    </section>
  );
};

export default Services;
