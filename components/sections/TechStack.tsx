"use client"

import { motion } from "framer-motion"
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"

type TechItem = { name: string; desc: string }

const frontend: TechItem[] = [
  { name: "React", desc: "Primary UI library for web" },
  { name: "Next.js", desc: "React framework — currently deepening" },
  { name: "Flutter", desc: "Cross-platform mobile — currently deepening" },
  { name: "JavaScript", desc: "Main frontend language" },
  { name: "TypeScript", desc: "JavaScript with type safety" },
]

const backend: TechItem[] = [
  { name: "Laravel", desc: "PHP framework — most frequently used" },
  { name: "Node.js", desc: "Backend JS / REST API" },
  { name: "PHP", desc: "Web backend foundation" },
  { name: "Python", desc: "Scripting & utility" },
  { name: "C / C++", desc: "Programming fundamentals" },
]

const database: TechItem[] = [
  { name: "MySQL", desc: "Primary relational database" },
  { name: "Firebase", desc: "Backend-as-a-service — currently deepening" },
]

const tools: TechItem[] = [
  { name: "Git & GitHub", desc: "Version control" },
  { name: "Vercel", desc: "Next.js deployment" },
]

export function TechStack() {
  const categories = [
    { title: "Frontend & Mobile", items: frontend, badgeVariant: "blue" as const },
    { title: "Backend", items: backend, badgeVariant: "orange" as const },
    { title: "Database & Cloud", items: database, badgeVariant: "green" as const },
    { title: "Tools", items: tools, badgeVariant: "yellow" as const },
  ]

  return (
    <section id="stack" className="py-16 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <h2 className="font-heading text-4xl tracking-tight mb-4">Tech Stack</h2>
          <p className="text-muted text-lg">Technologies and tools I work with.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-sans">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    {category.items.map((item) => (
                      <motion.div key={item.name} variants={staggerItem} className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-sm text-foreground">{item.name}</span>
                        </div>
                        <p className="text-xs text-muted font-sans">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
