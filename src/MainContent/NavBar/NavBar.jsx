// NavBar.jsx (copy/paste)
import React, { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-gray-950/95 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo - IMAD */}
          <a
            href="#home"
            className="text-3xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300"
          >
            IMAD
          </a>

          {/* Desktop Nav - Center */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <div className="flex space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Button + Mobile Menu */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:block px-7 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-cyan-400"
              aria-label="Toggle menu"
            >
              {!isMenuOpen ? (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t bg-gray-950/95 p-8  rounded-xl border-gray-800 pt-6">
            <div className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-cyan-400 text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full text-center hover:shadow-2xl hover:shadow-cyan-500/30"
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
