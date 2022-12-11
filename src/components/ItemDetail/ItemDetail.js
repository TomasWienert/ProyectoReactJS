import React from "react"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetailStyle.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemDetail = ({data}) => {

    return (
        <div>
        <Container fluid className="ItemDetail">
            <Row>
                <h1>{data.nombre} {data.marca}</h1>
            </Row>
            <Row>
                <Col md={5}>
                    <img src={data.img} alt=""/>
                </Col>
                <Col md={7}>
                    <p>{data.descripcion}</p>    
                </Col>
            </Row>
        </Container>
        <ItemCount/>
        </div>
    );
}

export default ItemDetail;