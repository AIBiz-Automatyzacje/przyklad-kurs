---
name: tailwind-react-guidelines
description: Frontend development guidelines for React + Tailwind CSS applications. Modern patterns including component organization, Tailwind styling, TypeScript best practices, performance optimization, and accessibility. Use when creating components, pages, features, styling, or working with frontend code.
---

# React + Tailwind Development Guidelines

## Purpose

Comprehensive guide for modern React development with Tailwind CSS, emphasizing clean component architecture, utility-first styling, proper file organization, and performance optimization.

## When to Use This Skill

- Creating new components or pages
- Building new features
- Styling components with Tailwind CSS
- Performance optimization
- Organizing frontend code
- TypeScript best practices
- Landing page development

---

## Quick Start

### New Component Checklist

Creating a component? Follow this checklist:

- [ ] Use `React.FC<Props>` pattern with TypeScript
- [ ] Lazy load if heavy component: `React.lazy(() => import())`
- [ ] Wrap in `<Suspense>` for loading states
- [ ] Use `className` with Tailwind utilities
- [ ] Use `useCallback` for event handlers passed to children
- [ ] Default export at bottom
- [ ] Accessibility: proper aria labels, semantic HTML

### New Feature Checklist

Creating a feature? Set up this structure:

- [ ] Create `features/{feature-name}/` directory
- [ ] Create subdirectories: `components/`, `hooks/`, `helpers/`, `types/`
- [ ] Set up TypeScript types in `types/`
- [ ] Lazy load feature components
- [ ] Export public API from feature `index.ts`

---

## Tailwind CSS Quick Reference

### Spacing

| Class | Value |
|-------|-------|
| `p-1` | 4px |
| `p-2` | 8px |
| `p-4` | 16px |
| `m-auto` | margin: auto |
| `space-x-4` | gap between horizontal children |
| `space-y-4` | gap between vertical children |

### Flexbox & Grid

```tsx
// Flexbox centering
<div className="flex items-center justify-center">

// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

// Flex with gap
<div className="flex flex-wrap gap-4">
```

### Responsive Breakpoints

| Prefix | Min Width |
|--------|-----------|
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |
| `2xl:` | 1536px |

### Common Patterns

```tsx
// Card
<div className="bg-white rounded-lg shadow-md p-6">

// Button
<button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors">

// Input
<input className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">

// Container
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
```

---

## Topic Guides

### Component Patterns

**Modern React components use:**
- `React.FC<Props>` for type safety
- `React.lazy()` for code splitting
- `Suspense` for loading states
- Named const + default export pattern

**Key Concepts:**
- Lazy load heavy components (charts, editors, images)
- Always wrap lazy components in Suspense
- Component structure: Props → Hooks → Handlers → Render → Export

**[📖 Complete Guide: resources/component-patterns.md](resources/component-patterns.md)**

---

### Styling with Tailwind

**Patterns:**
- Use utility classes directly in JSX
- Extract repeated patterns with `@apply` in CSS
- Use `cn()` helper for conditional classes (clsx/tailwind-merge)

**Organization:**
- Group related utilities logically
- Mobile-first approach (base styles, then responsive)
- Use CSS custom properties for theming

```tsx
// Conditional classes with cn() helper
import { cn } from '@/lib/utils';

<button className={cn(
  "px-4 py-2 rounded font-medium transition-colors",
  isActive ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
)}>
```

**[📖 Complete Guide: resources/styling-guide.md](resources/styling-guide.md)**

---

### File Organization

**features/ vs components/:**
- `features/`: Domain-specific (hero, pricing, testimonials)
- `components/`: Truly reusable (Button, Card, Input)

**Feature Structure:**
```
features/
  hero/
    components/
      Hero.tsx
      HeroBackground.tsx
    hooks/
    types/
    index.ts
```

**[📖 Complete Guide: resources/file-organization.md](resources/file-organization.md)**

---

### Loading & Error States

**CRITICAL RULE: No Early Returns**

```tsx
// ❌ NEVER - Causes layout shift
if (isLoading) {
    return <LoadingSpinner />;
}

// ✅ ALWAYS - Consistent layout
<Suspense fallback={<LoadingSkeleton />}>
    <Content />
</Suspense>
```

**Why:** Prevents Cumulative Layout Shift (CLS), better UX

**[📖 Complete Guide: resources/loading-and-error-states.md](resources/loading-and-error-states.md)**

---

### Performance

**Optimization Patterns:**
- `useMemo`: Expensive computations (filter, sort, map)
- `useCallback`: Event handlers passed to children
- `React.memo`: Expensive components
- Lazy loading images with `loading="lazy"`
- Code splitting with React.lazy

**[📖 Complete Guide: resources/performance.md](resources/performance.md)**

---

### TypeScript

**Standards:**
- Strict mode, no `any` type
- Explicit return types on functions
- Type imports: `import type { User } from './types'`
- Component prop interfaces with JSDoc

**[📖 Complete Guide: resources/typescript-standards.md](resources/typescript-standards.md)**

---

## Navigation Guide

| Need to... | Read this resource |
|------------|-------------------|
| Create a component | [component-patterns.md](resources/component-patterns.md) |
| Organize files/folders | [file-organization.md](resources/file-organization.md) |
| Style components | [styling-guide.md](resources/styling-guide.md) |
| Handle loading/errors | [loading-and-error-states.md](resources/loading-and-error-states.md) |
| Optimize performance | [performance.md](resources/performance.md) |
| TypeScript types | [typescript-standards.md](resources/typescript-standards.md) |
| See full examples | [complete-examples.md](resources/complete-examples.md) |

---

## Core Principles

1. **Lazy Load Heavy Components**: Routes, charts, editors
2. **Suspense for Loading**: Use Suspense boundaries, not early returns
3. **Utility-First Styling**: Tailwind classes directly in JSX
4. **Features are Organized**: components/, hooks/, helpers/ subdirs
5. **Mobile-First Responsive**: Base styles then breakpoint modifiers
6. **No Early Returns**: Prevents layout shift
7. **Semantic HTML**: Proper headings, landmarks, ARIA

---

## Modern Component Template (Quick Copy)

```tsx
import React, { useState, useCallback } from 'react';

interface MyComponentProps {
  title: string;
  onAction?: () => void;
}

export const MyComponent: React.FC<MyComponentProps> = ({ title, onAction }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = useCallback(() => {
    setIsActive(prev => !prev);
    onAction?.();
  }, [onAction]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        {title}
      </h2>
      <button
        onClick={handleClick}
        className={`
          px-4 py-2 rounded-md font-medium transition-colors
          ${isActive
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }
        `}
      >
        {isActive ? 'Active' : 'Inactive'}
      </button>
    </div>
  );
};

export default MyComponent;
```

---

## Landing Page Specific Patterns

### Hero Section

```tsx
<section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
      Headline
    </h1>
    <p className="text-xl text-gray-300 mb-8">
      Subheadline
    </p>
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
      CTA Button
    </button>
  </div>
</section>
```

### Email Capture Form

```tsx
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
  <input
    type="email"
    placeholder="Twój email"
    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />
  <button
    type="submit"
    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap"
  >
    Dołącz
  </button>
</form>
```

### Feature Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {features.map((feature) => (
    <div key={feature.id} className="bg-white rounded-xl shadow-lg p-6">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        {feature.icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  ))}
</div>
```

---

**Skill Status**: Adapted for React + Tailwind CSS projects
