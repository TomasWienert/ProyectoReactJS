import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [user, setUser] = useState ([]);

    const getDetail = async (id) => {
        /* aca la idea es traer de la api solamente el id que selecciono en ItemDetailContainer */
        /* No se como traer ese numero de id */
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

