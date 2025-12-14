import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}