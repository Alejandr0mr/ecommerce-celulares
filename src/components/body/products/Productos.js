import React from 'react'
import './ProductosStyle.css'


function Productos(props) {
  return (

    <div className='producto2'>
       <img src={props.items.imagen}  alt='celular'/>
            <div className='justify-content-center text-center'>
                <h5>{props.items.nombre}</h5>
                <span className='precio'>Precio: {" $"}{props.items.precio } {" COP"}</span>
                <button type='button' className='btn btn-outline-success'>Comprar </button>
            </div>
      </div>
  )
}

export default Productos  