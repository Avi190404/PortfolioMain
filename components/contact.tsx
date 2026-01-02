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
          Ready to Build Scalable Solutions
        </h2>
        <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">
          From high-performance MERN stack applications to cost-cutting automation pipelines, let's engineer the perfect solution for your business.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button asChild size="lg" className="h-12 px-8">
            <Link href="mailto:avi19042004@gmail.com">
              <Mail className="mr-2 h-4 w-4" /> Shoot me an Email
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="h-12 px-8">
            <Link href="/Avi_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" /> Download Resume
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}