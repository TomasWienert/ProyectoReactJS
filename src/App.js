import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


/* COMPONENTES */

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import UserForm from "./components/Cart/UserForm";

/* CONTEXT */

import {CartProvider} from "./context/CartContext"

function App() {

  return (    
        
    <BrowserRouter>
      <CartProvider>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route exact path="/" element={<ItemListContainer/>} />
          <Route exact path="/category/:marca" element={<ItemListContainer/>} />
          <Route exact path = "/detail/:id" element = {<ItemDetailContainer />} />
          <Route exact path = "/cart" element = {<Cart />} />
          <Route exact path = "/finalizar-compra" element = {<UserForm />} />
        </Routes>   
      </CartProvider>
    </BrowserRouter>  

  );
}

export default App;
