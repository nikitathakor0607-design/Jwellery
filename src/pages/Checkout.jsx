import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/checkout.css";

const Checkout = () => {
  const { cart, subtotal, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    alert("Order placed successfully! 💎✨");
    clearCart();
    navigate("/");
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>

      <div className="checkout-grid">
        <div className="billing">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Address" required />
        </div>

        <div className="payment">
          <h3>Order Summary</h3>

          {cart.map((item) => (
            <p key={item.id}>
              {item.title} × {item.quantity}
            </p>
          ))}

          <h2>Total: ₹ {subtotal.toFixed(2)}</h2>

          <button className="place-order" onClick={handlePlaceOrder}>
            Place Order 💎
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
