import React from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../pages/CartContext';
import { useContext } from 'react';
const SingleProduct = (props) => {
  const {cart,setCart}=useContext(CartContext);
   const {product}=props;

  function addToCart(e){
   let _cart={...cart};
   e.preventDefault();
   if(!_cart.items){
      _cart.items={};
   }
   if(!_cart.items[product.id]){
      _cart.items[product.id]=1;
   }
   else{
      _cart.items[product.id]+=1;
   }
   if(_cart.total==null){
         _cart.total=0;
   }

      _cart.total+=1;
   
   setCart(_cart);
   console.log(product);
  }
   const Cart={
   backgroundColor:'green',
   borderRadius:'40px',
   width:'50px',
   display:'flex',
   justifyContent:'center',
   alignItems:'center',
   color:'white'
 }
   return (
   <Link to={`/products/${product.id}`}> <div>
            <img src={product.url}></img>
            <span >{product.name}</span>
            <div style={{display:'flex',justifyContent:'space-between'}}>
            <span>{product.age}</span>
           <button style={Cart}onClick={(e)=>addToCart(e,product)} >{product.state}</button>
        </div>
         </div></Link>
  )
}

export default SingleProduct