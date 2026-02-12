import { useContext } from "react";
import { useNavigate } from "react-router-dom"; // <-- Import useNavigate
import { CartContext } from "../context/CartContext";
import "../styles/cart.css";

const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart, subtotal } =
    useContext(CartContext);

  const navigate = useNavigate(); // <-- Create navigate function

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty! Add products first.");
      return;
    }
    navigate("/checkout"); // <-- Navigate to Checkout page
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty 😔</p>
      ) : (
        <>
          <div className="cart-grid">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-img" />

                <div className="cart-info">
                  <h3>{item.title}</h3>
                  <p className="price">${item.price.toFixed(2)}</p>

                  <div className="quantity-controls">
                    <button onClick={() => decrementQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item.id)}>+</button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Subtotal: ${subtotal.toFixed(2)}</h2>
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
