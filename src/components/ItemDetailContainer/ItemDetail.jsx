import React, { useState } from "react";
import Swal from 'sweetalert2';
import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {

  const [cart, setCart] = useState([]);


  const addToCart = (quantity) => {

    const productInCart = cart.find(item => item.id === product.id);
    
    if (productInCart) {

      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      ));
    } else {

      setCart([...cart, { ...product, quantity }]);
    }

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

      <ItemCount stock={product.stock} onAdd={addToCart} />

      <p><strong>Precio:</strong> {product.precio}</p>
    </div>
  );
};

export default ItemDetail;
