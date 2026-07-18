"use client";

import { motion } from "framer-motion";

export default function HeroHeading() {
  return (
    <div className="flex flex-col items-center">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mb-6 rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-300"
      >
        👋 Welcome to my portfolio
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-center text-6xl font-black leading-none tracking-tight text-white md:text-8xl lg:text-9xl"
      >
        VAISHNAVI
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.9 }}
        className="bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-200 bg-clip-text text-center text-6xl font-black leading-none tracking-tight text-transparent md:text-8xl lg:text-9xl"
      >
        MANGATI
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-8 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl"
      >
        Building modern web experiences with
        <span className="font-semibold text-white">
          {" "}
          React, Next.js, TypeScript
        </span>{" "}
        and thoughtful UI design.
      </motion.p>
    </div>
  );
}