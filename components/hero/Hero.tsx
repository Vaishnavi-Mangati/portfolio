"use client";

import Navbar from "./Navbar";
import HeroBackground from "./HeroBackground";
import HeroHeading from "./HeroHeading";
import HeroButtons from "./HeroButtons";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#09090B]">
      <HeroBackground />

      <Navbar />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <HeroHeading />

        <HeroButtons />

        <ScrollIndicator />
      </div>
    </section>
  );
}