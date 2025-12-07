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
  const socials = [
    {
      Icon: FaGithub,
      href: "https://github.com/imadelhayanimaarouf-cell",
      hover: "hover:bg-gray-700",
      shadow: "hover:shadow-gray-500/40",
    },
    {
      Icon: FaLinkedin,
      href: "https://www.linkedin.com/in/imad-el-hayani-43939b399",
      hover: "hover:bg-blue-700",
      shadow: "hover:shadow-blue-500/40",
    },
    {
      Icon: FaFacebook,
      href: "https://www.facebook.com/imad.el.hayani.572199",
      hover: "hover:bg-blue-600",
      shadow: "hover:shadow-blue-600/40",
    },
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/imad_elhayani",
      hover: "hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600",
      shadow: "hover:shadow-pink-500/40",
    },
    {
      Icon: FaEnvelope,
      href: "mailto:imadelhayani07@gmail.com",
      hover: "hover:bg-red-600",
      shadow: "hover:shadow-red-500/40",
    },
    {
      Icon: FaWhatsapp,
      href: "https://wa.me/2126xxxxxxxxx",
      hover: "hover:bg-green-600",
      shadow: "hover:shadow-green-500/40",
    },
  ];

  return (
    <section
      id="home"
      className="h-[90svh] flex items-center justify-center px-6 bg-gray-900 overflow-hidden "
    >
      <div
        className="
          w-full max-w-5xl mx-auto text-center
          py-10 md:py-12
          [@media(max-height:740px)]:py-7
          [@media(max-height:660px)]:py-5 
        "
      >
        {/* Profile Image */}
        <div className="mb-10 [@media(max-height:740px)]:mb-7 [@media(max-height:660px)]:mb-6">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur-xl opacity-60 animate-pulse" />
            <img
              src="/profile2.jpg"
              alt="Imad El Hayani Maarouf"
              className="
                relative rounded-full object-cover border-4 border-gray-800 shadow-2xl
                transition-transform duration-500 hover:scale-105
                w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-52 lg:h-52
                [@media(max-height:740px)]:w-36 [@media(max-height:740px)]:h-36
                [@media(max-height:660px)]:w-34 [@media(max-height:660px)]:h-34
              "
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 hover:opacity-3 transition-opacity duration-500" />
          </div>
        </div>

        {/* Name */}
        <h1
          className="
            font-black text-white leading-tight
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            [@media(max-height:740px)]:text-5xl
            [@media(max-height:660px)]:text-4xl
          "
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent block mt-2">
            IMAD EL HAYANI <br className="sm:hidden" /> MAAROUF
          </span>
        </h1>

        {/* Title */}
        <p
          className="
            mt-6 text-gray-300 font-light 
            text-lg sm:text-xl md:text-2xl lg:text-3xl
            [@media(max-height:740px)]:mt-4
            [@media(max-height:660px)]:mt-3
          "
        >
          Full-Stack Developer & UI/UX Enthusiast
        </p>

        {/* Social Icons */}
        <div
          className="
            flex flex-wrap justify-center gap-5 mt-10
            [@media(max-height:740px)]:mt-7
            [@media(max-height:660px)]:mt-6
          "
        >
          {socials.map(({ Icon, href, hover, shadow }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                p-4 bg-gray-800 rounded-2xl text-white
                transition-all duration-300 hover:scale-110 hover:shadow-xl
                ${hover} ${shadow}
                [@media(max-height:660px)]:p-3.5
              `}
              aria-label={`social-${i}`}
            >
              <Icon className="text-[32px] [@media(max-height:660px)]:text-[30px]" />
            </a>
          ))}
        </div>

        {/* Tagline */}
        <p
          className="
            mt-10 text-gray-400 mb-2
            text-base sm:text-lg md:text-xl
            [@media(max-height:740px)]:mt-7
            [@media(max-height:660px)]:mt-6
          "
        >
          Let's connect and{" "}
          <span className="text-cyan-400 font-medium">
            build something amazing
          </span>{" "}
          together
        </p>
      </div>
    </section>
  );
}
