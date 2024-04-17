import React from 'react'
import { Link } from 'react-router-dom';
function Accesorios(props) {
    return (
        <div className="card mb-2 text-center h-100">
            <img 
                src={props.item.imagen} 
                className="card-img-top h-100 p-4" 
                alt="accesorio" 
            />
            <div className="card-body">
                <h5 className="card-title">{props.item.nombre}</h5>
                <p className="card-text">Precio: ${props.item.precio} COP</p>
                <Link to={`/accesorios/${props.item.id}`} className='text-decoration-none'><button type="button" className="btn btn-success">Ver más</button></Link>
            </div>
        </div>
    )
}

export default Accesorios