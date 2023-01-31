import React, {useState, useContext} from "react";
import {getFirestore, collection, addDoc} from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./UserForm.css";

const UserForm = () => {

  const {cartInfo, totalPrice} = useContext(CartContext);

  const [id, setId] = useState ();

  const [form, setForm] = useState ({
    name: "",
    phone:"",
    email:"",
    items: cartInfo.map(product => ({id: product.id, product: product.nombre,
                                      category: product.marca, price:product.precio,
                                      quantity:product.quantity})),
    total: totalPrice(),

  });

  /* const [form, setForm] = useState ({
    buyer: {
    name: "",
    phone:"",
    email:"",
    },
    items: cartInfo.map(product => ({id: product.id, product: product.nombre,
                                      category: product.marca, price:product.precio,
                                      quantity:product.quantity})),
    total: totalPrice(),

  }); */

  const sendForm = (ev) => {
    ev.preventDefault();

    const db = getFirestore();

    const buyerCollection = collection(db, "buyer");

    addDoc(buyerCollection, form).then(snapshot => {
      console.log(snapshot.id);
      setForm({
        buyer: {
        name: "",
        phone:"",
        email:"",
    }});
      setId(snapshot.id);
    })

  }

  const cambiaEstado = (ev) => {
    const {value, name} = ev.target
    setForm({...form, [name]:value})
  }

  return (

    <div>
      {typeof id !== "undefined" ? (

      <div className="finalContainer">
        <p className="finalText">¡Su compra se ha realizado correctamente!</p>
        <p className="finalText">Su número de orden es: {id}</p>
      </div>
      ) : ( 
      <Form className='form' onSubmit={sendForm}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Escriba su nombre</Form.Label>
          <Form.Control type="name" name="name" placeholder="Ingrese su nombre" 
          value={form.name} onChange={cambiaEstado}/>
          <Form.Text className="text-muted">
            Lo necesitaremos para entregarle correctamente el pedido.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="phone" name="phone" placeholder="coloque su telefono, ej para BS AS (1145080365)" 
          value={form.phone} onChange={cambiaEstado}/>
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" name="email" placeholder="Ingrese su mail" 
          value={form.email} onChange={cambiaEstado}/>
          <Form.Text className="text-muted">
            No compartiremos sus datos, solo se usarán para procesar la compra.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Finalizar compra
        </Button>
      </Form>)
    }
  </div>
  );
}

export default UserForm;