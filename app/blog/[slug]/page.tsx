import { getPostData, getSortedPostsData } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// 1. Generate SEO metadata (Awaiting params for Next.js 15)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostData(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.description,
  };
}

// 2. Generate Static Paths so pages are built at compile time
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 3. Main Page Component
export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params; // Next.js 15 requires awaiting params
  const post = getPostData(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-3xl py-24 px-4 md:px-6 mx-auto">
      {/* Back Button */}
      <Button asChild variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Lab
        </Link>
      </Button>

      {/* Blog Header */}
      <div className="space-y-4 mb-12 border-b pb-8">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{post.title}</h1>
        <div className="flex items-center text-muted-foreground">
          <Calendar className="mr-2 h-4 w-4" />
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>

      {/* FIX APPLIED HERE:
         - 'prose': Adds standard typography (Black text by default).
         - 'dark:prose-invert': Turns text White ONLY in dark mode.
         - 'max-w-none': Allows content to fill the container width.
      */}
      <div className="prose dark:prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}