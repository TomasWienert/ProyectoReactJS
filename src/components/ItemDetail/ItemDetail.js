import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetailStyle.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        }

        /* uso la formula para ir al carrito o continuar la compra */

        setGoCart(true);

        /* mando producto al carrito */

        addProduct(data, quantity)
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
        <div>
            <Link to = {`/`}><button>Seguir comprando</button></Link>
            <Link to = {`/cart`}><button>Ir al carrito</button></Link>
        </div> : <ItemCount data = {data} onAdd = {onAdd} />

        }
        </div>
    );
}

export default ItemDetail;