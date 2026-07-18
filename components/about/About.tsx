"use client";

import { motion } from "framer-motion";
import StatCard from "./StatCard";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#09090B] px-6 py-32 text-white"
    >
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="uppercase tracking-[0.3em] text-orange-400">
            About Me
          </p>

          <h2 className="mt-4 text-6xl font-bold leading-tight">
            More than
            <br />
            just writing code.
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-400">
            I'm Vaishnavi, a final-year Computer Science student
            passionate about building modern web applications
            using React, Next.js and the MERN stack.
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-400">
            I enjoy transforming ideas into clean, scalable and
            user-friendly digital experiences while constantly
            learning new technologies.
          </p>

          <button className="mt-10 rounded-full bg-orange-500 px-8 py-4 font-semibold transition hover:bg-orange-400">
            <a href="./Vaishnavi_FullStack_Resume.pdf" download>Download Resume</a>
          </button>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="grid gap-6 sm:grid-cols-2"
        >
          <StatCard
            emoji="🎓"
            title="Final Year"
            subtitle="B.Tech Computer Science"
          />

          <StatCard
            emoji="💼"
            title="Frontend Intern"
            subtitle="Elfinity Technologies"
          />

          <StatCard
            emoji="👩‍🏫"
            title="Student Mentor"
            subtitle="Web Development"
          />

          <StatCard
            emoji="🏀"
            title="South Zone Player"
            subtitle="Basketball Achievement"
          />
        </motion.div>

      </div>
    </section>
  );
}