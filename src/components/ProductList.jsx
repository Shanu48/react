import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Laptop", price: 999, image: "https://via.placeholder.com/200" },
  { id: 2, name: "Smartphone", price: 599, image: "https://via.placeholder.com/200" },
  { id: 3, name: "Headphones", price: 199, image: "https://via.placeholder.com/200" }
];

function ProductList() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
