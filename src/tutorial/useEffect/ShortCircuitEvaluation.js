import { useState } from "react";

const ShortCircuitEvaluation = () => {
    const [text, SetText] = useState('Avi');
    const firstValue = text || 'Hello World!!';
    const secondValue = text && 'Hellow World!!';

    return (
        <>
            <h1>{text || 'Avinash'}</h1>
            {!text && <h1>Hellow World</h1>}
            {text && <h1>Hellow World</h1>}
        </>
    )
}

export default ShortCircuitEvaluation;