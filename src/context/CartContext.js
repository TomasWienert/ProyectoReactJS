import React, {useState} from "react";

const CartContext = React.createContext();

const CartProvider = ({children}) => {

    const [cartInfo, setCartInfo] = useState ([]);

    /* LIMPIADOR DE CARRITO A FUNCIONAR CON BOTON DE LIMPIAR */

    const clearCart = () => {
        setCartInfo = ([]);
    }

    /* FUNCION PARA DECIDIR SI EL PRODUCTO YA ESTA EN EL ARRAY */

    const prodInCart = (id) => {
        return cartInfo.find(product => product.id === id) ? true : false;
    }

    /* ELIMINO UN SOLO PRODUCTO COPIANDO EL ARRAY PREVIO CON LOS ID DISTINTOS AL ID DEL PROD EN CUESTION */

    const removeProduct = (id) => {
        setCartInfo (cartInfo.filter(product => product.id !== id));
    }

    /* FUNCION PARA AGREGAR PRODUCTOS AL ARRAY */

    const addProduct = (item, cantidad) => {
        if (prodInCart(item.id)) {
            setCartInfo(cartInfo.map(product => {
                return product.id === item.id ? { ...product, cantidad: product.cantidad + cantidad} : product
            }));
        } else {
            setCartInfo ([...cartInfo, { ...item, cantidad }]);
        };
    };

    return <CartContext.Provider value = {{
        cartInfo, 
        setCartInfo, 
        clearCart, 
        prodInCart, 
        removeProduct, 
        addProduct}}>{children}</CartContext.Provider>
};

export {CartProvider, CartContext};