"use client"

import { motion } from "framer-motion"
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { FaGithub } from "react-icons/fa"

const projects = [
  {
    title: "SewainAja",
    status: "Actively in development",
    statusVariant: "green" as const,
    role: "Core Team Developer",
    description: "A modern rental platform — mobile app + web admin dashboard. Born from our own team's idea, developed as a Project-Based Learning assignment at Polines under lecturer guidance.",
    tech: ["Flutter", "Laravel", "Firebase", "MySQL"],
    links: [
      { name: "GitHub", url: "https://github.com/sewainaja-pbl" },
      { name: "Docs", url: "https://github.com/sewainaja-pbl/sewainaja-docs" },
      { name: "Mobile", url: "https://github.com/sewainaja-pbl/sewainaja-mobile" },
      { name: "Admin", url: "https://github.com/sewainaja-pbl/sewainaja-admin" }
    ]
  },
  {
    title: "LSP Polines — Certification System",
    status: "Completed",
    statusVariant: "blue" as const,
    role: "Lead contributor for assessor module",
    description: "Official website for the Professional Certification Institute (LSP) owned by Politeknik Negeri Semarang. Actively used by the institution for professional certification management.",
    tech: ["Laravel", "MySQL", "PHP", "JavaScript"],
    links: [
      { name: "Repository", url: "https://github.com/trktic24/PBL_LSP" }
    ]
  },
  {
    title: "Dashboard Web Map Contour",
    status: "Completed",
    statusVariant: "blue" as const,
    role: "Lead development partner",
    description: "A web-based contour map visualization dashboard. Displays geospatial data in an interactive visual format.",
    tech: ["JavaScript", "PHP", "MySQL"],
    links: [
      { name: "Repository", url: "https://github.com/Ghufrnainun/Dashboard-Web-Map-Contour" }
    ]
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-16 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <h2 className="font-heading text-4xl tracking-tight mb-4">Projects</h2>
          <p className="text-muted text-lg">Some things I've built and am currently working on.</p>
        </motion.div>

        <motion.div 
          className="grid gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {projects.map((project, idx) => (
            <motion.div key={project.title} variants={staggerItem}>
              <Card className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_20px_rgba(0,217,255,0.15)] hover:border-[rgba(0,217,255,0.4)]">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                    <CardTitle className="text-2xl font-sans group-hover:text-accent-blue transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant={project.statusVariant}>{project.status}</Badge>
                  </div>
                  <CardDescription className="text-muted font-medium">
                    Role: <span className="text-foreground">{project.role}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="font-mono text-xs text-foreground/80 bg-white/10 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-4 border-t border-border/50">
                  <div className="flex flex-wrap gap-4">
                    {project.links.map((link) => (
                      <a 
                        key={link.name} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-sm font-medium text-muted hover:text-foreground transition-colors nav-link"
                      >
                        <FaGithub className="w-4 h-4 mr-2" />
                        {link.name}
                      </a>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
