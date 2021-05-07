import React, {useState, useEffect} from 'react';

const MultipleReturnBasics = () => {
    const [loading, setLoading] = useState(true);
    
    if (loading) { // Base on some type of condition 
        return <h2>Loading.... 🚕</h2>
    }
    return (
        <>
            <h2>Simple Multiple Return 🚀 </h2>
            </>
    )
}

export default MultipleReturnBasics; 