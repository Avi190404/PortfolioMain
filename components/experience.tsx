"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Briefcase, Server, Database, TrendingUp, Zap } from "lucide-react";

const experiences = [
  {
    company: "Todi Reyon Private Limited",
    role: "EDP Executive",
    period: "Aug 2025 - Present",
    description: "Orchestrating company ERP systems and automating data analysis.",
    achievements: [
      "Ensured 99.9% ERP uptime & 100% data integrity for daily operations.",
      "Developed programmatic Excel reports, saving 15+ hours/week.",
      "Resolved technical errors for 50+ users within 30 mins avg."
    ],
    skills: ["ERP Management", "Advanced Excel", "Database Admin", "Network Troubleshooting"],
    icon: <Database className="h-6 w-6 text-blue-500" />,
  },
  {
    company: "Ecowoodies",
    role: "AI-Automation Engineer (Intern)",
    period: "Aug 2024 - July 2025",
    description: "Built DevOps infrastructure and automated marketing workflows.",
    achievements: [
      "Deployed self-hosted n8n on AWS Lightsail for cost-effective automation.",
      "Engineered a dual-instance architecture (Prod/QA) to ensure zero-downtime testing.",
      "Automated lead processing, reducing manual data entry by 40%."
    ],
    skills: ["n8n", "AWS Lightsail", "Docker", "DevOps"],
    icon: <Zap className="h-6 w-6 text-yellow-500" />,
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "2023 - Present",
    description: "Delivering scalable web solutions for diverse client needs.",
    achievements: [
      "Architected a Bus Booking Platform with sub-200ms seat reservation latency.",
      "Built a secure E-commerce backend handling 1,000+ products.",
      "Created high-performance portfolios with 95+ Google PageSpeed scores."
    ],
    skills: ["Next.js", "React", "Node.js", "MongoDB"],
    icon: <Server className="h-6 w-6 text-green-500" />,
  },
];

export function Experience() {
  return (
    // FIXED: Added 'mx-auto' to center the container
    <section className="container mx-auto py-24 px-4 md:px-6" id="experience">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">Professional Experience</h2>
        <p className="text-muted-foreground mt-4 max-w-[600px] text-lg">
          My journey from building infrastructure to optimizing enterprise operations.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 md:translate-x-0" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary z-10 -translate-x-1/2 flex items-center justify-center">
                {exp.icon}
              </div>

              {/* Content Card */}
              <div className="ml-12 md:ml-0 md:w-1/2 p-4">
                <Card className="hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-4 w-4 text-primary" />
                      <span className="font-semibold text-primary">{exp.role}</span>
                    </div>
                    <CardTitle className="text-xl">{exp.company}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Calendar className="mr-2 h-3 w-3" />
                      {exp.period}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">{exp.description}</p>
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Spacer for the other side */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}