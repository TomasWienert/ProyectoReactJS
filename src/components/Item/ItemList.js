import React, { useState, useEffect } from "react";
import Item from "./Item"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                        <Item info = {user} />
                    </Col>
                )})} 
            </Row>
        </Container>
    );

}

export default ItemList;