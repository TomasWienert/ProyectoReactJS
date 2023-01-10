import React from "react"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetailStyle.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemDetail = ({data}) => {

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
        <ItemCount data = {data}/>
        </div>
    );
}

export default ItemDetail;