import { useEffect, useState } from "react";

const UseEffectBasics = () => {

    const [value, setValue] = useState(0)

    useEffect(() => {
        console.log("UseEffect Component");
        if (value >= 0) {
            document.title = `New Messages (${value})`;   
        }
    }, [value])
    console.log("Render Component");
    return (
        <>
            <h1>{value}</h1>

            <button
                type='button'
                className='btn'
                onClick={() => setValue(value + 1)}
            >
                Click Me
            </button>

            <button
                type='button'
                className='btn'
                onClick={() => setValue(0)}
            >
                Reset
            </button>
        </>
    )
}

export default UseEffectBasics;