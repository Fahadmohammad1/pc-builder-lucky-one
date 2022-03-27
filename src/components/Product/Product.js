import React from "react";
import { Button, Card } from "react-bootstrap";

const Product = ({ product, addToCart }) => {
  return (
    <div className="mb-4">
      <Card className="rounded-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.picture} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Price: {product.price}</Card.Text>
          <Button
            onClick={() => {
              addToCart(product);
            }}
            variant="dark"
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
