import React, { useState } from "react";
import Title from "../components/Title";

export default function EsignApp() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <>
      <div className="sign-container mb-4">
        <Title text={name ? name : "Provide Your Sign Below"} custom_class={"title"} />
        <Title text={date ? date : "Select Date"} custom_class={"title secondary-title my-4"} />
        <p>I am committing to learn React and dedicate myself to understanding its core principles and nuances. By focusing on the fundamental concepts like components, state management, and hooks, I will build a solid foundation that will allow me to effectively create responsive and interactive applications. I recognize that React is a powerful library that requires consistent practice, and I am eager to embrace the challenge of learning it thoroughly.</p>
        <p>To deepen my understanding, I am committed to practicing React through hands-on projects. By applying the knowledge I gain to real-world scenarios, I will be able to improve both my technical and problem-solving skills. I plan to start with smaller projects, such as building simple user interfaces, before advancing to more complex applications. Each project will help me consolidate my understanding, allowing me to become more comfortable with React’s unique approach to component-based development.</p>
        <p>I understand that learning React will be a gradual journey, one that requires patience and perseverance. However, I am confident that through dedication and consistent effort, I will be able to master it. I am motivated to reach a level of proficiency where I can not only build robust applications but also contribute meaningfully to any React-based projects.</p>
      </div>
      <footer style={{ position: "fixed", bottom: "1rem", width: "90%" }}>
        <div className="d-flex justify-content-between">
          <input type="date" value={date} name="sign_date" id="sign_date" onChange={handleDateChange} />
          <input type="text" value={name} placeholder="Sign Here" name="signee" id="signee" onChange={handleNameChange} />
        </div>
      </footer>
    </>
  );
}
