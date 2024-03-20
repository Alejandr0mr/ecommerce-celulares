import React from 'react'
import Productos from './Productos'
import Celulares from './Celulares'
import './ProductosStyle.css'

function ListaProductos() {
  const celulares = Celulares.map(items => {
    return(
      <Productos key={items.id} items={items} />
    )
  })
  return (
    <div>
      <div className='divProductos'>
        {celulares}
      </div>
    </div>
  )
}

export default ListaProductos