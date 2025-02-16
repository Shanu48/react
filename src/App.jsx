import React, { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Laptop", price: 999, image: "/images/laptop.jpg" },
    { id: 2, name: "Smartphone", price: 599, image: "/images/smartphone.jpg" },
    { id: 3, name: "Headphones", price: 199, image: "/images/headphone.jpg" },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f3f4f6", padding: "24px", color: "#1f2937" }}>
      {/* Header */}
      <header style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
        eCommerce Store
      </header>

      {/* Navigation */}
      <nav style={{ display: "flex", justifyContent: "center", gap: "16px", fontSize: "18px", marginBottom: "24px" }}>
        <a href="#" style={{ color: "#2563eb", textDecoration: "none" }}>Home</a>
        <a href="#" style={{ color: "#2563eb", textDecoration: "none" }}>Products</a>
        <a href="#" style={{ color: "#2563eb", textDecoration: "none" }}>Cart ({cart.length})</a>
      </nav>

      {/* Product List */}
      <h2 style={{ textAlign: "center", fontSize: "20px", fontWeight: "600", marginBottom: "16px" }}>Shop Our Products</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "16px",
        maxWidth: "800px",
        margin: "0 auto"
      }}>
        {products.map((product) => (
          <div key={product.id} style={{
            backgroundColor: "#fff",
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            textAlign: "center"
          }}>
            <img src={product.image} alt={product.name} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }} />
            <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "8px" }}>{product.name}</h3>
            <p style={{ color: "#4b5563" }}>${product.price}</p>
            <button onClick={() => addToCart(product)} style={{
              marginTop: "8px",
              padding: "8px 16px",
              backgroundColor: "#10b981",
              color: "white",
              fontWeight: "600",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer"
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer style={{ textAlign: "center", fontSize: "14px", color: "#6b7280", marginTop: "24px" }}>
        © 2025 eCommerce Store. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
