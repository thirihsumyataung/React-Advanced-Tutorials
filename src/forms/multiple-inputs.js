import React, { useState } from 'react'; 

//Js 
//const input = document.getElementById ('mytext'); 
//const inputValue = input.value

// React 
//value , onChange

//Dynamic Object Properties
function MultipleControlledInputs() {
    
    const [person, setPerson] = useState({
        firstName: "",
        email: "",
        age: ""
    }); 
    const [people, setPeople] = useState([]);
    
    const handleChange = (e) => {
        // name and value attributes 
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name, value);
        //setPerson({ ...person,[name] }); // it was either name or age or email 
        setPerson({ ...person, [name]: value });
        //console.log(person); 
        
    }; 
    const handleSubmit = (e) => {
        console.log({ people });
        e.preventDefault();
        if (person.firstName && person.email && person.age) {
            const newPerson = { ...person, id: new Date().getTime().toString() };
            setPeople([...people, newPerson]);
            setPerson({ firstName: "", email: "", age: "" })
            
        }
        //console.log("You clicked the submit"); 
       
    }; 
    return (
        <>
            <article>
                <form className="form" >
                    <div className="form-control">
                        <label htmlFor="firstName">Name: </label>
                        <input type="text" id="firstName" name="firstName" value={person.firstName} onChange={handleChange}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email: </label>
                        <input type="text" id="email" name="email" value={person.email} onChange={handleChange}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="age">Age: </label>
                        <input type="text" id="age" name="age" value={person.age} onChange={handleChange}/>
                    </div>
                <button type="submit" onClick={handleSubmit}>add person </button>
                </form>
                {people.map((person, index) => {
                    const { id, firstName, email , age} = person;
                    return <div key={id} className="item">
                        <h4>{firstName}</h4>
                        <p>{email}</p>
                        <p>{age}</p>
                    </div>
                })}
            </article>
            
            </> 
     ); 
        
        
       
}

export default MultipleControlledInputs;

// const handleSubmit = (e) => {
//         e.preventDefault();
//         if (firstName && email) {
//             const person = {id:new Date().getTime().toString(), firstName, email };
//             setPeople((people) => {
//                 return [...people, person]
//             });
//             setFirstName('');
//             setEmail(''); 
//             console.log(...people); 
//             console.log(person); // It will create the object 
//             console.log("First name is: ", firstName); 
//             console.log("Email is: ", email);
//             console.log('You submitted the form'); 
//         }
//         else {
//             console.log('Empty Values'); 
//         }
      
//     }