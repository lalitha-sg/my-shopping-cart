//import logo from './logo.svg';
//import './App.css';
import Header from './comoponents/Header';
import Main from './comoponents/Main';
import Cart from './comoponents/Cart';
import produtsData from './produtsData';
import { useState } from 'react';

function App() {
  const {products} =produtsData;
  const [cartItems, setCartItems] = useState([]);
  const addCart = (product)=>{

    const exist = cartItems.find(x=>x.id === product.id)
    if(exist){
      setCartItems(
        cartItems.map(x=>
          x.id===product.id?{...exist, qty:exist.qty+1}:x
          )
        )
    }else{
      setCartItems([...cartItems, {...product,qty:1}])
    }
  }

  const removeCart = (product)=>{
    const exist = cartItems.find((x)=>x.id===product.id);
    if(exist.qty===1){
      setCartItems(cartItems.filter((x)=>x.id!==product.id))
    }else{
      setCartItems(
        cartItems.map(x=>
          x.id===product.id?{...exist, qty:exist.qty-1}:x
          )
        )
    }
  } 

  return (
    <div className="App">
      <Header />
      <div className="row">
        <Main addCart={addCart} products={products}></Main>
        <Cart removeCart={removeCart} cartItems={cartItems}></Cart>
      </div>
    </div>
  );
}

export default App;
