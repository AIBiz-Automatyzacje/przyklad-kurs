# Typography

Text that's easy to read, scan, and understand.

## Table of Contents

- [Core Principles](#core-principles)
- [Type Scale](#type-scale)
- [Line Height](#line-height)
- [Line Length](#line-length)
- [Font Weight](#font-weight)
- [Tailwind Typography](#tailwind-typography)
- [Common Patterns](#common-patterns)
- [Mistakes to Avoid](#mistakes-to-avoid)

---

## Core Principles

### 1. Readability First

If users can't read it easily, nothing else matters.

- **Base size:** Minimum 16px for body text
- **Contrast:** 4.5:1 minimum
- **Line height:** 1.5-1.6 for body text
- **Line length:** 45-75 characters

### 2. Clear Hierarchy

Different levels of text should look different.

- H1 is clearly larger than H2
- H2 is clearly larger than H3
- Body is clearly smaller than headings

### 3. Consistency

Same type of content = same styling.

- All H2s look the same
- All body text looks the same
- All captions look the same

---

## Type Scale

### Recommended Scale

| Element | Size (Mobile) | Size (Desktop) | Tailwind |
|---------|---------------|----------------|----------|
| H1 | 30-36px | 48-60px | `text-3xl md:text-5xl` |
| H2 | 24-28px | 30-36px | `text-2xl md:text-3xl` |
| H3 | 20-22px | 24-28px | `text-xl md:text-2xl` |
| H4 | 18-20px | 20-22px | `text-lg md:text-xl` |
| Body (lead) | 18-20px | 20-22px | `text-lg md:text-xl` |
| Body | 16px | 16-18px | `text-base` |
| Small | 14px | 14px | `text-sm` |
| Caption | 12px | 12px | `text-xs` |

### Tailwind Size Reference

| Class | Size | Use For |
|-------|------|---------|
| `text-xs` | 12px | Captions, labels |
| `text-sm` | 14px | Secondary text, metadata |
| `text-base` | 16px | Body text |
| `text-lg` | 18px | Lead paragraphs |
| `text-xl` | 20px | H4, subheadings |
| `text-2xl` | 24px | H3 |
| `text-3xl` | 30px | H2 |
| `text-4xl` | 36px | H1 (mobile) |
| `text-5xl` | 48px | H1 (desktop) |
| `text-6xl` | 60px | Hero headlines |

---

## Line Height

### Guidelines

| Text Type | Line Height | Tailwind |
|-----------|-------------|----------|
| Headings | 1.1-1.2 | `leading-tight` |
| Subheadings | 1.2-1.3 | `leading-snug` |
| Body text | 1.5-1.6 | `leading-relaxed` |
| Small text | 1.4-1.5 | `leading-normal` |

### Tailwind Line Height

| Class | Value | Use For |
|-------|-------|---------|
| `leading-none` | 1 | Single line text only |
| `leading-tight` | 1.25 | Headings |
| `leading-snug` | 1.375 | Subheadings |
| `leading-normal` | 1.5 | Small text |
| `leading-relaxed` | 1.625 | Body text |
| `leading-loose` | 2 | Sparse content |

### Examples

```tsx
// Heading - tight leading
<h1 className="text-4xl leading-tight">
  Multi-line heading that<br />
  should not have too much space
</h1>

// Body - relaxed leading
<p className="text-base leading-relaxed">
  Body text needs more space between lines for readability.
  This is especially important for longer paragraphs that
  users need to read carefully.
</p>
```

---

## Line Length

### Optimal Reading Width

**45-75 characters** per line is ideal for readability.

| Width | Characters | Tailwind |
|-------|------------|----------|
| Narrow | 45-50 | `max-w-md` |
| Optimal | 55-65 | `max-w-lg` or `max-w-xl` |
| Wide | 70-75 | `max-w-2xl` |

### The `max-w-prose` Utility

Tailwind's `max-w-prose` is optimized for readability (~65ch):

```tsx
// Perfect for articles, blog posts
<article className="max-w-prose mx-auto">
  <p className="text-base leading-relaxed">
    Content that's easy to read because the line length
    is constrained to an optimal width.
  </p>
</article>
```

### Common Widths

| Class | Width | Use For |
|-------|-------|---------|
| `max-w-xs` | 320px | Very narrow content |
| `max-w-sm` | 384px | Cards, small containers |
| `max-w-md` | 448px | Forms, narrow text |
| `max-w-lg` | 512px | Medium text blocks |
| `max-w-xl` | 576px | Wide text blocks |
| `max-w-2xl` | 672px | Content sections |
| `max-w-prose` | 65ch | Optimized for reading |

### Examples

```tsx
// ❌ Bad - Full width text
<p className="w-full">
  This text spans the entire viewport which makes it
  very hard to read because your eyes have to travel
  too far from the end of one line to the start of the next.
</p>

// ✅ Good - Constrained width
<p className="max-w-prose">
  This text is constrained to a comfortable reading width
  making it much easier to read and follow.
</p>
```

---

## Font Weight

### Weight Scale

| Weight | Value | Tailwind | Use For |
|--------|-------|----------|---------|
| Light | 300 | `font-light` | Large display text (rare) |
| Regular | 400 | `font-normal` | Body text |
| Medium | 500 | `font-medium` | Emphasis, labels |
| Semibold | 600 | `font-semibold` | Subheadings, buttons |
| Bold | 700 | `font-bold` | Headings |
| Extrabold | 800 | `font-extrabold` | Hero headlines |

### Guidelines

- **Headings:** Bold or semibold
- **Body:** Regular weight
- **Emphasis:** Medium or semibold (not bold)
- **Labels:** Medium
- **Buttons:** Medium or semibold

```tsx
// Heading hierarchy with weight
<h1 className="text-4xl font-bold">Main Heading</h1>
<h2 className="text-2xl font-semibold">Section Heading</h2>
<h3 className="text-xl font-semibold">Subsection</h3>

// Body with emphasis
<p className="font-normal">
  Regular text with <span className="font-medium">emphasized words</span>.
</p>

// Button
<button className="font-semibold">Click me</button>
```

---

## Tailwind Typography

### Complete Heading Styles

```tsx
const headingStyles = {
  h1: "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900",
  h2: "text-2xl md:text-3xl font-semibold leading-snug text-gray-900",
  h3: "text-xl md:text-2xl font-semibold text-gray-900",
  h4: "text-lg font-semibold text-gray-900",
};

// Usage
<h1 className={headingStyles.h1}>Page Title</h1>
<h2 className={headingStyles.h2}>Section Title</h2>
```

### Body Text Styles

```tsx
const bodyStyles = {
  lead: "text-lg md:text-xl text-gray-600 leading-relaxed",
  body: "text-base text-gray-700 leading-relaxed",
  small: "text-sm text-gray-500",
  caption: "text-xs text-gray-400",
};

// Usage
<p className={bodyStyles.lead}>
  Introductory paragraph that's slightly larger.
</p>
<p className={bodyStyles.body}>
  Regular body text for main content.
</p>
```

### Responsive Typography

```tsx
// Scale up on larger screens
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
  Responsive Headline
</h1>

// Different leading on different sizes
<h2 className="text-2xl leading-tight md:text-3xl md:leading-snug">
  Adaptive Subheading
</h2>
```

---

## Common Patterns

### Hero Section

```tsx
<section className="text-center max-w-4xl mx-auto px-4">
  {/* Eyebrow */}
  <p className="text-sm font-medium text-blue-600 uppercase tracking-wide mb-4">
    New Feature
  </p>

  {/* Main headline */}
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
    Build products faster
  </h1>

  {/* Subheadline */}
  <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
    The modern toolkit for creating beautiful, accessible
    interfaces that your users will love.
  </p>
</section>
```

### Article/Blog Post

```tsx
<article className="max-w-prose mx-auto px-4">
  <header className="mb-8">
    <p className="text-sm text-gray-500 mb-2">March 15, 2024</p>
    <h1 className="text-3xl font-bold mb-4">Article Title</h1>
    <p className="text-xl text-gray-600 leading-relaxed">
      Article summary or lead paragraph that hooks the reader.
    </p>
  </header>

  <div className="prose prose-lg">
    <p className="leading-relaxed">
      Body content with comfortable line height and width...
    </p>
    <h2>Section Heading</h2>
    <p className="leading-relaxed">
      More content...
    </p>
  </div>
</article>
```

### Card Content

```tsx
<div className="bg-white rounded-lg p-6">
  {/* Card title */}
  <h3 className="text-lg font-semibold mb-2">Card Title</h3>

  {/* Card description */}
  <p className="text-gray-600 text-sm leading-relaxed mb-4">
    Brief description that explains what this card is about.
  </p>

  {/* Card metadata */}
  <p className="text-xs text-gray-400">Updated 2 hours ago</p>
</div>
```

### Form Labels

```tsx
<label className="block">
  <span className="text-sm font-medium text-gray-700">
    Email address
  </span>
  <input type="email" className="mt-1 ..." />
  <span className="text-xs text-gray-500 mt-1 block">
    We'll never share your email.
  </span>
</label>
```

---

## Mistakes to Avoid

### ❌ Text Too Small

```tsx
// Bad - Too small for body text
<p className="text-xs">Main content in tiny text</p>

// Good - Readable size
<p className="text-base">Main content in readable size</p>
```

### ❌ Lines Too Long

```tsx
// Bad - Full width
<p className="w-full">Very long lines...</p>

// Good - Constrained
<p className="max-w-prose">Comfortable reading...</p>
```

### ❌ Not Enough Line Height

```tsx
// Bad - Cramped
<p className="leading-none">Multi-line text that's hard to read</p>

// Good - Breathing room
<p className="leading-relaxed">Multi-line text that's easy to read</p>
```

### ❌ Too Many Weights

```tsx
// Bad - Confusing hierarchy
<h1 className="font-light">Light</h1>
<h2 className="font-bold">Bold</h2>
<h3 className="font-extrabold">Extrabold</h3>
<p className="font-medium">Medium</p>

// Good - Consistent system
<h1 className="font-bold">Bold heading</h1>
<h2 className="font-semibold">Semibold subheading</h2>
<h3 className="font-semibold">Semibold section</h3>
<p className="font-normal">Regular body</p>
```

### ❌ All Uppercase Body Text

```tsx
// Bad - Hard to read
<p className="uppercase">THIS IS VERY HARD TO READ FOR LONGER TEXT</p>

// OK for short labels
<span className="uppercase text-xs tracking-wide">Category</span>
```

---

## Summary

| Element | Size | Weight | Leading | Width |
|---------|------|--------|---------|-------|
| H1 | 36-60px | Bold | Tight | Full |
| H2 | 24-36px | Semibold | Snug | Full |
| H3 | 20-28px | Semibold | Normal | Full |
| Body | 16-18px | Regular | Relaxed | 45-75ch |
| Small | 14px | Regular | Normal | - |
| Caption | 12px | Regular | Normal | - |

**Key rules:**
1. Body text: 16px minimum
2. Line height: 1.5+ for body text
3. Line length: 45-75 characters
4. Consistent weight hierarchy

---

## See Also

- [visual-hierarchy.md](visual-hierarchy.md) - Size for emphasis
- [accessibility.md](accessibility.md) - Contrast requirements
- [spacing-and-layout.md](spacing-and-layout.md) - Text spacing
