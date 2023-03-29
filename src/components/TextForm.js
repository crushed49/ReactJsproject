import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter the text');

    const onHandleClick = () => {
        console.log("clicked");
        let upperString = text.toUpperCase();
        setText(upperString);
    }

    const onHandleLower = () => {
        console.log("clicked");
        let upperString = text.toLowerCase();
        setText(upperString);
    }


    const onHandleChange = (event) => {
        console.log("tried to write in text area");
        setText(event.target.value);
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
            <p>Words {text.split(" ").length} Characters {text.length}</p>
        </div>
    </div>
  )
}
