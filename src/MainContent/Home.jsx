import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

export default function Home() {
  return (
    <div
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-6 bg-gray-900 pt-16 md:pt-0"
    >
      <div className="text-center max-w-5xl mx-auto pb-12 pt-26">
        {/* Profile Image */}
        <div className="mb-10 md:mb-12">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-linear-to-r from-cyan-400 to-blue-600 rounded-full blur-xl opacity-60 animate-pulse"></div>
            <img
              src="/imad2.jpg" // ← Put your photo in public/profile.jpg
              alt="Imad El Hayani Maarouf"
              className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-gray-800 shadow-2xl hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 hover:opacity-30 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent block mt-2">
            IMAD EL HAYANI
            <br className="sm:hidden" /> MAAROUF
          </span>
        </h1>

        {/* Title */}
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light mt-6 md:mt-10">
          Full-Stack Developer & UI/UX Enthusiast
        </p>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 md:mt-16">
          <a
            href="https://github.com/imadelhayanimaarouf-cell"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-800 rounded-2xl text-white hover:bg-gray-700 hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300"
          >
            <FaGithub size={32} />
          </a>

          <a
            href="https://www.linkedin.com/in/imad-el-hayani-43939b399"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-800 rounded-2xl text-white hover:bg-blue-700 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300"
          >
            <FaLinkedin size={32} />
          </a>

          <a
            href="https://www.facebook.com/imad.el.hayani.572199"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-800 rounded-2xl text-white hover:bg-blue-600 hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 transition-all duration-300"
          >
            <FaFacebook size={32} />
          </a>

          <a
            href="https://www.instagram.com/imad_elhayani"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-800 rounded-2xl text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:scale-110 hover:shadow-xl hover:shadow-pink-500/50 transition-all duration-300"
          >
            <FaInstagram size={32} />
          </a>

          <a
            href="mailto:imadelhayani07@gmail.com"
            className="p-4 bg-gray-800 rounded-2xl text-white hover:bg-red-600 hover:scale-110 hover:shadow-xl hover:shadow-red-500/50 transition-all duration-300"
          >
            <FaEnvelope size={32} />
          </a>

          <a
            href="https://wa.me/2126xxxxxxxxx" // ← Replace with your real number
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-800 rounded-2xl text-white hover:bg-green-600 hover:scale-110 hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300"
          >
            <FaWhatsapp size={32} />
          </a>
        </div>

        {/* Tagline */}
        <p className="mt-12 text-lg sm:text-xl text-gray-400 font-light">
          Let's connect and{" "}
          <span className="text-cyan-400 font-medium">
            build something amazing
          </span>{" "}
          together
        </p>
      </div>
    </div>
  );
}
