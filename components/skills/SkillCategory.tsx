"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  skills: string[];
}

export default function SkillCategory({
  title,
  skills,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all"
    >
      <h3 className="mb-6 text-2xl font-bold text-orange-400">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-gray-300 transition hover:border-orange-400 hover:text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}