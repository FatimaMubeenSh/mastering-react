import React from "react";

export default function SliderBar({ slider_value, handleSlider, bg_color, text_color }) {
  const slider_style = {
    appearance: "none",
    width: "100%",
    height: 20,
    background: "lightgray",
    cursor: "pointer",
    opacity: 0.7,
    borderRadius: "25px",
  };
  return (
    <div className="container d-flex flex-column align-items-center">
      <input type="range" min={0} max={100} value={slider_value} onInput={handleSlider} style={slider_style} className="mb-4" />
      <div
        style={{
          color: !text_color ? "black" : text_color,
          background: !bg_color ? "lightgray" : bg_color,
          height: `${slider_value * 3}px`,
          width: `${slider_value * 3}px`,
          fontWeight: 600,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
        }}
      >
        <span>{slider_value}</span>
      </div>
    </div>
  );
}
