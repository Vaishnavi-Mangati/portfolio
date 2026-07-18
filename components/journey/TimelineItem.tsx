"use client";

import { motion } from "framer-motion";

interface Props {
  year: string;
  title: string;
  subtitle: string;
}

export default function TimelineItem({
  year,
  title,
  subtitle,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative pl-12"
    >
      {/* Timeline Dot */}
      <div className="absolute left-0 top-2 h-5 w-5 rounded-full border-4 border-orange-500 bg-[#09090B]" />

      {/* Line */}
      <div className="absolute left-[9px] top-7 h-full w-[2px] bg-white/10" />

      <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
        {year}
      </p>

      <h3 className="mt-2 text-3xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-2 text-gray-400">
        {subtitle}
      </p>
    </motion.div>
  );
}