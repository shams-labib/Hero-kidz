"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FaCartPlus } from "react-icons/fa";

const CartButtons = ({ product }) => {
  const isLogin = false;
  const router = useRouter();
  const path = usePathname();
  const add2Cart = () => {
    if (isLogin) alert(product._id);
    router.push(`/login?callbackUrl=${path}`);
  };

  return (
    <div>
      <button
        onClick={add2Cart}
        className="btn btn-primary btn-lg flex-1 shadow-xl hover:shadow-primary/20 gap-2"
      >
        <FaCartPlus className="text-xl" /> Add to Cart
      </button>
    </div>
  );
};

export default CartButtons;
