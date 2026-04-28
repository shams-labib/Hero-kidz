"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShoppingCart } from "react-icons/fa";

export default function ProductCard({ product }) {
  const { _id, title, image, price, discount, ratings, reviews, sold } =
    product;

  const finalPrice = price - (price * discount) / 100;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300">
      {/* Image */}
      <figure className="p-4">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="rounded-xl object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body p-4">
        {/* Title */}
        <h2 className="text-sm font-semibold line-clamp-2">{title}</h2>

        {/* Rating + Reviews */}
        <div className="flex items-center gap-2 text-sm">
          <FaStar className="text-yellow-500" />
          <span>{ratings}</span>
          <span className="text-gray-400">({reviews} reviews)</span>
        </div>

        {/* Sold */}
        <p className="text-xs text-gray-400">{sold} sold</p>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">৳{finalPrice}</span>
          <span className="text-sm line-through text-gray-400">৳{price}</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2 mt-2">
          {/* Add to Cart */}
          <button className="btn btn-primary btn-sm flex items-center gap-2">
            <FaShoppingCart />
            Add to Cart
          </button>

          {/* View Details */}
          <Link href={`/products/${_id}`}>
            <button className="btn btn-outline btn-sm w-full">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
