// src/components/ItemListContainer/ItemListContainer.jsx
import React, { useEffect, useState } from "react";
import { products } from "../../data/products";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
const [items, setItems] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const getData = new Promise((resolve) => {
        setTimeout(() => {
        resolve(products);
        }, 1000);
    });

    getData.then((res) => {
        setItems(res);
        setLoading(false);
    });
    }, []);

return (
    <div>
        <h2>Catálogo de Productos</h2>
        {loading ? <p>Cargando productos...</p> : <ItemList products={items} />}
    </div>
    );
};

export default ItemListContainer;
