import React, { useContext } from 'react';
import CarritoContext from '../../context/CarritoContext'; 

function Checkout() {
  const { carrito } = useContext(CarritoContext); 

  return (
    <div>
      <h1>Checkout</h1>
      <p>Carrito: {carrito.length} productos</p>

    </div>
  );
}

export default Checkout;
