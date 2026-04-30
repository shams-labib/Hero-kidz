"use client";
import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation"; // useRouter ইমপোর্ট করা হয়েছে
import Swal from "sweetalert2"; // SweetAlert2 ইমপোর্ট করা হয়েছে
import SocialButtons from "./SocialButtons";

const LoginForm = () => {
  const router = useRouter(); // রাউটার ইনিশিয়ালাইজ করা হয়েছে
  const params = useSearchParams();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // লোডিং অ্যালার্ট দেখানো (অপশনাল কিন্তু ভালো প্র্যাকটিস)
    Swal.fire({
      title: "Logging in...",
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const result = await signIn("credentials", {
      email: form.email,
      password: form.password,
      // redirect: false,
      callbackUrl: params.get("callbackUrl" || "/"),
    });

    if (result?.error) {
      // লগইন ফেইল করলে এরর মেসেজ
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password. Please try again!",
        confirmButtonColor: "#2563eb",
      });
    } else {
      // লগইন সফল হলে সাকসেস মেসেজ এবং রিডাইরেক্ট
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome back!",
        showConfirmButton: false,
        timer: 1500, // ১.৫ সেকেন্ড পর অটো বন্ধ হবে
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-96 border border-gray-800">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            onChange={handleChange}
            value={form.email}
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          />

          <input
            onChange={handleChange}
            value={form.password}
            name="password"
            type="password"
            required
            placeholder="Password"
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          />

          <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-400">
          Don’t have an account?{" "}
          <Link
            href={"/register"}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Register
          </Link>
        </p>
        <SocialButtons />
      </div>
    </div>
  );
};

export default LoginForm;
