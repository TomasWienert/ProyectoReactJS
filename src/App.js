import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

/* COMPONENTES */

import NavBar from "./components/NavBar/NavBar"

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer/>
      <ItemCount/>
    </div>
  );
}

export default App;
