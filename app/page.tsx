
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Journey from "@/components/journey/Journey";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";
import CursorGlow from "@/components/CursorGlow";
import FeaturedProjects from "@/components/projects/FeaturedProjects";


export default function Home() {
  return (
    <>
      <CursorGlow />
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedProjects />
        <Journey />
        <Contact />
      </main>
    </>
  );
}
