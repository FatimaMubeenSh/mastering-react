import React from "react";

export default function Title({ custom_class, text }) {
  return <h1 className={!custom_class ? "container text-center" : custom_class}>{!text ? "Title" : text}</h1>;
}
