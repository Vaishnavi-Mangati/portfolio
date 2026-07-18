"use client";

import { motion } from "framer-motion";

const links = [
  {name: "About", href: '#about'},
  {name: "Skills", href: '#skills'},
  {name: "Projects", href: '#projects'},
  {name: "Journey", href: '#journey'},
  {name: "Contact", href: '#contact'},
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-5 z-50 w-[92%] max-w-6xl -translate-x-1/2"
    >
      <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
        <h1 className="text-lg font-bold tracking-[0.3em] text-white">
          <a href="#hero">VM</a>
        </h1>

        <ul className="hidden gap-8 text-sm text-white/70 md:flex">
          {links.map((item) => (
            <a href={item.href}
              key={item.name}
              className="cursor-pointer transition hover:text-orange-400"
            >
              {item.name}
            </a>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}