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
      <div className="relative inline-block group">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
        <img
          src="/profile2.jpg"
          alt="Imad El Hayani Maarouf"
          // Reduced sizes: w-32/h-32 on mobile, max w-48 on desktop
          className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-gray-800 shadow-2xl hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}
