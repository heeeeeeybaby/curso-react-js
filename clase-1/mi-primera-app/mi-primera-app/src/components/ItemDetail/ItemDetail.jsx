import{ ItemCount } from '../ItemCount/ItemCount';
export const ItemDetail = (item) => {
    return (
        <>
        <div className='row g-0'>
            <img src={`../img/${item.img}`} alt={`Imagen de ${item.nombre}`} />
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{item.nombre} {item.modelo}</h5>
                <p className="card-text">Marca: {item.marca}</p>
                <p className="card-text">Precio: ${new Intl.NumberFormat('de-DE')}</p>
                <p className="card-text"></p>
            </div>
        </div>
        </>

    );
}
