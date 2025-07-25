"use client";
import { motion } from "framer-motion";
import { BsQuote } from "react-icons/bs";
import MatrixRain from "./MatrixRain";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Anand's technical expertise and problem-solving skills were instrumental in delivering our project ahead of schedule. His React implementation was flawless.",
      name: "Sarah Johnson",
      role: "Product Manager at TechSolutions",
      photo: "/testimonial1.jpg",
      command: "$ review --client --rating=5",
    },
    {
      quote:
        "Working with Anand was a pleasure. His clean code and attention to performance optimization set a new standard for our team.",
      name: "Michael Chen",
      role: "Lead Developer at CodeCraft",
      photo: "/testimonial2.jpg",
      command: "$ review --peer --rating=5",
    },
    {
      quote:
        "The backend architecture Anand designed scaled perfectly under heavy traffic. His Node.js skills are truly top-notch.",
      name: "David Wilson",
      role: "CTO at StartupX",
      photo: "/testimonial3.jpg",
      command: "$ review --employer --rating=5",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-20 bg-[#0D1117] border-t border-[#161B22] overflow-hidden"
    >
      {/* Matrix rain background */}
      <MatrixRain density={35} />

      {/* Animated floating elements with terminal glow */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#00FFAB]/10 blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-[#58A6FF]/10 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
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
          <span className="ml-2">cat testimonials.log</span>
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
            $ ./client_feedback
          </h2>
          <p className="text-lg text-[#E6EDF3]/80 max-w-2xl mx-auto font-mono">
            // What colleagues and clients say about working with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                y: -5,
                borderColor: "#00FFAB",
                boxShadow: "0 10px 25px -5px rgba(0, 255, 171, 0.3)",
              }}
              className="bg-[#161B22]/80 backdrop-blur-sm rounded-lg p-8 border border-[#00FFAB]/20 hover:border-[#00FFAB]/50 transition-all duration-300 shadow-lg"
              viewport={{ once: true }}
            >
              <div className="flex flex-col h-full">
                <BsQuote className="text-3xl text-[#00FFAB] mb-6 opacity-30" />
                <p className="text-[#E6EDF3] mb-8 text-lg leading-relaxed flex-grow font-mono">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center mt-auto">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full object-cover border-2 border-[#00FFAB]/50 overflow-hidden">
                      <div className="w-full h-full bg-[#00FFAB]/10 flex items-center justify-center text-[#00FFAB] font-mono text-xs">
                        user
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[#E6EDF3] font-medium font-mono">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#00FFAB] text-sm font-mono">
                      {testimonial.role}
                    </p>
                    <p className="text-[#58A6FF]/70 text-xs font-mono mt-1">
                      {testimonial.command}
                    </p>
                  </div>
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
          <p className="text-[#00FFAB]">$ ./testimonials_summary</p>
          <p className="ml-4">Total testimonials: {testimonials.length}</p>
          <p className="ml-4">Average rating: 5/5</p>
          <p className="ml-4 text-[#00FFAB]">
            Status: <span className="text-[#E6EDF3]">All reviews positive</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
