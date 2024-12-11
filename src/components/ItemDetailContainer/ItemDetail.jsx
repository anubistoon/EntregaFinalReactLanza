import React, { useState } from "react";
import Swal from 'sweetalert2'; // Importa SweetAlert2

const ItemDetail = ({ product }) => {
  // Estado para manejar el carrito (puedes mover esto a un componente más alto o un contexto global)
  const [cart, setCart] = useState([]);

  // Función para agregar al carrito
  const addToCart = () => {
    // Verifica si el producto ya está en el carrito
    const productInCart = cart.find(item => item.id === product.id);
    
    if (productInCart) {
      // Si el producto ya está en el carrito, solo aumenta la cantidad
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // Si el producto no está en el carrito, agrégalo
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    // Muestra una alerta de SweetAlert
    Swal.fire({
      title: `${product.name} ha sido agregado al carrito`,
      text: `¡Ahora tienes ${product.name} en tu carrito!`,
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{product.name}</h1>
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '300px', borderRadius: '10px', marginBottom: '20px' }}
        />
      )}
      <p><strong>Modelo:</strong> {product.model}</p>
      <p><strong>Descripción:</strong> {product.description}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
      <p><strong>Precio:</strong> {product.precio}</p>

      {/* Botón para agregar al carrito */}
      <button
        onClick={addToCart}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ItemDetail;
