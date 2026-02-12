import "../styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Discover <span>Elegant Jewelry</span> <br /> Crafted for You
          </h1>
          <p>
            Celebrate life's precious moments with our exclusive, handcrafted jewelry collections. Quality and beauty that lasts forever.
          </p>
          <Link to="/products" className="btn primary-btn">
            Explore Collection
          </Link>
        </div>
        <div className="hero-image" aria-label="Elegant jewelry on display"></div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <article className="feature-card">
          <div className="icon">💍</div>
          <h3>Exquisite Craftsmanship</h3>
          <p>Handmade with passion and precision to perfection.</p>
        </article>
        <article className="feature-card">
          <div className="icon">🚚</div>
          <h3>Fast & Free Shipping</h3>
          <p>Reliable delivery with insurance on every order.</p>
        </article>
        <article className="feature-card">
          <div className="icon">🔒</div>
          <h3>Secure Checkout</h3>
          <p>Trusted payment gateways ensuring your safety.</p>
        </article>
        <article className="feature-card">
          <div className="icon">💎</div>
          <h3>Certified Quality</h3>
          <p>Only genuine gold, diamonds & gemstones used.</p>
        </article>
      </section>

      {/* COLLECTIONS */}
      <section className="collections">
        <h2>Shop by Category</h2>
        <div className="collections-grid">
          <Link to="/products/rings" className="collection-card rings">
            <h3>Rings</h3>
          </Link>
          <Link to="/products/necklaces" className="collection-card necklaces">
            <h3>Necklaces</h3>
          </Link>
          <Link to="/products/earrings" className="collection-card earrings">
            <h3>Earrings</h3>
          </Link>
          <Link to="/products/bracelets" className="collection-card bracelets">
            <h3>Bracelets</h3>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Shine?</h2>
        <p>Shop exclusive pieces crafted for unforgettable moments.</p>
        <Link to="/products" className="btn secondary-btn">
          Start Shopping
        </Link>
      </section>

    </main>
  );
};

export default Home;
