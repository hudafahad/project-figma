import React from 'react'
import ProductsCard from '../Component/ProductsCard';
import './Products.css';
 function Products({products}) {
  return (
    <div className='products-page'>
        <h1>All Products </h1> 
        <div className='products-list'>
     {products.map((P)=>(
     <ProductsCard
     key={P.ID}
     ID={P.ID}
     name={P.name}
     price={P.price}
     Image={P.Image}
     />
     ))}
     </div>
     </div>
  )
}
 export default Products;