import React from 'react'
import SingleProduct from '../components/SingleProduct'
import {useState,useEffect,useContext} from 'react';
import { CartContext } from './CartContext';
const Product = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://647456cd7de100807b1aace5.mockapi.io/user').then(response=>response.json()).then(product=>{
        console.log(product);    
        setProducts(product);
        console.log(products);
        });
    },[]); 
    const{name}=useContext(CartContext);
    return (
    <div class='container   pb-24 mx-auto'><h1 class='text-lg font-bold my-8'>
        Product{name}
        </h1>
        <div class='grid grid-cols-5 my-8 gap-20'>
        
        {
           
            products.map(prod=><SingleProduct key={prod.id} product={prod}/>)
        }

       
        </div>
        </div>
  )
}

export default Product