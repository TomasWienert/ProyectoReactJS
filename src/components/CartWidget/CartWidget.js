import React, {useContext} from "react"
import logoCarrito from '../../images/carrito.png';
import './CartWidget.css';
import {Link} from "react-router-dom";

import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

    const {totalProducts} = useContext(CartContext);

    if (totalProducts() !== 0) {
        
        return (
            <div>
                <Link to = {`/cart`}>
                    <img src={logoCarrito} alt="logocarrito" id="" className="logoCarrito"></img>
                </Link>
                <h2 className="NumeroCarrito">{totalProducts()}</h2> 
            </div>  
        )

    } else {

        return (
            
            <Link to = {`/cart`}>
                <img src={logoCarrito} alt="logocarrito" id="" className="logoCarrito"></img>
            </Link>
                       
        );

    }
 
}

export default CartWidget