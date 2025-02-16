import React from "react";

const containerStyle = {
  maxWidth: "1100px",
  margin: "auto",
  padding: "20px",
  textAlign: "center",
  backgroundColor: "#ffffff",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  fontFamily: "Arial, sans-serif",
};

const navStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "25px",
  padding: "15px 0",
  backgroundColor: "#222",
  color: "white",
  fontSize: "18px",
  fontWeight: "bold",
  borderRadius: "10px",
};

const navLinkStyle = {
  color: "white",
  textDecoration: "none",
  padding: "8px 15px",
  borderRadius: "5px",
  transition: "0.3s",
};

const productContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "25px",
  marginTop: "20px",
};

const productCard = {
  backgroundColor: "#f9f9f9",
  padding: "15px",
  borderRadius: "8px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
  transition: "0.3s",
  cursor: "pointer",
};

const productImage = {
  width: "100%",
  borderRadius: "5px",
};

const productTitle = {
  fontSize: "20px",
  fontWeight: "bold",
  margin: "10px 0",
};

const productPrice = {
  fontSize: "18px",
  color: "#28a745",
  fontWeight: "bold",
};

const buttonStyle = {
  backgroundColor: "#28a745",
  color: "white",
  padding: "10px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "10px",
  transition: "0.3s",
};

const footerStyle = {
  marginTop: "30px",
  padding: "15px",
  backgroundColor: "#222",
  color: "white",
  borderRadius: "5px",
  fontSize: "14px",
};

function App() {
  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: "32px", marginBottom: "10px", color: "#222" }}>eCommerce Store</h1>
      <nav style={navStyle}>
        <a href="#" style={{ ...navLinkStyle, backgroundColor: "#444" }}>Home</a>
        <a href="#" style={navLinkStyle}>Products</a>
        <a href="#" style={navLinkStyle}>Cart 🛒</a>
      </nav>

      <h2 style={{ fontSize: "24px", marginTop: "20px", color: "#555" }}>Shop Our Products</h2>
      <div style={productContainer}>
        <div style={{ ...productCard, ":hover": { transform: "scale(1.05)" } }}>
          <img src="/images/laptop.jpg" alt="Laptop" style={productImage} />
          <h3 style={productTitle}>Laptop</h3>
          <p style={productPrice}>$999</p>
          <button style={{ ...buttonStyle, ":hover": { backgroundColor: "#218838" } }}>Add to Cart</button>
        </div>

        <div style={{ ...productCard, ":hover": { transform: "scale(1.05)" } }}>
          <img src="/images/smartphone.jpg" alt="Smartphone" style={productImage} />
          <h3 style={productTitle}>Smartphone</h3>
          <p style={productPrice}>$599</p>
          <button style={{ ...buttonStyle, ":hover": { backgroundColor: "#218838" } }}>Add to Cart</button>
        </div>

        <div style={{ ...productCard, ":hover": { transform: "scale(1.05)" } }}>
          <img src="/images/headphone.jpg" alt="Headphones" style={productImage} />
          <h3 style={productTitle}>Headphones</h3>
          <p style={productPrice}>$199</p>
          <button style={{ ...buttonStyle, ":hover": { backgroundColor: "#218838" } }}>Add to Cart</button>
        </div>
      </div>

      <footer style={footerStyle}>
        © 2025 eCommerce Store. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
