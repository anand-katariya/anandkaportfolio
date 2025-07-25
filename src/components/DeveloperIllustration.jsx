// src/components/DeveloperIllustration.jsx
import React from "react";

const DeveloperIllustration = () => (
  <svg viewBox="0 0 500 400" className="w-full h-auto">
    {/* Laptop base */}
    <rect x="100" y="250" width="300" height="20" rx="2" fill="#333" />
    {/* Laptop screen */}
    <rect x="120" y="100" width="260" height="170" rx="2" fill="#222" />
    {/* Screen content */}
    <rect x="135" y="115" width="230" height="140" fill="#1a1a1a" />
    {/* Code lines */}
    <text x="145" y="140" fontFamily="monospace" fontSize="14" fill="#4CAF50">
      <tspan x="145" dy="20">
        function Portfolio() {"{"}
      </tspan>
      <tspan x="160" dy="20">
        return (
      </tspan>
      <tspan x="175" dy="20">
        &lt;div className="app"&gt;
      </tspan>
      <tspan x="175" dy="20">
        &lt;HeroSection /&gt;
      </tspan>
      <tspan x="175" dy="20">
        &lt;Projects /&gt;
      </tspan>
      <tspan x="175" dy="20">
        &lt;/div&gt;
      </tspan>
      <tspan x="160" dy="20">
        )
      </tspan>
      <tspan x="145" dy="20">
        {"}"}
      </tspan>
    </text>
    {/* Developer figure */}
    <circle cx="350" cy="200" r="30" fill="#555" />
    <circle cx="340" cy="190" r="3" fill="#fff" />
    <circle cx="360" cy="190" r="3" fill="#fff" />
  </svg>
);

export default DeveloperIllustration;
