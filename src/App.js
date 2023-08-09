import { Route, Routes, BrowserRouter as Router , Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import { Navigation } from "./components/Navigation";
import Cart from "./pages/Cart";
import ShowProd from "./pages/ShowProd";
import { CartContext } from "./pages/CartContext";
import { useEffect, useState } from "react";

const App = () => {
  const [cart,setCart]=useState({});
  useEffect(()=>{
   const cart=window.localStorage.getItem('cart');
   setCart(JSON.parse(cart));
  },[]);

  useEffect(()=>{
    window.localStorage.setItem('cart',JSON.stringify(cart));
  },[cart]); 
   

  return (
  <Router>
    <CartContext.Provider value={{cart,setCart}}>
         <Navigation/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/products" element={<Product/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/products/:id" element={<ShowProd/>}></Route>
    </Routes>
    </CartContext.Provider>

  </Router>
  );
};

export default App;
