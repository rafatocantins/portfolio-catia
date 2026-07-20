import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1" style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <SectionDivider variant="geometry" />
        <About />
        <SectionDivider variant="dots" />
        <Experience />
        <SectionDivider variant="lines" />
        <Projects />
        <SectionDivider variant="waves" />
        <Skills />
        <SectionDivider variant="geometry" />
        <Contact />
      </main>
    </>
  );
}
