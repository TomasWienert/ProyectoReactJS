import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


/* COMPONENTES */

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    
    <BrowserRouter>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>} />
        <Route exact path = "/detail/:id" element = {<ItemDetailContainer />} />
        <Route exact path = "/cart" element = {<Cart />} />
      </Routes>   
    </BrowserRouter>

  );
}

export default App;
