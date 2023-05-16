import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useState, useContext } from "react";
import CartModal from "../Components/CartModal";
import AppContext from "../context/AppContext";

function Header() {
  const navigate = useNavigate();
  const values = [true];
  const {cart} = useContext(AppContext)
  const [modalOpen, setModalOpen] = useState(false);

  const onCloseModal = () => {
    setModalOpen(false);
  };

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
            <span className="count">{cart.length}</span>
            {values.map((idx) => (
              <Button
                key={idx}
                className="openModalBtn"
                onClick={() => setModalOpen(true)}
              >
                <BsFillCartPlusFill />
              </Button>
            ))}
          </Nav.Link>
        </Container>
      </Navbar>
      {modalOpen && <CartModal onCloseModal={onCloseModal} />}
    </div>
  );
}

export default Header;
