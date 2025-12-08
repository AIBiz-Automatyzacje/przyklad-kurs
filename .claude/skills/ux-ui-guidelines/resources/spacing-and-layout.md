# Spacing & Layout

Whitespace is not empty space—it's a design element.

## Table of Contents

- [Core Principles](#core-principles)
- [The 8px Grid](#the-8px-grid)
- [Spacing Scale](#spacing-scale)
- [Proximity Principle](#proximity-principle)
- [Component Spacing](#component-spacing)
- [Section Spacing](#section-spacing)
- [Responsive Spacing](#responsive-spacing)
- [Common Patterns](#common-patterns)
- [Mistakes to Avoid](#mistakes-to-avoid)

---

## Core Principles

### 1. Whitespace Creates Hierarchy

More space around something = more important.

```tsx
// Important element with breathing room
<section className="py-24">
  <h1>Emphasized by space</h1>
</section>

// Regular element with less space
<section className="py-8">
  <h2>Less emphasized</h2>
</section>
```

### 2. Proximity Creates Relationships

Related items should be closer together than unrelated items.

```tsx
// Good - Title close to its content
<div className="space-y-8">
  <div>
    <h3 className="mb-2">Section One</h3>  {/* Close to content */}
    <p>Content for section one...</p>
  </div>
  <div>
    <h3 className="mb-2">Section Two</h3>  {/* Close to content */}
    <p>Content for section two...</p>
  </div>
</div>
```

### 3. Consistency Creates Rhythm

Use the same spacing values throughout your design.

---

## The 8px Grid

All spacing should be multiples of 8px for visual harmony.

### Why 8px?

- Divisible by 2 and 4 (works at half sizes)
- Works well with common screen sizes
- Creates visual consistency
- Easy math: 8, 16, 24, 32, 40, 48...

### Tailwind Spacing to Pixels

| Tailwind | Pixels | Use For |
|----------|--------|---------|
| `1` | 4px | Micro spacing |
| `2` | 8px | Tight spacing |
| `3` | 12px | Small gaps |
| `4` | 16px | Standard small |
| `5` | 20px | Medium |
| `6` | 24px | Standard |
| `8` | 32px | Large |
| `10` | 40px | Extra large |
| `12` | 48px | Section gaps |
| `16` | 64px | Large sections |
| `20` | 80px | Hero spacing |
| `24` | 96px | Major sections |

---

## Spacing Scale

### Micro (4-8px)

For tight, related elements:

```tsx
// Icon + text
<button className="flex items-center gap-2">
  <Icon />
  <span>Label</span>
</button>

// Inline elements
<div className="flex items-center gap-1">
  <Badge />
  <Badge />
</div>
```

### Small (12-16px)

For related content within a component:

```tsx
// Card internal spacing
<div className="p-4">
  <h3 className="mb-3">Title</h3>
  <p className="mb-4">Description</p>
  <button>Action</button>
</div>

// Form fields
<div className="space-y-4">
  <Input label="Name" />
  <Input label="Email" />
</div>
```

### Medium (24-32px)

For separating distinct sections within a component:

```tsx
// Card with sections
<div className="p-6">
  <header className="mb-6">
    <h3>Card Title</h3>
  </header>
  <main className="mb-6">
    <p>Content</p>
  </main>
  <footer>
    <button>Action</button>
  </footer>
</div>
```

### Large (48-64px)

For separating major sections:

```tsx
// Page sections
<section className="py-16">
  <h2>Features</h2>
  {/* content */}
</section>

<section className="py-16">
  <h2>Pricing</h2>
  {/* content */}
</section>
```

### Extra Large (80-96px+)

For hero sections and major divisions:

```tsx
// Hero section
<section className="py-24 md:py-32">
  <h1>Hero Content</h1>
</section>
```

---

## Proximity Principle

### Related = Close, Unrelated = Far

```tsx
// ✅ Good - Clear grouping
<article className="space-y-8">     {/* Large gap between articles */}
  <div>
    <h3 className="mb-2">Title A</h3>  {/* Small gap to content */}
    <p>Content for A</p>
  </div>
  <div>
    <h3 className="mb-2">Title B</h3>
    <p>Content for B</p>
  </div>
</article>

// ❌ Bad - No clear grouping
<article className="space-y-4">     {/* Same gap everywhere */}
  <h3>Title A</h3>
  <p>Content for A</p>
  <h3>Title B</h3>                   {/* Looks like it belongs to A */}
  <p>Content for B</p>
</article>
```

### Visual Example

```
Title A          ← 8px gap (close = related)
Content A

                 ← 32px gap (far = new group)

Title B          ← 8px gap (close = related)
Content B
```

---

## Component Spacing

### Cards

```tsx
// Standard card
<div className="bg-white rounded-lg p-6 shadow-sm">
  {/* 24px internal padding */}
  <h3 className="text-lg font-semibold mb-2">Title</h3>
  <p className="text-gray-600 mb-4">Description</p>
  <button>Action</button>
</div>

// Compact card
<div className="bg-white rounded-lg p-4 shadow-sm">
  {/* 16px internal padding */}
  <h4 className="font-medium mb-1">Title</h4>
  <p className="text-sm text-gray-600">Description</p>
</div>

// Spacious card
<div className="bg-white rounded-lg p-8 shadow-sm">
  {/* 32px internal padding */}
  <h3 className="text-xl font-semibold mb-4">Title</h3>
  <p className="text-gray-600 mb-6">Description</p>
  <button>Action</button>
</div>
```

### Buttons

```tsx
// Standard button
<button className="px-4 py-2">Button</button>

// Large button
<button className="px-6 py-3">Large Button</button>

// Small button
<button className="px-3 py-1.5 text-sm">Small</button>

// Icon button
<button className="p-2">
  <Icon className="w-5 h-5" />
</button>
```

### Forms

```tsx
// Form field spacing
<form className="space-y-6">           {/* 24px between fields */}
  <div>
    <label className="block mb-2">Name</label>
    <input className="w-full px-3 py-2" />
  </div>
  <div>
    <label className="block mb-2">Email</label>
    <input className="w-full px-3 py-2" />
  </div>
  <button className="mt-2">Submit</button>  {/* Extra space before submit */}
</form>
```

### Lists

```tsx
// Tight list
<ul className="space-y-1">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

// Standard list
<ul className="space-y-2">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

// Spacious list (with descriptions)
<ul className="space-y-4">
  <li>
    <h4>Item 1</h4>
    <p>Description</p>
  </li>
  <li>
    <h4>Item 2</h4>
    <p>Description</p>
  </li>
</ul>
```

---

## Section Spacing

### Page Sections

```tsx
// Standard section
<section className="py-16 md:py-20">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8">Section Title</h2>
    {/* Content */}
  </div>
</section>

// Hero section (more space)
<section className="py-20 md:py-32">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h1>Hero</h1>
  </div>
</section>

// Compact section
<section className="py-12">
  <div className="max-w-6xl mx-auto px-4">
    {/* Content */}
  </div>
</section>
```

### Section Headers

```tsx
// Section header with content below
<section className="py-16">
  <div className="text-center mb-12">        {/* Header group */}
    <h2 className="text-3xl font-bold mb-4">Features</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Description of this section.
    </p>
  </div>
  <div className="grid md:grid-cols-3 gap-8">  {/* Content */}
    {/* Cards */}
  </div>
</section>
```

---

## Responsive Spacing

### Scale Up on Larger Screens

```tsx
// Padding increases with screen size
<section className="py-12 md:py-16 lg:py-24">

// Gaps increase with screen size
<div className="grid gap-4 md:gap-6 lg:gap-8">

// Margins increase with screen size
<h2 className="mb-6 md:mb-8 lg:mb-12">
```

### Container Padding

```tsx
// Standard responsive container
<div className="px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>

// With max-width
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Centered content with consistent padding */}
</div>
```

### Common Responsive Patterns

```tsx
// Hero section
<section className="
  py-16 md:py-24 lg:py-32
  px-4 sm:px-6 lg:px-8
">

// Card grid
<div className="
  grid
  grid-cols-1 md:grid-cols-2 lg:grid-cols-3
  gap-4 md:gap-6 lg:gap-8
">

// Content section
<div className="
  space-y-4 md:space-y-6
">
```

---

## Common Patterns

### Feature Grid

```tsx
<section className="py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-4">
    {/* Section header */}
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl font-bold mb-4">Features</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Everything you need to succeed.
      </p>
    </div>

    {/* Grid with consistent gaps */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map(feature => (
        <div key={feature.id} className="p-6 bg-white rounded-lg">
          <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4" />
          <h3 className="font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600 text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

### Two-Column Layout

```tsx
<section className="py-16">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Content column */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Headline</h2>
        <p className="text-gray-600 leading-relaxed">
          Description paragraph...
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg">
          CTA
        </button>
      </div>

      {/* Image column */}
      <div>
        <img src="..." alt="..." className="rounded-lg" />
      </div>
    </div>
  </div>
</section>
```

### Stacked Sections

```tsx
<main>
  {/* Hero - largest spacing */}
  <section className="py-24 md:py-32">
    {/* Hero content */}
  </section>

  {/* Features - standard spacing */}
  <section className="py-16 md:py-24">
    {/* Features content */}
  </section>

  {/* Testimonials - standard spacing */}
  <section className="py-16 md:py-24 bg-gray-50">
    {/* Testimonials content */}
  </section>

  {/* CTA - emphasized spacing */}
  <section className="py-20 md:py-28">
    {/* CTA content */}
  </section>
</main>
```

---

## Mistakes to Avoid

### ❌ Everything Cramped

```tsx
// Bad - No breathing room
<div className="p-2">
  <h3 className="mb-1">Title</h3>
  <p className="mb-1">Description</p>
  <button>Action</button>
</div>

// Good - Comfortable spacing
<div className="p-6">
  <h3 className="mb-2">Title</h3>
  <p className="mb-4">Description</p>
  <button>Action</button>
</div>
```

### ❌ Inconsistent Spacing

```tsx
// Bad - Random values
<div className="mb-3">...</div>
<div className="mb-7">...</div>
<div className="mb-2">...</div>

// Good - Consistent scale
<div className="mb-4">...</div>
<div className="mb-4">...</div>
<div className="mb-4">...</div>
```

### ❌ Same Gap Everywhere

```tsx
// Bad - No visual grouping
<div className="space-y-4">
  <h2>Section A</h2>
  <p>Content A</p>
  <h2>Section B</h2>  {/* Looks like it belongs to A */}
  <p>Content B</p>
</div>

// Good - Clear grouping
<div className="space-y-8">
  <div className="space-y-2">
    <h2>Section A</h2>
    <p>Content A</p>
  </div>
  <div className="space-y-2">
    <h2>Section B</h2>
    <p>Content B</p>
  </div>
</div>
```

### ❌ Edge-to-Edge on Mobile

```tsx
// Bad - No padding
<div className="w-full">
  Text touching screen edges
</div>

// Good - Safe padding
<div className="px-4">
  Text with comfortable margins
</div>
```

---

## Summary

| Context | Spacing | Tailwind |
|---------|---------|----------|
| Icon + text | 8px | `gap-2` |
| Form fields | 16-24px | `space-y-4` to `space-y-6` |
| Card internal | 24px | `p-6` |
| Grid items | 24-32px | `gap-6` to `gap-8` |
| Section header to content | 48px | `mb-12` |
| Between sections | 64-96px | `py-16` to `py-24` |
| Hero section | 96-128px | `py-24` to `py-32` |

**Key rules:**
1. Use 8px grid (multiples of 8)
2. Related items = close, unrelated = far
3. More space = more importance
4. Scale up spacing on larger screens

---

## See Also

- [visual-hierarchy.md](visual-hierarchy.md) - Space for emphasis
- [typography.md](typography.md) - Text spacing
- [mobile-ux.md](mobile-ux.md) - Mobile spacing considerations
