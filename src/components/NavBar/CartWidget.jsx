import Carrito from "../../assets/cartBlanco.png";
import { Link } from "react-router-dom";
import { useCarrito } from "../../context/CarritoContext";

export const CartWidget = () => {
  const { carrito } = useCarrito();

  const totalItems = Array.isArray(carrito)
    ? carrito.reduce((acc, item) => acc + (item.cantidad || 0), 0)
    : 0; 

  return (
    <>
      <Link to="/checkout">
        <img
          className="imgCarrito"
          src={Carrito}
          alt="Carrito de compras"
          style={{ width: "30px", height: "auto" }}
        />
        {totalItems > 0 && <span className="badge">{totalItems}</span>}
      </Link>
    </>
  );
};

export default CartWidget;