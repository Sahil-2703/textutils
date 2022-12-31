import React, { useState } from 'react'
import Buttons from './Buttons';




const TextForm = (props) => {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState('');

    return (
        <div className='contents' style={{ border: props.mode === 'dark' ? '1px solid white' : '1px solid #042743', width:'70vw', marginLeft: '15vw', marginTop:'3vw' }}>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <div className="d-flex">
                <Buttons disable={text.length === 0} btn_func={handleUpClick} btn_name="Convert to Uppercase"/>
                <Buttons disable={text.length === 0} btn_func={handleLoClick} btn_name="Convert to Lowercase"/>
                <Buttons disable={text.length === 0} btn_func={handleClearClick} btn_name="Clear Text"/>
                <Buttons disable={text.length === 0} btn_func={handleCopy} btn_name="Copy Text"/>
                <Buttons disable={text.length === 0} btn_func={handleExtraSpaces} btn_name="Remove Extra Spaces"/>
                </div>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </div>
    )
}

export default TextForm;