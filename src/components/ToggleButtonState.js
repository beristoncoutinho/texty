import React, { useState } from "react";
import bulbImage from "./bulb.png";

export default function ToggleButtonState() {
  const [isToggled, setIsToggled] = useState(false);

  const handleChange = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      onClick={handleChange}
      className={`toggle-button ${isToggled ? "ON" : "OFF"}`}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      {" "}
      {isToggled ? "ON" : "OFF"}{" "}
      <img
        src={bulbImage}
        alt="Bulb"
        style={{
          marginLeft: "-48px",

          marginTop: "35px",
          width: "80px",
          height: "auto",
        }}
      />{" "}
    </button>
  );
}
