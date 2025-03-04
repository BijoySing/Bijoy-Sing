import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Organizations from "./components/Organizations";
import Projects from "./components/Projects";
import Coding from "./components/Coding";
import Contact from "./components/Contact";
import Achievement from "./components/Achievement";
import Footer from "./components/Footer";
import "./App.css";


function App() {
  return (
    <div className="ok dark:bg-black-800 dark:text-black transition-colors duration-500
    bg-white text-gray-900">
      <Navbar/>
      <Hero />
      <Education />
      <Projects />
      <Coding />
      <Achievement />
      <Organizations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
  