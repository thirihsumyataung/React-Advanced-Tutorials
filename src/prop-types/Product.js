import React from 'react';
// This is the import from the package 
import PropTypes from "prop-types"; // we don't need to download any library 
import defaultImage from "../../src/assets/my.jpeg"; 
const Product = ({ image, name, price }) => {
  console.log({ image, name, price }); // to know what kinds of props we are getting to access
  //In the image object , there is url -> image: { url : " ", }
  // <img src={image.url} alt={name}/> there will be an error since we are getting the property of the object 
  // In this case , we need to use the short circuit 

  const url = image && image.url; // Only is the image and image url is there , url will works; 
  return <article className='product'> 
   <img src={url || defaultImage} alt={name || "default product" }/>
    <h4>
      {name}</h4>
     <p>${price || 3.99 }</p> 
  </article>;
};

//Here propType is the property on the component 
Product.prototype = {
  image: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
  price: PropTypes.object.isRequired
}
// Product.defaultProps = {
//   name: 'default name',
//   price: 3.99,
//   image: defaultImage

// }
export default Product;
