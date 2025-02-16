import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <Router>
      <div style={{ minHeight: "100vh", backgroundColor: "#f3f4f6", padding: "24px", color: "#1f2937" }}>
        {/* Navigation Bar */}
        <nav style={{ display: "flex", justifyContent: "center", gap: "16px", fontSize: "18px", marginBottom: "24px" }}>
          <Link to="/" style={{ color: "#2563eb", textDecoration: "none" }}>Home</Link>
          <Link to="/cart" style={{ color: "#2563eb", textDecoration: "none" }}>Cart ({cart.length})</Link>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>

        {/* Footer */}
        <footer style={{ textAlign: "center", fontSize: "14px", color: "#6b7280", marginTop: "24px" }}>
          © 2025 eCommerce Store. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
