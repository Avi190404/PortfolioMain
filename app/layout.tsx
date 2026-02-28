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

export const metadata: Metadata = {
  metadataBase: new URL('https://www.avi-dev.in'),

  alternates: {
    canonical: '/',
  },

  title: {
    default: "Avi Patel | Full Stack Developer",
    template: "%s | Avi Patel"
  },

  description: "Official portfolio of Avi Patel, a Full Stack Developer and Automation Engineer specializing in MERN Stack, Next.js, and scaling systems.",

  openGraph: {
    title: "Avi Patel | Full Stack Developer",
    description: "Building scalable web apps with Next.js and secure backends. Explore my projects in MERN and AI Automation.",
    url: 'https://www.avi-dev.in',
    siteName: 'Avi Patel Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.avi-dev.in/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Avi Patel Portfolio Preview',
      },
    ],
  },
  
  keywords: ["Avi Patel", "Avi Patel Surat", "Avi Patel Developer", "Full Stack Developer", "MERN Stack", "Next.js", "Automation Engineer", "n8n"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground relative`}>

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
        
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Avi Patel",
              "url": "https://www.avi-dev.in",
              "image": "https://www.avi-dev.in/opengraph-image.jpg",
              "jobTitle": "Full Stack Developer",
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Parul University"
              },
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "Todi Rayon Private Limited"
                },
                {
                  "@type": "Organization",
                  "name": "Freelance"
                }
              ],
              "sameAs": [
                "https://github.com/avi19042004",
                "https://linkedin.com/in/avi-patel-6170b6238",
                "https://x.com/AviPatel1297020",
                "https://www.instagram.com/avi_19044"
              ],
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