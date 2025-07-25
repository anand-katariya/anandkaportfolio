"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
  FiMenu,
  FiX,
} from "react-icons/fi";
import MatrixRain from "./MatrixRain";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com/anand-katariya" },
    {
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/anand-katariya-709309225/",
    },
    { icon: <FiMail />, url: "mailto:akxiianandkatariya@gmail.com" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = [
        "about",
        "projects",
        "skills",
        "testimonials",
        "contact",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= 100 && bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setMobileOpen(false);
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D1117]/95 backdrop-blur-sm shadow-lg py-2 border-b border-[#161B22]"
          : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <MatrixRain density={20} />

      <div className="container mx-auto px-6 flex justify-between items-center relative z-10">
        {/* Logo/Name */}
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFAB] to-[#58A6FF] font-mono">
            Anand Katariya
          </span>
          <motion.span
            className="h-2 w-2 rounded-full bg-[#00FFAB]"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>

        {/* Desktop Nav */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6">
              {navItems.map((item) => (
                <motion.li
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-2 py-1 font-mono font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-[#00FFAB]"
                        : "text-[#E6EDF3] hover:text-white"
                    }`}
                  >
                    {`> ${item.label}`}
                    {activeSection === item.id && (
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00FFAB]"
                        layoutId="nav-underline"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </button>
                </motion.li>
              ))}
            </ul>

            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E6EDF3] hover:text-[#00FFAB] text-xl transition-colors"
                  whileHover={{
                    y: -3,
                    textShadow: "0 0 8px rgba(0, 255, 171, 0.8)",
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            <motion.a
              href="https://drive.google.com/file/d/10ODPok1asAJ43gFnx6dQ0yxqgv9Em0U1/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00FFAB] to-[#58A6FF] text-[#0D1117] rounded-lg font-mono font-medium hover:shadow-lg hover:shadow-[#00FFAB]/30 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(0, 255, 171, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload />
              Resume
            </motion.a>
          </div>

          {/* Mobile Button */}
          <motion.button
            className="md:hidden text-[#E6EDF3] text-2xl z-50 relative"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-[#0D1117]/95 backdrop-blur-sm z-40 pt-24 px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <MatrixRain density={15} />

            <motion.div
              className="absolute inset-0 border-2 border-[#00FFAB] opacity-20 pointer-events-none"
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <ul className="flex flex-col items-center gap-8 text-xl font-mono relative z-10">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-[#00FFAB]"
                        : "text-[#E6EDF3] hover:text-white"
                    }`}
                  >
                    {`> ${item.label}`}
                  </button>
                </motion.li>
              ))}

              <div className="flex gap-6 mt-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E6EDF3] hover:text-[#00FFAB] text-2xl"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{
                      y: -3,
                      textShadow: "0 0 8px rgba(0, 255, 171, 0.8)",
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="https://drive.google.com/file/d/10ODPok1asAJ43gFnx6dQ0yxqgv9Em0U1/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00FFAB] to-[#58A6FF] text-[#0D1117] rounded-lg font-mono font-medium text-xl mt-8 w-full max-w-xs"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 15px rgba(0, 255, 171, 0.5)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <FiDownload /> Resume
              </motion.a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
