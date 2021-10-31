import React, { useContext, useState } from "react";
import { data } from "../../data";

const PersonContext = React.createContext()
// two components - provider consumer

const ContexAPI = () => {
    const [people, setPeople] = useState(data)

    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id);
        })
    }

    return (
        <PersonContext.Provider value={{ removePerson, people }}>
            <h3>Props Drilling Using ContextAPI</h3>
            <List people={people} />
        </PersonContext.Provider>
    )
}

const List = () => {
    const mainData = useContext(PersonContext)
    console.log(mainData);
    return (
        <>
            {
                mainData.people.map((person) => {
                    return <SinglePerson key={person.id} {...person} />
                })
            }
        </> 
    )
}

const SinglePerson = ({ id, name }) => {
    const { removePerson } = useContext(PersonContext)
    // console.log(removePerson);
    return (
        <div className='item'>
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)}>Remove</button>
        </div>
    )
}

export default ContexAPI;