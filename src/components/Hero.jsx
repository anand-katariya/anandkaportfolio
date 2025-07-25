"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiMail } from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";
import MatrixRain from "./MatrixRain";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const fullText = "Full-Stack Developer";

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
        const cursor = setInterval(() => {
          setCursorVisible((prev) => !prev);
        }, 500);
        return () => clearInterval(cursor);
      }
    }, 100);

    return () => clearInterval(typing);
  }, []);

  const techIcons = [
    { icon: <FaReact className="text-[#00FFAB]" />, name: "React" },
    { icon: <FaNodeJs className="text-[#00FFAB]" />, name: "Node.js" },
    { icon: <SiTailwindcss className="text-[#00FFAB]" />, name: "Tailwind" },
    { icon: <SiTypescript className="text-[#00FFAB]" />, name: "TypeScript" },
    { icon: <SiNextdotjs className="text-[#00FFAB]" />, name: "Next.js" },
  ];

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-[#0D1117]">
      {/* Matrix Background */}
      <MatrixRain density={60} />

      {/* Glowing Floating Blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-[#00FFAB]/10 blur-xl z-0"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-[#58A6FF]/10 blur-xl z-0"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Terminal Command */}
      <div className="absolute top-10 left-6 flex items-center font-mono text-[#E6EDF3] text-sm opacity-70 z-20">
        <span className="text-[#00FFAB]">user@portfolio:~$</span>
        <span className="ml-2">npm start</span>
        <motion.span
          className="h-4 w-1 bg-[#00FFAB] ml-1"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Left Side Text */}
        <motion.div
          className="lg:w-1/2 mb-16 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-[#E6EDF3] mb-4 leading-tight font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Anand Katariya
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00FFAB] to-[#58A6FF]">
              {typedText}
              <span
                className={`inline-block w-2 h-8 bg-[#00FFAB] ml-1 ${
                  cursorVisible ? "opacity-100" : "opacity-0"
                }`}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-[#E6EDF3]/80 mb-8 max-w-lg font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            $ Building seamless digital experiences with modern tech stack.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00FFAB] to-[#58A6FF] text-[#0D1117] rounded-lg font-mono font-medium hover:shadow-lg hover:shadow-[#00FFAB]/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload />$ ./download_resume
            </motion.a>
            <motion.a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 border border-[#00FFAB] text-[#00FFAB] rounded-lg font-mono font-medium hover:bg-[#00FFAB]/10 hover:shadow-lg hover:shadow-[#00FFAB]/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail />$ contact_me
            </motion.a>
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div
            className="flex flex-wrap gap-3 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {techIcons.map((tech, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 px-3 py-1.5 bg-[#161B22]/80 backdrop-blur-sm rounded-full text-sm text-[#E6EDF3] border border-[#00FFAB]/30 font-mono"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  borderColor: "#00FFAB",
                  boxShadow: "0 0 10px rgba(0, 255, 171, 0.5)",
                }}
              >
                <span className="text-lg">{tech.icon}</span>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side Illustration */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full max-w-xl">
            <div className="border-2 border-[#00FFAB]/50 rounded-lg p-1 bg-[#161B22]/80 backdrop-blur-sm shadow-lg shadow-[#00FFAB]/10">
              <div className="flex items-center px-3 py-2 border-b border-[#00FFAB]/30">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs text-[#E6EDF3]/80 font-mono ml-4">
                  developer_illustration.jsx
                </div>
              </div>
              <div className="relative z-10 p-4">
                <div className="w-full h-64 bg-[#00FFAB]/10 rounded-lg flex items-center justify-center">
                  <span className="text-[#00FFAB] font-mono text-lg">
                    {"<DeveloperIllustration />"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
