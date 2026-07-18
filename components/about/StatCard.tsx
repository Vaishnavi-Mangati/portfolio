"use client";

import { motion } from "framer-motion";

interface Props {
  emoji: string;
  title: string;
  subtitle: string;
}

export default function StatCard({
  emoji,
  title,
  subtitle,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition"
    >
      <div className="text-3xl">{emoji}</div>

      <h3 className="mt-4 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-gray-400">
        {subtitle}
      </p>
    </motion.div>
  );
}