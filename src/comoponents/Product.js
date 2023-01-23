import React, { useState } from 'react'
export default function Product(props) {
      const {product, addCart} =props;
     // const {quantity, setQuantity} = useState('')

  return (
    <div>
      <img className='small' src={product.img} alt={product.name}></img>
      <h3>{product.name}</h3>
      <div>${product.price}<br></br>
      <input type='text' id="quantity" name="quantity"></input>
      
      </div>
      <br></br>
      <div>
       <button onClick={()=> addCart(product)}>Add To Cart</button>
            
      </div>
    </div>
  )
}


