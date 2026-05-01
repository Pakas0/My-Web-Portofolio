import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { TechStack } from "@/components/sections/TechStack"
import { Projects } from "@/components/sections/Projects"
import { GitHubStats } from "@/components/sections/GitHubStats"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-display text-xl font-medium text-foreground tracking-tight">
            Bagaskara.
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="nav-link text-sm font-medium text-muted hover:text-foreground transition-colors">About</a>
            <a href="#stack" className="nav-link text-sm font-medium text-muted hover:text-foreground transition-colors">Stack</a>
            <a href="#projects" className="nav-link text-sm font-medium text-muted hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" className="nav-link text-sm font-medium text-muted hover:text-foreground transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex flex-col relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <GitHubStats />
        <Contact />
      </main>

      <footer className="border-t border-border py-8 mt-auto relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-muted">
          <p>© {new Date().getFullYear()} Bagaskara. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </>
  )
}
