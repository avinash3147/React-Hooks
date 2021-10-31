import { useEffect, useState } from "react";

const UseEffectCleanUp = () => {

    const [size, setSize] = useState(window.innerWidth)
    // console.log(size);

    const checkSize = () => {
        setSize(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", checkSize);

        // once this is done then clean up 
        // before adding another event listener remove existing one
        // return () => {
        //     console.log("Clean Up Event Listener");
        //     window.removeEventListener('resize', checkSize)
        // }
    }, []);

    return (
        <>
            <h1>Window Size</h1>
            <h2>{size} px</h2>
        </>
    )
}

export default UseEffectCleanUp;