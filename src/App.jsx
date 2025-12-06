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
      <NavBar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
