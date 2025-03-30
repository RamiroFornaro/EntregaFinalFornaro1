import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const itemInCart = cart.find(prod => prod.id === item.id);

    if (itemInCart) {
      setCart(cart.map(prod =>
        prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
      ));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter(prod => prod.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateQuantity = (id, action, stock) => {
    setCart(cart.map(prod => {
      if (prod.id === id) {
        if (action === "increase" && prod.quantity < stock) return { ...prod, quantity: prod.quantity + 1 };
        if (action === "decrease" && prod.quantity > 1) return { ...prod, quantity: prod.quantity - 1 };
      }
      return prod;
    }));
  };

  const totalQuantity = cart.reduce((acc, prod) => acc + prod.quantity, 0);
  const totalPrice = cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem, clearCart, updateQuantity, totalQuantity, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

