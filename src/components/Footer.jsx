"use client"

import { motion } from "framer-motion"
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiInstagram, FiSun, FiMoon } from "react-icons/fi"
import MatrixRain from "./MatrixRain"

const Footer = ({ darkMode = true, toggleDarkMode }) => {
  // Terminal-like typing animation variants
  const typingVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  // Social icon hover animation
  const socialHover = {
    y: -4,
    color: "#00FFAB",
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 10,
    },
  }

  // Theme toggle animation
  const themeToggleHover = {
    scale: 1.1,
    boxShadow: "0 0 10px rgba(0, 255, 171, 0.5)",
    backgroundColor: "#161B22",
  }

  return (
    <footer className="bg-[#0D1117] border-t border-[#30363D] py-8 relative overflow-hidden">
      {/* Matrix rain background */}
      <MatrixRain density={25} />

      {/* Animated binary background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#00FFAB] text-xs font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0.1, 0.5, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 15,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={typingVariants}
            viewport={{ once: true }}
            className="text-[#8B949E] mb-4 md:mb-0 font-mono text-sm"
          >
            {"// © 2025 Anand Katariya. All rights reserved."}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center space-x-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/anand-katariya"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={socialHover}
              className="text-[#8B949E] transition-colors"
              aria-label="GitHub"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FiGithub className="text-xl" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/anand-katariya-709309225"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={socialHover}
              className="text-[#8B949E] transition-colors"
              aria-label="LinkedIn"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            >
              <FiLinkedin className="text-xl" />
            </motion.a>
            <motion.a
              href="mailto:akxiianandkatariya@gmail.com"
              whileHover={socialHover}
              className="text-[#8B949E] transition-colors"
              aria-label="Email"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            >
              <FiMail className="text-xl" />
            </motion.a>
            <motion.a
              href="https://x.com/Anand57029647"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={socialHover}
              className="text-[#8B949E] transition-colors"
              aria-label="Twitter"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
            >
              <FiTwitter className="text-xl" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/_anandkatariya/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={socialHover}
              className="text-[#8B949E] transition-colors"
              aria-label="Instagram"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
            >
              <FiInstagram className="text-xl" />
            </motion.a>
          </motion.div>

          {/* Theme Toggle */}
          {toggleDarkMode && (
            <motion.button
              onClick={toggleDarkMode}
              whileHover={themeToggleHover}
              whileTap={{ scale: 0.9 }}
              className="mt-4 md:mt-0 p-2 rounded-full bg-[#161B22]/80 backdrop-blur-sm transition-colors border border-[#30363D]"
              aria-label="Toggle dark mode"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {darkMode ? (
                <FiSun className="text-[#00FFAB] text-xl" />
              ) : (
                <FiMoon className="text-[#00FFAB] text-xl" />
              )}
            </motion.button>
          )}
        </div>

        {/* Additional Links */}
        <motion.div
          className="mt-8 pt-6 border-t border-[#30363D] flex flex-col md:flex-row justify-center md:justify-between items-center text-sm text-[#8B949E] font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex space-x-4 mb-4 md:mb-0">
            <motion.a
              href="#"
              whileHover={{ color: "#00FFAB" }}
              className="transition-colors"
            >
              $ privacy_policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: "#00FFAB" }}
              className="transition-colors"
            >
              $ terms
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ color: "#00FFAB" }}
              className="transition-colors"
            >
              $ contact_me
            </motion.a>
          </div>
          <motion.div
            whileHover={{ color: "#00FFAB" }}
            transition={{ duration: 0.3 }}
          >
            {"// Built with "}
            <span className="text-[#58A6FF]">React</span>
            {" & "}
            <span className="text-[#00FFAB]">Tailwind CSS</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer
