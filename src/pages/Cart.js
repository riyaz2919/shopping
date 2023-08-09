import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProductData(cart) {
      try {
        const productData = [];
        const keys = Object.keys(cart.items);

        for (const key of keys) {
          const response = await fetch(
            `https://647456cd7de100807b1aace5.mockapi.io/user/${key}`
          );
          const data = await response.json();

          productData.push(data);
        }

        return productData;
      } catch (error) {
        console.log(error);
        return [];
      }
    }

    if (cart && cart.items) {
      fetchProductData(cart).then((res) => setProducts(res));
    }
  }, [cart]);

  function incr(id) {
    let _cart = { ...cart };
    _cart.items[id] += 1;
    _cart.total += 1;
    setCart(_cart);
  }

  function grandTotal() {
    let tot = 0;
    for (let i = 0; i < products.length; i++) {
      tot += cart.items[products[i].id] * products[i].cost;
    }
    return tot;
  }

  function deleteItem(id) {
    let _cart = { ...cart };
    let oldtot = _cart.total;
    _cart.total -= oldtot;
    delete _cart.items[id];
    setCart(_cart);
  }

  function decre(id) {
    if (cart.items[id] <= 1) {
      deleteItem(id);
    } else {
      let _cart = { ...cart };
      _cart.items[id] -= 1;
      _cart.total -= 1;
      setCart(_cart);
    }
  }

    function orderNow(){
        let _cart={...cart};
      let keys=Object.keys(_cart.items);
      keys.map(id=>deleteItem(id));
      _cart.total=0;
      setCart(_cart);
      window.location.href='http://localhost:5000/payment.html'
    }
  return (
    <div className="container lg:w-1/2 pb-24 mx-auto">
      <h1 className="my-10">Cart items</h1>
      <ul>
        {products.length > 0 ? (
          products.map((prod) => (
            <li key={prod.id} className="my-12">
              <div
                className="flex"
                style={{ justifyContent: "space-evenly", alignItems: "center" }}
              >
                <div className="flex" style={{ alignItems: "center" }}>
                  <img className="h-16" src={prod.url} alt="Product" />
                  <span>{prod.name}</span>
                </div>
                <div>
                  <button
                    onClick={() => decre(prod.id)}
                    className="bg-yellow-500 rounded-full leading-none py-4 px-2"
                  >
                    -
                  </button>
                  <b>{cart.items[prod.id]}</b>
                  <button
                    onClick={() => incr(prod.id)}
                    className="bg-yellow-500 rounded-full leading-none py-4 px-2"
                  >
                    +
                  </button>
                </div>
                <span>{prod.cost * cart.items[prod.id]}</span>
                <button
                  onClick={() => deleteItem(prod.id)}
                  className="bg-red-500 rounded-full leading-none py-4 px-2" style={{color:'white'}}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <li>No products available in the cart.</li>
        )}
      </ul>
      <hr />
      <div className="text-right">
        <b>Grand Total: {grandTotal()}</b>
      </div>
      <div className="text-right">
        <button onClick={()=>{orderNow()}}className="bg-green-500 rounded-full leading-none py-4 px-2">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
