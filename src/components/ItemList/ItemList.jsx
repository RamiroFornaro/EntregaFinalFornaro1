// src/components/ItemList/ItemList.jsx
import React from "react";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
return (
    <div className="item-list" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
    {products.map((prod) => (
        <Item key={prod.id} product={prod} />
    ))}
    </div>
);
};

export default ItemList;
