"use client"

import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import { Card, CardContent } from "@/components/ui/Card"

export function GitHubStats() {
  return (
    <section id="github" className="py-16 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <h2 className="font-heading text-4xl tracking-tight mb-4">GitHub Stats</h2>
          <p className="text-muted text-lg">My open source contributions and activity.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          <Card className="md:col-span-2 overflow-hidden bg-transparent border-none shadow-none">
            <CardContent className="p-0">
              <a href="https://github.com/Pakas0" target="_blank" rel="noopener noreferrer" className="block w-full">
                <img 
                  src="https://ghchart.rshah.org/3b9eff/Pakas0" 
                  alt="Bagaskara's GitHub Contribution Graph" 
                  className="w-full glass-panel rounded-2xl p-4 object-cover"
                />
              </a>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden bg-transparent border-none shadow-none flex items-center justify-center">
            <CardContent className="p-0 w-full h-full">
              <a href="https://github.com/Pakas0" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <img 
                  src="https://github-readme-stats.vercel.app/api?username=Pakas0&show_icons=true&theme=tokyonight&hide_border=true&count_private=true" 
                  alt="GitHub Stats" 
                  className="w-full h-full glass-panel rounded-2xl object-cover"
                />
              </a>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden bg-transparent border-none shadow-none flex items-center justify-center">
            <CardContent className="p-0 w-full h-full">
              <a href="https://github.com/Pakas0" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <img 
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=Pakas0&layout=compact&theme=tokyonight&hide_border=true" 
                  alt="Top Languages" 
                  className="w-full h-full glass-panel rounded-2xl object-cover"
                />
              </a>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 overflow-hidden bg-transparent border-none shadow-none">
            <CardContent className="p-0 w-full">
              <a href="https://github.com/Pakas0" target="_blank" rel="noopener noreferrer" className="block w-full">
                <img 
                  src="https://streak-stats.demolab.com/?user=Pakas0&theme=tokyonight&hide_border=true&background=00000000" 
                  alt="GitHub Streak" 
                  className="w-full glass-panel rounded-2xl object-cover"
                />
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
