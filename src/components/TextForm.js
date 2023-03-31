import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter the text');

    const onHandleClick = () => {
        console.log("clicked");
        let upperString = text.toUpperCase();
        setText(upperString);
        props.showAlert("Converted to Upper Case","success")
    }

    const onHandleLower = () => {
        console.log("clicked");
        let upperString = text.toLowerCase();
        setText(upperString);
        props.showAlert("Converted to Lower Case","success")
    }


    const onHandleChange = (event) => {
        console.log("tried to write in text area");
        setText(event.target.value);
    }

    let wcounter = (string) => {
        return string.split(" ").filter(function(string){
           return string !== ""
        }).length;
    }
  return (
    <div style = {{color : props.mode === 'dark'?'White':'grey'}}>
        <h1>{props.title}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="Mytext" value={text} onChange={onHandleChange} rows="10" style = {{backgroundColor : props.mode === 'dark'?'grey':'White'}}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={onHandleClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={onHandleLower}>Convert to Lowercase</button>
        <div className="container my-3">
            <h2>Preview</h2>
            <p>{text.length > 0?text : "Enter text for preview"}</p>
            <p>Words {wcounter(text)} Characters {text.length}</p>
        </div>
    </div>
  )
}
