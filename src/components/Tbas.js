import React from "react";
import { useState } from "react";
import "./ex.css";
function Tabs(props) {
  return (
    <div className="content-tabs">
      <div
        className={
          props.toggleState === 1 ? "content  active-content" : "content"
        }
      >
        <h2>Content 1</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
          vel voluptatum?
        </p>
      </div>

      <div
        className={
          props.toggleState === 2 ? "content  active-content" : "content"
        }
      >
        <h2>Content 2</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          voluptatum qui adipisci.
        </p>
      </div>

      <div
        className={
          props.toggleState === 3 ? "content  active-content" : "content"
        }
      >
        <h2>Content 3</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
          nostrum rerum laudantium totam unde adipisci incidunt modi alias!
          Accusamus in quia odit aspernatur provident et ad vel distinctio
          recusandae totam quidem repudiandae omnis veritatis nostrum laboriosam
          architecto optio rem, dignissimos voluptatum beatae aperiam voluptatem
          atque. Beatae rerum dolores sunt.
        </p>
      </div>
    </div>
  );
}

export default Tabs;
