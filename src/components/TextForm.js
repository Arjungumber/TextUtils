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
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges(); // once we copy the text it will deselect i.e highlight nhi hoga
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
        <h1 className="mb-2">{props.heading}</h1>
        <div className="form-group">
          <textarea
            onChange={handleChange}
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button disabled={text.length === 0}  className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button  disabled={text.length === 0}  className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p> 
        {/* filter resolves the blank array issue earlier space was considered as a word but not anymore */}
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
