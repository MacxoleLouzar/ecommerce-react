import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {BsFillCartPlusFill} from 'react-icons/bs'

const MealProd = ({product}) => {
  return (
    <>
     <div className="col-md-3 my-2">
      <Card>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.ingredients}</Card.Text>
          <Card.Title>R{product.price}</Card.Title>
          <Button variant="primary"><BsFillCartPlusFill/> </Button>
        </Card.Body>
      </Card>
    </div>
    </>
   
  );
};

export default MealProd;
