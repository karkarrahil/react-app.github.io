import React, { useState } from 'react'
import PropTypes from 'prop-types'
export default function TextForm(props) {
    const [text, setText] = useState("enter some Text...");
    const handleUpClick = () => {

        let newText = text.toLocaleUpperCase();
        setText(newText);
        props.showAlert("text is converted to Upper case", "success")

    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const clearWords = () => {
        setText('');
    }
    const lowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("text is converted to loewer case", "success")
    }

    const copyText = () => {
        //  console.log("copyText");
        navigator.clipboard.writeText(text);
        props.showAlert("text is copy", "info")
    }
    let count = 0;
    let split = text.split(' ');

    for (let i = 0; i < split.length; i++) {
        if (split[i] !== ""){
            count += 1;
        }
    }
    return (
        <>
            <div>
                <h2>{props.heading}</h2>
                <textarea className="form-control text-light" rows="8" value={text} onChange={handleOnChange}></textarea>
                <button className='btn btn-primary my-3 mx-2' onClick={handleUpClick}>Alphabetic</button>
                <button className="btn btn-danger mx-2" onClick={clearWords}>clear</button>
                <button className="btn btn-success mx-2" onClick={lowerCase}>LowerCase</button>
                <button className="btn btn-secondary mx-2" id='btn' onClick={copyText}>Copy</button>

                <div>
                    <p>Total character are {text.length},word are {count}.</p>
                    <h2>Preview:</h2>
                    <p>{text}</p>
                </div>

            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
}
