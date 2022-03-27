import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [random, setRandom] = useState([]);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    if (newCart.length > 4) {
      alert("You can choose only 4 Item");
      return;
    }
    setCart(newCart);
  };
  const pickOne = () => {
    const randomItems = Math.round(Math.random() * cart.length);
    setRandom(cart[randomItems].name);
  };
  const pickAgain = () => {
    setCart([]);
    setRandom([]);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="row w-100">
      <div className="product col-lg-9 ">
        <div className="row row-cols-3 container mx-auto">
          {products.map((product) => (
            <Product
              product={product}
              key={product.id}
              addToCart={addToCart}
            ></Product>
          ))}
        </div>
      </div>
      <div className="cart col-lg-3 mt-5">
        <Cart
          pickAgain={pickAgain}
          random={random}
          pickOne={pickOne}
          cart={cart}
        ></Cart>
      </div>
    </div>
  );
};

export default Products;
