import React, { useState, useEffect } from "react";
import ItemList from "../Item/ItemList";
import { getFirestore, collection, getDocs, query, where} from "firebase/firestore";

import {useParams} from "react-router-dom";

function ItemListContainer () {

    const {marca} = useParams();

    const [products, setProducts] = useState ([]);

    const loadAll = () => {
        const db = getFirestore();

        const productsCollection = collection (db, "products");

        getDocs(productsCollection).then((snapshot) => {
            const products = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setProducts(products);
        });
    }

    const loadFilter = (marca) => {

        const db = getFirestore();

        const productsCollection = collection (db, "products");

        const q = query(productsCollection, where ("marca", "==", marca));

        getDocs(q).then((snapshot) => {
            setProducts(snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })));
        });
    }
    
    useEffect(() => {
                
        setTimeout(() => {

            if (marca) {
                loadFilter(marca);
            }else{
                loadAll();
            }
            
        }, 2000)
        
    } , [marca])

    return (
        <div>
            <hr/>
            <ItemList products = {products} />
        </div>
    );
}

export default ItemListContainer