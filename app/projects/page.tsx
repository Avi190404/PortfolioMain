import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { allProjects } from "@/assets/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects | Avi Patel",
  description: "A complete archive of my engineering projects, open source tools, and experiments.",
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-24 px-4 md:px-6">
      
      {/* Header Section */}
      <div className="max-w-5xl mx-auto mb-12 space-y-6">
        <Button asChild variant="ghost" className="pl-0 hover:pl-2 transition-all">
            <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
        </Button>
        
        <h1 className="text-3xl font-bold tracking-tighter md:text-5xl">All Projects</h1>
        <p className="text-muted-foreground text-lg max-w-[600px]">
          The complete archive of my work in Full Stack Development, Automation, and DevOps.
        </p>
      </div>

      {/* Projects Grid (Shows ALL items) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {allProjects.map((project, index) => (
          <div key={index} className="group relative flex flex-col">
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
                {project.link ? (
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
          </div>
        ))}
      </div>
    </div>
  );
}