"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const contacts = [
    {
      title: "Email",
      description: "Send me a message",
      icon: <FaEnvelope />,
      link: "mailto:meerabasif04@gmail.com",
    },
    {
      title: "LinkedIn",
      description: "Connect with me",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/meerab-asif-3b5689411",
    },
    {
      title: "GitHub",
      description: "Check my projects",
      icon: <FaGithub />,
      link: "https://github.com/fa-2023-bscs-501-design",
    },
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/moeaqbnb",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setStatus("✅ Thank you! Your message has been sent.");
        form.reset();
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch {
      setStatus("❌ Network error. Please try again.");
    }

    setLoading(false);
  }

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-8 py-20"
    >
      <h2 className="text-5xl font-bold text-blue-500 mb-6">
        Contact Me
      </h2>

      <p className="text-gray-400 text-lg text-center max-w-2xl mb-12">
        I'm always interested in new opportunities, collaborations,
        and exciting projects. Feel free to connect with me.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl w-full">
        {contacts.map((contact) => (
          <motion.a
            key={contact.title}
            href={contact.link}
            target="_blank"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="
              bg-gray-900
              border border-gray-800
              rounded-2xl
              p-8
              flex
              flex-col
              items-center
              gap-4
              hover:border-blue-500
              hover:-translate-y-2
              hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]
              transition
            "
          >
            <div className="text-5xl text-blue-500">
              {contact.icon}
            </div>

            <h3 className="text-xl font-bold">
              {contact.title}
            </h3>

            <p className="text-gray-400">
              {contact.description}
            </p>
          </motion.a>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl mt-16 space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 focus:border-blue-500 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 focus:border-blue-500 outline-none"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          required
          className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 focus:border-blue-500 outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="
            bg-blue-600
            hover:bg-blue-700
            disabled:opacity-50
            transition
            px-8
            py-4
            rounded-xl
            font-semibold
          "
        >
          {loading ? "Sending..." : "Send Message 🚀"}
        </button>

        {status && (
          <p className="text-center text-lg mt-4">
            {status}
          </p>
        )}
      </form>

      <p className="text-gray-500 mt-16">
        © 2026 Meerab Asif. All rights reserved.
      </p>
    </section>
  );
}