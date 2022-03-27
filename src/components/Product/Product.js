import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";

const Product = ({ product, addToCart }) => {
  return (
    <div className="mb-4">
      <Card className="rounded-3" style={{ width: "18rem" }}>
        <Card.Img
          width="150px"
          height="190px"
          variant="top"
          src={product.picture}
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Price: {product.price}</Card.Text>
          <button
            onClick={() => {
              addToCart(product);
            }}
            type="button"
            class="btn btn-outline-dark"
          >
            Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
          </button>
          {/* <Button className="fw-bold btn btn-outline-dark"></Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
