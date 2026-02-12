import React from "react";
import "../styles/productCard.css";

const ProductCard = ({ product, onViewDetails, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />

        <div className="overlay">
          <button
            className="quick-view"
            onClick={() => onViewDetails(product)}
          >
            Quick View
          </button>
        </div>
      </div>

      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="price">₹ {product.price}</p>

        <div className="buttons">
          <button
            className="view-btn"
            onClick={() => onViewDetails(product)}
          >
            View Details
          </button>

          <button
            className="cart-btn"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
