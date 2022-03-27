import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="row w-100">
      <div className="product col-lg-10 ">
        <div className="row row-cols-3 container mx-auto">
          {products.map((product) => (
            <Product product={product} key={product.id}></Product>
          ))}
        </div>
      </div>
      <div className="cart col-lg-2 bg-success">
        <h1>Added Product</h1>
      </div>
    </div>
  );
};

export default Products;
