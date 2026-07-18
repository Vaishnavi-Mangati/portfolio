"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 12, 0] }}
      transition={{
        repeat: Infinity,
        duration: 1.8,
      }}
      className="absolute bottom-10 flex flex-col items-center text-gray-500"
    >
      <p className="mb-2 text-xs tracking-[0.3em] uppercase">
        Scroll
      </p>

      <ChevronDown size={24} />
    </motion.div>
  );
}