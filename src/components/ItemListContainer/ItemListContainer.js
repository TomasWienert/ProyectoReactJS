import React, { useState, useEffect } from "react";
import ItemList from "../Item/ItemList";
import { getFirestore, collection, getDocs } from "firebase/firestore";

function ItemListContainer () {

    const [products, setProducts] = useState ([]);

    const loadApi = async () => {
        const db = getFirestore();

        const itemsCollection = collection (db, "products");

        getDocs(itemsCollection).then((snapshot) => {
            const products = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setProducts(products);
        });
    }
    
    useEffect(() => {
                
        setTimeout(() => {
            loadApi();
        }, 2000)
        
    } , [])


    return (
        <div>
            <hr/>
            <ItemList products = {products} />
        </div>
    );
}

export default ItemListContainer