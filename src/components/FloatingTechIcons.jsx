// components/FloatingTechIcons.jsx
import React from "react";
import { motion } from "framer-motion";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";

const FloatingTechIcons = () => {
  const techIcons = [
    { icon: <FaReact className="text-cyan-400" />, delay: 0.1 },
    { icon: <FaNodeJs className="text-green-500" />, delay: 0.3 },
    { icon: <SiTypescript className="text-blue-600" />, delay: 0.5 },
    { icon: <SiTailwindcss className="text-cyan-300" />, delay: 0.7 },
    { icon: <SiNextdotjs className="text-white" />, delay: 0.9 },
    { icon: <FaJava className="text-red-500" />, delay: 1.1 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {techIcons.map((tech, index) => (
        <motion.div
          key={index}
          className="absolute text-xl opacity-0"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 0.3, 0],
            y: [0, -50, -100],
            x: [0, Math.random() * 40 - 20, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            delay: tech.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {tech.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingTechIcons;
