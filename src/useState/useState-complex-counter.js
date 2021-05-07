import React, { useState } from 'react';

// Once we click, process should be delay and after that , it should be updated. 
const ComplexCounter = () => {
    const [value, setValue] = useState(0);
    const reset = () => {
        setValue(0); // Passing the value directly into our set function. 
    }
//setTimeout FUnction need two parameter passing : callback function and time . 
    const complexIncrease = () => {
        setTimeout(() => {
            //setValue(value + 1);
            // In this case , setValue can be increased as many as we clicked. 
            setValue((prevState) => {
                return prevState + 1; 
            })
        }, 2000); 
    }
    return (
        <React.Fragment>
            <section style={{margin: '4rem 0'}}>
                <h2>Complex Counter</h2>
                <h1>{value} </h1>
                <button className="btn" onClick={complexIncrease}> Increase Later </button>

            </section>
        </React.Fragment>
    ); 
}

export default ComplexCounter; 