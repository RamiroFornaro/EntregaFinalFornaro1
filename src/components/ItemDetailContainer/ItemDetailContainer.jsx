// src/components/ItemDetailContainer/ItemDetailContainer.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
const [product, setProduct] = useState(null);
const { id } = useParams();

useEffect(() => {
    const getProduct = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products.find((p) => p.id === id));
    }, 1000);
    });

    getProduct.then((res) => setProduct(res));
}, [id]);

return (
    <div>
    {product ? <ItemDetail product={product} /> : <p>Cargando detalle...</p>}
    </div>
);
};

export default ItemDetailContainer;
