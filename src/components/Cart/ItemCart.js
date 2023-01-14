import React, {useContext} from 'react';
import { CartContext } from "../../context/CartContext"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./ItemCart.css";

const ItemCart = ({product}) => {

    const {removeProduct} = useContext(CartContext);

    return (
        <div>
            <Container fluid className='itemCartContainer'>
                <Row>
                    <Col md={4} className="infoCart">
                        <p className='itemCartText'>{product.nombre} {product.marca}</p>
                        <img src={product.img} alt="" className="cartImg"></img>
                    </Col>
                    <Col md={4} className="infoCart">
                        <p className='itemCartText'>Cantidad seleccionada: {product.quantity}</p>
                        <p className='itemCartText'>Subtotal: $ {product.quantity * product.precio}</p>
                    </Col>
                    <Col md={4} className="infoCart">
                    <Button variant="outline-danger" onClick={() => {removeProduct(product.id)}}>
                        Eliminar item</Button>
                    </Col>
                </Row>
            </Container> 
        </div>
    );
}

export default ItemCart