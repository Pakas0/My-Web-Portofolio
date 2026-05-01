"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { fadeUp } from "@/lib/animations"
import { Button } from "@/components/ui/Button"
import { ArrowDown } from "lucide-react"
import { FaGithub } from "react-icons/fa"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 w-full text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeUp}
          >
            <h1 className="font-display text-5xl md:text-[96px] leading-[1.0] tracking-[-0.01em] text-foreground mb-4">
              Bagaskara
            </h1>
            <div className="text-xl md:text-2xl font-heading text-muted-dark h-8">
              <TypeAnimation
                sequence={[
                  "Fullstack Developer",
                  1000,
                  "UI/UX Enthusiast",
                  1000,
                  "Tech Student",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-accent-blue"
              />
            </div>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={{...fadeUp, animate: {...(fadeUp.animate as any), transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }}}}
            className="space-y-4"
          >
            <blockquote className="border-l-2 border-border pl-4 text-muted italic text-lg">
              "My code doesn't work, I don't know why. My code works, I don't know why."
            </blockquote>
            <p className="text-muted leading-relaxed max-w-2xl text-balance">
              A second-year student at Politeknik Negeri Semarang who loves building things from scratch — web, mobile, and everything in between.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={{...fadeUp, animate: {...(fadeUp.animate as any), transition: { duration: 0.6, ease: "easeOut", delay: 0.3 }}}}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4"
          >
            <Button variant="solid" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="primary" asChild>
              <a href="https://github.com/Pakas0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <FaGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
        </div>

        <motion.div 
          className="hidden md:flex relative w-64 h-64 items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          {/* Floating decorative element resembling the "Resend" aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/20 to-accent-orange/10 rounded-full blur-[80px]" />
          <div className="w-48 h-48 rounded-full overflow-hidden border border-border flex items-center justify-center animate-[float_4s_ease-in-out_infinite] glass-panel bg-black/40 backdrop-blur-md">
            <img src="/profile.jpeg" alt="Bagaskara" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a href="#about" className="text-muted hover:text-foreground transition-colors animate-bounce block">
          <ArrowDown className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  )
}
