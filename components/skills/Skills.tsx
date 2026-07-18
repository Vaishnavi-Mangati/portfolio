"use client";

import { motion } from "framer-motion";
import SkillCategory from "./SkillCategory";
import { skillGroups } from "./skillsData";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#09090B] px-6 py-32 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="uppercase tracking-[0.3em] text-orange-400">
            Skills
          </p>

          <h2 className="mt-4 text-6xl font-bold">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            My toolkit for building fast, scalable and modern web applications.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <SkillCategory
              key={group.title}
              title={group.title}
              skills={group.skills}
            />
          ))}
        </div>

      </div>
    </section>
  );
}