import fs from "fs";
import path from "path";
import matter from "gray-matter";

// 1. Define where the files are
const postsDirectory = path.join(process.cwd(), "assets/content/blog");

// 2. Define what a "Post" looks like
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
}

// 3. Function to get ALL posts (sorted by new)
export function getSortedPostsData(): BlogPost[] {
  // Create directory if it doesn't exist to prevent crash
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get id
    const slug = fileName.replace(/\.mdx$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as { title: string; date: string; description: string; tags: string[] }),
      content: matterResult.content,
    };
  });

  // Sort posts by date (Newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// 4. Function to get a SINGLE post by slug
export function getPostData(slug: string): BlogPost | undefined {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return undefined;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  return {
    slug,
    ...(matterResult.data as { title: string; date: string; description: string; tags: string[] }),
    content: matterResult.content,
  };
}