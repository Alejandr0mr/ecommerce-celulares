import React from 'react';
import Productos from '../products/Productos';
import Data from '../products/Data';
import '../products/ProductosStyle.css';

function Redmi() {
  // Obtener los productos del 1 al 2
  const productosSubconjunto = Data.slice(0, 2);

  // Mapear sobre el subconjunto de productos
  const products = productosSubconjunto.map(items => (
    <Productos key={items.id} items={items} />
  ));

  return (
    <div>
        <hr/>
      <div className='divProductos'>
        {products}
      </div>
    </div>
  );
}

export default Redmi;
