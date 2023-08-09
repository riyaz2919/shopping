import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../pages/CartContext'
export const Navigation = () => {
 const {cart}=useContext(CartContext);
 
  const Cart={
    backgroundColor:'red',
    borderRadius:'40px',
    width:'50px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
  return (
   <>
   
  
    
      <nav className='container mx-auto flex items-center justify-between py-4'>
      <a >SHOPPERS STOP</a>
      <ul className='flex items-center'>
        <li className='ml-6'><Link to={'/products'}>PRODUTS</Link></li>
       
        <li className='ml-6'>
          <Link to={"/cart"}>
          <div style={Cart}>
          <span style={{color:'white'}}>{(!cart)?0:cart.total}</span>
          <i class="fa-solid fa-cart-shopping" style={{color: '#bce52a'}}></i>
          
          </div>
          </Link>
        </li>
      </ul>
      </nav>

  
     </>
  )
}
