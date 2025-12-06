import React from "react";
import {
  SiJavascript,
  SiPhp,
  SiPython,
  SiMongodb,
  SiMysql,
  SiOracle,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiGithub,
  SiPostman,
  SiFigma,
  SiNpm,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc"; // Official VS Code icon

export default function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" />,
        },
        { name: "PHP", icon: <SiPhp className="text-indigo-400" /> },
        { name: "Python", icon: <SiPython className="text-blue-400" /> },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        { name: "Oracle", icon: <SiOracle className="text-red-600" /> },
      ],
    },
    {
      category: "Libraries & Tools",
      items: [
        { name: "Redux / RTK", icon: <SiRedux className="text-purple-500" /> },
        { name: "React Query", icon: <SiReact className="text-cyan-400" /> },
        {
          name: "Shadcn/ui",
          icon: (
            <svg
              width="32"
              height="32"
              viewBox="0 0 256 256"
              className="text-white"
            >
              <circle
                cx="128"
                cy="128"
                r="96"
                fill="none"
                stroke="currentColor"
                strokeWidth="20"
              />
              <path
                d="M128 32 L128 224 M32 128 L224 128"
                stroke="currentColor"
                strokeWidth="20"
                strokeLinecap="round"
              />
            </svg>
          ),
        },
        {
          name: "Framer Motion",
          icon: (
            <svg
              width="32"
              height="32"
              viewBox="0 0 256 256"
              className="text-white"
            >
              <path
                fill="currentColor"
                d="M208 32H48C21.5 32 0 53.5 0 80v96c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM80 144c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm96 0c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"
              />
              <path fill="#E535AB" d="M128 96l-48 48h96l-48-48z" />
            </svg>
          ),
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-400" />,
        },
        {
          name: "Bootstrap",
          icon: <SiBootstrap className="text-purple-600" />,
        },
      ],
    },
    {
      category: "Frameworks",
      items: [
        { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
        { name: "Next.js", icon: <SiReact className="text-white" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
        { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
      ],
    },
    {
      category: "Tools & Software",
      items: [
        { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
        { name: "Git & GitHub", icon: <SiGithub className="text-white" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
        { name: "NPM", icon: <SiNpm className="text-red-600" /> },
      ],
    },
    {
      category: "Design Methods",
      items: [
        {
          name: "UML",
          icon: (
            <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center text-xs font-bold text-gray-400">
              UML
            </div>
          ),
        },
        {
          name: "MERISE",
          icon: (
            <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center text-xs font-bold text-gray-400">
              MERISE
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gray-900 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((section) => (
            <div
              key={section.category}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-6">
                {section.category}
              </h3>
              <div className="space-y-5">
                {section.items.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-4">
                    <div className="text-3xl flex-shrink-0">{skill.icon}</div>
                    <span className="text-gray-200 text-lg">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
