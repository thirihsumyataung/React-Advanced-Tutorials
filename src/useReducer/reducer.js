export const reducer = (state, action) => {
   // console.log(state, action);
    
   // 
    
    //ADD_ITEM action here 
    if (action.type === "ADD_ITEM") { // action is to check the type here if Testing 
        const newPeople = [...state.people, action.payload];
        return {...state, people:newPeople, isModalOpen:true, modalContent:"Item added."};   // ** always need to keep the state value {...state} which means copy all the state right before the update , then add what value is changed 
    }

    // NO_VALUE action here 
    if (action.type === "NO_VALUE") {

        // i still want to show my people and model 
         return {...state, isModalOpen:true, modalContent:"Please Enter Value"};
    }

    // To close the Modal in 3 sections after adding the item. 
    if (action.type === "CLOSE_MODAL") {
        return { ...state, isModalOpen: false }; // I want to call it after three seconds 
    }


    //FOR remove item button 
    if (action.type === "REMOVE_ITEM") {
        const newPeople = state.people.filter((person) => person.id !== action.payload);
        return { ...state, people: newPeople , modalContent: "Item Removed"}; 
    }

    throw new Error('No matching action type'); 
    //return state; 
}