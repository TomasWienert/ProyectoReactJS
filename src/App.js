import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


/* COMPONENTES */

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

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
