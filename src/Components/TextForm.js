import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase button was clicked"+text);
    // setText( text.toUpperCase());  It is also correct way 
    let newText=text.toUpperCase();
    setText(newText);

  };
  const handleLoClick = () => {
    // console.log("UpperCase button was clicked"+text);
    // setText( text.toUpperCase());  It is also correct way 
    let newText=text.toLowerCase();
    setText(newText);

  };
  const handleClearTextClick = () => {
    // console.log("UpperCase button was clicked"+text);
    // setText( text.toUpperCase());  It is also correct way 
    let newText="";
    setText(newText);

  };
  const handleOnChange = (e) => {
    console.log("On change");
    setText(e.target.value);
  };
  const [text, setText] = useState("");
//   const [count, setCount] = useState(0);
  // setText("Enter kr Bhai")
//   const increasecount=() => {
//     setCount(count++);
//   }
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          value={text}
        ></textarea>
        {/* <button className="count" value={count} onClick={increasecount()}></button> */}
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Click to convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Click to convert to LowerCase
        </button>
        
        <button className="btn btn-primary mx-1" onClick={handleClearTextClick}>
          Clear Text
        </button>
        
      </div>
    </div>
    <div className="container my-3">
        <h1>Your Text Summary:-</h1>
        <p>Your paragraph contains:-  {text.split(" ").length} words and {text.length} characters</p>
        <p>You can read this paragraph in {0.008*text.split(" ").length} minutes</p>
        <h2>Preview:-</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
