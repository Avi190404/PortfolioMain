"use client";

import { motion } from "framer-motion";
// Added 'Phone' to imports
import { Github, Linkedin, Mail, MapPin, Phone, Terminal, Cpu, Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section className="container mx-auto py-24 px-4 md:px-6" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto"
      >
        {/* Left Column: The Bio */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            About Me
          </h2>
          <div className="prose dark:prose-invert text-muted-foreground text-lg leading-relaxed">
            <p>
              I'm a <strong>Full Stack Developer</strong> and <strong>Automation Engineer</strong> based in <span className="text-primary font-semibold">Surat, India</span>. 
            </p>
            <p className="mt-4">
              My journey started with a curiosity for how servers work, leading me to build my own <strong>Homelab</strong> and experiment with <strong>Pterodactyl Panel</strong>. Today, I bridge the gap between complex backend logic and user-friendly frontend designs.
            </p>
            <p className="mt-4">
              When I'm not coding scalable MERN applications, you can find me:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Hunting for bugs (Ethical Hacking enthusiast 🔐).</li>
              <li>Optimizing automated workflows in n8n ⚡.</li>
              <li>Hosting Minecraft servers for the community 🎮.</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Connect & Stats Grid */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold mb-4">Connect & Stack</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {/* 1. Email Card */}
            <Card className="hover:border-primary/50 transition-colors">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-2 bg-secondary rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:avi19042004@gmail.com" className="font-medium hover:underline truncate block">
                    avi19042004...
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* 2. Phone Card (NEW) */}
            <Card className="hover:border-primary/50 transition-colors">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-2 bg-secondary rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  {/* REPLACE THIS WITH YOUR REAL NUMBER */}
                  <a href="tel:+919876543210" className="font-medium hover:underline">
                    +91 98765 43210
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* 3. Location Card (Full Width on mobile, spanning 2 cols if needed) */}
            <Card className="hover:border-primary/50 transition-colors sm:col-span-2">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-2 bg-secondary rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Surat, Gujarat, India</p>
                </div>
              </CardContent>
            </Card>

             {/* Social Buttons */}
             <div className="col-span-1 sm:col-span-2 flex gap-3 mt-2">
                <Button asChild variant="outline" className="flex-1 gap-2">
                  <Link href="https://github.com/avi19042004" target="_blank">
                    <Github className="h-4 w-4" /> GitHub
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex-1 gap-2">
                  <Link href="https://linkedin.com/in/avi-patel-6170b6238" target="_blank">
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </Link>
                </Button>
             </div>
          </div>

          {/* Mini "What I Do" Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
             <div className="flex items-center gap-1.5 px-3 py-1 bg-secondary/50 rounded-full text-sm">
                <Terminal className="h-3 w-3" /> System Admin
             </div>
             <div className="flex items-center gap-1.5 px-3 py-1 bg-secondary/50 rounded-full text-sm">
                <Cpu className="h-3 w-3" /> Automation
             </div>
             <div className="flex items-center gap-1.5 px-3 py-1 bg-secondary/50 rounded-full text-sm">
                <Globe className="h-3 w-3" /> Web Development
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}