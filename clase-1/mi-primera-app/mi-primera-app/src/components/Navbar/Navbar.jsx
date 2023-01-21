import CartWidget from "../CartWidget/CartWidget";
import Categorias from "../Navbar/Categorias/Categorias";
import Secciones from "./Secciones/Secciones";
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
                    <Categorias/>
                    <CartWidget cantidadCarrito={5}/>
                </ul>
            </div>
        </div>
        </nav>
    );
}
export default Navbar;
