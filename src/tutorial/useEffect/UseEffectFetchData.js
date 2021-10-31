import { useState, useEffect } from "react";

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const response = await fetch(url)
        const users = await response.json()

        console.log(users);
        setUsers(users);
    }

    useEffect(() => {
        // Another ffunction is used becaused async directly can't be called with useEffect
        getUsers()
    }, []);

    return (
        <>
            <h3>GitHub Users</h3>
            <ul className='users'>
                {
                    users.map((user) => {
                        return (
                            <li key={user.id}>
                                <img src={user.avatar_url} alt={user.login} />
                                <div>
                                    <h4>{user.login}</h4>
                                    <a href={user.html_url}>Profile</a>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default UseEffectFetchData;