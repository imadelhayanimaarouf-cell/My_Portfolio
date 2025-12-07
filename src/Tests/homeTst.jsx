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
    <section
      id="home"
      // Change 1: Use h-screen (or 100dvh for mobile) to force exact screen height
      // Added overflow-hidden to prevent accidental scrollbars
      className="h-screen w-full flex flex-col justify-center items-center bg-gray-900 overflow-hidden relative"
    >
      {/* Background decoration (optional) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/20 to-gray-900 z-0"></div>

      {/* Main Container - Adjusted for compact vertical spacing */}
      {/* z-10 ensures it sits above background. pt-16 accounts for navbar */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center h-full pt-16">
        {/* Content Wrapper with tighter spacing (gap-6 instead of space-y-12) */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
          {/* Profile Image - Slightly reduced size for better fit */}
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
            <img
              src="/profile2.jpg"
              alt="Imad El Hayani Maarouf"
              // Reduced sizes: w-32/h-32 on mobile, max w-48 on desktop
              className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-gray-800 shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent inline-block">
                IMAD
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
              Full-Stack Developer & UI/UX Enthusiast
            </p>
          </div>

          {/* Social Icons - Reduced padding for compactness */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            {[
              {
                Icon: FaGithub,
                link: "https://github.com/imadelhayanimaarouf-cell",
              },
              {
                Icon: FaLinkedin,
                link: "https://www.linkedin.com/in/imad-el-hayani-43939b399",
              },
              {
                Icon: FaFacebook,
                link: "https://www.facebook.com/imad.el.hayani.572199",
              },
              {
                Icon: FaInstagram,
                link: "https://www.instagram.com/imad_elhayani",
              },
              { Icon: FaEnvelope, link: "mailto:imadelhayani07@gmail.com" },
              { Icon: FaWhatsapp, link: "https://wa.me/2126xxxxxxxxx" },
            ].map(({ Icon, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                // Reduced padding (p-3) and icon size
                className="p-3 bg-gray-800 rounded-xl text-white hover:bg-gray-700 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300 shadow-lg border border-gray-700/50"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </a>
            ))}
          </div>

          {/* Tagline - Made smaller */}
          <p className="text-sm sm:text-base md:text-lg text-gray-500">
            Let's connect and{" "}
            <span className="text-cyan-400 font-bold">
              build something amazing
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
