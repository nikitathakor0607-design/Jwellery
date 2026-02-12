import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";
import "../styles/products.css";

const Products = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  return (
    <div className="products-page">
      <h1 className="products-title">Luxury Jewellery Collection</h1>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={(p) => navigate(`/product/${p.id}`)}
            onAddToCart={(p) => addToCart(p, 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
