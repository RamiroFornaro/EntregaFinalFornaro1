// src/components/CartWidget/CartWidget.jsx
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
const { totalQuantity } = useContext(CartContext);

return (
    <Link to="/cart" style={{ textDecoration: "none", color: "black", fontSize: "20px" }}>
    🛒
    {totalQuantity > 0 && <span style={{ marginLeft: "5px" }}>({totalQuantity})</span>}
    </Link>
);
};

export default CartWidget;
