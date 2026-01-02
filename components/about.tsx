"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Database, Layout, Globe, Cpu } from "lucide-react";
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
              I'm a <strong>Full Stack Developer</strong> and <strong>Automation Engineer</strong> based in <span className="text-primary font-semibold">Surat, India</span>. My core expertise lies in the <strong>MERN Stack</strong> (MongoDB, Express, React, Node.js).
            </p>
            <p className="mt-4">
              My journey started with a simple curiosity: <strong>how do websites actually work behind the scenes?</strong> That question pushed me to master full-stack development. Today, I am taking those skills further by adopting <strong>NestJS and Next.js</strong> to build scalable, enterprise-grade architectures.
            </p>
            <p className="mt-4">
              Currently, I am focused on:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Architecting complex SaaS & ERP systems.</li>
              <li>Optimizing database performance with Prisma & Redis.</li>
              <li>Exploring Ethical Hacking to write secure code.</li>
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
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:avi19042004@gmail.com" className="font-medium hover:underline break-all">
                    avi19042004@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* 2. Phone Card */}
            <Card className="hover:border-primary/50 transition-colors">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-2 bg-secondary rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+918140660571" className="font-medium hover:underline">
                    +91 81406 60571
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* 3. Location Card */}
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
                <Layout className="h-3 w-3" /> MERN Stack
             </div>
             <div className="flex items-center gap-1.5 px-3 py-1 bg-secondary/50 rounded-full text-sm">
                <Globe className="h-3 w-3" /> Enterprise Web (Next.js/NestJS)
             </div>
             <div className="flex items-center gap-1.5 px-3 py-1 bg-secondary/50 rounded-full text-sm">
                <Cpu className="h-3 w-3" /> Automation
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}