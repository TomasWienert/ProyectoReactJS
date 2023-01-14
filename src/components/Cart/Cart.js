import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext"
import {Link} from "react-router-dom";
import ItemCart from "./ItemCart";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./Cart.css";

const Cart = () => {

    const {cartInfo, totalPrice, clearCart} = useContext(CartContext);

    if (cartInfo.length === 0) {
        return (
            <div>      
                <h1 className="tituloCarrito">Carrito de compras</h1>
                <p className="carritoVacio">El carrito está vacío...</p>
            </div>
            );
    } 

    return (
        <div>      
            <h1 className="tituloCarrito">Carrito de compras</h1>
            <Container fluid>
            <Row>
                {cartInfo.map((product) => {
                    return (
                    <Col md={12} key={product.id}>
                        <ItemCart product = {product} />
                    </Col>
                )})} 
            </Row>
            </Container> 
            <p className="precioFinal">El precio total es: $ {totalPrice()}</p>
            <div className="botonesCarrito">
                <Button variant="outline-danger" onClick={() => {clearCart()}}>
                    Vaciar carrito</Button>
                <Link to = {`/finalizar-compra`}>    
                    <Button variant="success">Continuar con la compra</Button>
                </Link>    
            </div>
        </div>
)};

export default Cart;