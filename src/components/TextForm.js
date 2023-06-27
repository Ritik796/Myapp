import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleupclick = () => {
    console.log("you click on handleupclick function");
    const newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("converted uppercase successfully","success")
  };
  const handleloclick = () => {
    console.log("you are click on handleloclick");
    const newt = text.toLowerCase();
    setText(newt);
    props.showalert("converted lowercase successfully","success")

  };

  const handleonchane = (event) => {
    console.log("you change the text");
    setText(event.target.value);
  };
  const handleclearclick = (event) => {
    setText("");
    props.showalert("Remove text successfully","success")

  };
  const handleremoveSpaceclick=()=>{
    let net = text.trim()
    setText(net)
  }
  
  return (
    <>
      <div style={{color:props.mode==='light'?'black':'white'}}>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            onChange={handleonchane}
            style={{backgroundColor:props.mode==='light'?'white':'#c6a9a9',color:props.mode==='light'?'black':'white'}}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleupclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-danger" onClick={handleloclick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleclearclick}>
          Cleartext
        </button>
        <button className="btn btn-success mx-2" onClick={handleremoveSpaceclick}>
          Remove Spaces
        </button>
      </div>

      <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your text Summary</h2>
        <p>
          number of words {text.split(" ").length} and number of charcters{" "}
          {text.length}
        </p>
        <p>Reading time of text is {0.008 * text.split(" ").length}</p>
        <h2 className="hr my-3">Preview</h2>
        <p>{text.length>0?text:"enter something to preview here"}</p>
      </div>
    </>
  );
}
