import React from 'react';
import Celulares from '../../products/Celulares';
import DataCelulares from '../../products/DataCelulares';
import './DestacadoAccesorios.css';

function Destacado() {
  // Obtener los productos
  const AccesoriosDestacados = DataCelulares.slice(0, 4).map(item => (
    <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <Celulares item={item}/>
    </div>

  ));

  return (
    <div>
      <hr className='mb-4 container' />
      <div className='divSeccion'>
        <div className='container'>
          <h2 className='text-center' id='h2Destacado'>Accesorios Destacados</h2>
        </div>
        <div className='row'>
          {AccesoriosDestacados}
        </div>
      </div>
      <hr className='mb-4 container' />
    </div>
  );
}

export default Destacado;
