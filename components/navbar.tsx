"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { ModeToggle } from "@/components/toggleButton"; 
import { Button } from "@/components/ui/button";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Logic:
    // 1. If we are at the very top (less than 150px), ALWAYS show the navbar
    if (latest < 150) {
        setHidden(false);
        return;
    }

    // 2. If scrolling down AND passed 150px -> Hide
    // 3. If scrolling up -> Show
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-140%" }, 
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-6 inset-x-0 mx-auto z-50 flex justify-center w-full px-4"
    >
      <div className="flex h-14 items-center justify-between rounded-full border border-border/40 bg-background/80 px-6 backdrop-blur-md shadow-sm w-full max-w-3xl">
        
        {/* Left Side: Name/Logo */}
        <div className="flex items-center">
          <Link className="flex items-center space-x-2 font-bold text-lg tracking-tight" href="/">
            <span>Avi.</span>
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {/* NEW: About Link */}
          <Link
            href="/#about"
            className="transition-colors hover:text-primary text-muted-foreground"
          >
            About
          </Link>

          <Link
            href="/#experience"
            className="transition-colors hover:text-primary text-muted-foreground"
          >
            Experience
          </Link>

          {/* UPDATED: Points to the new separate page */}
          <Link
            href="/projects" 
            className="transition-colors hover:text-primary text-muted-foreground"
          >
            Projects
          </Link>

          <Link
            href="/blog"
            className="transition-colors hover:text-primary text-muted-foreground"
          >
            Blog
          </Link>
        </nav>

        {/* Right Side: Socials & Theme Toggle */}
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" asChild>
            <Link href="https://github.com/avi19042004" target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" asChild>
            <Link href="https://linkedin.com/in/avi-patel-6170b6238" target="_blank" rel="noreferrer">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          
          <div className="ml-1 border-l pl-1 border-border/50">
            <ModeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}