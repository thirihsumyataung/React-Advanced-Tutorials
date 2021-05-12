import React, { useState } from 'react';
//import ShortCircuitEvaluation from './conditional-rendering/short-circuit-evaluation';
//mport ShowHide from './conditional-rendering/show-hide'; 

//Js 
//const input = document.getElementById ('mytext'); 
//const inputValue = input.value

// React 
//value , onChange
function Forms() {
    const [firstName, setFirstName] = useState(''); // what ever we type here, it will set up the value. 
    const [email, setEmail] = useState('');
    
    const [people, setPeople] = useState([]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName && email) {
            const person = {id:new Date().getTime().toString(), firstName, email };
            setPeople((people) => {
                return [...people, person]
            });
            setFirstName('');
            setEmail(''); 
            console.log(...people); 
            console.log(person); // It will create the object 
            console.log("First name is: ", firstName); 
            console.log("Email is: ", email);
            console.log('You submitted the form'); 
        }
        else {
            console.log('Empty Values'); 
        }
      
    }
    return (
        <>
            <article>
                <form className="form" >
                    <div className="form-control">
                        <label htmlFor="firstName">Name: </label>
                        <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => { setFirstName(e.target.value) }}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email: </label>
                        <input type="text" id="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }}/>
                    </div>
                <button type="submit" onClick={handleSubmit}>add person </button>
                </form>
                {people.map((person, index) => {
                    const { id, firstName, email } = person;
                    return <div key={index} className="item">
                        <h4>{firstName}</h4>
                        <p>{email}</p>
                    </div>
                })}
            </article>
            
            </> 
     ); 
        
        
       
}

export default Forms; 