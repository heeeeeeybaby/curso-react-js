
import {Link} from 'react-router-dom';
export const Item = ({item}) => {
    return (
        <>
        <div className="card col-6 col-md-4 mb-3 mx-1 p-4">
        <img src="#" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.nombre} {item.modelo}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary"><Link className='nav-link' to={`/item/{item.id}`}></Link>Ver Producto</a>
        </div>
      </div>   
        </>
    );
}
