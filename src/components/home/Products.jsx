import React from "react";
import ProductCard from "../card/ProductCard";
import { getProducts } from "@/actions/server/product";

const Products = async () => {
  const rawProducts = (await getProducts()) || [];

  // এই লাইনটি MongoDB ObjectId বা complex objects গুলোকে
  // প্লেইন স্ট্রিং এবং অবজেক্টে রূপান্তর করবে।
  const products = JSON.parse(JSON.stringify(rawProducts));

  return (
    <div>
      <h1 className="text-center text-4xl font-bold mb-10">Our Products</h1>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {products.map((product) => (
          // key হিসেবে এখন product._id ব্যবহার করতে পারবেন কারণ এটি এখন স্ট্রিং
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
