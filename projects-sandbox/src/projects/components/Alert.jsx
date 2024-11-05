import React, { useState, useEffect } from "react";
import Button from "./Button";

export default function Alert({ message, alert_class, delay = false, delay_time = 5000 }) {
  const [showAlert, setShowAlert] = useState(true);

  // Close alert on click
  const closeAlert = (e) => {
    e.target.parentElement.parentElement.classList.add("fade-in-effect");

    // Timer for Fade affect
    setTimeout(() => {
      setShowAlert(false);
    }, 300);
  };

  // Auto close the alert component with delay set to true
  // Here the timer is set to provided delay_time
  useEffect(() => {
    delay &&
      setTimeout(() => {
        setShowAlert(false);
      }, delay_time);
  });

  return (
    showAlert && (
      <div className={`alert alert-${alert_class}`}>
        <div className="d-flex justify-content-between">
          <span>{message}</span>
          <Button btn_class={"btn-close"} text={""} onClick={closeAlert} />
        </div>
      </div>
    )
  );
}
