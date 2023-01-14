import React, {useState} from "react";

const CartContext = React.createContext([]);

const CartProvider = ({children}) => {

    const [cartInfo, setCartInfo] = useState ([]);

    /* FUNCION PARA AGREGAR PRODUCTOS AL ARRAY */

    const addProduct = (item, quantity) => {
        if (prodInCart(item.id)) {
            setCartInfo(cartInfo.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity} : product
            }));
        } else {
            setCartInfo ([...cartInfo, { ...item, quantity }]);
        };
    };

    /* LIMPIADOR DE CARRITO A FUNCIONAR CON BOTON DE LIMPIAR */

    const clearCart = () => setCartInfo([]);

    /* FUNCION PARA DECIDIR SI EL PRODUCTO YA ESTA EN EL ARRAY */

    const prodInCart = (id) => {
        return cartInfo.find(product => product.id === id) ? true : false;
    }

    /* ELIMINO UN SOLO PRODUCTO COPIANDO EL ARRAY PREVIO CON LOS ID DISTINTOS AL ID DEL PROD EN CUESTION */

    const removeProduct = (id) => {
        setCartInfo (cartInfo.filter(product => product.id !== id));
    }

    /* PARA CALCULAR LA CANTIDAD TOTAL DE PRODUCTOS EN EL CARRITO */

    const totalProducts = () => {
        return cartInfo.reduce((cantProd, prodActual) => cantProd + prodActual.quantity, 0);
    }

    /* CALCULO EL PRECIO TOTAL EN CARRITO */

    const totalPrice = () => {
        return cartInfo.reduce((previous, current) => previous + current.quantity * current.precio, 0);
    }

    return (
    <CartContext.Provider value = {{
        cartInfo, 
        setCartInfo, 
        clearCart, 
        prodInCart, 
        removeProduct, 
        addProduct,
        totalProducts,
        totalPrice,
        }}>
            {children}
    </CartContext.Provider>
)};

export {CartProvider, CartContext};