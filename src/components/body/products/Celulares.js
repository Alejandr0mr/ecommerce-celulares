import React from 'react'
import './ProductosStyle.css'


function Celulares(props) {
  return (

    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card mb-3 m.2">
        <img src={props.items.imagen} className="card-img-top" alt="celular" />
        <div className="card-body">
          <h5 className="card-title">{props.items.nombre}</h5>
          <p className="card-text">Precio: ${props.items.precio} COP</p>
          <button type="button" className="btn btn-primary">Más información</button>
        </div>
      </div>
    </div>
  
  )
}

export default Celulares  