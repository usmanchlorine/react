import React, { useState } from 'react'

// useState is used to state variable 
export default function TextForm(props) {



    const handleUpClick = () => {
        // console.log('upper case was clicked');
        let new_text = text.toUpperCase();
        setText(new_text);
    }

    const handleOnChange = (event) => {
        // console.log('Onchange');
        setText(event.target.value);

    }



    const [text, setText] = useState(''); // i have created a state variable 



    return (
        <div>
            <div className="container mt-5">
                <form>
                    <div className="mb-3">
                        <label htmlFor="myBox" className="form-label"><h1>{props.label}</h1></label>
                        <textarea className="form-control" id="myBox" rows="7" value={text} onChange={handleOnChange}></textarea>
                    </div>
                    <button type='button' className="btn btn-primary" onClick={handleUpClick}>UPPERCASE</button>
                </form>
            </div>

        </div>
    )
}


