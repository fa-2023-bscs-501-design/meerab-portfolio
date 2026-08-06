"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
      bg-black
      border-t
      border-gray-800
      text-white
      py-10
      px-8
      "
    >

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">


        <h2 className="text-2xl font-bold text-blue-500">
          Meerab Asif
        </h2>


        <p className="text-gray-400 text-center">
          Frontend Developer | React & Next.js Enthusiast
        </p>


        <div className="flex gap-6 text-2xl">


          <a
            href="mailto:meerabasif04@gmail.com"
            className="text-gray-400 hover:text-blue-500 transition"
          >
            <FaEnvelope />
          </a>


          <a
            href="https://github.com/fa-2023-bscs-501-design"
            target="_blank"
            className="text-gray-400 hover:text-blue-500 transition"
          >
            <FaGithub />
          </a>


          <a
            href="https://www.linkedin.com/in/meerab-asif-3b5689411"
            target="_blank"
            className="text-gray-400 hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>


        </div>


        <p className="text-gray-500 text-sm">
          © 2026 Meerab Asif. All rights reserved.
        </p>


      </div>

    </footer>
  );
}