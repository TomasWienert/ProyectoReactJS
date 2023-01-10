import React from "react"
import logoCarrito from '../../images/carrito.png';
import './CartWidget.css';
import {Link} from "react-router-dom";
import Cart from "../Cart/Cart"

function CartWidget () {

    let NumeroCarrito = 3;

    let NumeroMostrado = "";

    if (NumeroCarrito !== 0) {
        NumeroMostrado = NumeroCarrito;

        return (
            <div>
                <Link to = {`/cart`}>
                    <img src={logoCarrito} alt="logocarrito" id="" className="logoCarrito"></img>
                </Link>
                <h2 className="NumeroCarrito">{NumeroMostrado}</h2> 
            </div>  
        )

    } else {

        return (
            
            <a href ="/">
                <img src={logoCarrito} alt="logocarrito" id="" className="logoCarrito"></img>
            </a>
                       
        );

    }
 
}

export default CartWidget