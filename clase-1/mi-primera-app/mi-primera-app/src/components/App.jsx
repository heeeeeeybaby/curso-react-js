import { ItemListContainer } from "./ItemListContainer/ItemListContainer";
import { ItemDetailContainer} from "./ItemDetailContainer/ItemDetailContainer";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (

    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/> }/>
        // El colocar : significa que será un elemento cambiante en la ruta
        <Route path='/product/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
      </Routes>
      </BrowserRouter>
    </>

    ); 
}

export default App;
