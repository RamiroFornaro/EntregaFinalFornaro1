import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAdd = (quantity) => {
    addToCart(product, quantity);
    setAdded(true);
  };

  return (
    <div className="item-detail" style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      {/* 🔥 Imagen del producto (SIN cambios en estilos) */}
      <div>
        <img src={product.image} alt={product.title} width="100%" />
      </div>

      {/* 🔥 Información del producto (solo organización, sin modificar estilos) */}
      <div>
        <h2>{product.title}</h2>
        <p><strong>Descripción:</strong> {product.description}</p>
        <p><strong>Precio:</strong> ${product.price}</p>
        <p><strong>Stock disponible:</strong> {product.stock}</p>
      </div>

      {/* 🔥 Botones de acción */}
      <div style={{ marginTop: "20px", display: "flex", gap: "10px", justifyContent: "center" }}>
        {added ? (
          <>
            <Link to="/cart">
              <button style={{
                backgroundColor: "#3498db",
                color: "white",
                padding: "10px 15px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "all 0.3s ease"
              }}>
                🛒 Ir al carrito
              </button>
            </Link>
            <Link to="/">
              <button style={{
                backgroundColor: "#95a5a6",
                color: "white",
                padding: "10px 15px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "all 0.3s ease"
              }}>
                🔄 Seguir comprando
              </button>
            </Link>
          </>
        ) : (
          <ItemCount stock={product.stock} onAdd={handleAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;

