import React from "react";

/**
 * function to change title by clicking the button
 * Here upon clicking the button title will not be rendered in the UI
 * for this purose we will be using useState
 * @returns 
 */
const ErrorExample = () => {
    let title = 'Random Title'

    const changeTitle = () => {
        title = "Title Changed";
        console.log(title);
    }

    return (
        <React.Fragment>
            <h2>
                {title}
            </h2>

            <button type='button' className='btn' onClick={changeTitle}>Change Title</button>
        </React.Fragment>
    )
}

export default ErrorExample;