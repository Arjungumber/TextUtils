import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleCopy = () => {
    console.log("I am Copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  };
  const handleChange = (event) => {
    console.log("On Change");
    setText(event.target.value); // with this we are able to type in the box
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="form-group">
          <textarea
            onChange={handleChange}
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something to Preview.."}</p>
      </div>
    </>
  );
}
