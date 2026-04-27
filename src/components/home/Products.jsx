import React from "react";
import products from "@/data/toys.json";
import ProductCard from "../card/ProductCard";

const Products = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold mb-10">Our Products</h1>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {products.map((product) => (
          <ProductCard key={product.title} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
