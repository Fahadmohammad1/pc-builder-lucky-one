import React from "react";
import { Button, Card } from "react-bootstrap";

const Cart = ({ cart }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{cart.name}</Card.Title>
          <Button className="mb-3" variant="primary">
            Pick Randomly
          </Button>
          <br />
          <Button variant="primary">Pick Again</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cart;
