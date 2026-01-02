"use client"; // Needed for framer-motion

import React from "react";
import { 
  Code2, 
  Database, 
  Layout, 
  Settings, 
  Cpu, 
  ShieldCheck, 
  Terminal, 
  Globe 
} from "lucide-react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6 text-blue-500" />,
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
  },
  {
    category: "Backend",
    icon: <Database className="w-6 h-6 text-green-500" />,
    skills: ["Node.js", "NestJS", "Express", "PostgreSQL", "MongoDB", "Supabase", "Prisma"],
  },
  {
    category: "DevOps & Tools",
    icon: <Settings className="w-6 h-6 text-orange-500" />,
    skills: ["Docker", "Git/GitHub", "Linux (Pop!_OS)", "Nginx", "Redis", "Postman"],
  },
  {
    category: "Emerging Tech",
    icon: <Cpu className="w-6 h-6 text-purple-500" />,
    skills: ["Deep Learning (PyTorch)", "Ethical Hacking", "n8n Automation", "Web Scraping"],
  },
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15 // Delay between each card animating in
    }
  }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 w-full relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        
        {/* Section Header with Animation */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Technical Arsenal
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-[700px]">
            The tools and technologies I use to build scalable, secure, and intelligent applications.
          </p>
        </motion.div>

        {/* Skills Grid with Staggered Animation */}
        <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={container}
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillsData.map((section, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              className="p-6 rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-background/50 border group-hover:border-primary/50 transition-colors">
                  {section.icon}
                </div>
                <h3 className="font-semibold text-xl">{section.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {section.skills.map((skill, idx) => (
                  // --- THE HOVER COLOR FIX IS HERE ---
                  <span 
                    key={idx} 
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                  // -----------------------------------
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}