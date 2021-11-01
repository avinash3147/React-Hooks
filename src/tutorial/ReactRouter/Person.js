import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'

import { data } from '../../data';

const Person = () => {
    console.log(useParams());
    const [name, setName] = useState('default name')
    const { id } = useParams();

    useEffect(() => {
        const person = data.find((people) => people.id === parseInt(id))
        setName(person.name)
    }, [])

    return (
        <div>
            <h3>{name}</h3>
            <Link to='/people' className='btn'>Back People</Link>
        </div>
    )
}

export default Person;