import React from 'react';
import { data } from './data'; 
const UseStateArray = () => {
    const [people, setPeople] = React.useState(data);
    //Here when we click the button , we will set empty array to setPeople. 
    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id ); 
        setPeople(newPeople); 
    }
    return (
        <React.Fragment>
            {people.map((person) => {
                const { id, name } = person;
                return (<div key={id} className="item"> <h4>{name}</h4>
                <button className="btn" onClick={() => removeItem(id)}>Remove Items </button>
                </div>)
            })}
            <button className="btn" onClick={() => { setPeople([]) }}>clear Items </button>
            <button className="btn" onClick={() => setPeople(data)}>Add Items </button>
            
        </React.Fragment>
    )
}

export default UseStateArray; 