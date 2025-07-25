"use client";

import React from "react";
import { motion } from "framer-motion";

const MatrixRain = ({ density = 50, className = "" }) => {
  const chars =
    "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン{}[]()<>#@$%^&*-+=|\\/;:,.?\"'`~";

  const matrixChars = Array(density)
    .fill(null)
    .map((_, index) => ({
      id: index,
      char: chars[Math.floor(Math.random() * chars.length)],
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5, // Reduced delay
      speed: 1 + Math.random() * 5, // Faster speed
      size: 12 + Math.random() * 10, // Larger size
      opacity: 0.3 + Math.random() * 0.7, // Increased opacity
    }));

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}
    >
      {matrixChars.map((char) => (
        <motion.div
          key={char.id}
          className="absolute text-[#00FFAB] font-mono select-none"
          style={{
            left: char.left,
            top: "-2rem",
            fontSize: `${char.size}px`,
            opacity: char.opacity,
            textShadow: "0 0 8px rgba(0, 255, 171, 0.9)", // More prominent glow
          }}
          animate={{
            y: "100vh",
            opacity: [0, char.opacity, 0],
          }}
          transition={{
            duration: char.speed,
            delay: char.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: Math.random() * 5, // Reduced repeat delay
            ease: "linear",
          }}
        >
          {char.char}
        </motion.div>
      ))}
    </div>
  );
};

export default MatrixRain;
