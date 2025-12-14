import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono" 
});

export const metadata: Metadata = {
  // ... (keep your existing metadata) ...
  title: "Avi Patel | Full-Stack Developer",
  description: "Portfolio of Avi Patel...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* GLOBAL BACKGROUND GRID: Fixed position so it covers the whole site */}
          <div className="fixed inset-0 w-full h-full bg-grid-pattern opacity-[0.05] pointer-events-none z-[-1]" />
          
          <Navbar />
          
          <main className="min-h-screen flex flex-col pt-24 relative">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}