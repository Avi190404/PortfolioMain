"use client";

import { Button } from "@/components/ui/button";
import { Mail, FileText } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section className="container py-24 px-4 md:px-6 max-w-4xl mx-auto text-center" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
          Ready to Automate Your Workflow?
        </h2>
        <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">
          Whether you need a scalable MERN stack application or an n8n automation pipeline to cut costs, I'm ready to help.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button asChild size="lg" className="h-12 px-8">
            <Link href="mailto:avi19042004@gmail.com">
              <Mail className="mr-2 h-4 w-4" /> Shoot me an Email
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="h-12 px-8">
            {/* IMPORTANT: You need to put 'resume.pdf' in your 'public' folder */}
            <Link href="/Avi_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" /> Download Resume
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}