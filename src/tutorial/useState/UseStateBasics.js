import React, { useState } from "react";

const UseStateBasics = () => {
    /**
     * Two Params
     * one - State value
     * Second - function which controls that state value
     */

    // Basics
    // console.log(useState("Hello World"));
    // const value = useState(1)[0]
    // const handler = useState(1)[1]
    // console.log(value, handler);
    
    const [text, setText] = useState('Random Title');

    const changeTitle = () => {
        if (text === 'Random Title') {
            setText("Title Changed");
        } else {
            setText("Random Title")
        }
    }

    return (
        <React.Fragment>
            <h1>{text}</h1>
            <button type='button' className='btn' onClick={changeTitle}>Change Title</button>
        </React.Fragment>
    )
}

export default UseStateBasics;