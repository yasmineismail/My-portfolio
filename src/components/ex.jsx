import React from "react";
import { useState } from "react";
import "./ex.css";
const Ex = () => {
  const [appState, changeState] = useState({
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
  });

  const [activeObject, SetActive] = useState(appState.objects[0]);
  function toggleActive(index) {
    SetActive(appState.objects[index]);
  }
  function toggleActiveStyle(index) {
    if (appState.objects[index] == activeObject) {
      return "box active";
    } else {
      return "box inactive";
    }
  }
  return (
    <div>
      {appState.objects.map((elements, index) => (
        <div
          key={index}
          className={toggleActiveStyle(index)}
          onClick={() => {
            toggleActive(index);
          }}
        ></div>
        ))}

        
    </div>
  );
};

export default Ex;
