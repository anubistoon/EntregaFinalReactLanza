import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

function ItemListContainer() {
  const { idCategory } = useParams();
  const [celulares, setCelulares] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const celularesRef = collection(db, "celulares");

    let q = celularesRef;
    if (idCategory) {

      q = query(celularesRef, where("category", "==", idCategory));
    }

    getDocs(q)
      .then((snapshot) => {
        const celularesList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCelulares(celularesList);
      })
      .catch(error => console.error("Error obteniendo los celulares:", error));
  }, [idCategory]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div 
        style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '20px', 
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {celulares.map(celular => (
          <div 
            key={celular.id} 
            style={{
              border: '1px solid #ccc', 
              borderRadius: '10px', 
              padding: '20px', 
              width: '250px', 
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            {celular.image && (
              <img 
                src={celular.image} 
                alt={celular.name} 
                style={{ width: '100%', borderRadius: '10px' }} 
              />
            )}
            <h2>{celular.name}</h2>
            <p><strong>Modelo:</strong> {celular.model}</p>
            <p><strong>Descripción:</strong> {celular.description}</p>
            <p><strong>Stock:</strong> {celular.stock}</p>
            <p><strong>Precio:</strong> {celular.precio}</p>

            <Link 
              to={`/detail/${celular.id}`} 
              style={{
                display: 'inline-block',
                marginTop: '10px',
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '5px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              Ver detalles
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
