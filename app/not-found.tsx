import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center space-y-6">
      
      {/* Icon with a subtle background glow */}
      <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-secondary/50 mb-4">
        <FileQuestion className="w-12 h-12 text-primary" />
        {/* FIX: Changed bg-primary/20 to have different colors for light/dark mode.
            - Light Mode: bg-black/5 (very subtle light gray shadow)
            - Dark Mode:  dark:bg-primary/20 (soft light glow)
        */}
        <div className="absolute inset-0 bg-black/5 dark:bg-primary/20 blur-xl rounded-full" />
      </div>

      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          404 - Page Not Found
        </h1>
        <p className="text-muted-foreground text-lg max-w-[500px] mx-auto">
          Oops! It seems like you've ventured into the void. This page doesn't exist or might have been moved.
        </p>
      </div>

      <Button asChild size="lg" className="mt-8">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Return to Lab
        </Link>
      </Button>
    </div>
  );
}