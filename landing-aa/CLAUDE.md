# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Vite)
npm run build    # TypeScript check + production build
npm run lint     # ESLint
npm run preview  # Preview production build
```

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 7** with `@vitejs/plugin-react`
- **Tailwind CSS 4** via `@tailwindcss/vite` plugin
- **Framer Motion** for animations
- **Phosphor Icons** (`@phosphor-icons/react`)

## Architecture

Landing page for "Akademia Automatyzacji" - a Polish automation education platform.

### Directory Structure

```
src/
├── components/
│   ├── effects/    # Visual effects (CustomCursor, ScrollProgress, Particles)
│   ├── layout/     # Navbar, Footer, Container, Section
│   └── ui/         # Reusable UI (Button, Card, Modal, Input, Badge)
├── features/       # Page sections as feature modules
│   ├── hero/
│   ├── problems/
│   ├── examples/
│   ├── getting-started/
│   ├── community/
│   ├── hostinger-modal/
│   └── newsletter-popup/
├── context/        # React Context (ModalContext for modal management)
├── lib/            # Utils (cn function) and constants
├── types/          # TypeScript interfaces
└── assets/         # Static assets
```

### Key Patterns

**Modal System**: Centralized via `ModalContext` with `useModal()` hook. Modal types: `'video' | 'hostinger' | 'newsletter' | null`.

**Styling**: Tailwind 4 with custom theme in `index.css`. Use `cn()` utility from `lib/utils.ts` for conditional classes.

**Feature Modules**: Each feature folder has `index.ts` barrel export and component file.

### Custom Theme (index.css)

- Colors: `bg-dark`, `accent` (#FF6B00), `glass-*` for glassmorphism
- Utility classes: `.text-gradient`, `.glass`, `.glow-accent`, `.bg-hero-glow`, `.bg-grid-pattern`
- Supports `prefers-reduced-motion`

## Deployment

Deployed on **Netlify**: https://landing-aa.netlify.app
