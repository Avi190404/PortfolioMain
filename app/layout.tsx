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

        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-L6D3L0KSYB"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-L6D3L0KSYB');
        </script>
        
        {/* ADDED: Schema Markup for Google Knowledge Graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Avi Patel",
              "url": "https://avi-dev.in",
              "image": "https://avi-dev.in/opengraph-image.jpg",
              "sameAs": [
                "https://github.com/avi19042004",
                "https://linkedin.com/in/avi-patel-6170b6238",
                "https://x.com/AviPatel1297020",
                "https://www.instagram.com/avi_19044"
              ],
              "jobTitle": "Full Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Surat",
                "addressRegion": "Gujarat",
                "addressCountry": "IN"
              }
            }),
          }}
        />

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
