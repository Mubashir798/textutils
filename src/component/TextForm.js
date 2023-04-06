import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    // console.log("Upercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case", "Success");
  };
  const handleLcClick = () => {
    // console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower case", "Success");
  };
  const handleClrText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared", "Success");
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been cleared", "Success");
  };
  // const extractEmails = () => {
  //   let newText = text.match(
  //     /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi
  //   );
  //   setText(newText);
  //   props.showAlert("Emails are Extracted", "Success");

  // };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  //   Text = "new text"; // wrong way to change the value in state
  //   setText("new text"); // correct way to change the value in state

  return (
    <>
      <div
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <div className="mb-3 mt-3">
          <label htmlFor="myBox" className="form-label">
            <h2>{props.heading}</h2>
          </label>
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",

              color: props.mode === "light" ? "black" : "white",
            }}
            className="form-control"
            placeholder="Enter Text Here"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>{" "}
        <button className="btn btn-primary" onClick={handleLcClick}>
          Convert to Lowercase
        </button>{" "}
        <button className="btn btn-primary" onClick={handleCopy}>
          Copy Text
        </button>{" "}
        <button className="btn btn-primary" onClick={handleClrText}>
          Clear Text
        </button>{" "}
        {/* <button className="btn btn-primary" onClick={extractEmails}>
          Extract Emails from the text
        </button>{" "} */}
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>Your Text Summary is :</h2>

        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length - 1} Minutes Read</p>

        <h3>Preview :</h3>
        {text.length > 0 ? text : "Enter something in the text area to preview"}
      </div>
    </>
  );
}
