import React from 'react'
import './ProductosStyle.css'


function Celulares(props) {
  return (

    <div className="container mt-3">
      <div className="row mt-4 justify-content-center">
        <div class="col-md-4">

          <div class="card">
            <img src={props.items.imagen} className="" alt="celular" />
            <div class="card-body text-center">
              <h5 className="card-title">{props.items.nombre}</h5>
              <p className="card-text">Precio: ${props.items.precio} COP</p>
              <div class="d-grid gap-2 col-6 mx-auto">
                <button type="button" className="btn btn-primary">Más información</button>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Celulares  