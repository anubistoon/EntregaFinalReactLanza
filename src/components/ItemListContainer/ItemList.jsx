import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Item from './Item';

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const productsRef = collection(db, "celulares"); // Asume que la colección se llama "celulares"

    getDocs(productsRef)
      .then((snapshot) => {
        const productsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productsList);
      })
      .catch(error => console.error("Error obteniendo los productos:", error))
      .finally(() => setLoading(false)); // Deja de cargar cuando se haya terminado la consulta
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="item-list">
      {products.length > 0 ? (
        products.map((product) => (
          <Item key={product.id} product={product} />
        ))
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
};

export default ItemList;
