import React from 'react'
import Celulares from '../../products/Celulares'
import DataCelulares from '../../products/DataCelulares'
import './ListaCelulares.css'

function ListaCelulares() {
  const celulares = DataCelulares.map(item => (
    <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <Celulares item={item}/>
    </div>

  ));
  


  return (
    <div>
            <div>
      <hr className='mb-4 container' />
      <div className='divSeccion'>
        <div className='container'>
          <h2 className='text-center' id='h2Destacado'>Lista de celulares</h2>
        </div>
        <div className='row'>
          {celulares}
        </div>
      </div>
      <hr className='mb-4 container' />
    </div>
    </div>
  )
}

export default ListaCelulares
