"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">


        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-500">
          Meerab Asif
        </h1>


        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300">

          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-blue-400 transition"
            >
              {link}
            </a>
          ))}

        </div>


        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>


      </div>


      {/* Mobile Menu */}
      {open && (

        <div className="md:hidden bg-black border-t border-gray-800 px-8 py-6 flex flex-col gap-5">

          {links.map((link) => (

            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-blue-400 transition"
            >
              {link}
            </a>

          ))}

        </div>

      )}


    </nav>
  );
}