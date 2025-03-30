import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // ✅ Está dentro de /src
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import "./styles/App.css"; // ✅ Ruta actualizada si usás carpeta /styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);