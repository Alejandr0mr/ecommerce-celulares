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
      <div className='container d-flex row'>
          <h2 className='text-center' id='h2Destacado'>Destacado en xiaomi...</h2>
        </div>
    <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gap-3">
        {celularesDestacados}
        </div>
      </div>
      <hr className='mb-4 container' />
    </div>
  );
}

export default Destacado;
