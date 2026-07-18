"use client";

import { motion } from "framer-motion";
import { ArrowRight} from "lucide-react";
import { HiOutlineDocumentText } from "react-icons/hi2";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="mt-12 flex flex-col gap-5 sm:flex-row"
    >
      <button className="group flex items-center justify-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-400">
        <a href="#projects">Explore Projects</a>
        <ArrowRight className="transition group-hover:translate-x-1" size={18} />
      </button>

      <button className="flex items-center justify-center gap-3 rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-orange-400 hover:bg-white/5">
        <HiOutlineDocumentText className="text-lg" />
        <a href="./vaishnavi_FullStack_Resume.pdf" target="_blank">Resume</a>
      </button>
    </motion.div>
  );
}