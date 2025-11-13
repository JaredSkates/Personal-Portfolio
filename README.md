# Jared's Portfolio v2 (Work In Progress)

Personal portfolio built with the Next.js App Router. It showcases my work, experience, and contact points with a clean UI and smooth animations.

## Tech Stack
- Next.js 15 (App Router) + React 19
- TypeScript + ESLint 9
- Tailwind CSS 3.4 for styling
- Framer Motion for micro-interactions
- React Icons & React Type Animation for UI polish

## Features
- **Responsive hero section** with animated typewriter text and CTA.
- **Sticky navigation bar** that anchors major sections and routes (Work, About, Blog, Contact).
- **Experience timeline** component describing roles/skills.
- **Work showcase grid** using reusable `WorkCard` components (images, tech stack, project links).
- **Tailwind-powered theming** with consistent spacing, typography, and soft card shadows.
- **TypeScript-first setup** for safer components and better DX.
- **Nodemailer** for inquiries

## Getting Started

### Prerequisites
- Node.js 18.18+ (or 20+) and npm 9+. Check with `node -v` and `npm -v`.
- Git for cloning the repository.

### Installation
```bash
git clone https://github.com/JaredSkates/jaredportfolio-v2.git
cd jaredportfolio-v2
npm install
```

### Local Development
- `npm run dev` – starts Next.js in development mode on `http://localhost:3000`.
- `npm run lint` – runs ESLint with the Next.js config.
- `npm run build` – creates an optimized production build.
- `npm run start` – serves the production build (run after `npm run build`).

## Project Structure
```
.
├── public/                 # Static assets (images, icons, fonts, etc.)
├── src/
│   ├── app/                # App Router entry points
│   │   ├── layout.tsx      # Root layout / metadata
│   │   ├── globals.css     # Global Tailwind layers
│   │   ├── page.tsx        # Landing page (Navbar, Hero, Experience)
│   │   ├── work/page.tsx   # Dedicated Work page with card grid
│   │   ├── about/          # Placeholder routes for future content
│   │   ├── blog/
│   │   └── contact/
│   ├── components/         # Reusable UI blocks
│   │   ├── navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Experience.tsx
│   │   ├── WorkCard1.tsx
│   │   └── WorkCard2.tsx
│   └── constants/          # Data definitions & shared config
├── tailwind.config.ts      # Tailwind theme customization
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```



## Deployment
Uses Vercel for reliable & efficient deployment.

---
Feel free to open issues or PRs if you spot bugs or have ideas for new sections.
