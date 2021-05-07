import React, { useState, useEffect } from 'react';

// Clean Up Function 
// Second Argument 

const UseEffectCleanUpFunction = () => {
    const [size, setSize] = useState(window.innerWidth);
    console.log(size);
    const checkSize = () => {
        setSize(window.innerWidth); 
    }
    useEffect(() => {
        console.log('UseEffect');
        window.addEventListener('resize', checkSize);
        
        //cleanup Function 
        return () => {
            console.log('Clean Up Function here');
            window.removeEventListener('resize', checkSize);
        }
    },[]);
    console.log('Render'); 
    return (
        <>
            <h1>UseEffect Cleanup Function </h1>
            <h2>{size} px </h2>
            </>
    )
}
export default UseEffectCleanUpFunction; 