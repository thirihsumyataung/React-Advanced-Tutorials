import React, { useEffect, useRef } from 'react';

// Reserves value 
// Does not trigger re-render 
//target DOM nodes/elements 
//which looks like other Hooks input or dot and other DOM name

const UseRefBasics = () => {
    const refContainer = useRef(null);
     const divContainer = useRef(null); 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refContainer.current.value);
        console.log(divContainer.current);  // div container will reference to <div> Hello World </div> Now 
        
    }
   // console.log(refContainer);  
    
    useEffect(() => {
        console.log(refContainer.current);
        refContainer.current.focus(); //ref container is current reference to input dom element <input type="text">
    }); 
    return (
        <>
            <form className="form" onSubmit= {handleSubmit}>
                <div>
                    <input type="text" ref={refContainer}/>
                    <button type="submit"> Submit </button>

                </div>
                

            </form>
            <div ref={divContainer}> Hello World</div>
            
            </> 
        )
}

export default UseRefBasics; 