import React from 'react'
import Celulares from './Celulares'
import DataCelulares from './DataCelulares'
import './ProductosStyle.css'

function ListaCelulares() {
  const celulares = DataCelulares.map(items => {
    return(
      <Celulares key={items.id} items={items} />
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

export default ListaCelulares
