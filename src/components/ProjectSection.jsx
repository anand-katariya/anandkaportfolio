"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiFlutter,
  SiTypescript,
  SiPython,
  SiFlask,
  SiSocketdotio,
  SiFirebase,
} from "react-icons/si";
import MatrixRain from "./MatrixRain";
// Removed TypeScript-only import for JSX

const ProjectSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with cart, checkout, and admin dashboard",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      image: "/project1.jpg",
      demo: "#",
      github: "#",
      command: "$ ecommerce --fullstack",
    },
    {
      title: "Task Management App",
      description: "Kanban-style task manager with drag-and-drop functionality",
      tech: ["React", "TypeScript", "Node.js"],
      image: "/project2.jpg",
      demo: "#",
      github: "#",
      command: "$ taskmanager --kanban",
    },
    {
      title: "Fitness Tracker",
      description: "Mobile app for workout tracking and progress analytics",
      tech: ["Flutter", "Firebase"],
      image: "/project3.jpg",
      demo: "#",
      github: "#",
      command: "$ fitnesstracker --mobile",
    },
    {
      title: "Portfolio Website",
      description: "Modern developer portfolio with dark/light mode",
      tech: ["React", "Tailwind", "Framer Motion"],
      image: "/project4.jpg",
      demo: "#",
      github: "#",
      command: "$ portfolio --responsive",
    },
    {
      title: "Chat Application",
      description: "Real-time messaging app with socket.io",
      tech: ["React", "Node.js", "Socket.io"],
      image: "/project5.jpg",
      demo: "#",
      github: "#",
      command: "$ chatapp --realtime",
    },
    {
      title: "Recipe Finder",
      description: "AI-powered recipe recommendation engine",
      tech: ["React", "Python", "Flask"],
      image: "/project6.jpg",
      demo: "#",
      github: "#",
      command: "$ recipefinder --ai",
    },
  ];

  const techFilters = [
    "All",
    "React",
    "Node.js",
    "TypeScript",
    "Flutter",
    "Tailwind",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.tech.includes(activeFilter));

  const getTechIcon = (tech) => {
    const iconMap = {
      React: <SiReact className="text-[#00FFAB]" />,
      "Node.js": <SiNodedotjs className="text-[#00FFAB]" />,
      TypeScript: <SiTypescript className="text-[#00FFAB]" />,
      Flutter: <SiFlutter className="text-[#00FFAB]" />,
      Tailwind: <SiTailwindcss className="text-[#00FFAB]" />,
      MongoDB: <SiMongodb className="text-[#00FFAB]" />,
      Python: <SiPython className="text-[#00FFAB]" />,
      Flask: <SiFlask className="text-[#00FFAB]" />,
      "Socket.io": <SiSocketdotio className="text-[#00FFAB]" />,
      Firebase: <SiFirebase className="text-[#00FFAB]" />,
      "Framer Motion": <SiReact className="text-[#00FFAB]" />,
    };
    return iconMap[tech] || null;
  };

  return (
    <section
      id="projects"
      className="py-20 bg-[#0D1117] border-t border-[#161B22] relative overflow-hidden"
    >
      {/* Matrix rain background */}
      <MatrixRain density={45} />

      {/* Floating glow elements */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-32 h-32 rounded-full bg-[#58A6FF]/10 blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Terminal-style header */}
        <motion.div
          className="flex items-center justify-center mb-12 font-mono text-[#E6EDF3]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-[#00FFAB]">user@portfolio:~$</span>
          <span className="ml-2">ls projects/</span>
          <motion.span
            className="h-5 w-1 bg-[#00FFAB] ml-1"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFAB] to-[#58A6FF] mb-4 font-mono">
            $ ./my_projects
          </h2>
          <p className="text-lg text-[#E6EDF3]/80 max-w-2xl mx-auto font-mono">
            // Here are some of my recent works. Each project was built to solve
            real problems.
          </p>
        </motion.div>

        {/* Tech Stack Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {techFilters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all font-mono ${
                activeFilter === filter
                  ? "bg-[#00FFAB] text-[#0D1117] hover:shadow-[0_0_15px_rgba(0,255,171,0.5)]"
                  : "bg-[#161B22]/80 backdrop-blur-sm text-[#E6EDF3] hover:bg-[#00FFAB]/10 hover:text-[#00FFAB] border border-[#00FFAB]/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -5,
                borderColor: "#00FFAB",
                boxShadow: "0 10px 25px -5px rgba(0, 255, 171, 0.2)",
              }}
              className="bg-[#161B22]/80 backdrop-blur-sm rounded-lg overflow-hidden border border-[#00FFAB]/20 hover:border-[#00FFAB]/50 transition-all duration-300 shadow-lg"
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-[#00FFAB]/10 flex items-center justify-center">
                  <span className="text-[#00FFAB] font-mono text-lg">
                    project_screenshot.jpg
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#E6EDF3] mb-2 font-mono">
                  {project.title}
                </h3>
                <p className="text-[#E6EDF3]/80 mb-4 font-mono">
                  {">"} {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-[#0D1117]/80 backdrop-blur-sm text-[#00FFAB] border border-[#00FFAB]/30 font-mono"
                    >
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Command line */}
                <div className="text-[#58A6FF]/70 text-xs font-mono mb-4">
                  {project.command}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00FFAB] to-[#58A6FF] text-[#0D1117] rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-[#00FFAB]/30 transition-all font-mono"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink />$ demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#161B22]/80 backdrop-blur-sm text-[#E6EDF3] border border-[#00FFAB]/30 rounded-lg text-sm font-medium hover:bg-[#00FFAB]/10 hover:text-[#00FFAB] transition-all font-mono"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub />$ source
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Terminal output footer */}
        <motion.div
          className="mt-16 p-4 bg-[#161B22]/80 backdrop-blur-sm rounded-lg border border-[#00FFAB]/30 font-mono text-sm text-[#E6EDF3]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-[#00FFAB]">$ ./projects_summary</p>
          <p className="ml-4">
            {">"} Total projects: {projects.length}
          </p>
          <p className="ml-4">
            {">"} Filtered projects: {filteredProjects.length}
          </p>
          <p className="ml-4 text-[#00FFAB]">
            {">"} Status:{" "}
            <span className="text-[#E6EDF3]">All systems operational</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
