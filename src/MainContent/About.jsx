import React from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gray-950 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Side - Text */}
        <div className="text-left space-y-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-600 mt-4 rounded-full"></div>
          </div>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Hello! I’m Imad, a passionate junior full-stack web developer at the
            beginning of an exciting journey.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I love building web applications that are functional, fast, and easy
            to maintain. Whether it's crafting pixel-perfect UIs with React &
            Tailwind or building robust backends with Node.js, I enjoy every
            part of the process.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I'm driven by clean code, continuous learning, and collaboration.
            Every project is an opportunity to grow and create something
            meaningful.
          </p>

          {/* Social Links + Download CV */}
          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            {/* Social Icons */}
            <div className="flex gap-5">
              <a
                href="https://linkedin.com/in/your-linkedin" // Change this
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-800 rounded-full text-cyan-400 hover:bg-cyan-500/20 hover:text-white hover:scale-110 transition-all duration-300 border border-gray-700"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://github.com/your-github" // Change this
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-800 rounded-full text-cyan-400 hover:bg-cyan-500/20 hover:text-white hover:scale-110 transition-all duration-300 border border-gray-700"
              >
                <FaGithub size={28} />
              </a>
            </div>

            {/* Download CV Button */}
            <a
              href="/Imad_ElHayani_CV.pdf" // Put your CV in /public folder
              download="Imad_ElHayani_Maarouf_CV.pdf"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
            >
              <FaDownload />
              Download CV
            </a>
          </div>
        </div>

        {/* Right Side - Photo */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-700"></div>

            <div className="relative bg-gray-900 p-2 rounded-3xl">
              <img
                src="/your-photo.jpg" // Put your photo in public/
                alt="Imad El Hayani Maarouf"
                className="w-80 h-96 md:w-96 md:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
              Available for work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
