import { React, useState, useEffect } from "react";
import Slider from "./Slider";
import { AiFillUnlock } from "react-icons/ai";
import LockScreenImg from "./img/blue.jpg";
import HomeScreenImg from "./img/pexels.jpg";

export default function ScreenLockSlider() {
  const [uiProps, setUiProps] = useState({
    uiText: "Unlock screen",
    uiColor: "#eee",
    uiBg: `url(${LockScreenImg}) center/cover no-repeat`,
  });
  const [showSlider, setShowSlider] = useState(true);
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderInput = (e) => {
    setSliderValue(e.target.value);
  };

  useEffect(() => {
    if (sliderValue == 100) {
      setShowSlider(false);
      setUiProps({
        uiText: "Home screen",
        uiColor: "#eee",
        uiBg: `url(${HomeScreenImg}) center/cover no-repeat`,
      });
    }
  }, [sliderValue]);

  const handleLockScreen = (e) => {
    setShowSlider(true);
    setSliderValue(0);
    setUiProps({
      uiText: "Unlock screen",
      uiColor: "#eee",
      uiBg: `url(${LockScreenImg}) center/cover no-repeat`,
    });
  };

  return (
    <div
      className="container d-flex flex-column  justify-content-between shadow-md py-4"
      style={{
        height: "70vh",
        marginTop: "15vh",
        width: 340,
        border: "4px solid #000",
        background: uiProps.uiBg,
      }}
    >
      <h1 className="title" style={{ color: uiProps.uiColor }}>
        {uiProps.uiText}
      </h1>
      {showSlider ? (
        <Slider width={"250px"} handleInput={handleSliderInput} sliderValue={sliderValue} />
      ) : (
        <div>
          <AiFillUnlock className="unlockIcon" onClick={handleLockScreen} />
        </div>
      )}
    </div>
  );
}
