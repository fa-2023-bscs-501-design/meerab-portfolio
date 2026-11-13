"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  
const projects = [
  {
    title: "PizzaCraft - Pizza Delivery System",
    image: "/pizzacraft.png",
    description:
      "A full-stack pizza delivery web application featuring user authentication, order management, an admin dashboard, inventory management, and demo payment functionality.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "REST API",
    ],
    github:
      "https://github.com/fa-2023-bscs-501-design/OIBSIP/tree/main/WebDev-L3-Task1-PizzaDelivery",
    demo:
      "https://pizzacraft-client-czo5qcgyt-fa-2023-bscs-501-designs-projects.vercel.app/",
  },

  {
    title: "Calculator",
image: "/projects/calculator.png",
    description:
      "A responsive calculator application built to perform basic mathematical operations with a simple and user-friendly interface.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github:
      "https://github.com/fa-2023-bscs-501-design/OIBSIP/commit/7f80c5672108793b48490543303d6739c9822f4f",
    demo: "",
  },

  {
    title: "To-Do App",
    image: "/projects/todo.png",
    description:
      "A task management application that helps users organize daily activities and manage their tasks through a simple interface.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github:
      "https://github.com/fa-2023-bscs-501-design/OIBSIP/commit/52393f70ba9fa746ca59234a8622b87c6b676550",
    demo: "",
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