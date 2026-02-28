import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Skills } from "@/components/skills";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avi Patel",
  description: "Official portfolio of Avi Patel. Full Stack Developer & Automation Engineer specializing in MERN, Next.js, and high-performance system architecture.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}