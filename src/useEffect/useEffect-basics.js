import React, { useState, useEffect } from 'react';

// By default runs after every re-render 
// Cleanup Function 
// Second Parameter 

// We cannot call Hook comditionally 

const UseEffectBasic = () => {
    //use Effect will run after every render 
    const [value, setValue] = useState(0);
     useEffect(() => {
         console.log('call UseEffect');
         if (value >= 1) {
             document.title = `New Messages(${value}) `;
         }
         else {
              document.title = `No Message Yet`;
         }
            
        }, [value]); //second condition or second parameter is []array of dependencies or list of dependencies  
        // Each time its dependencies [] will change and re-run. 
    // You can use as many useEffect as you want 
    // but if you left the dependency array [] empty , it will run only one time 
    useEffect(() => {
        console.log('Hello World');
        
    }, []) // In this case , Hello World will be printed only one time, since empty dependency . 
 
    console.log('render component');
    return (
        <>
            <h1>{value}</h1>
            <button className='btn' onClick= {() => setValue( value + 1) }>CLick me </button>

            </> 
    ); 
}

export default UseEffectBasic;

// Note : 
// Result :
// Render component 
// Call useEffect 