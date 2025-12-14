export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 md:h-24 px-4 md:px-6">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          Built by{" "}
          <a
            href="https://github.com/avi19042004"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Avi Patel
          </a>
          . using Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}