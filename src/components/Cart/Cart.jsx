import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../../styles/Cart.css";

const Cart = () => {
  const { cart, totalPrice, clearCart, removeItem, updateQuantity } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsPurchased(true);
      setTimeout(() => {
        clearCart();
        navigate("/checkout");
      }, 1500);
    }, 2000);
  };

  if (cart.length === 0) {
    return <p className="empty-cart">⚠️ El carrito está vacío.</p>;
  }

  return (
    <div className="cart">
      <h2>🛒 Carrito de Compras</h2>

      {cart.map((prod) => (
        <div key={prod.id} className="cart-item">
          <h4>{prod.title}</h4>
          <p>Precio unitario: ${prod.price}</p>

          <div className="quantity-controls">
            <button className="quantity-btn" onClick={() => updateQuantity(prod.id, "decrease")}>-</button>
            <span>{prod.quantity}</span>
            <button className="quantity-btn" onClick={() => updateQuantity(prod.id, "increase", prod.stock)}>+</button>
          </div>

          <p>Subtotal: ${prod.quantity * prod.price}</p>

          <button className="remove-button" onClick={() => removeItem(prod.id)}>Eliminar</button>
        </div>
      ))}

      <h3 className="cart-total">Total a pagar: ${totalPrice}</h3>

      <div className="cart-actions">
        <button
          className={`checkout-button ${isPurchased ? "success" : isLoading ? "loading" : cart.length === 0 ? "disabled" : ""}`}
          onClick={handleCheckout}
          disabled={isLoading || cart.length === 0}
        >
          {isLoading ? "Procesando..." : isPurchased ? "✅ Compra Finalizada" : "Finalizar Compra"}
        </button>

        <button className="clear-button" onClick={clearCart}>Vaciar Carrito</button>
      </div>
    </div>
  );
};

export default Cart;



