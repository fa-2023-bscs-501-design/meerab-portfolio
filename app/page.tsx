"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
<main className="relative overflow-visible bg-black text-white pt-24">         <Navbar />
         <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full blur-[150px] opacity-40"></div>

<div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600 rounded-full blur-[180px] opacity-30"></div>
<div className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-16 items-center px-8">        {/* Left */}
        <div>
<p className="text-green-400 mb-3 flex items-center gap-2">
  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
  Open to Work
</p>
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
  Hi, I'm <br />
  <span className="text-blue-500">Meerab Asif</span>
</h1>
<h2 className="text-3xl md:text-4xl mt-6 text-gray-300">

<TypeAnimation
sequence={[
"Frontend Developer",
2000,
"Next.js Developer",
2000,
"AI Enthusiast",
2000,
"Computer Science Student",
2000
]}
speed={50}
repeat={Infinity}
/>

</h2>

         <p className="text-gray-400 mt-8 text-lg leading-8 max-w-xl">
  Passionate about building modern, responsive web applications using
  React, Next.js and Tailwind CSS. I enjoy learning new technologies
  and creating user-friendly digital experiences.
</p>

          <div className="flex gap-5 mt-10 flex-wrap">

  <a
    href="https://github.com/fa-2023-bscs-501-design"
    target="_blank"
    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition"
  >
    <FaGithub />
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/meerab-asif-3b5689411"
    target="_blank"
    className="flex items-center gap-2 border border-gray-600 hover:bg-gray-800 px-6 py-3 rounded-xl transition"
  >
    <FaLinkedin />
    LinkedIn
  </a>

</div>
          <div className="mt-5">
  <a
  href="/Meerab_CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-xl transition font-semibold"
>
  Download CV
</a>
</div>

        </div>

        {/* Right */}

<motion.div
  className="relative flex justify-center"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
>

  <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>

  <Image
    src="/profile.png"
    alt="Meerab Asif"
    width={380}
    height={380}
    className="
    relative
    rounded-full
    border-4
    border-blue-500
    shadow-[0_0_60px_rgba(59,130,246,0.8)]
    object-cover
    animate-bounce
    "
  />

</motion.div>

      </div>

<div className="mt-20">

  <section id="about">
  <About />
</section>

<section id="skills">
  <Skills />
</section>

<section id="projects">
  <Projects />
</section>

<section id="contact">
  <Contact />
</section>
</div>
    </main>
  );
}