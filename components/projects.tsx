"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Zap, ShoppingCart, Bus, Bot } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    title: "Bus Booking Platform",
    description: "Real-time seat reservation engine with sub-200ms API latency.",
    tags: ["Next.js", "MongoDB", "Razorpay", "Redis"],
    stats: "30% Faster Load Time",
    icon: <Bus className="h-6 w-6 text-blue-500" />,
    link: "#",
    github: "https://github.com/avi19042004",
  },
  {
    title: "Full Stack E-Commerce",
    description: "Scalable backend handling 1,000+ products with sub-second queries.",
    tags: ["React", "Node.js", "JWT", "Tailwind"],
    stats: "99.9% Secure Auth",
    icon: <ShoppingCart className="h-6 w-6 text-green-500" />,
    link: "#",
    github: "https://github.com/avi19042004",
  },
  {
    title: "Automated Order Sync",
    description: "Shopify to Google Sheets sync with Telegram alerts.",
    tags: ["n8n", "Google Apps Script", "Webhooks"],
    stats: "Saved 10+ hrs/week",
    icon: <Bot className="h-6 w-6 text-purple-500" />,
    link: "#",
    github: "https://github.com/avi19042004",
  },
  {
    title: "Portfolio v1",
    description: "Performance-optimized portfolio scoring 95+ on PageSpeed.",
    tags: ["React", "Framer Motion", "SEO"],
    stats: "95+ Performance",
    icon: <Zap className="h-6 w-6 text-yellow-500" />,
    link: "https://portfolio.avi-dev.in",
    github: "https://github.com/avi19042004",
  },
];

export function Projects() {
  return (
    // FIXED: Added 'mx-auto' to center the container
    <section className="container mx-auto py-24 px-4 md:px-6" id="projects">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Projects</h2>
        <p className="text-muted-foreground mt-4 max-w-[600px]">
          A selection of systems I've architected and workflows I've automated.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative flex flex-col"
          >
            <Card className="h-full flex flex-col overflow-hidden border-muted transition-colors hover:border-primary/50">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="p-2 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                    {project.icon}
                  </div>
                  <Badge variant="outline" className="font-mono text-xs">
                    {project.stats}
                  </Badge>
                </div>
                <CardTitle className="font-bold text-xl">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs bg-secondary/50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-0 gap-2">
                <Button asChild variant="default" size="sm" className="flex-1">
                  <Link href={project.link} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="icon">
                  <Link href={project.github} target="_blank">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}