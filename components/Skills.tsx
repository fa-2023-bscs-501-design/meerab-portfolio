import { motion } from "framer-motion"; 
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "Python",
      icon: <FaPython />,
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-8"
    >

      <h2 className="text-5xl font-bold text-blue-500 mb-14">
        My Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl">

     {skills.map((skill) => (
  <motion.div
    key={skill.name}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="
      group
      bg-gray-900/70
      border border-gray-700
      rounded-2xl
      p-8
      flex flex-col
      items-center
      gap-4
      text-xl
      font-semibold
      hover:border-blue-500
      hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
      hover:-translate-y-2
      transition
      duration-300
    "
  >

    <div className="text-5xl text-blue-500 group-hover:scale-110 transition">
      {skill.icon}
    </div>

    <p>
      {skill.name}
    </p>

  </motion.div>
))}

      </div>

    </section>
  );
}