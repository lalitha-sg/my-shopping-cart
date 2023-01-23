import React from 'react';

export default function Cart(props) {
      const { cartItems, removeCart } = props;
      const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

      return <aside className="block col-1">
            <h2>Products in Cart</h2>
            <div>
                  {cartItems.length === 0 && <div>Cart is empty</div>}
                  {cartItems.map((item) => (
                        <div key={item.id} className='flex-container'>
                              <div className='col-2'>{item.name}</div>
                              <div className='col-2'>{item.qty}</div>
                              <div className='col-2'>
                                   
                                    <button onClick={() => removeCart(item)} className="remove">Remove</button>
                              </div>
                              <div className='col-2 text-right'>
                                    {item.qty} X ${item.price.toFixed(2)}
                              </div>
                        </div>
                  ))}
            </div>
            {cartItems.length !== 0 && (
                  <>
                        <hr></hr>
                        <div className='row'>
                              <div className='col-2'><strong>Total Price</strong></div>
                              <div className='col-1 text-right'>${totalPrice.toFixed(2)}</div>
                        </div>
                  </>
            )}
      </aside>
}