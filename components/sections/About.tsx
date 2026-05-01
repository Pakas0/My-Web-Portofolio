"use client"

import { motion } from "framer-motion"
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations"
import { Badge } from "@/components/ui/Badge"

export function About() {
  const highlights = [
    { text: "Active student at Politeknik Negeri Semarang (Polines)", icon: "🎓", variant: "blue" as const },
    { text: "Fullstack — comfortable on both web and mobile", icon: "💻", variant: "orange" as const },
    { text: "Currently building SewainAja with my team", icon: "🚀", variant: "green" as const },
    { text: "Deepening: Next.js, Flutter, Firebase", icon: "🌱", variant: "yellow" as const },
  ]

  return (
    <section id="about" className="py-16 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-12"
        >
          <h2 className="font-heading text-4xl tracking-tight mb-8">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-muted leading-relaxed text-lg text-balance">
              <p>
                Hey! I'm Bagaskara — a second-year student at <strong className="text-foreground font-semibold">Politeknik Negeri Semarang (Polines)</strong>, majoring in Information Technology. I'm a fullstack developer who enjoys working across the stack, from frontend interfaces to backend logic, from web to mobile.
              </p>
              <p>
                Throughout my studies, I've been directly involved in real-world projects — from systems actively used by an official campus institution, to a team-built application we're currently developing with the guidance of our lecturers.
              </p>
              <p>
                I believe the most effective way to learn is to build something real. And if the code suddenly works for no apparent reason... that's just experience.
              </p>
            </div>
            
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-sans text-xl font-medium text-foreground mb-6">Highlights</h3>
              {highlights.map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={staggerItem}
                  className="flex items-start gap-4 p-4 glass-panel rounded-xl hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-sm text-foreground">{item.text}</p>
                    <Badge variant={item.variant} className="mt-2">Highlight</Badge>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
