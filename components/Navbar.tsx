"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="
      fixed top-0 left-0 w-full
      bg-black/70
      backdrop-blur-xl
      border-b border-gray-800
      shadow-lg
      z-50
      "
    >

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">


        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-blue-500"
        >
          Meerab Asif
        </a>


        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">

          {links.map((link) => {
            const id = link.toLowerCase();

            return (
              <a
                key={link}
                href={`#${id}`}
                className={`
                  relative
                  transition
                  ${
                    active === id
                      ? "text-blue-500"
                      : "text-gray-300"
                  }
                  hover:text-blue-400
                `}
              >
                {link}

                {active === id && (
                  <span
                    className="
                    absolute
                    left-0
                    -bottom-2
                    w-full
                    h-0.5
                    bg-blue-500
                    "
                  />
                )}

              </a>
            );
          })}

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

        <div
          className="
          md:hidden
          bg-black
          border-t border-gray-800
          px-8 py-6
          flex flex-col gap-5
          "
        >

          {links.map((link) => (

            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="
              text-gray-300
              hover:text-blue-400
              transition
              "
            >
              {link}
            </a>

          ))}

        </div>

      )}

    </nav>
  );
}