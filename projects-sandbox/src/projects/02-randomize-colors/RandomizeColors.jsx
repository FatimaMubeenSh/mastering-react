import React, { useState } from "react";
import Title from "./../components/Title";

export default function RandomizeColors() {
  const handleClick = (e) => {
    let bodyElement = document.querySelector("body");
    let title = document.getElementById("root").querySelector("h1");

    bodyElement.style.background = getRandomColor();
    e.target.style.backgroundColor = getRandomColor();
    title.style.color = getRandomColor();
  };

  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <>
      <Title text={"Randomize Colors"} />
      <div className="d-flex justify-content-center mt-4">
        <button type="button" className="btn btn-primary mx-2" onClick={(e) => handleClick(e)}>
          Primary
        </button>
        <button type="button" className="btn btn-secondary mx-2" onClick={(e) => handleClick(e)}>
          Secondary
        </button>
        <button type="button" className="btn btn-success mx-2" onClick={(e) => handleClick(e)}>
          Success
        </button>
        <button type="button" className="btn btn-danger mx-2" onClick={(e) => handleClick(e)}>
          Danger
        </button>
        <button type="button" className="btn btn-warning" onClick={(e) => handleClick(e)}>
          Warning
        </button>
      </div>
    </>
  );
}
