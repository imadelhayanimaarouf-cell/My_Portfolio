import React from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 bg-gray-950 py-10 md:py-12 [@media(max-height:740px)]:py-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Side - Text */}
        <div className="text-left space-y-6 [@media(max-height:740px)]:space-y-4">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight [@media(max-height:740px)]:text-5xl">
              About{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-600 mt-3 rounded-full"></div>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
            Hello! I’m Imad, a junior full-stack web developer at the start of
            my journey.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
            I enjoy creating web applications that are not only functional but
            also efficient and easy to maintain. I explore a variety of
            technologies across front-end and back-end development, always
            applying clean code principles.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
            I’m motivated by teamwork, continuous learning, and improving my
            skills every day to deliver high-quality solutions.
          </p>

          {/* Social Links + Download CV */}
          <div className="flex flex-col sm:flex-row gap-5 pt-4 [@media(max-height:740px)]:pt-2">
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/imad-el-hayani-43939b399" // Change this
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-gray-800 rounded-full text-cyan-400 hover:bg-cyan-500/20 hover:text-white hover:scale-110 transition-all duration-300 border border-gray-700"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/imadelhayanimaarouf-cell" // Change this
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-gray-800 rounded-full text-cyan-400 hover:bg-cyan-500/20 hover:text-white hover:scale-110 transition-all duration-300 border border-gray-700"
              >
                <FaGithub size={24} />
              </a>
            </div>

            {/* Download CV Button */}
            <a
              href="/CVImadElhayaniMaarouf.pdf" // Put your CV in /public folder
              download="Imad_ElHayani_Maarouf_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-base md:text-lg rounded-full hover:shadow-2xl hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
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
                src="/AbPic.jpg" // Put your photo in public/
                alt="Imad El Hayani Maarouf"
                className="
                  object-cover rounded-3xl shadow-2xl
                  w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[450px] 
                  [@media(max-height:740px)]:w-60 [@media(max-height:740px)]:h-72
                  [@media(max-height:660px)]:w-52 [@media(max-height:660px)]:h-64
                "
              />
            </div>

            {/* This is the badge you wanted to keep */}
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-lg">
              Available for work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
