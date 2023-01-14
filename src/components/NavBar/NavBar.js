import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import logobazar from '../../images/logobazar.png'; 
import {Link} from "react-router-dom";
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
            <Link to = {`/`} className="NavText">HOME</Link>
            <Link to = {`/category/Tsuji`} className="NavText">VAJILLA TSUJI</Link>
            <Link to = {`/category/Verbano`} className="NavText">VAJILLA VERBANO</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <CartWidget className="logoCarrito"/>
    </div>
  );
}

export default NavBar;