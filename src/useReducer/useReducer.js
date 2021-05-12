import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../data';

import { reducer } from "./reducer"; 
// reducer function
// State right before the update and action what we are going to do . 
// const reducer = (state, action) => {
//    // console.log(state, action);
    
//    // 
    
//     //ADD_ITEM action here 
//     if (action.type === "ADD_ITEM") { // action is to check the type here if Testing 
//         const newPeople = [...state.people, action.payload];
//         return {...state, people:newPeople, isModalOpen:true, modalContent:"Item added."};   // ** always need to keep the state value {...state} which means copy all the state right before the update , then add what value is changed 
//     }

//     // NO_VALUE action here 
//     if (action.type === "NO_VALUE") {

//         // i still want to show my people and model 
//          return {...state, isModalOpen:true, modalContent:"Please Enter Value"};
//     }

//     // To close the Modal in 3 sections after adding the item. 
//     if (action.type === "CLOSE_MODAL") {
//         return { ...state, isModalOpen: false }; // I want to call it after three seconds 
//     }


//     //FOR remove item button 
//     if (action.type === "REMOVE_ITEM") {
//         const newPeople = state.people.filter((person) => person.id !== action.payload);
//         return { ...state, people: newPeople , modalContent: "Item Removed"}; 
//     }

//     throw new Error('No matching action type'); 
//     //return state; 
// }
// We have the default state , which is default object and it has the multiple properties 
// I want to update these things after I called dispatch ****
const defaultState = {
    people: [],
   // people: data, 
    isModalOpen: false,
    modalContent: 'Hello World'
}
const Index = () => {
   // const [people, setPeople] = useState(data);
   // const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(reducer, defaultState);// Reducer function 
    

        const handleSubmit = (e) => {
            e.preventDefault();
            // if it is not the empty string = name is true = if (name)
        if (name) {
            // setShowModal(true);
            // setPeople([...people, { id: new Date.getTime().toString(), name }]);
            // setName(''); 


            const newItem = { id: new Date().getTime().toString(), name }; 
            dispatch({ type: "ADD_ITEM", payload: newItem }); //property by the name of type 
            // Once you dispatched , your reducer : you need to handle it. 
            
            setName(' '); // Once we added the item , we want to clean up the input form. 


        }
        else {
            dispatch({ type: "NO_VALUE" });// The case user input is not a value or empty value  
            //setShowModal(true); 
        }
        
    } //{showModal && <Modal />}
    
    const closeModal= () => { 
        dispatch({ type: "CLOSE_MODAL" }); 
    }
    return (
        <>
            {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
            <form onSubmit={handleSubmit} className="form">
                <div>
                    
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                
                <button type="submit"> Add </button>
            </form>
            {state.people.map((person) => {
                return <div key={person.id} className="item">
                    <h4>{person.name}</h4>
                    <button onClick={() => dispatch({type: "REMOVE_ITEM", payload:person.id})}>Remove</button>
                </div>
            })
            
            }
            

        </>
  
    ); 
};

export default Index;

/* 
 {showModal && <Modal/>} --> only if the showModal is true , Modal component will work else not working 



*/