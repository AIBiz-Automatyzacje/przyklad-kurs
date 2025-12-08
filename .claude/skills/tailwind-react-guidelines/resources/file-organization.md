# File Organization

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/              # Base components (Button, Input, Card)
│   └── layout/          # Layout components (Header, Footer)
│
├── features/            # Feature-specific code
│   ├── hero/
│   ├── pricing/
│   └── testimonials/
│
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and helpers
├── types/               # TypeScript types
├── assets/              # Static assets (images, fonts)
└── App.tsx              # Root component
```

---

## components/ vs features/

### components/
**Truly reusable, domain-agnostic:**
- Button, Card, Input, Modal
- Header, Footer, Navigation
- Loading spinners, skeletons

### features/
**Domain-specific, self-contained:**
- Hero section (hero/)
- Pricing table (pricing/)
- Contact form (contact/)
- Testimonials (testimonials/)

---

## Feature Structure

```
features/
├── hero/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── HeroBackground.tsx
│   │   └── HeroCTA.tsx
│   ├── hooks/
│   │   └── useHeroAnimation.ts
│   ├── types/
│   │   └── index.ts
│   └── index.ts           # Public exports
│
├── email-capture/
│   ├── components/
│   │   ├── EmailForm.tsx
│   │   └── SuccessMessage.tsx
│   ├── hooks/
│   │   └── useEmailSubmit.ts
│   ├── types/
│   │   └── index.ts
│   └── index.ts
```

---

## Feature index.ts (Public API)

```tsx
// features/hero/index.ts
export { Hero } from './components/Hero';
export { useHeroAnimation } from './hooks/useHeroAnimation';
export type { HeroProps } from './types';
```

Usage:
```tsx
import { Hero } from '@/features/hero';
```

---

## Component File Structure

### Simple Component (single file)
```tsx
// components/ui/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick
}) => {
  return (
    <button onClick={onClick} className={...}>
      {children}
    </button>
  );
};

export default Button;
```

### Complex Component (folder)
```
components/
└── Modal/
    ├── Modal.tsx           # Main component
    ├── ModalHeader.tsx     # Sub-component
    ├── ModalBody.tsx       # Sub-component
    ├── ModalFooter.tsx     # Sub-component
    ├── useModal.ts         # Component-specific hook
    └── index.ts            # Exports
```

---

## Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `HeroSection.tsx` |
| Hooks | camelCase, use prefix | `useEmailSubmit.ts` |
| Utilities | camelCase | `formatDate.ts` |
| Types | PascalCase | `UserType.ts` or in `types/index.ts` |
| Constants | SCREAMING_SNAKE | `API_URL` |

---

## Import Organization

```tsx
// 1. React
import React, { useState, useCallback } from 'react';

// 2. Third-party libraries
import { motion } from 'framer-motion';

// 3. Internal imports (absolute)
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

// 4. Relative imports (same feature)
import { HeroBackground } from './HeroBackground';

// 5. Types
import type { HeroProps } from '../types';
```

---

## lib/ Utilities

```
lib/
├── utils.ts             # General utilities (cn, formatDate)
├── api.ts               # API client configuration
├── constants.ts         # App-wide constants
└── validation.ts        # Zod schemas or validation helpers
```

### utils.ts example
```tsx
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('pl-PL').format(date);
}
```

---

## Types Organization

### Option 1: Centralized (small projects)
```
types/
└── index.ts    # All types in one file
```

### Option 2: Feature-based (larger projects)
```
features/hero/types/index.ts
features/pricing/types/index.ts
types/common.ts    # Shared types only
```

---

## Asset Organization

```
assets/
├── images/
│   ├── hero/
│   │   ├── background.jpg
│   │   └── illustration.svg
│   └── logos/
│       └── logo.svg
├── fonts/
└── icons/
```

Or use public folder:
```
public/
├── images/
└── favicon.ico
```
