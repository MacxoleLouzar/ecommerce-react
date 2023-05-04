
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {BsFillCartPlusFill} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";


const DrinkProd = ({product}) => {
  const navigate = useNavigate()
 
  return (
    <>
     <div className="col-md-3 my-2">
     <Card className="product_card" onClick={()=>navigate(`/${product.id}`)}>
        <Card.Img className="product-img" variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          {/* <Card.Text>{product.description}</Card.Text> */}
          <Card.Title>R{product.price}</Card.Title>
          <Button variant="primary" onClick={()=> addToCart(product)}><BsFillCartPlusFill/> </Button>
        </Card.Body>
      </Card>
    </div>
    </>
  );
};

export default DrinkProd;