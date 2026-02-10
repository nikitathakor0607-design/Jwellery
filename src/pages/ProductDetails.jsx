import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/productDetails.css";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from route
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = { ...product, quantity };
    localStorage.setItem("cart", JSON.stringify([...cart, item]));
    alert(`${product.title} added to cart! 🛒`);
  };

  if (!product) return <p className="loading">Loading product...</p>;

  return (
    <div className="product-details-page">
      <div className="product-details-container">
        {/* IMAGE */}
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>

        {/* INFO */}
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>

          {/* QUANTITY */}
          <div className="quantity">
            <button onClick={decrement}>-</button>
            <span>{quantity}</span>
            <button onClick={increment}>+</button>
          </div>

          {/* ADD TO CART */}
          <button className="add-to-cart" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
