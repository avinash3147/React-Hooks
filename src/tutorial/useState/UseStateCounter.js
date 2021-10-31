import React, { useState } from "react";

const UseStateCounter = () => {

    const [value, setValue] = useState(0)

    const increment = () => {
        setValue(value + 1)
    }

    const incrementLater = () => {
        setTimeout(() => {
            // setValue(value + 1);
            setValue((prevState) => {
                return prevState + 1;
            })
        }, 2000)
    }

    return (
        <React.Fragment>
            <section style={{ margin: '4rem 0' }}>
                <h2>Regular Counter</h2>
                <h1>{value}</h1>
                <button type='button' className='btn' onClick={increment}>
                    Increment
                </button>

                <button type='button' className='btn' onClick={() => setValue(value - 1)}>
                    Decrement
                </button>

                <button type='button' className='btn' onClick={() => setValue(0)}>
                    Reset
                </button>

                <button type='button' className='btn' onClick={incrementLater}>
                    Increment Later
                </button>
            </section>
        </React.Fragment>
    )
}

export default UseStateCounter;