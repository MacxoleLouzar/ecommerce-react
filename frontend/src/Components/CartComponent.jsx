import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AppContext from "../context/AppContext";

const CartComponent = ({product}) => {
  const { removeFromCart } = useContext(AppContext);
  return (
    <Card className="CartComponet">
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>R{product.price}</Card.Text>
        <Button variant="danger" onClick={() => removeFromCart(product)}>
          X
        </Button>
      </Card.Body>
    </Card>
  );
};
export default CartComponent;
