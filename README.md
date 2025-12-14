# Avi Patel | Portfolio & Digital Garden

![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-purple?style=for-the-badge&logo=framer&logoColor=white)

A high-performance, SEO-optimized developer portfolio built to showcase **Full-Stack MERN Architecture** and **n8n Automation Workflows**. 

This site is more than a brochure; it's a "Digital Garden" featuring a custom-built MDX blog engine ("The Lab"), interactive timeline visualizations, and a modern "Bento Grid" project gallery.

## 🚀 Features

- **🎨 Creative Architecture:**
  - **Hybrid Layout:** Clean, minimalist UI with a "Floating Island" smart navbar.
  - **Framer Motion:** Smooth, staggered animations for Hero, Timeline, and Grid sections.
  - **Dark Mode:** Custom one-click theme toggle with seamless sun/moon morphing.

- **⚡ Performance & SEO:**
  - **Next.js 15 (App Router):** Leveraging React Server Components (RSC) for lightning-fast loads.
  - **SEO Optimized:** Dynamic `sitemap.xml`, `robots.txt`, and OpenGraph metadata generated automatically.
  - **Zero Layout Shift:** Font optimization using `Inter` and `JetBrains Mono`.

- **🧪 "The Lab" (Blog Engine):**
  - **MDX Powered:** Write blogs in Markdown, render them as React components.
  - **Syntax Highlighting:** Beautiful code blocks for sharing technical snippets.
  - **Dark Mode Support:** Typography automatically adapts to the user's theme preference.

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Content:** MDX (Markdown + JSX)
- **Deployment:** Vercel

## 📂 Project Structure

```bash
├── app/                 
│   ├── blog/
│   ├── layout.tsx
│   └── page.tsx
├── assets/
│   └── content/
│       └── blog/
├── components/
│   ├── ui/
│   ├── navbar.tsx
│   └── ...
├── lib/
├── public/
├── next.config.ts
└── ...