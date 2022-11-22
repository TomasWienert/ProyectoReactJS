import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import logobazar from '../../images/logobazar.png'; 
import "./NavBar.css";

function NavBar() {
  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Container fluid>
      <img src={logobazar} alt="logo" className="logobazar" id="logoBazar"/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link href="#action1">HOME</Nav.Link>
            <Nav.Link href="#action2">VAJILLA TSUJI</Nav.Link>
            <Nav.Link href="#action3">VAJILLA VERBANO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <CartWidget className="logoCarrito"/>
    </div>
  );
}

export default NavBar;