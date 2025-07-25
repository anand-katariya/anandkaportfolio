"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
// import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-[#0D1117] text-white">
        <header className="mb">
          <Navbar />
        </header>
        <Hero />
        <AboutSection />
        {/* <ProjectSection /> */}
        <SkillsSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  );
}
