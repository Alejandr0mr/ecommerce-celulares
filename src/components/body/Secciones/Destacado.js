import React from 'react';
import Celulares from '../products/Celulares';
import DataCelulares from '../products/DataCelulares';
import '../products/ProductosStyle.css';

function Destacado() {
  // Obtener los productos del 1 al 2
  const celularesDestacados = DataCelulares.map(items => {
    return(
      <Celulares key={items.id} items={items} />
    )
  })

  return (
    <div>
        <hr className='mb-4 container' />
      <div className='divProductos'>
          <h2 className='text-center ' id='h2Destacado'>Destacado en xiaomi...</h2>
        {celularesDestacados}
      </div>
      <hr className='mb-4 container' />
    </div>
  );
}

export default Destacado;
