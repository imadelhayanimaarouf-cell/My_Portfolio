import React from "react";

export default function Test() {
  return (
    <div className="w-full flex justify-center items-center h-screen ">
      <div className="w-full h-screen bg-amber-300">heloo</div>
      <div className="w-full h-screen  bg-blue-950">hi</div>
      <div className="absolute top-160 px-6 py-8  ">
        <button class="px-8 py-4 backdrop-blur-xl rounded-full bg-white-10 border border-white/20 font-bold text-white shadow-xl transform transition-all duration-300 hover:bg-white/20 hover:scale-110">
          Glass Button
        </button>
      </div>
    </div>
  );
}
