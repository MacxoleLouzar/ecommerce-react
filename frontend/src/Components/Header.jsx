import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from "react-router-dom";
import { BsCartPlus, BsTrash } from "react-icons/bs";


function Header() {
  const navigate = useNavigate();
  return (
    <div className='nav'>
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="/">
            <img
              src="../src/assets/logo1.png"
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/meal">Meals</Nav.Link>
            <Nav.Link href="/drinks">Drinks & Deserts</Nav.Link>
            <Nav.Link href="/extras">Extras</Nav.Link>
          </Nav>
          <Nav.Link
              // onClick={() => navigate('/cart')}
              className='HeaderCart'
            >
              <span className='count'></span>
              Cart
            </Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;