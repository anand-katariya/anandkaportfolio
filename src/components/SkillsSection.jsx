"use client";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiFlutter,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import MatrixRain from "./MatrixRain";

const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        {
          name: "HTML5",
          icon: <SiHtml5 className="text-[#00FFAB]" />,
          command: "$ html --markup",
        },
        {
          name: "CSS3",
          icon: <SiCss3 className="text-[#00FFAB]" />,
          command: "$ css --styling",
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-[#00FFAB]" />,
          command: "$ js --logic",
        },
        {
          name: "React",
          icon: <SiReact className="text-[#00FFAB]" />,
          command: "$ react --ui",
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-[#00FFAB]" />,
          command: "$ next --framework",
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="text-[#00FFAB]" />,
          command: "$ tailwind --css",
        },
        {
          name: "Flutter",
          icon: <SiFlutter className="text-[#00FFAB]" />,
          command: "$ flutter --mobile",
        },
      ],
    },
    {
      category: "Backend",
      items: [
        {
          name: "Node.js",
          icon: <SiNodedotjs className="text-[#00FFAB]" />,
          command: "$ node --runtime",
        },
        {
          name: "Express",
          icon: <SiExpress className="text-[#00FFAB]" />,
          command: "$ express --server",
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-[#00FFAB]" />,
          command: "$ mongo --database",
        },
        {
          name: "Java",
          icon: <FaJava className="text-[#00FFAB]" />,
          command: "$ java --backend",
        },
      ],
    },
    {
      category: "Tools & Cloud",
      items: [
        {
          name: "Git",
          icon: <SiGit className="text-[#00FFAB]" />,
          command: "$ git --version-control",
        },
        {
          name: "AWS",
          icon: <FaAws className="text-[#00FFAB]" />,
          command: "$ aws --cloud",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 overflow-hidden bg-[#0D1117] border-t border-[#161B22]"
    >
      {/* Matrix rain background */}
      <MatrixRain density={50} />

      {/* Floating glow elements */}
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full bg-[#00FFAB]/10 blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
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
          <span className="ml-2">ls tech_stack/</span>
          <motion.span
            className="h-5 w-1 bg-[#00FFAB] ml-1"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>

        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-[#E6EDF3] font-mono"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFAB] to-[#58A6FF]">
            $ ./tech_stack
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              className="bg-[#161B22]/80 backdrop-blur-sm rounded-lg p-6 border border-[#00FFAB]/20 hover:border-[#00FFAB]/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                boxShadow: "0 0 20px rgba(0, 255, 171, 0.2)",
              }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-[#E6EDF3] font-mono border-b border-[#00FFAB]/30 pb-2">
                <span className="text-[#00FFAB]">#</span>{" "}
                {skillCategory.category.toLowerCase()}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skillCategory.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{
                      y: -5,
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      delay: 0.1 * skillIndex,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-col items-center p-4 rounded-lg bg-[#0D1117]/80 backdrop-blur-sm border border-[#00FFAB]/10 hover:border-[#00FFAB]/50 transition-all group-hover:shadow-[0_0_15px_rgba(0,255,171,0.1)]">
                      <div className="text-4xl mb-2">{skill.icon}</div>
                      <span className="text-[#E6EDF3] text-sm font-medium font-mono mb-1">
                        {skill.name}
                      </span>
                      <span className="text-[#58A6FF]/70 text-xs font-mono text-center">
                        {skill.command}
                      </span>
                    </div>
                  </motion.div>
                ))}
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
          <p className="text-[#00FFAB]">$ ./skills_summary</p>
          <p className="ml-4">Total categories: {skills.length}</p>
          <p className="ml-4">
            Skills count:{" "}
            {skills.reduce((acc, curr) => acc + curr.items.length, 0)}
          </p>
          <p className="ml-4 text-[#00FFAB]">
            Status:{" "}
            <span className="text-[#E6EDF3]">
              Always learning new technologies
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
