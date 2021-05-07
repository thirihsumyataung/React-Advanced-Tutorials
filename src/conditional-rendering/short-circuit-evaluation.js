import React, { useState} from 'react';

// SHort Circuit Evaluation  || && 

// Ternary Operator 

const ShortCircuitEvaluation = () => {
    const [text, setText] = useState('');
    const [isError, setIsError] = useState(false); 
    const firstValue = text || 'Hello World';
    const secondValue = text && 'hello world';
    console.log(secondValue); 
    return (<>
        
        <h4>- Short Circuit Evaluation -</h4>
        <h4>{text || 'Ying Tee 🏎'}</h4>
        { !text && <h1>Hello World</h1>}
        <h1>------------------------------</h1>
        <h4>-------Ternary Operator-------</h4>
        <button className='btn' onClick={()=> setIsError(!isError)}>Toggle Error</button>
        {isError && <h2>Error 🤯</h2>}
        { isError ? <p>There is an Error 🚫</p> : <p> No Error.. Cheers🍷</p>}
       
        </> )
}

export default ShortCircuitEvaluation;

// if there is a if statement in return , error --> Parsing Error : Unexpected Token 
//not allowed in react .

// Short Circuit Evaluation || && 
//{/* <h4>{text || 'Ying Tee 🏎'}</h4>
//{ !text && <h1>Hello World</h1> } */}
//


// Something ? True : False --> Whether it is true or false