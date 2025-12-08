# TypeScript Standards

## General Rules

1. **Strict mode enabled** - No implicit any
2. **Explicit return types** - On exported functions
3. **Type imports** - Use `import type` when possible
4. **No `any`** - Use `unknown` if type is truly unknown

---

## Component Props

### Basic Props Interface

```tsx
interface ButtonProps {
  /** Button label text */
  children: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Visual variant */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** Disabled state */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  className = '',
}) => {
  // ...
};
```

### Extending HTML Attributes

```tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label text */
  label?: string;
  /** Error message */
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className,
  ...props
}) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input className={className} {...props} />
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
};
```

---

## Type Imports

```tsx
// ✅ Good - type import
import type { User } from '@/types';
import type { FC, ReactNode } from 'react';

// ✅ Good - mixed import
import React, { useState } from 'react';
import type { ChangeEvent } from 'react';

// ❌ Avoid - runtime import for types only
import { User } from '@/types';  // if User is only a type
```

---

## Utility Types

### Common Patterns

```tsx
// Partial - all props optional
type PartialUser = Partial<User>;

// Required - all props required
type RequiredUser = Required<User>;

// Pick - select specific props
type UserName = Pick<User, 'firstName' | 'lastName'>;

// Omit - exclude specific props
type UserWithoutId = Omit<User, 'id'>;

// Record - object with known keys
type StatusMap = Record<'pending' | 'active' | 'done', number>;
```

### Component Props Utilities

```tsx
// Extract props from component
type ButtonProps = React.ComponentProps<typeof Button>;

// Props without children
type CardProps = React.PropsWithoutRef<CardBaseProps>;

// Props with children
type LayoutProps = React.PropsWithChildren<BaseLayoutProps>;
```

---

## Event Types

```tsx
// Form events
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value);
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

// Mouse events
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log(e.clientX, e.clientY);
};

// Keyboard events
const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter') {
    submit();
  }
};
```

---

## Type Definitions

### File Structure

```
types/
├── index.ts        # Re-exports all types
├── user.ts         # User-related types
├── api.ts          # API response types
└── common.ts       # Shared utility types
```

### Example Type File

```tsx
// types/user.ts
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
}

export interface CreateUserInput {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export type UserRole = 'admin' | 'user' | 'guest';
```

---

## Generic Components

```tsx
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
}

export function List<T>({
  items,
  renderItem,
  keyExtractor,
}: ListProps<T>): React.ReactElement {
  return (
    <ul>
      {items.map(item => (
        <li key={keyExtractor(item)}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

// Usage
<List
  items={users}
  renderItem={(user) => <span>{user.name}</span>}
  keyExtractor={(user) => user.id}
/>
```

---

## API Types

### Response Types

```tsx
interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

// Usage
async function fetchUsers(): Promise<ApiResponse<User[]>> {
  const response = await fetch('/api/users');
  return response.json();
}
```

---

## Discriminated Unions

```tsx
// State machine pattern
type LoadingState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };

// Usage
const [state, setState] = useState<LoadingState<User[]>>({ status: 'idle' });

// Type narrowing
if (state.status === 'success') {
  console.log(state.data); // TypeScript knows data exists
}
```

---

## Assertion Functions

```tsx
// Type guard
function isUser(value: unknown): value is User {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'email' in value
  );
}

// Assertion
function assertUser(value: unknown): asserts value is User {
  if (!isUser(value)) {
    throw new Error('Invalid user');
  }
}
```

---

## Best Practices

1. **Prefer `interface` for objects** - Easier to extend
2. **Use `type` for unions/intersections** - Better readability
3. **Export types from index.ts** - Clean imports
4. **Document with JSDoc** - IDE hints
5. **Avoid `any`** - Use `unknown` + type guards
6. **Use const assertions** - For literal types

```tsx
// Const assertion
const STATUSES = ['pending', 'active', 'done'] as const;
type Status = typeof STATUSES[number]; // 'pending' | 'active' | 'done'
```
