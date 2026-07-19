"use client";

import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiDownload,
} from "react-icons/fi";

import ContactCard from "./ContactCard";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#09090B] px-6 py-32 text-white"
    >
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="uppercase tracking-[0.3em] text-orange-400">
            Contact
          </p>

          <h2 className="mt-4 text-6xl font-bold">
            Let's Build Something Amazing
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            I'm currently looking for Full Stack and Frontend Developer
            opportunities. If you have an exciting project or role,
            let's connect!
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">

          <ContactCard
            icon={<FiMail />}
            title="Email"
            value="vaishnavimangati@gmail.com"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vaishnavimangati@gmail.com"
          />

          <ContactCard
            icon={<FiLinkedin />}
            title="LinkedIn"
            value="https://www.linkedin.com/in/vaishnavimangati"
            href="https://www.linkedin.com/in/vaishnavimangati"
          />

          <ContactCard
            icon={<FiGithub />}
            title="GitHub"
            value="https://github.com/Vaishnavi-Mangati"
            href="https://github.com/Vaishnavi-Mangati"
          />

          <ContactCard
            icon={<FiMapPin />}
            title="Location"
            value="Tirupati, Andhra Pradesh"
            href="https://maps.google.com/?q=Tirupati"
          />

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="/Vaishnavi_FullStack_Resume.pdf"
            download
            className="flex items-center gap-3 rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold transition hover:scale-105 hover:bg-orange-600"
          >
            <FiDownload />
            Download Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
}