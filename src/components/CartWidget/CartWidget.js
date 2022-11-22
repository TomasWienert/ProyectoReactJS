import React from "react"
import logoCarrito from '../../images/carrito.png';
import './CartWidget.css';

function CartWidget () {

    let NumeroCarrito = 2;

    let NumeroMostrado = "";

    if (NumeroCarrito !== 0) {
        NumeroMostrado = NumeroCarrito;

        return (
            <div>
                <a href ="/">
                    <img src={logoCarrito} alt="logocarrito" id="" className="logoCarrito"></img>
                </a>
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