import React from "react";
import Alert from "./../components/Alert";

export default function AlertsDisplay() {
  return (
    <div className="container mx-auto" style={{ minWidth: "40rem" }}>
      <Alert alert_class={"success"} message={"Success Alert"} />
      <Alert alert_class={"warning"} message={"Warning Alert"} />
      <Alert alert_class={"info"} message={"Alert will close auto with delay"} delay={true} delay_time={5000} />
    </div>
  );
}
