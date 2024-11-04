import React from "react";

export default function Button({ btn_class, text = "Click", icon, onClick, icon_class = "", text_class = "" }) {
  return (
    <button className={`btn text-white ${btn_class}`} onClick={onClick}>
      <div className="d-flex">
        <i className={icon_class}>{icon}</i>
        <span className={`btn-text ${text_class}`}>{text}</span>
      </div>
    </button>
  );
}
