import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [user, setUser] = useState ([]);

    const getDetail = async (id) => {
        fetch(`https://api.github.com/users/${id}`)
        .then(res => res.json())
        .then(obj => setUser(obj))
    };

    useEffect (() => {

        setTimeout(() => {
            getDetail(id);
        }, 2000)
        
    }, [id]);

        
    return (
        <ItemDetail data = {user} key = {user.id} />   
    );
};

export default ItemDetailContainer;

