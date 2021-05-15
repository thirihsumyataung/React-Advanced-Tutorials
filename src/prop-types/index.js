import React from 'react'
import Product from './Product'
import { useFetch } from '../custom-hooks/2-useFetch'
import defaultImage from "../../src/assets/my.jpeg"; 

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-prop-types-example'

const Index = () => {
  const { products } = useFetch(url); // from useFetch custom hook, i will get back two things from useFetch : Loading and products 
  
  return (
    <div>
      <h2>products</h2>
      <section className='products'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </section>
    </div>
  )
}

export default Index
