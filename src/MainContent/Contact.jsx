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
      className="py-20 px-6 bg-gray-900 min-h-screen flex items-center"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
          Let's{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Connect
          </span>
        </h2>
        <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full mb-12"></div>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm currently open to new opportunities and exciting projects.
          <br />
          Whether you have a question or just want to say hi, I'll get back to
          you!
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a
            href="mailto:imad.elhayani@example.com"
            className="group flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
          >
            <FaEnvelope size={24} />
            Send Email
          </a>

          <a
            href="https://wa.me/212600000000" // Change to your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-5 bg-green-600 text-white font-bold text-lg rounded-full hover:bg-green-500 hover:scale-105 transition-all duration-300"
          >
            <FaWhatsapp size={26} />
            WhatsApp
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8">
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 bg-gray-800 rounded-full text-cyan-400 hover:bg-cyan-500/20 hover:text-white hover:scale-110 transition-all duration-300 border border-gray-700"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 bg-gray-800 rounded-full text-cyan-400 hover:bg-cyan-500/20 hover:text-white hover:scale-110 transition-all duration-300 border border-gray-700"
          >
            <FaGithub size={32} />
          </a>
        </div>

        {/* Fun ending */}
        <p className="mt-16 text-gray-500 text-lg flex items-center justify-center gap-3">
          Looking forward to hearing from you
          <FaPaperPlane className="text-cyan-400" />
        </p>
      </div>
    </section>
  );
}
