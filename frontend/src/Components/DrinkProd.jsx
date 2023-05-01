
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {BsFillCartPlusFill} from 'react-icons/bs'
import cartReducer, { initialCartState } from '../useReducer/Reducer'
import { useReducer } from "react";


const DrinkProd = ({product}) => {
 
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  const addToCart =(product) =>{
    dispatch({type: "ADD_TO_CART", payload: {product}});
  }

  return (
    <>
     <div className="col-md-3 my-2">
      <Card>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Title>R{product.price}</Card.Title>
          <Button variant="primary" onClick={()=>(product)}><BsFillCartPlusFill/> </Button>
        </Card.Body>
      </Card>
    </div>
    </>
   
  );
};

export default DrinkProd;