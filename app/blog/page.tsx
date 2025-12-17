import Link from "next/link";
import { getSortedPostsData } from "@/lib/blog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Lab | Engineering Blog",
  description: "Technical deep dives into MERN stack architecture, n8n automation, and DevOps.",
};

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <div className="container py-24 px-4 md:px-6 max-w-4xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-3xl font-bold tracking-tighter md:text-5xl mb-4">The Lab</h1>
        <p className="text-muted-foreground text-lg max-w-[600px]">
           documenting my experiments with code, automation, and system architecture.
        </p>
      </div>

      <div className="grid gap-6">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <Card className="transition-all hover:border-primary/50 hover:shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  
                  {/* FIX: Improved Layout for Mobile */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
                    
                    {/* 1. Allow tags to wrap on small screens */}
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* 2. Make "Read Article" visible on mobile, hover effect only on desktop */}
                    <span className="flex items-center text-sm font-medium text-primary transition-opacity opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
                      Read Article <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                    
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <div className="text-center py-20 text-muted-foreground">
            No experiments recorded yet. Check back soon.
          </div>
        )}
      </div>
    </div>
  );
}