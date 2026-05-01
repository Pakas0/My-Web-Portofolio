"use client"

import { motion } from "framer-motion"
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations"
import { Mail } from "lucide-react"
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"

const contacts = [
  { name: "Email", info: "bagaskara1604@gmail.com", url: "mailto:bagaskara1604@gmail.com", icon: Mail },
  { name: "LinkedIn", info: "bagaskara-091722356", url: "https://www.linkedin.com/in/bagaskara-091722356/", icon: FaLinkedin },
  { name: "Instagram", info: "@bagass.kr_", url: "https://instagram.com/bagass.kr_", icon: FaInstagram },
  { name: "GitHub", info: "Pakas0", url: "https://github.com/Pakas0", icon: FaGithub },
]

export function Contact() {
  return (
    <section id="contact" className="py-16 relative mb-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-4xl tracking-tight mb-6">Let's Connect</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto text-balance italic">
            "Open to collaborations, projects, or just a good conversation about tech. Feel free to reach out!"
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-6"
        >
          {contacts.map((contact) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={contact.name}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={staggerItem}
                className="group flex flex-col items-center gap-4 p-6 w-40 glass-panel rounded-2xl hover:-translate-y-2 hover:bg-white/[0.02] hover:border-accent-blue/40 hover:shadow-[0_0_20px_rgba(0,217,255,0.15)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center bg-white/5 group-hover:bg-accent-blue/10 group-hover:text-accent-blue transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-center">
                  <h3 className="font-sans font-medium text-foreground">{contact.name}</h3>
                  <p className="text-xs text-muted mt-1 truncate w-32">{contact.info}</p>
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
