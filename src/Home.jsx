import React from "react";

const Home = ({ addToCart }) => {
  const products = [
    { id: 1, name: "Laptop", price: 999, image: "/images/laptop.jpg" },
    { id: 2, name: "Smartphone", price: 599, image: "/images/smartphone.jpg" },
    { id: 3, name: "Headphones", price: 199, image: "/images/headphone.jpg" },
  ];

  return (
    <div>
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
    </div>
  );
};

export default Home;
