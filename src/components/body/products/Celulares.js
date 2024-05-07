import {React, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../carrito/CartContext';

function Celulares(props) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(props.item);
  };

  return (
    <div className="card mb-2 text-center">
      <img src={props.item.imagen} className="card-img-top" alt="celular" />
      <div className="card-body">
        <h5 className="card-title">{props.item.nombre}</h5>
        <p className="card-text">Precio: ${props.item.precio} COP</p>
        <Link to={`/celulares/${props.item.id}`} className="text-decoration-none">
          <button type="button" className="btn btn-secondary">
            Ver más
          </button>
        </Link>
        <button
          type="button"
          className="btn btn-success m-2"
          onClick={handleAddToCart}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}

export default Celulares;