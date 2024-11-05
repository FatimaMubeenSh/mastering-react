import React from "react";

export default function Title({ custom_class, text = "Title" }) {
  return <h1 className={`title ${!custom_class ? "container text-center" : custom_class}`}>{text}</h1>;
}
