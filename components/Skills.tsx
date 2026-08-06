"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
      category: "Frontend",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      category: "Frontend",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      category: "Frontend",
    },
    {
      name: "React",
      icon: <FaReact />,
      category: "Frontend",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      category: "Frontend",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      category: "Frontend",
    },
    {
      name: "Python",
      icon: <FaPython />,
      category: "Programming",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      category: "Tools",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      category: "Tools",
    },
    {
      name: "Figma",
      icon: <FaFigma />,
      category: "Design",
    },
  ];


  return (
    <section
      id="skills"
      className="
      min-h-screen
      bg-black
      text-white
      flex
      flex-col
      justify-center
      items-center
      px-8
      py-24
      "
    >

      <h2 className="text-5xl font-bold text-blue-500 mb-4">
        My Skills
      </h2>

      <p className="text-gray-400 text-center max-w-2xl mb-14">
        Technologies and tools I use to build modern,
        responsive, and user-friendly applications.
      </p>


      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl">

        {skills.map((skill) => (

          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}

            className="
            group
            bg-gray-900
            border
            border-gray-800
            rounded-2xl
            p-7
            flex
            flex-col
            items-center
            gap-3
            hover:border-blue-500
            hover:-translate-y-2
            hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]
            transition
            "
          >

            <div
              className="
              text-5xl
              text-blue-500
              group-hover:scale-110
              transition
              "
            >
              {skill.icon}
            </div>


            <h3 className="text-lg font-bold">
              {skill.name}
            </h3>


            <span className="text-sm text-gray-400">
              {skill.category}
            </span>


          </motion.div>

        ))}

      </div>

    </section>
  );
}