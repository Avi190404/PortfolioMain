import { Bus, ShoppingCart, FileSpreadsheet, Zap } from "lucide-react";
import React from "react";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  stats: string;
  icon: React.ReactNode; 
  link?: string; 
  github: string;
};

export const allProjects: Project[] = [
  {
    title: "Bus Booking Platform",
    description: "Real-time seat reservation engine with sub-200ms API latency.",
    tags: ["Next.js", "MongoDB", "Razorpay", "Redis"],
    stats: "30% Faster Load Time",
    icon: React.createElement(Bus, { className: "h-6 w-6 text-blue-500" }),
    link: "https://www.croossa.com/",
    github: "https://github.com/croossa/Bus",
  },
  {
    title: "Full Stack E-Commerce",
    description: "Scalable backend handling 1,000+ products with sub-second queries.",
    tags: ["React", "Node.js", "JWT", "Tailwind"],
    stats: "99.9% Secure Auth",
    icon: React.createElement(ShoppingCart, { className: "h-6 w-6 text-green-500" }),
    link: "https://your-store.com",
    github: "https://github.com/avi19042004/ecommerce",
  },
  {
    title: "Shopify Order Sync",
    description: "Automated Google Apps Script that syncs Shopify orders to Sheets.",
    tags: ["Google Apps Script", "Shopify API", "Webhooks"],
    stats: "Saved 10+ hrs/week",
    icon: React.createElement(FileSpreadsheet, { className: "h-6 w-6 text-green-600" }),
    link: "", 
    github: "https://github.com/avi19042004/shopify-automation",
  },
  {
    title: "Portfolio v1",
    description: "Performance-optimized portfolio scoring 95+ on PageSpeed.",
    tags: ["React", "Framer Motion", "SEO"],
    stats: "95+ Performance",
    icon: React.createElement(Zap, { className: "h-6 w-6 text-yellow-500" }),
    link: "https://portfolio.avi-dev.in",
    github: "https://github.com/avi19042004/portfolio",
  },
];
