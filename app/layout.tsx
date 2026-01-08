import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono" 
});

// --- UPDATED METADATA SECTION ---
export const metadata: Metadata = {
  metadataBase: new URL('https://www.avi-dev.in'),

  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },

  title: {
    default: "Avi Patel | Full Stack Developer in Surat | MERN & AI Portfolio",
    template: "%s | Avi Patel"
  },

  description: "Portfolio of Avi Patel, a Full Stack Developer and Ethical Hacking enthusiast based in Surat, India. Specializing in MERN Stack, Next.js, Deep Learning, and ERP systems.",

  openGraph: {
    title: "Avi Patel | Full Stack Developer in Surat",
    description: "Building scalable web apps with Next.js and secure backends. Check out my projects in Deep Learning and Bug Bounty hunting.",
    url: 'https://www.avi-dev.in',
    siteName: 'Avi Patel Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.avi-dev.in/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Avi Patel Portfolio Preview',
      },
    ],
  },
  
  keywords: ["Full Stack Developer", "MERN Stack", "Next.js", "Deep Learning", "Ethical Hacking", "Surat", "Web Developer", "ERP Systems", "Avi", "Avi Patel"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground relative`}>

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-L6D3L0KSYB"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L6D3L0KSYB');
          `}
        </Script>
        
        {/* Schema Markup */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Avi Patel",
              "url": "https://www.avi-dev.in",
              "image": "https://www.avi-dev.in/opengraph-image.png",
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
          {/* GLOBAL BACKGROUND GRID */}
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
