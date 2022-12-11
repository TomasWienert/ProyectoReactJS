import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import Item from "./Item"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./ItemList.css";

const ItemList = () => {

    const [users, setUsers] = useState ([]);

    const loadApi = async () => {
        fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(obj => setUsers(obj))
    }
    
    useEffect(() => {
                
        setTimeout(() => {
            loadApi();
        }, 2000)
        
    } , [])
    

    return (
        <Container fluid>
            <Row>
                {users.map((user) => {
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