import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern responsive portfolio website built with Next.js and Tailwind CSS.",
      tech: ["Next.js", "React", "Tailwind CSS"],
      github:
        "https://github.com/fa-2023-bscs-501-design",
    },

    {
      title: "Network Sniffer",
      description:
        "A Python-based network packet analyzer for monitoring and analyzing traffic.",
      tech: ["Python", "Scapy", "Networking"],
      github:
        "https://github.com/fa-2023-bscs-501-design",
    },

    {
      title: "Phishing Awareness Training",
      description:
        "Cybersecurity awareness project explaining phishing attacks and prevention techniques.",
      tech: ["Cyber Security", "HTML", "Documentation"],
      github:
        "https://github.com/fa-2023-bscs-501-design",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-8 py-24"
    >

      <h2 className="text-5xl font-bold text-blue-500 text-center mb-14">
        My Projects
      </h2>


      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">


        {projects.map((project) => (

          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}

            className="
              bg-gray-900/70
              border border-gray-800
              rounded-2xl
              p-8
              hover:border-blue-500
              hover:-translate-y-2
              hover:shadow-[0_0_35px_rgba(59,130,246,0.4)]
              transition
              duration-300
            "
          >

            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>


            <p className="text-gray-400 leading-7 mb-6">
              {project.description}
            </p>


            <div className="flex flex-wrap gap-2 mb-6">

              {project.tech.map((item) => (

                <span
                  key={item}
                  className="
                    bg-blue-600/20
                    text-blue-400
                    px-3
                    py-1
                    rounded-full
                    text-sm
                  "
                >
                  {item}
                </span>

              ))}

            </div>


            <a
              href={project.github}
              target="_blank"
              className="
                flex
                items-center
                gap-2
                text-blue-400
                hover:text-blue-300
                transition
              "
            >
              <FaGithub />
              View on GitHub
            </a>


          </motion.div>

        ))}


      </div>

    </section>
  );
}