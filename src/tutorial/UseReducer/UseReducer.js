import { useReducer, useState } from "react";

import { data } from "../../data";
import Modal from "./Modal";

const reducer = (state, action) => {
    console.log(state);
    if (action.type === 'ADD_ITEM') {
        const newPerson = [...state.people, action.payload]
        return {
            ...state,
            people: newPerson,
            isModalOpen: true,
            modalContent: "Items Added"
        }
    }

    if (action.type === 'NO_VALUE') {
        return {
            ...state,
            isModalOpen: true,
            modalContent: 'Please Add Person Name'
        }
    }

    if (action.type === 'CLOSE_MODAL') {
        return {
            ...state,
            isModalOpen: false
        }
    }

    if (action.type === 'REMOVE_PERSON') {
        const newPersons = state.people.filter((person) => person.id != action.payload)
        return {
            ...state,
            people: newPersons,
            isModalOpen: true,
            modalContent: 'User Removed'
        }
    }
    throw new Error('No Matching Action Type')
}

const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: ''
}

const UseReducer = () => {

    const [name, setName] = useState('')
    const [state, dispatch] = useReducer(reducer, defaultState)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name) {
            const newPerson = { id: new Date().getTime().toString(), name}
            dispatch(( {type: 'ADD_ITEM', payload: newPerson }))
            setName('')
        } else {
            dispatch({ type: 'NO_VALUE' })
        }
    }

    const closeModel =() => {
        dispatch({ type: 'CLOSE_MODAL' })
    }

    return (
        <>
            { state.isModalOpen && <Modal closeModel={closeModel} modalContent={state.modalContent} /> }
            <form className='form' onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type='submit'>Add</button>
            </form>

            {
                state.people.map((person) => {
                    const { id, name } = person
                    return (
                        <div className='item' key={id}>
                            <p>{name}</p>
                            <button className='btn' onClick={() => dispatch({ type: 'REMOVE_PERSON', payload: id})}>Remove</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default UseReducer;