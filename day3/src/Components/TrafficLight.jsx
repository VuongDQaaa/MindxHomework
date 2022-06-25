import { Light } from "./Light";
import "../Style.css";
import { useState } from "react";

export const TrafficLight = () => {
  const colors = ["red", "yellow", "green"];
  const [light, setLight] = useState("red");

  const handleLight = () => {
    setLight(colors);
  };

  return (
    <div>
      <div>
        <button onClick={handleLight}>Next</button>
      </div>
      <div className="app">
        {colors.map((color) => {
          return <Light color={color} light={light} setLight ={setLight}/>;
        })}
      </div>
    </div>
  );
};
