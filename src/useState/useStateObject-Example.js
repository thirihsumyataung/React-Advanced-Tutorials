import React, { useState } from 'react';
//import UseStateArray from './usestate-array';

const UseStateObject = () => {
    const [person, setPerson] = useState({ name: 'Marry', age: 24, message: 'random message' });
    console.log(person);
    const changeMessage = () => {
        //setPerson('Hello World'); // It will wipe out all of our object values : name , age and message 
        //Need to spread operator
        setPerson({ ...person, message: 'Hello Marry' });
    }
    return (
        <React.Fragment>
            <h1> </h1>
            <h2>UseState Object Example</h2>
            <h5>{person.name}</h5>
            <h5>{person.age}</h5>
            <h5>{person.message}</h5>
            <button className='btn' onClick= {changeMessage} >Change Message</button>

        </React.Fragment>
        
    ); 
}

export default UseStateObject; 