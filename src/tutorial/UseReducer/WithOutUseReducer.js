import Modal from "./Modal";
import { data } from '../../data'

import { useState } from 'react'

const UseReducer = () => {

    const [name, setName] = useState('')
    const [people, setPeople] = useState(data)
    const [showModal, setShowModal] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            setPeople([...people, { id: new Date().getTime().toString(), name: name }])
            setShowModal(true)
            setName('')
        } else {
            setShowModal(true)
        }
    }

    return (
        <>
            { showModal && <Modal /> }
            <form onSubmit={handleSubmit} className='form'>
                <input 
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button 
                    type='submit'
                    className='btn'
                >
                    Add
                </button>
            </form>

            {
                people.map((person) => {
                    const { id, name } = person
                    return (
                        <div key={id}>
                            <h3>{name}</h3>
                        </div>
                    )
                })
            }
        </>
    )
}

export default UseReducer;