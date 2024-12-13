import React, { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{quantity}</span>
      <button onClick={increment}>+</button>
      <br />
      <button onClick={() => onAdd(quantity)} style={{ marginTop: '10px' }}>
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ItemCount;
