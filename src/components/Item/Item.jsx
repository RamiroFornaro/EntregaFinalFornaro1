import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Item.css";

const availableSizes = [38, 39, 40, 41, 42, 43];

const Item = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="item-card">
      <div
        className="item-image"
        style={{
          backgroundImage: `url(${product.image})`,
        }}
      ></div>

      <div className="item-info">
        <h3>{product.title}</h3>
        <p>${product.price}</p>

        <div className="sizes">
          {availableSizes.map((size) => (
            <button
              key={size}
              className={`size-btn ${selectedSize === size ? "selected" : ""}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        <Link to={`/item/${product.id}`}>Comprar</Link>
      </div>
    </div>
  );
};

export default Item;


