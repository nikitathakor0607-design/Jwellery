// import { Link } from "react-router-dom";
// import { useState, useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import "../styles/navbar.css";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const { cart } = useContext(CartContext);

//   return (
//     <header className="navbar">
//       <div className="nav-container">
        
   
//         <Link to="/" className="logo">
//           Jewel<span>Lux</span>
//         </Link>

     
//         <nav className={`nav-links ${open ? "active" : ""}`}>
//           <Link to="/" onClick={() => setOpen(false)}>Home</Link>
//           <Link to="/products" onClick={() => setOpen(false)}>Products</Link>
//           <Link to="/blog" onClick={() => setOpen(false)}>Blog</Link>
//           <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
//           <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
//           <Link to="/cart" className="cart-link" onClick={() => setOpen(false)}>
//             Cart
//             {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
//           </Link>
//           <Link to="/login" className="login-btn" onClick={() => setOpen(false)}>
//             Login
//           </Link>
//         </nav>

        
//         <div className={`hamburger ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>

//       </div>
//     </header>
//   );
// };

// export default Navbar;
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useContext(CartContext);

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* LOGO */}
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          Jewel<span>Lux</span>
        </Link>

        {/* NAV LINKS */}
        <nav className={`nav-links ${open ? "active" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setOpen(false)}>Products</Link>
          <Link to="/blog" onClick={() => setOpen(false)}>Blog</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

          {/* CART */}
          <Link to="/cart" className="cart-link" onClick={() => setOpen(false)}>
            🛒
            {cart.length > 0 && (
              <span className="cart-count">{cart.length}</span>
            )}
          </Link>
        </nav>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
