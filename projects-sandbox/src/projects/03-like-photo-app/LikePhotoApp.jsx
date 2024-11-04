import React, { useState } from "react";
import Title from "./../components/Title";
import { AiFillSmile, AiOutlineComment, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import dp from "./img/fun_sprinkle.jpg";
import dp2 from "./img/food2.jfif";

export default function LikePhotoApp() {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const toggleLike = () => {
    if (like) {
      setLike(false);
      setCount(count - 1);
    } else {
      setLike(true);
      setCount(count + 1);
    }
  };

  return (
    <div className="container text-center">
      <Title text={"Like My Photo"} />
      <Title text={`Likes ${count}`} custom_class={"secondary-title my-4"} />

      <div className="shadow-lg card text-center p-0 mx-auto" style={{ width: "320px", cursor: "pointer" }}>
        <div className="card-header text-white bg-dark secondary-title">
          <AiFillSmile className="me-2" />
          <small className="card-title mb-0 py-2">Photo App</small>
        </div>
        <div className="card-body p-0">
          <img src={dp} alt="Img here" style={{ height: "fit-content", width: "315px" }} onDoubleClick={toggleLike} />
        </div>
        <div className="card-footer secondary-title text-white bg-dark d-flex justify-content-between">
          <AiOutlineComment />
          {like ? <AiFillHeart className="text-danger" onClick={toggleLike} /> : <AiOutlineHeart onClick={toggleLike} />}
        </div>
      </div>
    </div>
  );
}
