import React, { useState } from "react";

const data = [
  { id: 1, name: 'john' },
  { id: 2, name: 'peter' },
  { id: 3, name: 'susan' },
  { id: 4, name: 'anna' },
];


const UseStateArray = () => {
    const [people, setPeople] = useState(data);

    const displayName = (id) => {

        // Add This Logic

        // let newPeople = people.map((person) => {
        //     if (person.id === id) {
        //         person.name = "Updated Name";
        //     }
        // })
        // console.log(newPeople);
        // setPeople(newPeople);
    }

    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    }

    return (
        <React.Fragment>
            {people.map((person) => {
                const {id, name} = person || {};
                return (
                    <div key={id} className='item'>
                        <h4 onClick={() => displayName(id)}>{name}</h4>
                        <button type='button' className='btn' onClick={() => removeItem(id)}>
                            Remove Item
                        </button>
                    </div>
                )
            })}
            <button type='button' className='btn' onClick={() => setPeople([])}>
                Clear Items
            </button>
        </React.Fragment>
    )
}

export default UseStateArray;