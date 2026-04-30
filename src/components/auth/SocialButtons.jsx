"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const SocialButtons = () => {
  const params = useSearchParams();

  const handleGoogleLogin = async () => {
    const result = await signIn("google", {
      redirect: false,
      callbackUrl: params.get("callbackUrl" || "/"),
    });
    console.log(result);

    if (result.ok) {
      Swal.fire("success", "welcome", success);
    } else {
      Swal.fire("Err", "sorry", "error");
    }
  };

  return (
    <div className="mt-6">
      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-700"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-gray-900 px-2 text-gray-400">
            Or continue with
          </span>
        </div>
      </div>

      <button
        onClick={handleGoogleLogin}
        type="button"
        className="w-full flex items-center justify-center gap-3 bg-white text-gray-900 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
      >
        <FcGoogle className="text-2xl" />
        <span>Login with Google</span>
      </button>
    </div>
  );
};

export default SocialButtons;
