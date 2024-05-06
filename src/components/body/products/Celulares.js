import React from 'react';
import { Link } from 'react-router-dom';

function Celulares(props) {
  return (
    <div className="card mb-2 text-center">

      <img src={props.item.imagen} className="card-img-top" alt="celular" />
      <div className="card-body">
        <h5 className="card-title">{props.item.nombre}</h5>
        <p className="card-text">Precio: ${props.item.precio} COP</p>
        
        <Link to={`/celulares/${props.item.id}`} className='text-decoration-none'><button type="button" className="btn btn-secondary">Ver más</button></Link>
        <Link to={`/celulares/${props.item.id}`} className='text-decoration-none m-2'><button type="button" className="btn btn-success">Añadir al carrito</button></Link>
      </div>

    </div>
  );
}

export default Celulares;
 