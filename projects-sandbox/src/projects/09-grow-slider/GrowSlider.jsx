import { React, useState } from "react";
import SliderBar from "./SliderBar";
import Title from "./../components/Title";

export default function GrowSlider() {
  const [slideValue, setSlideValue] = useState(0);

  const handleSliderChange = (e) => {
    setSlideValue(e.target.value);
  };

  return (
    <div>
      <Title text="Move Slider to Grow Circle" />
      <SliderBar slider_value={slideValue} handleSlider={handleSliderChange} />
    </div>
  );
}
