"use client";
import { motion } from "framer-motion";
import { FiAward, FiBriefcase, FiBook } from "react-icons/fi";
import MatrixRain from "./MatrixRain";
import photo from "../assets/anand.jpg";

const AboutSection = () => {
  const timelineData = [
    {
      icon: <FiBook className="text-[#00FFAB]" />,
      year: "2023-2027",
      title: "B.Tech Computer Science",
      subtitle: "Prof. Ram Meghe Institute of Technology and Research",
      command: "$ education --university",
    },
    {
      icon: <FiBriefcase className="text-[#00FFAB]" />,
      year: "Summer 2024",
      title: "Java Developer Intern",
      subtitle: "Oasis Infobyte",
      command: "$ experience --internship",
    },
    {
      icon: <FiAward className="text-[#00FFAB]" />,
      year: "2024",
      title: "E-Cell",
      subtitle: "Web and Technical Team Lead",
      command: "$ leadership --position",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-[#0D1117] border-t border-[#161B22] relative overflow-hidden"
    >
      {/* Matrix rain background */}
      <MatrixRain density={40} />

      {/* Floating glow elements */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-36 h-36 rounded-full bg-[#00FFAB]/10 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
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
          <span className="ml-2">cat about_me.txt</span>
          <motion.span
            className="h-5 w-1 bg-[#00FFAB] ml-1"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left Column - Photo with terminal-style frame */}
          <motion.div
            className="w-full lg:w-1/3 flex justify-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 border-2 border-[#00FFAB]/50 rounded-lg bg-[#161B22]/80 backdrop-blur-sm shadow-lg shadow-[#00FFAB]/10">
              <div className="flex items-center px-3 py-2 border-b border-[#00FFAB]/30">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs text-[#E6EDF3]/80 font-mono ml-4">
                  profile_photo.jpg
                </div>
              </div>
              <div className="p-4 h-full flex items-center justify-center">
                <div className="w-full h-full bg-[#00FFAB]/10 rounded-md flex items-center justify-center overflow-hidden">
                  <img
                    src={photo}
                    alt="Anand Katariya"
                    className="w-full h-60 object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-2/3 space-y-8">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#E6EDF3] font-mono"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFAB] to-[#58A6FF]">
                Anand Katariya
              </span>
              <span className="block text-[#E6EDF3]/80 text-xl md:text-2xl mt-2 font-mono">
                $ Full-Stack Developer
              </span>
            </motion.h2>

            <motion.p
              className="text-lg text-[#E6EDF3]/80 leading-relaxed font-mono"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              // Passionate about crafting high-performance, modern web
              <br />
              // applications with elegant user experiences. I specialize in
              <br />
              // building full-stack solutions that are both beautiful and
              <br />
              // functional.
            </motion.p>

            <motion.div
              className="p-6 bg-[#161B22]/80 backdrop-blur-sm rounded-lg border border-[#00FFAB]/30 font-mono"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-[#00FFAB]">
                Currently focused on building impactful and scalable web
                <br />
                solutions with <span className="text-[#00FFAB]">
                  React
                </span>, <span className="text-[#00FFAB]">Node.js</span>,
                <br /> and{" "}
                <span className="text-[#58A6FF]">cloud technologies</span>.
              </p>
            </motion.div>

            {/* Timeline */}
            <motion.div
              className="mt-12 space-y-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-[#E6EDF3] mb-6 font-mono">
                $ ./my_journey
              </h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-[#00FFAB]/30 via-[#00FFAB]/50 to-[#58A6FF]/30" />
                <div className="space-y-8">
                  {timelineData.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex gap-6 group"
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 * index }}
                      viewport={{ once: true }}
                      whileHover={{
                        backgroundColor: "#161B22",
                        borderLeft: "2px solid #00FFAB",
                        paddingLeft: "1rem",
                      }}
                    >
                      <div className="flex flex-col items-center">
                        <div className="p-2 rounded-full bg-[#161B22]/80 backdrop-blur-sm border border-[#00FFAB]/50 z-10 group-hover:bg-[#00FFAB]/10 group-hover:border-[#00FFAB] transition-all">
                          {item.icon}
                        </div>
                        {index !== timelineData.length - 1 && (
                          <div className="w-0.5 h-8 bg-[#00FFAB]/30" />
                        )}
                      </div>
                      <div className="font-mono">
                        <p className="text-sm text-[#00FFAB]">{item.year}</p>
                        <h4 className="text-xl font-medium text-[#E6EDF3] mt-1">
                          {item.title}
                        </h4>
                        <p className="text-[#E6EDF3]/70">{item.subtitle}</p>
                        <p className="text-[#58A6FF]/70 text-sm mt-1">
                          {item.command}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Terminal output footer */}
        <motion.div
          className="mt-16 p-4 bg-[#161B22]/80 backdrop-blur-sm rounded-lg border border-[#00FFAB]/30 font-mono text-sm text-[#E6EDF3]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-[#00FFAB]">$ ./about_summary</p>
          <p className="ml-4">{">"} Profile: Loaded successfully</p>
          <p className="ml-4">
            {">"} Experience: {timelineData.length} entries
          </p>
          <p className="ml-4 text-[#00FFAB]">
            {">"} Status:{" "}
            <span className="text-[#E6EDF3]">Ready for new challenges</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
