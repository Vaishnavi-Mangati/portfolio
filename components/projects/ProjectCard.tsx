"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  live?: string;
  github?: string;
  companyProject?: boolean;
  reverse?: boolean;
};

export default function ProjectCard({
  title,
  subtitle,
  description,
  image,
  tech,
  features,
  live,
  github,
  companyProject,
  reverse = false,
}: Project) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={`grid items-center gap-14 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
    >
      {/* Image */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="overflow-hidden rounded-3xl border border-white/10"
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 hover:scale-110"
        />
      </motion.div>

      {/* Content */}
      <div>
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-orange-400">
          Featured Project
        </p>

        <h2 className="text-5xl font-bold text-white">{title}</h2>

        <h3 className="mt-3 text-xl text-orange-300">{subtitle}</h3>

        <p className="mt-6 leading-8 text-gray-400">{description}</p>

        <ul className="mt-6 grid grid-cols-2 gap-3">
          {features.map((item) => (
            <li key={item} className="text-gray-300">
              ✓ {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
  {!companyProject && (
    <>
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-400"
      >
        Live Demo
        <FiExternalLink />
      </a>

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-white transition hover:border-orange-400"
      >
        GitHub
        <FiGithub />
      </a>
    </>
  )}

  {companyProject && (
    <span className="rounded-full border border-orange-500/40 bg-orange-500/10 px-6 py-3 text-sm font-medium text-orange-300">
      🔒 Internship Project
    </span>
  )}
</div>

        {companyProject && (
          <p className="mt-5 text-sm italic text-gray-400">
            Developed during my internship. The source code and deployment are
            confidential and owned by the company.
          </p>
        )}
      </div>
    </motion.div>
  );
}