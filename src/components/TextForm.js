import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Upper Case","success")
  };
  const handleLowClick = () => {
    setText(text.toLowerCase());
    
    props.showAlert("Converted to Lower Case","success")
  };
  const handleResetClick=()=>{
    setText("")
  }
  return (

    <>
    
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          onChange={handleOnChange}
          placeholder="Enter Your Text Here"
          value={text}
          id="myBox"
          rows="8"
        ></textarea>
      </div>

      <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleLowClick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleResetClick}>
        Reset
      </button>
    </div>

    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} character</p>
        <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!=0}).length} Minutes</p>
        <h1>Preview</h1>
        <b className="my-5">{text.length>0?text:"Enter the text to preview"}</b>
    
    </div>
    </>
  );
}
