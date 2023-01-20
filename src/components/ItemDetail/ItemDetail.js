import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetailStyle.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { CartContext } from "../../context/CartContext"

const ItemDetail = ({data}) => {

    const {addProduct} = useContext(CartContext);

    const [goCart, setGoCart] = useState(false);

    const onAdd = (quantity) => {

         /* determino si hay stock suficiente para comprar producto */

        if (quantity > data.stock) {
            alert("Stock insuficiente")
        }else if (quantity === 0) {
            alert("Seleccione una cantidad del producto")
        }else{
            alert("Agregó " + quantity + " unidades al carrito")
            
            /* mando producto al carrito */

            addProduct(data, quantity)

            /* uso la formula para ir al carrito o continuar la compra */

            setGoCart(true);
        }

    }

    return (
        <div>
        <Container fluid className="ItemDetailText">
            <Row>
                <h1 className="DetailTitle">{data.nombre} {data.marca}</h1>
            </Row>
            <Row className="DetailBlock">
                <Col md={4} className="DetailContainer">
                    <img src={data.img} className="img-fluid" alt=""/>
                    <p className="pt-4 DetailPrice"><strong>Precio unitario: ${data.precio}</strong></p>
                </Col>
                <Col md={8}>
                    <p className="DetailText">{data.descripcion}</p>    
                </Col>
            </Row>
        </Container>
        {goCart ?
        <div className="detailButtonContainer">
            <Link to = {`/`}><Button variant="dark" className="detailButton">Seguir comprando</Button></Link>
            <Link to = {`/cart`}><Button variant="dark">Ir al carrito</Button></Link>
        </div> : <ItemCount data = {data} onAdd = {onAdd} />

        }
        </div>
    );
}

export default ItemDetail;