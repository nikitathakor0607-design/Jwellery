// import "../styles/home.css";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div className="home">

   
//       <section className="hero">
//         <div className="hero-content">
//           <h1>Timeless Jewelry for Every Moment</h1>
//           <p>
//             Discover handcrafted luxury jewelry made to celebrate love,
//             elegance, and beauty.
//           </p>
//           <Link to="/products">
//             <button className="primary-btn">Shop Collection</button>
//           </Link>
//         </div>
//       </section>

     
//       <section className="features">
//         <div className="feature-card">
//           <h3>💎 Premium Quality</h3>
//           <p>Crafted with certified gold, diamonds & gemstones.</p>
//         </div>
//         <div className="feature-card">
//           <h3>🚚 Free Shipping</h3>
//           <p>Free & insured delivery on every order.</p>
//         </div>
//         <div className="feature-card">
//           <h3>🔒 Secure Payment</h3>
//           <p>100% safe checkout with trusted gateways.</p>
//         </div>
//       </section>

    
//       <section className="about">
//         <div className="about-text">
//           <h2>Our Story</h2>
//           <p>
//             JewelryShop blends tradition with modern elegance. Every piece is
//             carefully designed by expert artisans to reflect timeless beauty.
//             From weddings to everyday luxury, our collections make every moment
//             shine.
//           </p>
//           <Link to="/blog">
//             <button className="secondary-btn">Read Our Blog</button>
//           </Link>
//         </div>
//       </section>

      
//       <section className="categories">
//         <h2>Explore Collections</h2>
//         <div className="category-grid">
//           <div className="category-card ring">
//             <h3>Rings</h3>
//           </div>
//           <div className="category-card necklace">
//             <h3>Necklaces</h3>
//           </div>
//           <div className="category-card earrings">
//             <h3>Earrings</h3>
//           </div>
//           <div className="category-card bracelet">
//             <h3>Bracelets</h3>
//           </div>
//         </div>
//       </section>


//       <section className="cta">
//         <h2>Make Your Moments Shine ✨</h2>
//         <p>Exclusive designs crafted just for you.</p>
//         <Link to="/products">
//           <button className="primary-btn">Shop Now</button>
//         </Link>
//       </section>

   
//       <footer className="footer">
//         <p>© 2026 JewelryShop. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Home;
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
