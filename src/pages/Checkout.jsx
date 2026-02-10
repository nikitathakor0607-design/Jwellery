import "../style/checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <h1>Checkout</h1>

      <div className="checkout-grid">
        <div className="billing">
          <h2>Billing Details</h2>
          <input placeholder="Full Name" />
          <input placeholder="Email" />
          <input placeholder="Address" />
          <input placeholder="City" />
        </div>

        <div className="payment">
          <h2>Payment Method</h2>
          <label><input type="radio" name="pay" /> Credit Card</label>
          <label><input type="radio" name="pay" /> UPI</label>
          <label><input type="radio" name="pay" /> Cash on Delivery</label>
          <button>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
