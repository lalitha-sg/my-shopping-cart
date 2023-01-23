import React from 'react';
import Product from './Product';

export default function Main(props){
      const {products, addCart} =props;
  return (
      <main className="block col-2">
      <h2>Products</h2>
      <div className="flex-container">
         {products.map((product)=>(
            <Product key={product.id} product={product} addCart={addCart}></Product>
         ))}
      </div>
      
     </main>
  )
}