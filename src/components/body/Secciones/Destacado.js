import React from 'react';
import Productos from '../products/Productos';
import Data from '../products/Celulares';
import '../products/ProductosStyle.css';

function Destacado() {
  // Obtener los productos del 1 al 2
  const productosSubconjunto = Data.slice(0, 2);

  // Mapear sobre el subconjunto de productos
  const products = productosSubconjunto.map(items => (
    <Productos key={items.id} items={items} />
  ));

  return (
    <div>
        <hr className='mb-4 container' />
      <div className='divProductos'>
        {products}
      </div>
      <hr className='mb-4 container' />
    </div>
  );
}

export default Destacado;
