"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function RevealOnScroll({
  children,
  delay = 0,
  className = "",
  y = 28,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 0.84, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}
