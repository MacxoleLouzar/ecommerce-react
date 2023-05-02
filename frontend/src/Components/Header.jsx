import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function Header() {
  const navigate = useNavigate();
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <div className="nav">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="../src/assets/logo1.png"
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt=""
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
            className="HeaderCart"
          >
            <span className="count"></span>
              {values.map((v, idx) => (
                <Button
                  key={idx}
                  className="me-2 mb-2"
                  onClick={() => handleShow(v)}
                >
                   <BsFillCartPlusFill />
                  {typeof v === "string" && `below ${v.split("-")[0]}`}
                </Button>
              ))}
              <Modal
                show={show}
               fullscreen={fullscreen}
                
                onHide={() => setShow(false)}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>Modal body content</Modal.Body>
                <Button>CheckOut</Button>
              </Modal>
            
          </Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
