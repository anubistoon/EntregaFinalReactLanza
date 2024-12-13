import React from 'react';
import { useCarrito } from '../../context/CarritoContext';

const CartIcon = () => {
  const { getCartQuantity } = useCarrito();
  const cartQuantity = getCartQuantity();

  return (
    <div style={{ position: 'relative' }}>
      <img
        src="./assets/carBlanco.png"
        alt="Carrito"
        style={{ width: '40px', cursor: 'pointer' }}
      />
      {cartQuantity > 0 && (
        <div style={{
          position: 'absolute',
          top: '-5px',
          right: '-5px',
          backgroundColor: 'red',
          color: 'white',
          borderRadius: '50%',
          width: '20px',
          height: '20px',
          fontSize: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {cartQuantity}
        </div>
      )}
    </div>
  );
};

export default CartIcon;
