import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <h2 style={{ textAlign: "center", fontSize: "22px", fontWeight: "bold", marginBottom: "16px" }}>Shopping Cart 🛒</h2>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "18px", color: "#6b7280" }}>Your cart is empty!</p>
      ) : (
        <div style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "16px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
        }}>
          {cart.map((item, index) => (
            <div key={index} style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid #e5e7eb",
              padding: "10px 0"
            }}>
              <img src={item.image} alt={item.name} style={{ width: "50px", height: "50px", borderRadius: "8px", objectFit: "cover" }} />
              <p style={{ fontSize: "16px", fontWeight: "600" }}>{item.name}</p>
              <p style={{ color: "#4b5563" }}>${item.price}</p>
              <button onClick={() => removeFromCart(index)} style={{
                padding: "6px 12px",
                backgroundColor: "#ef4444",
                color: "white",
                fontWeight: "600",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer"
              }}>
                Remove
              </button>
            </div>
          ))}
          <h3 style={{ textAlign: "right", marginTop: "12px", fontSize: "18px" }}>Total: ${totalPrice}</h3>
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: "16px" }}>
        <Link to="/" style={{
          padding: "10px 20px",
          backgroundColor: "#2563eb",
          color: "white",
          fontWeight: "600",
          borderRadius: "6px",
          textDecoration: "none"
        }}>Continue Shopping</Link>
      </div>
    </div>
  );
};

export default Cart;
