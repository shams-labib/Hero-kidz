import React from "react";
import ProductCard from "../card/ProductCard";
import { getProducts } from "@/actions/server/product";

const Products = async () => {
  const products = (await getProducts()) || [];
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
