import './App.css';
import CartWidget from './CartWidget/CartWidget';
import Navbar from "./Navbar/Navbar"
function App() {
  return (
    <>
        <Navbar/>
      <CartWidget cantCarrito={10}/>
    </>

  );
}

export default App;
