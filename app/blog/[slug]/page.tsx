import { getPostData, getSortedPostsData } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import remarkGfm from "remark-gfm";

// 👇 NEW MINIMALIST COMPONENTS CONFIGURATION
const components = {
  // 1. Table Wrapper: Only handles overflow for mobile, no extra styling.
  table: (props: any) => (
    <div className="overflow-x-auto my-6">
      <table {...props} />
    </div>
  ),

  // 2. Code Component: This styles the text inside backticks (`)
  //    to give it the background and rounded corners seen in image_4.png.
  code: (props: any) => (
    <code
      className="bg-gray-100 dark:bg-muted px-[0.3rem] py-[0.1rem] rounded font-mono text-sm text-foreground"
      {...props}
    />
  ),

  // NOTE: We removed th, tr, td, thead custom components.
  // The 'prose' class in the main div will handle the default minimal borders now.
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostData(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostData(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-3xl py-24 px-4 md:px-6 mx-auto">
      <Button asChild variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Lab
        </Link>
      </Button>

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

      {/* The 'prose' class here will now handle the simple table borders automatically */}
      <div className="prose dark:prose-invert max-w-none">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
          components={components}
        />
      </div>
    </article>
  );
}