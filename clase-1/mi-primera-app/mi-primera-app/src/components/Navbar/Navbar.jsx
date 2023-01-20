import CartWidget from "../CartWidget/CartWidget.jsx"
import Categorias from "./Categorias/Categorias.jsx"
import Secciones from "./Secciones/Secciones.jsx"
const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <Secciones/>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorías
                        </a>
                    <Categorias/>
                    </li>
                </ul>
                <CartWidget cantCarrito={5}/>
            </div>
        </div>
        </nav>
    );
}
export default Navbar;
