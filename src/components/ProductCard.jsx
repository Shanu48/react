import React from "react";

function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg text-center">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md"/>
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600 text-sm mt-1">${product.price}</p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-3 rounded hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
