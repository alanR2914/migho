import './App.css';
import { useState } from "react";
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import Counter from "./Counter.js/Counter"





function App() {
  const  [page, setPage] = useState({ path: "list", id: "1"})
  
  return (
    <div className="App">
   {/*  <BrowserRouter> */}
      <Navbar/>
     {/*  <Counter stock={10} onAdd={handleOnAdd} /> */}
   {/*    <Routes> */}
      {page.path === "list" ? <ItemListContainer greeting= "Hola comision 34695" setPage={setPage}/> : null }
      {page.path === "detail" ? <ItemDetailContainer id={page.id}/> : null }

       
 {/*      </Routes>
      </BrowserRouter> */}
    </div>
  );
}
export default App; 