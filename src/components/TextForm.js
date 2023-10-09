import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success : ");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success : ");
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Your text has Cleared", "success : ");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("You message will speak", "success : ");
  };
  const handleCopyClick = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Your text has been copied", "success : ");
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "dark" : "light",
          width: "100%",
        }}
      >
        <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>
          {props.heading}
        </h1>
        <div>
          <textarea
            className="form-control mb-2"
            style={{
              background: props.mode === "light" ? "white" : "grey",
              color: props.mode === "dark" ? "white" : "black",
              width: "100%",
            }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          className="btn btn-primary mt-1"
          style={{ width: "100%" }}
          onClick={handleUpClick}
        >
          Convert To UPPERCASE
        </button>
        <button
          className="btn btn-primary mt-1"
          style={{ width: "100%" }}
          onClick={handleLoClick}
        >
          Convert To lowercase
        </button>
        <button
          className="btn btn-primary mt-1"
          style={{ width: "100%" }}
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-primary mt-1"
          style={{ width: "100%" }}
        >
          Speak
        </button>
        <button
          className="btn btn-primary mt-1"
          style={{ width: "100%" }}
          onClick={handleCopyClick}
        >
          Copy Text
        </button>
      </div>
      <div
        className="container "
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Text Summary</h2>
        <p>{text.length} : Characters</p>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          : Words
        </p>
        <p>{0.008 * text.split(" ").length}Read in Minutes</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Some text to see Preview"}</p>
        <h2>Reverse Preview</h2>
        <p>{text.split("").reverse().join("")}</p>
      </div>
    </>
  );
}
