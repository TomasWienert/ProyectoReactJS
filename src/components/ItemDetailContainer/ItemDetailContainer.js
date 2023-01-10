import { getFirestore, doc, getDoc } from "firebase/firestore";
import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

/* traigo los parametros del id que seleccione */

import {useParams} from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState ("");

    /* traigo el id como parametro y lo desestructuro para que solo me devuelva el numero y usarlo */

    const {id} = useParams();

    useEffect (() => {

        const db = getFirestore();
        const itemRef = doc(db, "products", id);
        getDoc(itemRef).then((snapshot) => {
            if (snapshot.exists()) {
                setItem({id: snapshot.id, ...snapshot.data() });
            }
        });
        
    }, [id]);
         
    return (
        <ItemDetail data = {item} key = {item.id} />   
    );
};

export default ItemDetailContainer;

