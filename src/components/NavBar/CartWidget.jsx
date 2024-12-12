import carrito from "../../assets/cartBlanco.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

export const CartWidget = () => {
  const { items = [] } = useContext(CarritoContext); // Asegura un valor por defecto
  const totalItems = items.reduce((acc, item) => acc + (item.quantity || 0), 0); // Maneja valores indefinidos

  return (
    <>
      <Link to="/checkout">
        <img
          className="imgCarrito"
          src={carrito}
          alt="Carrito de compras"
          style={{ width: "30px", height: "auto" }}
        />
        {totalItems > 0 && <span className="badge">{totalItems}</span>} {/* Clase para estilos adicionales */}
      </Link>
    </>
  );
};

export default CartWidget;
