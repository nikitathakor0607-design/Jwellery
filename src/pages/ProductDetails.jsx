import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import products from "../data/products";
import { CartContext } from "../context/CartContext";
import "../styles/productDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <div className="product-details-page">
      <div className="product-details-container">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="price">₹ {product.price}</p>
          <p className="description">{product.description}</p>

          <div className="quantity">
            <button onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>

          <button
            className="add-to-cart"
            onClick={() => addToCart(product, quantity)}
          >
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
