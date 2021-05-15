import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

const Example = () => {

  const { loading, products } = useFetch(url); // need to pass url 
  // if we set [url] as dependency array --- it will be loading 
  //if we see data is printed, which means our fetching worked. 
  console.log(products)
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  )
}

export default Example
