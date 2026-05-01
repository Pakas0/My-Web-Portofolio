# Portfolio Content & Build Instructions — Bagaskara

> Design inspiration: brittanychiang.com / Linear.app
> Stack: Next.js + Framer Motion + Tailwind CSS
> Deploy: Vercel

---

## 🎨 Design Direction

**Color Palette (Dark Navy + Cyan)**
```
Background:     #0A0A14  (deep dark navy, not pure black)
Surface:        #111827  (card / section background)
Surface hover:  #1A2332  (subtle lift on hover)
Accent:         #00D9FF  (cyan — primary highlight color)
Accent soft:    #00D9FF1A (cyan at 10% opacity — glow/bg tint)
Text primary:   #E2E8F0
Text secondary: #94A3B8
Text muted:     #64748B
Border:         #1E293B
```

**Typography**
- Font: `Inter` (primary) — clean, modern, widely used in dev portfolios
- Mono font: `Fira Code` or `JetBrains Mono` — for code snippets / tech labels
- Headings: semi-bold (600), not all-caps
- Body: regular (400), relaxed line-height (1.7)

---

## ✨ Animation Guide

> Library: **Framer Motion** (recommended for Next.js)
> Principle: subtle, purposeful, never distracting. Every animation has a reason.

### 1. Fade + Slide Up on Scroll (Global — All Sections)
Every section and major content block fades in and slides up when it enters the viewport.
```
initial:   { opacity: 0, y: 30 }
animate:   { opacity: 1, y: 0 }
transition: { duration: 0.6, ease: "easeOut" }
trigger:   whileInView, once: true
```
Apply to: section titles, paragraphs, cards, stat blocks.

### 2. Staggered Children (Tech Stack & Project Cards)
Children elements appear one by one with a small delay, creating a cascading effect.
```
parent:    staggerChildren: 0.08
child:     { opacity: 0, y: 20 } → { opacity: 1, y: 0 }
```
Apply to: tech stack badge grid, project cards, contact icons.

### 3. Typewriter Effect (Hero — Name or Tagline)
The tagline or role text is typed out character by character on initial load.
- Library: `react-type-animation` or custom CSS `typing` keyframe
- Cursor blink after typing completes
- Apply to: role subtitle ("Fullstack Developer") or the tagline

### 4. Subtle Floating / Breathing (Hero — Avatar or Decoration)
A decorative element (profile photo frame, geometric shape, or glow orb) slowly bobs up and down.
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-10px); }
}
animation: float 4s ease-in-out infinite;
```
Apply to: profile photo wrapper or hero illustration/decoration element.

### 5. Smooth Scroll Navigation
Clicking nav links scrolls to the target section with smooth easing — no hard jump.
```js
// In Next.js: add to globals.css
html { scroll-behavior: smooth; }
// or use Framer Motion scroll utilities for more control
```

### 6. Project Card Hover — Lift + Border Glow
On hover, project cards lift slightly and the border glows with the accent color.
```
transform:  translateY(-6px)
box-shadow: 0 0 20px rgba(0, 217, 255, 0.15)
border:     1px solid rgba(0, 217, 255, 0.4)
transition: all 0.3s ease
```

### 7. Button Hover — Background Slide
Primary buttons use a background color slide-in from left to right on hover.
```css
button {
  background: transparent;
  border: 1px solid #00D9FF;
  color: #00D9FF;
  position: relative;
  overflow: hidden;
}
button::before {
  content: '';
  position: absolute;
  left: -100%; top: 0;
  width: 100%; height: 100%;
  background: #00D9FF1A;
  transition: left 0.3s ease;
}
button:hover::before { left: 0; }
```

### 8. Nav Link Underline Grow
Navigation links show an underline that grows from left to right on hover.
```css
nav a::after {
  content: '';
  display: block;
  width: 0; height: 2px;
  background: #00D9FF;
  transition: width 0.3s ease;
}
nav a:hover::after { width: 100%; }
```

### 9. Custom Cursor (Optional — Desktop Only)
A small dot cursor that follows the mouse. Grows into a ring when hovering over interactive elements.
```
Default state:  8px dot, #00D9FF, mix-blend-mode: difference
Hover state:    32px ring, border 1px solid #00D9FF, background transparent
Transition:     0.15s ease
```
Disable on touch devices (`@media (pointer: coarse)`).

### 10. Subtle Parallax on Hero Background
The background gradient or noise texture moves at 30% the scroll speed, creating depth.
```js
// Using Framer Motion useScroll + useTransform
const { scrollY } = useScroll();
const y = useTransform(scrollY, [0, 500], [0, -150]);
// Apply to background layer only, not content
```

### 11. Grainy Gradient Background (Hero)
The hero background uses a subtle noise texture over the gradient for a premium, handcrafted feel.
```css
/* Add after background gradient */
background-image: url("data:image/svg+xml,..."); /* SVG noise */
opacity: 0.04;
```
Reference: `grainy-gradient` CSS technique, widely used in modern SaaS sites.

### 12. GitHub Contribution Graph Fade-In
The GitHub stats section (streak, top langs) loads with a fade-in after a short delay, so it doesn't block initial render.
```
delay: 0.4s
duration: 0.8s
opacity: 0 → 1
```

---

## 1. Hero Section

**Name:** Bagaskara
**Role:** Fullstack Developer
**Tagline:**
> "My code doesn't work, I don't know why. My code works, I don't know why."

**Sub-tagline:**
> A second-year student at Politeknik Negeri Semarang who loves building things from scratch — web, mobile, and everything in between.

**CTA Buttons:**
- `View My Work` → scroll to Projects
- `GitHub` → https://github.com/Pakas0
- `Contact Me` → scroll to Contact

**Animation applied:** Typewriter on role text, fade+slide-up on tagline and CTAs (staggered), floating on decoration element.

---

## 2. About

**Short Bio:**
Hey! I'm Bagaskara — a second-year student at **Politeknik Negeri Semarang (Polines)**, majoring in Information Technology. I'm a fullstack developer who enjoys working across the stack, from frontend interfaces to backend logic, from web to mobile.

Throughout my studies, I've been directly involved in real-world projects — from systems actively used by an official campus institution, to a team-built application we're currently developing with the guidance of our lecturers.

I believe the most effective way to learn is to build something real. And if the code suddenly works for no apparent reason... that's just experience.

**Highlights:**
- 🎓 Active student at Politeknik Negeri Semarang (Polines)
- 💻 Fullstack — comfortable on both web and mobile
- 🚀 Currently building SewainAja with my team
- 🌱 Deepening: Next.js, Flutter, Firebase

**Animation applied:** Fade + slide-up on bio text, staggered highlights list.

---

## 3. Tech Stack

### Frontend & Mobile
| Tech | Description |
|------|-------------|
| React | Primary UI library for web |
| Next.js | React framework — currently deepening |
| Flutter | Cross-platform mobile — currently deepening |
| JavaScript | Main frontend language |
| TypeScript | JavaScript with type safety |

### Backend
| Tech | Description |
|------|-------------|
| Laravel | PHP framework — most frequently used |
| Node.js | Backend JS / REST API |
| PHP | Web backend foundation |
| Python | Scripting & utility |
| C / C++ | Programming fundamentals |

### Database & Cloud
| Tech | Description |
|------|-------------|
| MySQL | Primary relational database |
| Firebase | Backend-as-a-service — currently deepening |

### Tools
| Tech | Description |
|------|-------------|
| Git & GitHub | Version control |
| Vercel | Next.js deployment |

**Animation applied:** Staggered badge grid — each tech badge fades in with 0.08s interval delay.

---

## 4. Projects

### 🤝 SewainAja *(Active)*
**Description:**
A modern rental platform — mobile app + web admin dashboard. Born from our own team's idea, developed as a Project-Based Learning assignment at Polines under lecturer guidance.

**Role:** Core Team Developer
**Status:** 🟢 Actively in development
**Tech Stack:** Flutter, Laravel, Firebase, MySQL

**Repositories:**
- Docs: https://github.com/sewainaja-pbl/sewainaja-docs
- Mobile App: https://github.com/sewainaja-pbl/sewainaja-mobile
- Admin Dashboard: https://github.com/sewainaja-pbl/sewainaja-admin

---

### 📋 LSP Polines — Certification System *(Completed)*
**Description:**
Official website for the Professional Certification Institute (LSP) owned by Politeknik Negeri Semarang. Built as a Project-Based Learning assignment. The system is actively used by the institution for professional certification management.

**Role:** Lead contributor for the assessor module
**Status:** ✅ Completed & live
**Tech Stack:** Laravel, MySQL, PHP, JavaScript

**Repository:** https://github.com/trktic24/PBL_LSP

---

### 🗺️ Dashboard Web Map Contour *(Completed)*
**Description:**
A web-based contour map visualization dashboard. Displays geospatial data in an interactive visual format.

**Role:** Lead development partner
**Status:** ✅ Completed
**Tech Stack:** JavaScript, PHP, MySQL

**Repository:** https://github.com/Ghufrnainun/Dashboard-Web-Map-Contour

**Animation applied:** Cards stagger in on scroll, hover triggers lift + border glow animation.

---

## 5. GitHub Stats

**GitHub Username:** Pakas0
**Profile URL:** https://github.com/Pakas0

**Embed URLs:**
```
// Stats Card
https://github-readme-stats.vercel.app/api?username=Pakas0&show_icons=true&theme=tokyonight&hide_border=true&count_private=true

// Top Languages
https://github-readme-stats.vercel.app/api/top-langs/?username=Pakas0&layout=compact&theme=tokyonight&hide_border=true

// Streak
https://streak-stats.demolab.com/?user=Pakas0&theme=tokyonight&hide_border=true

// Contribution Graph
https://ghchart.rshah.org/Pakas0
```

**Animation applied:** Entire GitHub section fades in with 0.4s delay after page load.

---

## 6. Contact

| Platform | Info |
|----------|------|
| 📧 Email | bagaskara1604@gmail.com |
| 💼 LinkedIn | https://www.linkedin.com/in/bagaskara-091722356/ |
| 📸 Instagram | @bagass.kr_ → https://instagram.com/bagass.kr_ |
| 🐙 GitHub | https://github.com/Pakas0 |

**CTA Text:**
> Open to collaborations, projects, or just a good conversation about tech. Feel free to reach out!

**Animation applied:** Contact icons stagger in, each with hover scale + color glow effect.

---

## 🧱 Recommended Component Libraries

| Library | Use |
|---------|-----|
| `framer-motion` | All animations — scroll, hover, entrance |
| `react-type-animation` | Typewriter effect on hero |
| `@radix-ui/react-*` | Accessible UI primitives |
| `tailwindcss` | Utility-first styling |
| `clsx` + `tailwind-merge` | Conditional class handling |
| `react-intersection-observer` | Trigger animations on scroll (alternative to Framer whileInView) |

---

## 📁 Suggested File Structure (Next.js App Router)

```
/app
  /page.tsx              ← main page, assembles all sections
  /layout.tsx
/components
  /sections
    Hero.tsx
    About.tsx
    TechStack.tsx
    Projects.tsx
    GitHubStats.tsx
    Contact.tsx
  /ui
    Button.tsx
    Badge.tsx
    ProjectCard.tsx
    NavLink.tsx
    CustomCursor.tsx
/lib
  /animations.ts         ← reusable Framer Motion variants
/styles
  globals.css
```