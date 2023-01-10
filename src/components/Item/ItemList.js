import React from "react";
import {Link} from "react-router-dom";
import Item from "./Item"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./ItemList.css";

const ItemList = ({products}) => {  

    return (
        <Container fluid>
            <Row>
                {products.map((user) => {
                    return (
                    <Col md={4} key={user.id}>
                        <Link to = {`/detail/${user.id}`} className="cardText">
                            <Item data = {user} />
                        </Link>
                    </Col>
                )})} 
            </Row>
        </Container>
    );

}

export default ItemList;