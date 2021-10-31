import { useState, useEffect } from "react";

const url = 'https://api.github.com/users/QuincyLarson';

const UseEffectConditionalRendering = () => {

    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false)
    const [userData, setUserData] = useState('default user')

    useEffect(() => {
        fetch(url)
            .then((resp) => {
                if (resp.status >= 200 && resp.status <=299) {
                    return resp.json()
                } else {
                    setLoading(false)
                    setIsError(true)
                    throw new Error(resp.statusText)
                }
            })
            .then((user) => {
                const {login} = user;
                setUserData(login);
                setLoading(false);
            })
            .catch((error) => console.log(error))
    }, [])

    if (loading) {
        return (
            <div>
                <h1>Loading....</h1>
            </div>
        )
    }

    if (isError) {
        return (
            <div>
                <h1>Error Occured While Fetching Data....</h1>
            </div>
        )
    }
    return (
        <div>
            <h1>{userData}</h1>
        </div>
    )
}

export default UseEffectConditionalRendering;