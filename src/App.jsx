import React from "react";
import NavBar from "./MainContent/NavBar/NavBar";
import Home from "./MainContent/Home";
import About from "./MainContent/About";
import Skills from "./MainContent/Skills";
import Projects from "./MainContent/Projects";
import Contact from "./MainContent/Contact";

export default function App() {
  return (
    <>
      <div className="scroll-smooth scroll-pt-20 pt-20 bg-gray-900">
        <NavBar />
        <Home /> <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
