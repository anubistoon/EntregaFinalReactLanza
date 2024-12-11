import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const CarritoContext = createContext();

// Componente que proporcionará el estado del carrito
export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find(item => item.id === producto.id);

    if (productoExistente) {
      // Si el producto ya existe, incrementa la cantidad
      setCarrito(carrito.map(item =>
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      ));
    } else {
      // Si el producto no existe, agrégalo al carrito
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  // Función para eliminar un producto del carrito
  const eliminarDelCarrito = (idProducto) => {
    setCarrito(carrito.filter(item => item.id !== idProducto));
  };

  // Función para vaciar el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

// Hook para usar el carrito en cualquier componente
export const useCarrito = () => useContext(CarritoContext);
