"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { FiMail, FiGithub, FiLinkedin, FiSend } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"
import { SiCalendly } from "react-icons/si"
import MatrixRain from "./MatrixRain"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setSubmitSuccess(true)
    setTimeout(() => {
      setSubmitSuccess(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

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

  const buttonHover = {
    scale: 1.02,
    boxShadow: "0 0 15px rgba(0, 255, 171, 0.5)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  }

  const buttonTap = {
    scale: 0.98,
  }

  return (
    <section id="contact" className="py-20 bg-[#0D1117] relative overflow-hidden border-t border-[#161B22]">
      {/* Enhanced Matrix Rain Background */}
      <MatrixRain density={60} />

      {/* Floating Glow Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-[#00FFAB]/20 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-32 h-32 rounded-full bg-[#00FFAB]/15 blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Terminal Header */}
        <motion.div
          className="flex items-center justify-center mb-12 font-mono text-[#E6EDF3]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-[#00FFAB] drop-shadow-[0_0_2px_rgba(0,255,171,0.7)]">user@portfolio:~$</span>
          <span className="ml-2 drop-shadow-[0_0_2px_rgba(0,255,171,0.7)]">cat contact.sh</span>
          <motion.span
            className="h-5 w-1 bg-[#00FFAB] ml-1 drop-shadow-[0_0_2px_rgba(0,255,171,0.7)]"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={typingVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFAB] to-[#00CC88] mb-4 font-mono tracking-tight drop-shadow-[0_0_2px_rgba(0,255,171,0.7)]">
            $ get_in_touch()
          </h2>
          <motion.p
            className="text-lg text-[#E6EDF3] max-w-2xl mx-auto font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {"// Have a project or want to connect? Reach out >>"}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-[#161B22]/80 backdrop-blur-sm rounded-xl p-8 border border-[#00FFAB]/20 hover:border-[#00FFAB]/50 shadow-lg shadow-[#00FFAB]/10 transition-all duration-300"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {["name", "email", "message"].map((field, i) => (
                <motion.div
                  key={field}
                  variants={typingVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <label htmlFor={field} className="block text-[#E6EDF3] mb-2 font-mono">
                    $ {field}:
                  </label>
                  {field === "message" ? (
                    <textarea
                      id={field}
                      name={field}
                      rows={5}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0D1117]/80 backdrop-blur-sm border border-[#00FFAB]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFAB] focus:border-transparent text-[#E6EDF3] transition-all font-mono placeholder-[#484F58]"
                      placeholder={`Enter your ${field}`}
                      required
                    />
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0D1117]/80 backdrop-blur-sm border border-[#00FFAB]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFAB] focus:border-transparent text-[#E6EDF3] transition-all font-mono placeholder-[#484F58]"
                      placeholder={`Enter your ${field}`}
                      required
                    />
                  )}
                </motion.div>
              ))}

              <motion.div
                variants={typingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  type="submit"
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                  disabled={isSubmitting}
                  className={`flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00FFAB] to-[#00CC88] text-[#0D1117] rounded-lg font-medium font-mono tracking-wide hover:shadow-lg hover:shadow-[#00FFAB]/30 transition-all w-full ${
                    isSubmitting ? "opacity-80 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      className="inline-block"
                    >
                      <FiSend />
                    </motion.span>
                  ) : (
                    <FiSend />
                  )}
                  {isSubmitting ? "Sending..." : "send_message()"}
                </motion.button>
              </motion.div>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-3 bg-[#00FFAB]/10 border border-[#00FFAB]/30 text-[#00FFAB] rounded-lg text-center font-mono text-sm"
                >
                  Message sent successfully! ✔️
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div className="bg-[#161B22]/80 backdrop-blur-sm rounded-xl p-8 border border-[#00FFAB]/20 hover:border-[#00FFAB]/50 shadow-lg shadow-[#00FFAB]/10 transition-all duration-300">
              <motion.h3
                className="text-2xl font-semibold text-[#E6EDF3] mb-6 font-mono"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-[#00FFAB] to-[#00CC88] text-transparent bg-clip-text drop-shadow-[0_0_2px_rgba(0,255,171,0.7)]">
                  $ contact_info
                </span>
              </motion.h3>

              <div className="space-y-5">
                {[
                  {
                    icon: <FiMail />,
                    text: "akxiianandkatariya@gmail.com",
                    href: "mailto:akxiianandkatariya@gmail.com",
                  },
                  {
                    icon: <FiLinkedin />,
                    text: "linkedin.com/in/anand-katariya",
                    href: "https://linkedin.com/in/anand-katariya-709309225",
                  },
                  {
                    icon: <FiGithub />,
                    text: "github.com/anand-katariya",
                    href: "https://github.com/anand-katariya",
                  },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-[#E6EDF3] hover:text-[#00FFAB] transition-colors group"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-3 bg-[#0D1117]/80 backdrop-blur-sm rounded-full group-hover:bg-[#00FFAB]/10 group-hover:shadow-[0_0_10px_rgba(0,255,171,0.3)] transition-all">
                      {React.cloneElement(item.icon, {
                        className: "text-xl group-hover:scale-110 transition-transform",
                      })}
                    </div>
                    <span className="font-mono text-sm md:text-base">{item.text}</span>
                  </motion.a>
                ))}

                {/* <motion.div
                  className="flex gap-4 pt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  {[
                    {
                      icon: <FaWhatsapp />,
                      text: "WhatsApp",
                      href: "https://wa.me/yournumber",
                    },
                    {
                      icon: <SiCalendly />,
                      text: "Schedule Call",
                      href: "https://calendly.com/yourlink",
                    },
                  ].map((item, i) => (
                    <motion.a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#0D1117]/80 backdrop-blur-sm rounded-full hover:bg-[#00FFAB]/10 hover:text-[#00FFAB] transition-all group relative"
                      whileHover={{ y: -3 }}
                    >
                      {React.cloneElement(item.icon, {
                        className: "text-xl group-hover:scale-110 transition-transform",
                      })}
                      <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-[#0D1117] text-[#00FFAB] text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-[#00FFAB]/30">
                        {item.text}
                      </span>
                    </motion.a>
                  ))}
                </motion.div> */}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
              className="text-center lg:text-left text-[#8B949E] font-mono text-sm"
            >
              <p className="mb-1">{"// Alternative contact methods available"}</p>
              <p>{"// Average response time: < 24 hours"}</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Terminal Footer */}
        <motion.div
          className="mt-16 p-4 bg-[#161B22]/80 backdrop-blur-sm rounded-lg border border-[#00FFAB]/30 font-mono text-sm text-[#E6EDF3] shadow-[0_0_15px_rgba(0,255,171,0.3)] mx-auto max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-[#00FFAB] drop-shadow-[0_0_2px_rgba(0,255,171,0.7)]">$ ./contact_summary</p>
          <p className="ml-4">
            Status: <span className="text-[#E6EDF3]">Contact form operational</span>
          </p>
          <p className="ml-4">
            Encryption: <span className="text-[#E6EDF3]">Enabled</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
