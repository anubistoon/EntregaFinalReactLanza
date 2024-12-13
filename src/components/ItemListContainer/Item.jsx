import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

function Item() {
  const { idProduct } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const productRef = doc(db, "celulares", idProduct);

    getDoc(productRef)
      .then(snapshot => {
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        } else {
          console.error("El producto no existe.");
        }
      })
      .catch(error => console.error("Error obteniendo el producto:", error))
      .finally(() => setLoading(false));
  }, [idProduct]);

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (!product) {
    return <p>El producto no fue encontrado.</p>;
  }

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
      <div 
        style={{
          border: '1px solid #ccc', 
          borderRadius: '10px', 
          padding: '20px', 
          width: '300px', 
          margin: '20px auto',
          textAlign: 'center', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2>{product.name}</h2>
        <p><strong>Modelo:</strong> {product.model}</p>
        <p><strong>Descripción:</strong> {product.description}</p>
        <p><strong>Stock:</strong> {product.stock}</p>
        <p><strong>Precio:</strong> {product.precio}</p>
      </div>
    </div>
  );
}

export default Item;