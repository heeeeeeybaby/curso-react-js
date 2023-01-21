const CartWidget = ({cantidadCarrito}) => {
    return (
        <div>
        <button className="btn btn-dark">Carrito {cantidadCarrito}
        </button>
        </div>
    );
}

export default CartWidget;
