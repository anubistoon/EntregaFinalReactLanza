import { useEffect, useState } from "react";
import ItemList from "../ItemListContainer/ItemList";
import getProducts from "../../data/getProducts";
import { useParams } from "react-router-dom";
import "../ItemListContainer/itemListContainer.css";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);

  const { idCategory } = useParams();

  useEffect(() => {
    getProducts
      .then((respuesta) => {
        const redmiProducts = respuesta.filter(
          (producto) => producto.model === "Poco"
        );

        if (idCategory) {
          const newProducts = redmiProducts.filter(
            (producto) => producto.category === idCategory
          );
          setProducts(newProducts);
        } else {
          setProducts(redmiProducts);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => console.log("Finalizó la promesa"));
  }, [idCategory]);

  return (
    <div className="item-list-container">
      <h2 className="title-items">{saludo}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;