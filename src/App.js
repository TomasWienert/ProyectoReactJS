import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

/* COMPONENTES */

import NavBar from "./components/NavBar/NavBar"

function App() {
  return (
    
    <BrowserRouter>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path = "/detail/:id" element = {<ItemDetailContainer />} />
      </Routes>   
    </BrowserRouter>

  );
}

export default App;
