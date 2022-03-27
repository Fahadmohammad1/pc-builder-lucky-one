import React from "react";
import { Button, Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <div className="mb-4">
      <Card className="rounded-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.picture} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Price: {product.price}</Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
