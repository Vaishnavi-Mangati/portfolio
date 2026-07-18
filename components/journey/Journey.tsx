"use client";

import { journey } from "./journeyData";
import TimelineItem from "./TimelineItem";

export default function Journey() {
  return (
    <section
      id="journey"
      className="bg-[#09090B] px-6 py-32 text-white"
    >
      <div className="mx-auto max-w-5xl">

        <div className="mb-24 text-center">

          <p className="uppercase tracking-[0.3em] text-orange-400">
            Journey
          </p>

          <h2 className="mt-5 text-6xl font-bold">
            My Journey
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Every experience has helped me grow as a developer,
            mentor and problem solver.
          </p>

        </div>

        <div className="space-y-14">
          {journey.map((item) => (
            <TimelineItem
              key={item.title}
              {...item}
            />
          ))}
        </div>

      </div>
    </section>
  );
}