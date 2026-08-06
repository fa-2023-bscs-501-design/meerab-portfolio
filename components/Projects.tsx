"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      image: "/projects/portfolio.png",
      description:
        "A modern developer portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. It showcases my frontend development skills, projects, responsive design practices, and SEO optimization techniques.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "SEO"
      ],
      github:
        "https://github.com/fa-2023-bscs-501-design",
      demo:
        "https://meerab-portfolio-six.vercel.app/",
    },

    {
      title: "Python Network Sniffer",
      image: "/projects/sniffer.png",
      description:
        "A Python-based network packet analyzer developed to capture and analyze network traffic. This project demonstrates networking concepts, packet inspection, and cybersecurity fundamentals.",
      tech: [
        "Python",
        "Scapy",
        "Networking",
        "Cyber Security"
      ],
      github:
        "https://github.com/fa-2023-bscs-501-design",
      demo:
        "",
    },

    {
      title: "Phishing Awareness Training Project",
      image: "/projects/phishing.png",
      description:
        "A cybersecurity awareness project focused on understanding phishing attacks, identifying security threats, and educating users about online safety and prevention techniques.",
      tech: [
        "Cyber Security",
        "HTML",
        "Documentation",
        "Security Awareness"
      ],
      github:
        "https://github.com/fa-2023-bscs-501-design",
      demo:
        "",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-8 py-24"
    >

      <div className="text-center mb-14">

        <h2 className="text-5xl font-bold text-blue-500">
          Featured Projects
        </h2>

        <p className="text-gray-400 mt-4 text-lg">
          Explore my frontend development, programming, and cybersecurity projects.
        </p>

      </div>


      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {projects.map((project) => (

          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}

            className="
              bg-gray-900
              border border-gray-800
              rounded-2xl
              overflow-hidden
              hover:border-blue-500
              hover:-translate-y-3
              hover:shadow-[0_0_35px_rgba(59,130,246,0.4)]
              transition
            "
          >

            <img
              src={project.image}
              alt={`${project.title} - Meerab Asif project`}
              className="
                w-full
                h-48
                object-cover
              "
            />


            <div className="p-6">

              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>


              <p className="text-gray-400 leading-7 mb-5">
                {project.description}
              </p>


              <div className="flex flex-wrap gap-2 mb-6">

                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="
                    bg-blue-600/20
                    text-blue-400
                    px-3 py-1
                    rounded-full
                    text-sm
                    "
                  >
                    {item}
                  </span>
                ))}

              </div>


              <div className="flex gap-5">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  flex items-center gap-2
                  text-blue-400
                  hover:text-blue-300
                  "
                >
                  <FaGithub />
                  GitHub
                </a>


                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    flex items-center gap-2
                    text-blue-400
                    hover:text-blue-300
                    "
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}

              </div>

            </div>

          </motion.article>

        ))}

      </div>

    </section>
  );
}