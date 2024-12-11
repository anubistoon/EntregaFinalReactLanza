import React from 'react';
import { useCarrito } from '../../context/CarritoContext';

const Carrito = () => {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useCarrito();

  if (carrito.length === 0) {
    return <p>No hay productos en el carrito.</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Carrito de Compras</h1>
      <div>
        {carrito.map(producto => (
          <div key={producto.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <h3>{producto.name}</h3>
            <p><strong>Precio:</strong> {producto.precio}</p>
            <p><strong>Cantidad:</strong> {producto.cantidad}</p>
            <button onClick={() => eliminarDelCarrito(producto.id)} style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px', borderRadius: '5px' }}>
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <button onClick={vaciarCarrito} style={{ backgroundColor: '#dc3545', color: 'white', padding: '10px 20px', borderRadius: '5px' }}>
        Vaciar Carrito
      </button>
    </div>
  );
};

export default Carrito;
