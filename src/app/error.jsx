"use client";
import Link from "next/link";
import React from "react";
import { BiSolidErrorAlt } from "react-icons/bi";

const error = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center space-y-4">
      <BiSolidErrorAlt size={100} className="text-primary" />
      <h1 className="text-4xl font-bold">Some went wrong</h1>
      <Link href={"/"} className="btn">
        Go to home
      </Link>
    </div>
  );
};

export default error;
