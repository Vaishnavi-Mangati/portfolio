"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  href: string;
}

export default function ContactCard({
  icon,
  title,
  value,
  href,
}: ContactCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -6, scale: 1.03 }}
      className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all hover:border-orange-400"
    >
      <div className="rounded-xl bg-orange-500/20 p-3 text-2xl text-orange-400">
        {icon}
      </div>

      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-400 break-all">{value}</p>
      </div>
    </motion.a>
  );
}