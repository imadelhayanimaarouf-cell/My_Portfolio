import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 bg-gray-900 py-10 md:py-12 [@media(max-height:740px)]:py-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 [@media(max-height:740px)]:text-5xl">
          Let's{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Connect
          </span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full mb-8 [@media(max-height:740px)]:mb-6"></div>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed [@media(max-height:740px)]:mb-8">
          I'm currently open to new opportunities and exciting projects.
          <br />
          Whether you have a question or just want to say hi, I'll get back to
          you!
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12 [@media(max-height:740px)]:mb-8">
          <a
            href="mailto:imadelhayani07@gmail.com"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
          >
            <FaEnvelope size={22} />
            Send Email
          </a>

          <a
            href="https://wa.me/212637579491"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-green-600 text-white font-bold text-lg rounded-full hover:bg-green-500 hover:scale-105 transition-all duration-300"
          >
            <FaWhatsapp size={24} />
            WhatsApp
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/imad-el-hayani-43939b399"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-800 rounded-full text-cyan-400 hover:bg-cyan-500/20 hover:text-white hover:scale-110 transition-all duration-300 border border-gray-700"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/imadelhayanimaarouf-cell"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-800 rounded-full text-cyan-400 hover:bg-cyan-500/20 hover:text-white hover:scale-110 transition-all duration-300 border border-gray-700"
          >
            <FaGithub size={28} />
          </a>
        </div>

        {/* Fun ending */}
        <p className="mt-12 text-gray-500 text-base sm:text-lg flex items-center justify-center gap-3 [@media(max-height:740px)]:mt-8">
          Looking forward to hearing from you
          <FaPaperPlane className="text-cyan-400" />
        </p>
      </div>
    </section>
  );
}
