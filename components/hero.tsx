"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Terminal, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  // Animation settings
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      },
    },
  };

  return (
    <section className="relative w-full h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background Grid Decoration */}
      {/* <div className="absolute inset-0 w-full h-full bg-grid-pattern opacity-[0.05] pointer-events-none" /> */}
      
      {/* Radial Gradient for focus */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />

      <motion.div
        className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* The Hook / Tagline */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium backdrop-blur-sm bg-secondary/50 text-secondary-foreground mb-6">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse" />
            Available for Freelance & Full-time
          </div>
        </motion.div>

        {/* Main Headline - FIXED: Removed text-transparent to fix dark mode visibility */}
        <motion.h1 
          variants={itemVariants} 
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground mb-6"
        >
          Architecting Systems. <br />
          <span className="text-primary">Automating Scale.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          variants={itemVariants} 
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-[600px]"
        >
          Hi, I'm <span className="text-foreground font-semibold">Avi Patel</span>. 
          I bridge the gap between complex MERN stack architectures and efficient n8n automation workflows.
        </motion.p>

        {/* Call to Actions */}
        <motion.div 
          variants={itemVariants} 
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button asChild size="lg" className="group">
            <Link href="/projects">
              View Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">
              <Terminal className="mr-2 h-4 w-4" />
              Read The Labs
            </Link>
          </Button>
        </motion.div>

        {/* Tech Stack Hints */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-border/40 w-full flex flex-wrap justify-center gap-8 text-muted-foreground/60"
        >
           <div className="flex items-center gap-2">
             <Terminal size={16} /> <span>Next.js & MERN</span>
           </div>
           <div className="flex items-center gap-2">
             <Workflow size={16} /> <span>n8n Automation</span>
           </div>
           <div className="flex items-center gap-2">
             <div className="h-4 w-4 rounded-full border border-current flex items-center justify-center text-[10px]">AWS</div>
             <span>DevOps</span>
           </div>
        </motion.div>
      </motion.div>
    </section>
  );
}