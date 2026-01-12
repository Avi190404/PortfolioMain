"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { allProjects, Project } from "@/assets/projects";

const StatusBadge = ({ status }: { status: Project["status"] }) => {
  if (status === "in-progress") {
    return (
      <Badge variant="outline" className="bg-orange-500/10 text-orange-500 border-orange-500/20 px-2 py-0 h-5 text-[10px]">
        <span className="relative flex h-1.5 w-1.5 mr-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
        </span>
        In Progress
      </Badge>
    );
  }
  return null;
};

export function Projects() {
  const featuredProjects = allProjects.slice(0, 4);

  return (
    <section className="container mx-auto py-24 px-4 md:px-6" id="projects">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Projects</h2>
        <p className="text-muted-foreground mt-4 max-w-[600px]">
          A selection of systems I've architected and workflows I've automated.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
        {featuredProjects.map((project, index) => (
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
                  <div className="flex flex-col items-end gap-1.5">
                    <StatusBadge status={project.status} />
                    {/* Automatically hide stats if in-progress */}
                    {project.status !== "in-progress" && (
                      <Badge variant="outline" className="font-mono text-xs">
                        {project.stats}
                      </Badge>
                    )}
                  </div>
                </div>
                <CardTitle className="font-bold text-xl">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs bg-secondary/50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-0 gap-2">
                {project.link !== "" ? (
                  <>
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
                  </>
                ) : (
                  <Button asChild variant="outline" size="sm" className="flex-1 w-full">
                    <Link href={project.github} target="_blank">
                      <Github className="mr-2 h-4 w-4" /> View Code on GitHub
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button asChild size="lg" variant="secondary" className="gap-2">
          <Link href="/projects">
            View All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}