import React, { useState } from 'react';
// useState - function 
const useStateBasics = () => {
    const [text, setText] = useState('1500000');
    
    const handleClick = () => {
        if (text === '1500000') {
            setText('Hello World');
        }
        else {
             setText('1500000');
        }
         
    }
    return (
         <React.Fragment>
            <h2>{text} 👑 </h2>
            <button className="btn" onClick = {handleClick}>Change Title</button>
        </React.Fragment>
    ); 
    
}

export default useStateBasics; 