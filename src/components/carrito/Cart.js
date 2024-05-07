import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {product.nombre} - ${product.precio}
              <button
                type="button"
                onClick={() => handleRemoveFromCart(product.id)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;