import React, { useState } from "react";
import './ItemCount.css';
import Button from 'react-bootstrap/Button';

const ItemCount = ({data}) => {
    
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter (counter + 1)
    }

    const decrementCounter = () => {
        if (counter === 0) {
        alert("No se puede seleccionar menos de 0 productos")    
        }else{
        setCounter (counter - 1) 
        }
    }
    
    /* determino si hay stock suficiente para comprar producto */

    const agregar = () => {
        if (counter > data.stock) {
            alert("Stock insuficiente")
        }else{
            console.log(counter)
            alert("Agregó " + counter + " unidades al carrito")
        }
    }

    const agregarCantidad = () => {
        agregar (counter)
    }


    return (
        <div className="counterGeneral">
            <div className="counter">
                <Button variant="danger" onClick= {decrementCounter} className="increment">-</Button>
                <div className="counterNumber">
                    <p className="in">Cantidad: {counter}</p>
                    <p className="in">Stock: {data.stock}</p>
                </div>    
                <Button variant="success" onClick={incrementCounter} className="decrement">+</Button>
            </div>
            <div className="agregarCarrito">
                <Button variant="primary" onClick={agregarCantidad}>Agregar al carrito</Button>
            </div>
        </div>
    )
    

}

export default ItemCount;