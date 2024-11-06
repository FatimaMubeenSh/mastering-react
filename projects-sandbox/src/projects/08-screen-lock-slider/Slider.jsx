import React from "react";
import "./slider.css";

export default function Slider({ handleInput, sliderValue, width }) {
  let sliderStyle = {
    appearance: "none",
    width: !width ? "300px" : width,
    height: "50px",
    background: "rgba(188, 190, 188, .6)",
    outline: "none",
    borderRadius: "25px",
  };

  return (
    <div>
      <input type="range" className="slider" style={sliderStyle} value={sliderValue} onInput={handleInput} />
    </div>
  );
}
