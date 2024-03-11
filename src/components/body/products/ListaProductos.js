import React from 'react'
import Productos from './Productos'
import Data from './Data'
import './ProductosStyle.css'

function ListaProductos() {
  const products = Data.map(items => {
    return(
      <Productos key={items.id} items={items} />
    )
  })
  return (
    <div>
      <div className='divProductos'>
        {products}
      </div>
    </div>
  )
}

export default ListaProductos