import React from "react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 bg-gray-950 py-10 md:py-12"
    >
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 [@media(max-height:740px)]:text-5xl">
          My{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full mb-10 [@media(max-height:740px)]:mb-8"></div>

        {/* Message */}
        <p className="text-xl md:text-3xl font-light text-gray-400 leading-relaxed">
          Exciting things are being built right now...
        </p>

        <p className="text-lg md:text-2xl text-gray-500 mt-6 max-w-2xl mx-auto [@media(max-height:740px)]:mt-4">
          Full-stack applications, clean UI designs, and real-world solutions
          <br />
          <span className="hidden md:block" />
          are in development and will be showcased here very soon.
        </p>

        {/* Decorative animated dots */}
        <div className="flex justify-center gap-3 mt-10 [@media(max-height:740px)]:mt-8">
          <span className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></span>
          <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-150"></span>
          <span className="w-3 h-3 bg-cyan-600 rounded-full animate-bounce delay-300"></span>
        </div>

        <p className="text-gray-500 mt-8 text-base md:text-lg [@media(max-height:740px)]:mt-6">
          Stay tuned
        </p>
      </div>
    </section>
  );
}

// import React from "react";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// export default function Projects() {
//   const projects = [
//     {
//       title: "Personal Portfolio Website",
//       desc: "This very website! Built with React, Tailwind CSS, and lots of love. Fully responsive, modern design, smooth scroll, dark mode ready.",
//       tech: ["React", "Tailwind CSS", "Vite"],
//       github: "https://github.com/yourusername/your-portfolio-repo", // Change this
//       live: "https://yourdomain.com", // or leave as "#"
//       wip: false,
//     },
//     {
//       title: "Task Manager App",
//       desc: "A clean to-do list app with add/edit/delete tasks, local storage persistence, and dark mode toggle.",
//       tech: ["React", "Tailwind CSS", "LocalStorage"],
//       github: "https://github.com/yourusername/task-manager",
//       live: "#",
//       wip: true,
//     },
//     {
//       title: "Weather Dashboard",
//       desc: "Real-time weather app using OpenWeatherMap API. Search by city, shows temperature, humidity, and 5-day forecast.",
//       tech: ["JavaScript", "API", "Tailwind CSS"],
//       github: "https://github.com/yourusername/weather-app",
//       live: "#",
//       wip: true,
//     },
//     {
//       title: "E-commerce Product Page",
//       desc: "Clone of a modern product page (like sneakers shop) with cart functionality and image gallery.",
//       tech: ["React", "Context API", "Tailwind"],
//       github: "#",
//       live: "#",
//       wip: true,
//     },
//   ];

//   return (
//     <section id="projects" className="py-20 px-6 bg-gray-950 min-h-screen">
//       <div className="max-w-6xl mx-auto">
//         {/* Title */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
//             My{" "}
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
//               Projects
//             </span>
//           </h2>
//           <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
//           <p className="text-gray-400 mt-6 text-lg">
//             I’m always have something in progress · Learning by building!
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="group relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500"
//             >
//               {/* Placeholder image or gradient */}
//               <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-2 border-dashed border-gray-700 rounded-t-2xl flex items-center justify-center">
//                 <span className="text-gray-600 text-6xl font-bold">
//                   0{index + 1}
//                 </span>
//               </div>

//               <div className="p-8">
//                 <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
//                   {project.title}
//                   {project.wip && (
//                     <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
//                       In Progress
//                     </span>
//                   )}
//                 </h3>
//                 <p className="text-gray-400 mb-6 leading-relaxed">
//                   {project.desc}
//                 </p>

//                 {/* Tech tags */}
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.tech.map((t) => (
//                     <span
//                       key={t}
//                       className="px-3 py-1 bg-gray-800 text-cyan-400 text-sm rounded-full border border-gray-700"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Links */}
//                 <div className="flex gap-6">
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition"
//                   >
//                     <FaGithub size={20} /> Code
//                   </a>
//                   {project.live !== "#" && (
//                     <a
//                       href={project.live}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition"
//                     >
//                       <FaExternalLinkAlt size={18} /> Live Demo
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bonus message */}
//         <p className="text-center text-gray-500 mt-16 text-lg">
//           More exciting projects coming soon · Currently building full-stack
//           apps with Next.js + MongoDB
//         </p>
//       </div>
//     </section>
//   );
// }
