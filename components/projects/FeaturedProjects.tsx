"use client";

import ProjectCard from "./ProjectCard";
import { projects } from "./projects";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="bg-[#09090B] px-6 py-32 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-24 text-center">

          <p className="text-orange-400 tracking-[0.3em] uppercase">
            Portfolio
          </p>

          <h2 className="mt-5 text-6xl font-bold">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            A collection of products I've designed and developed using
            modern technologies with a focus on performance,
            usability and clean architecture.
          </p>
        </div>

        <div className="space-y-36">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
}