import Logo from "@/components/layouts/Logo";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-background">
      <div className="relative flex flex-col items-center gap-6">
        {/* Logo Animation Container */}
        <div className="relative">
          {/* Outer Ring Animation */}
          <div className="absolute -inset-4 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />

          {/* Logo with Pulse effect */}
          <div className="relative animate-pulse">
            <Logo />
          </div>
        </div>

        {/* Text Styling */}
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-2xl font-semibold tracking-widest animate-pulse">
            LOADING
          </h1>
          {/* Progress bar placeholder for extra aesthetic */}
          <div className="h-1 w-24 bg-muted overflow-hidden rounded-full">
            <div className="h-full bg-primary animate-progress-loading" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
