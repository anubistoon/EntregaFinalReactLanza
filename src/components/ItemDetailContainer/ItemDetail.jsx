import React from "react";

const ItemDetail = ({ product }) => {
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
    </div>
  );
};

export default ItemDetail;
