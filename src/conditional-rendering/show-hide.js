import React, { useState, useEffect } from 'react';

const ShowHide = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <button className="btn" onClick={() => setShow(!show)}>show/hide</button>
            { show && <Items/> }
            </> 
    )
}
const Items = () => {
    const[size, setSize] = useState(window.innerWidth);
    const checkSize = () => {
        setSize(window.innerWidth); 
    }
    useEffect(() => {
        window.addEventListener('resize', checkSize);
        //Use the clean up function
        return () => {
            window.removeEventListener('resize', checkSize); 
        }
    }, [])
    return (<div style = {{marginTop: '2rem'}}>
        <h1> - Window Size - </h1>
        <h2> Size: {size}</h2>
    </div>)
}

export default ShowHide; 