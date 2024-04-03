import React from 'react'

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
                <button type="button" className="btn btn-success">Ver más</button>
            </div>
        </div>
    )
}

export default Accesorios