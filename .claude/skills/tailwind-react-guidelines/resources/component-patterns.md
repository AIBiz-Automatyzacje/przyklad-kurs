# Component Patterns

## Component Structure

### Standard Component Template

```tsx
import React, { useState, useCallback } from 'react';

/**
 * MyComponent - Brief description
 */
interface MyComponentProps {
  /** Required prop description */
  title: string;
  /** Optional callback */
  onAction?: () => void;
  /** Optional className for styling overrides */
  className?: string;
}

export const MyComponent: React.FC<MyComponentProps> = ({
  title,
  onAction,
  className = '',
}) => {
  // 1. State
  const [isOpen, setIsOpen] = useState(false);

  // 2. Handlers (with useCallback if passed to children)
  const handleClick = useCallback(() => {
    setIsOpen(prev => !prev);
    onAction?.();
  }, [onAction]);

  // 3. Render
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        {title}
      </h2>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Toggle
      </button>
    </div>
  );
};

// 4. Default export at bottom
export default MyComponent;
```

---

## Lazy Loading

### When to Lazy Load

- Heavy components (charts, editors, large forms)
- Components below the fold
- Modals/dialogs
- Route-level components

### Pattern

```tsx
import React, { Suspense, lazy } from 'react';

// Lazy load heavy component
const HeavyChart = lazy(() => import('./HeavyChart'));

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Suspense fallback={<div className="animate-pulse bg-gray-200 h-64 rounded" />}>
        <HeavyChart />
      </Suspense>
    </div>
  );
};
```

---

## Composition Patterns

### Children Pattern

```tsx
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
    {children}
  </div>
);

// Usage
<Card className="max-w-md">
  <h2>Title</h2>
  <p>Content</p>
</Card>
```

### Compound Components

```tsx
interface CardContextType {
  isExpanded: boolean;
}

const CardContext = React.createContext<CardContextType | null>(null);

const Card = ({ children }: { children: React.ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <CardContext.Provider value={{ isExpanded }}>
      <div className="bg-white rounded-lg shadow">{children}</div>
    </CardContext.Provider>
  );
};

Card.Header = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 border-b">{children}</div>
);

Card.Body = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4">{children}</div>
);

// Usage
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
</Card>
```

---

## Conditional Rendering

### cn() Helper (recommended)

Install: `npm install clsx tailwind-merge`

```tsx
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

```tsx
import { cn } from '@/lib/utils';

<button
  className={cn(
    // Base styles
    "px-4 py-2 rounded-md font-medium transition-colors",
    // Conditional styles
    isActive && "bg-blue-500 text-white",
    !isActive && "bg-gray-200 text-gray-700",
    // Props override
    className
  )}
>
  Button
</button>
```

---

## Event Handlers

### When to use useCallback

Use `useCallback` when:
- Handler is passed to child components
- Handler is in dependency array of useEffect/useMemo

```tsx
// ✅ Good - handler passed to child
const handleSubmit = useCallback((data: FormData) => {
  submitForm(data);
}, [submitForm]);

<ChildForm onSubmit={handleSubmit} />

// ✅ Fine - handler used only in this component
const handleClick = () => {
  setIsOpen(!isOpen);
};

<button onClick={handleClick}>Toggle</button>
```

---

## Accessibility

### Essential Patterns

```tsx
// Semantic HTML
<main>
  <section aria-labelledby="hero-heading">
    <h1 id="hero-heading">Page Title</h1>
  </section>
</main>

// Button vs Link
<button onClick={handleAction}>Do Something</button>  // Actions
<a href="/page">Go Somewhere</a>                       // Navigation

// Form Labels
<label htmlFor="email" className="sr-only">Email</label>
<input id="email" type="email" placeholder="Email" />

// Focus management
<button className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Button
</button>

// Screen reader only text
<span className="sr-only">Open menu</span>
```
