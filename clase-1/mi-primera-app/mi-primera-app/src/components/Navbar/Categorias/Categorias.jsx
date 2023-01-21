const Categorias = () => {
    return(
        <>
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Categorías
        </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Films</a></li>
                <li><a className="dropdown-item" href="#">Photo</a></li>
                <li><a className="dropdown-item" href="#">Full</a></li>
            </ul>
        </li>
        </>
    );
}
export default Categorias;