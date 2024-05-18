import React, { useState } from "react";
import PropTypes from "prop-types";
export default function TextForm(props) {
  const handleLowClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };
  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleToclear = () => {
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      ></div>

      <h1
        className="m-5"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        {props.heading}
      </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          id="myBox"
          rows="9"
        ></textarea>
      </div>

      <button className="btn btn-primary m-3" onClick={handleUpclick}>
        Convert to Upper
      </button>
      <button className="btn btn-primary m-3" onClick={handleLowClick}>
        Convert to Lower
      </button>
      <button className="btn btn-primary" onClick={handleToclear}>
        Clear
      </button>

      {
        // <button className="btn btn-primary m-3" onClick={handleToBold}>
        //   bold
        // </button>
      }

      <div
        className="container "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Your Text Summery
        </h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
TextForm.propTypes = { heading: PropTypes.string };
