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

    const handleDownClick = () => {
          setText(text.toLowerCase());  
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
                    <span className='m-2'>
                    <button type='button' className="btn btn-primary" onClick={handleUpClick}>UPPERCASE</button>
                    </span>
                    <span className='m-2'>
                    <button type='button' className="btn btn-primary" onClick={handleDownClick}>LOWERCASE</button>
                    </span>
                  
                    
                </form>
            </div>

            <div className="container my-3">
                <h3>your text summary</h3>
                <p>{text.length} your number of characters</p>

                <p>{text.trim().split(" ").length} your number of words</p>

                <p>{(text.trim().split(" ").length)*0.008} minutes are required to read this paragraph</p>

            </div>


        </div>
    )
}


