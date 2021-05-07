import React, {useState, useEffect} from 'react';
const url = 'https://api.github.com/users/QuincyLarson'; 

const MultipleReturnFetching = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState('default user'); 
    
//If there is the user named Quincy Larson , it will work
//We will control our condition 
    
    useEffect(() => {
        setIsLoading(true); 
        fetch(url)
            .then((res) => {
                if (res.status >= 200 && res.status <= 299) {
                    return res.json();
                }
                else {
                    setIsLoading(false);
                    setIsError(true);
                    throw new Error(res.statusText); 
                    
                }
                
            })
            .then((user) => {
                const { login } = user;
                setUser(login);
                setIsLoading(false); // initial  state of loading will change if there is a user named Quincy Larson
                console.log(user)
            })
            .catch(error => console.log(error));
    }, [])
    if (isLoading) { // Base on some type of condition 
        return <h2>Loading.... 🚕</h2>
    }

    if (isError) {
        return <h2>Error....🚨 </h2>
    }
    return (
        <>
            <h2>{user} 🚀 </h2>
            </>
    )
}

export default MultipleReturnFetching; 