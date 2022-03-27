import React from "react";

const Cart = ({ cart, pickOne, random, pickAgain }) => {
  return (
    <div className="card sticky-top">
      {cart.map((item) => (
        <div>
          <li>{item.name}</li>
        </div>
      ))}
      <div className="d-flex flex-column align-items-center mt-3">
        <button
          onClick={() => {
            pickOne();
          }}
          className=" btn btn-success"
        >
          Pick Randomly
        </button>
        <h5 className="my-3 ">{random}</h5>
        <button
          onClick={() => {
            pickAgain();
          }}
          className=" btn btn-success"
        >
          Pick Again
        </button>
      </div>
    </div>
  );
};

export default Cart;
