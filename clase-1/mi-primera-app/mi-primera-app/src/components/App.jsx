import './App.css';
import CartWidget from './CartWidget/CartWidget';
import Navbar from "./Navbar/Navbar"
function App() {
  return (
    <div>
      <Navbar/>
      <CartWidget cantidadCarrito={10}/>
    </div>

  );
}

export default App;
