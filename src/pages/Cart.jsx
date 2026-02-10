import { useState, useEffect } from "react";
import "../styles/cart.css";

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const increment = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty 😔</p>
      ) : (
        <div className="cart-grid">
          {cart.map((item) => (
            <div key={item.id} className="cart-card">
              <img src={item.image} alt={item.title} />
              <div className="cart-info">
                <h3>{item.title}</h3>
                <p className="price">${item.price}</p>

                <div className="quantity">
                  <button onClick={() => decrement(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increment(item.id)}>+</button>
                </div>

                <button className="remove-btn" onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="cart-summary">
          <h2>Subtotal: ${subtotal.toFixed(2)}</h2>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
