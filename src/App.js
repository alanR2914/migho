import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Counter from "./Counter.js/Counter"





function App() {
  const  handleOnAdd = (quantity) => {
    console.log(`La cantidad agregada es ${quantity}`)
  }
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Counter stock={10} onAdd={handleOnAdd} />
      <Routes>
      <Route path='/' element={ <ItemListContainer greeting={'Listado de los productos'}/>}/>
      <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>

       
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App; 