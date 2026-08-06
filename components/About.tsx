"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white flex items-center px-8 py-24"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <span className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full mb-6">
            🚀 Available for Internship Opportunities
          </span>


          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            About{" "}
            <span className="text-blue-500">
              Meerab Asif
            </span>
          </h2>


          <h3 className="text-2xl text-gray-300 mt-4">
            Frontend Developer | React & Next.js Developer
          </h3>


          <p className="text-gray-400 text-lg leading-8 mt-6 max-w-xl">
            I am a Computer Science student and Frontend Developer passionate
            about creating modern, responsive, and user-friendly web
            applications.

            <br />
            <br />

            I specialize in building websites using
            <span className="text-white">
              {" "}Next.js, React, JavaScript, Tailwind CSS, HTML, and CSS.
            </span>

            I enjoy transforming ideas into clean digital experiences and
            continuously improving my skills through real-world projects.

            <br />
            <br />

            My projects include a personal portfolio website, Python-based
            Network Sniffer, and Phishing Awareness Training project.
          </p>


          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="/Meerab_CV.pdf"
              target="_blank"
              className="
              flex items-center gap-2
              bg-blue-600
              hover:bg-blue-700
              px-6 py-3
              rounded-xl
              transition
              "
            >
              <FaDownload />
              Download CV
            </a>


            <a
              href="https://github.com/fa-2023-bscs-501-design"
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex items-center gap-2
              border border-gray-700
              hover:border-blue-500
              px-6 py-3
              rounded-xl
              transition
              "
            >
              <FaGithub />
              GitHub
            </a>


            <a
              href="https://www.linkedin.com/in/meerab-asif-3b5689411"
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex items-center gap-2
              border border-gray-700
              hover:border-blue-500
              px-6 py-3
              rounded-xl
              transition
              "
            >
              <FaLinkedin />
              LinkedIn
            </a>

          </div>

        </motion.div>


        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >

          <div
            className="
            w-72 h-72
            rounded-full
            overflow-hidden
            border-4
            border-blue-500
            shadow-[0_0_40px_rgba(59,130,246,0.5)]
            "
          >

            <img
              src="/profile.png"
              alt="Meerab Asif Frontend Developer"
              className="w-full h-full object-cover"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}