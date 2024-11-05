import React, { useState } from "react";
import Title from "./../components/Title";
import Button from "../components/Button";
import { GrPowerReset } from "react-icons/gr";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function TemperatureController() {
  const [temperature, setTemperature] = useState(0);

  const resetTemperature = () => {
    setTemperature(0);
  };

  const increaseTemperature = () => {
    setTemperature(temperature + 1);
  };

  const decreaseTemperature = () => {
    setTemperature(temperature - 1);
  };

  return (
    <div className="container mx-auto">
      <Title text={"Temperature Controller App"} custom_class={"text-info"} />
      <div className="shadow-md card bg-light mx-auto mt-4" style={{ width: "265px" }}>
        <div
          className={`shadow-lg mt-2 d-flex justify-content-center align-items-center text-light card border-50 ${temperature > 0 ? "bg-danger" : "bg-info"}`}
          style={{
            height: 200,
            width: 200,
            border: "2px solid #666",
            borderRadius: 100,
          }}
        >
          <span className="display-2">{temperature} °</span>
        </div>
        <div className="d-flex justify-content-between my-4">
          <Button text={""} icon={<FaMinus />} btn_class={"btn-lg btn-dark"} text_class="p-0" onClick={decreaseTemperature} />
          <Button text={""} icon={<FaPlus />} btn_class={"btn-lg btn-dark"} text_class="p-0" onClick={increaseTemperature} />
          <Button text={""} icon={<GrPowerReset />} btn_class={"btn-lg btn-dark"} text_class="p-0" onClick={resetTemperature} />
        </div>
      </div>
    </div>
  );
}
