import { Light } from "./Light";
import "../Style.css";
import { useState } from "react";

export const TrafficLight = () => {
  const colors = ["red", "yellow", "green"];
  const [light, setLight] = useState(colors[0]);

  const handleLight = () => {
    if(light === colors[0])
    {
      setLight(colors[1]);
    }
    else if(light === colors[1])
    {
      setLight(colors[2]);
    }
    else if(light === colors[2])
    {
      setLight(colors[0]);
    }
    console.log(light);
  };

  return (
    <div>
      <div>
        <button onClick={handleLight}>Next</button>
      </div>
      <div className="app">
        {colors.map((color) => {
          return <Light color={color} light={light} setLight={setLight} />;
        })}
      </div>
    </div>
  );
};
