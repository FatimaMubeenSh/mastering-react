import React, { useContext } from "react";
import Title from "./../components/Title";
import Button from "./../components/Button";
import { ThemeContext } from "./context/theme-context";

export default function Blog() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div className="container">
      <Title text="My Blog" />
      <Title text={`Current Theme is ${theme}`} custom_class={"secondary-title"} />
      <span style={{ position: "absolute", top: 10, right: 10 }}>
        <Button text={theme === "dark" ? "Light" : "Dark"} btn_class={`${theme === "dark" ? "btn-light" : "btn-dark"} btn-sm`} text_class={`${theme === "dark" ? "text-dark" : ""} btn-sm`} onClick={changeTheme} />
      </span>
      <p className="pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem molestias corrupti, id praesentium a obcaecati laudantium, aperiam accusantium minima laboriosam itaque dolor assumenda expedita odio molestiae officia doloremque! Labore.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maxime rem architecto placeat possimus obcaecati dolore ducimus cum a cupiditate earum, nesciunt error vero quia quas doloremque, expedita, fugit dignissimos!</p>
    </div>
  );
}
