import React, { useState } from "react"

const UseStateObject = () => {

    const [person, setPerson] = useState({
        name: 'Avinash',
        age: 28,
        message: 'Random Message'
    })

    const changeMessage = () => {
        // setPerson("Hellow World") // This will change dict to string and will have just only string message
        // setPerson({message: 'Hello World'}) // This will remove name and age
        setPerson({...person, message: 'hello world'});
    }
    
    return (
        <React.Fragment>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>

            <button type='button' className='btn' onClick={changeMessage}>
                Change Message
            </button>
        </React.Fragment>
    )
}

export default UseStateObject;
