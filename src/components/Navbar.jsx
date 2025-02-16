import React from "react";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">eCommerce Store</h1>
      <div className="space-x-6">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Products</a>
        <a href="#" className="hover:underline">Cart 🛒</a>
      </div>
    </nav>
  );
}

export default Navbar;
