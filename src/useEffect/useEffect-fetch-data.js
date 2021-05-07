import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users'; 
const FetchingData = () => {
    const [users, setUsers] = useState([]);
    //Async should be only insif ethe use Effect call back function or outside . 
    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers (users);// it will  crash 
        console.log(users); 
    }
    useEffect(() => {
        getUsers(); 
     })
    return (
        <>
            <h2>Github Users 👑 </h2>
            <ul className="users">
                  {
                    users.map((user) => {
                        const { id, login, avatar_url, html_url } = user; 
                        console.log({ id, login, avatar_url, html_url });
                        return (<li key={id}>
                    
                            <img src={avatar_url} alt={login} />
                            <div>
                                <h4>{login}</h4>
                            <a href = {html_url}>Profile</a>
                            </div>
                            
                </li>)
            })}

            </ul>
          
    </>
    ); 
}

export default FetchingData; 
