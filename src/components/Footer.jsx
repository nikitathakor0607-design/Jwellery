// import "../styles/footer.css";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">

    
//         <div className="footer-col brand">
//           <h2>Jewel<span>Lux</span></h2>
//           <p>
//             JewelLux is a premium jewelry brand offering timeless designs crafted
//             with elegance, passion, and precision. Every piece tells a story of
//             beauty and trust.
//           </p>
//           <p className="trust">✔ Certified Gold & Diamonds</p>
//           <p className="trust">✔ 100% Secure Payments</p>
//         </div>

  
//         <div className="footer-col">
//           <h3>Quick Links</h3>
//           <Link to="/">Home</Link>
//           <Link to="/products">Shop</Link>
//           <Link to="/blog">Blog</Link>
//           <Link to="/services">Services</Link>
//           <Link to="/contact">Contact</Link>
//         </div>


//         <div className="footer-col">
//           <h3>Customer Service</h3>
//           <Link to="#">Shipping Policy</Link>
//           <Link to="#">Return Policy</Link>
//           <Link to="#">Privacy Policy</Link>
//           <Link to="#">Terms & Conditions</Link>
//           <Link to="#">FAQs</Link>
//         </div>

        
//         <div className="footer-col newsletter">
//           <h3>Join Our Newsletter</h3>
//           <p>Get exclusive offers & latest jewelry trends.</p>
//           <div className="newsletter-box">
//             <input type="email" placeholder="Enter your email" />
//             <button>Subscribe</button>
//           </div>
//         </div>

//       </div>


//       <div className="footer-bottom">
//         <p>© 2026 JewelLux. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import "../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND + NEWSLETTER */}
        <div className="footer-col brand">
          <h2>
            Jewel<span>Lux</span>
          </h2>

          <p className="brand-desc">
            JewelLux is a premium jewelry destination offering timeless designs
            crafted with elegance, precision, and trust.
          </p>

          <ul className="trust-list">
            <li>✔ Certified Gold & Diamonds</li>
            <li>✔ Ethical Sourcing</li>
            <li>✔ Secure Payments</li>
          </ul>

          <div className="newsletter">
            <h4>Newsletter</h4>
            <div className="newsletter-box">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
              />
              <button type="button">Subscribe</button>
            </div>
          </div>
        </div>

        {/* SHOP */}
        <div className="footer-col">
          <h3>Shop</h3>
          <Link to="/products">All Jewelry</Link>
          <Link to="/products">Rings</Link>
          <Link to="/products">Necklaces</Link>
          <Link to="/products">Bracelets</Link>
          <Link to="/products">Watches</Link>
        </div>

        {/* COMPANY */}
        <div className="footer-col">
          <h3>Company</h3>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/careers">Careers</Link>
        </div>

        {/* CUSTOMER CARE */}
        <div className="footer-col">
          <h3>Customer Care</h3>
          <Link to="/shipping-policy">Shipping Policy</Link>
          <Link to="/return-policy">Return & Exchange</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/faq">FAQs</Link>

          <div className="social">
            <span>Follow Us</span>
            <div className="social-links">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://www.pinterest.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pinterest
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 JewelLux. All Rights Reserved.</p>
        <div className="payments">
          <span>Visa</span>
          <span>Mastercard</span>
          <span>PayPal</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
