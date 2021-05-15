import React, { useState, useEffect } from 'react';
import { data } from '../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const [name, setName] = useState('Default Name'); 
  const { id } = useParams();
  // Once the component render , it will get that person with find method 
  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name); 
    
  }, [])
  //console.log(useParams()); 
  return (
    <div>
      <h2>{name}</h2>
      <Link to="/people" className="btn">Back to People</Link>
    </div>
  );
};

export default Person;
