import React, { useState } from "react";
import "./App.css";
import "./Toggle.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import ToggleButtonState from "./components/ToggleButtonState";
// import ButtonClickCounter from "./components/ButtonClickCounter";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = " #052312";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <NavBar title="Texty" mode={mode} toggleMode={toggleMode} />
      <ToggleButtonState mode={mode} />
      {/* <ButtonClickCounter /> */}
      <TextForm heading="Enter the text to analyze" mode={mode} />
    </>
  );
}

export default App;
