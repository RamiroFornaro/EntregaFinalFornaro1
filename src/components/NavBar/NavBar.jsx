import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "../../styles/NavBar.css";
import logo from "../../assets/images/logo.png"; // 👈 Importamos el logo

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        {/* 👟 Logo de la tienda */}
        <NavLink to="/" className="logo-container">
          <img src={logo} alt="Logo Sneaker Store" className="logo" />
        </NavLink>

        {/* 📂 Categorías */}
        <div className="nav-links">
          <NavLink to="/category/new" className="nav-link new">!NEW!</NavLink>
          <NavLink to="/category/hombre" className="nav-link">Hombre</NavLink>
          <NavLink to="/category/mujer" className="nav-link">Mujer</NavLink>
          <NavLink to="/category/chicos" className="nav-link">Chicos</NavLink>
          <NavLink to="/category/sale" className="nav-link sale">!SALE!</NavLink>
        </div>
      </div>

      {/* 🛒 Carrito de compras */}
      <CartWidget />
    </nav>
  );
};

export default NavBar;




