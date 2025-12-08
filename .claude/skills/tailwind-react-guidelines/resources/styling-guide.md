# Styling Guide - Tailwind CSS

## Philosophy

Tailwind CSS uses utility-first approach - compose styles from small, single-purpose classes.

---

## Spacing Reference

| Class | Value | Use Case |
|-------|-------|----------|
| `p-1` | 4px | Tight padding |
| `p-2` | 8px | Small elements |
| `p-4` | 16px | Standard padding |
| `p-6` | 24px | Cards, sections |
| `p-8` | 32px | Large sections |
| `px-*` | horizontal | Left + right |
| `py-*` | vertical | Top + bottom |

---

## Colors

### Text Colors
```tsx
text-gray-900    // Primary text
text-gray-700    // Secondary text
text-gray-500    // Muted text
text-white       // On dark backgrounds
text-blue-500    // Links, accents
text-red-500     // Errors
text-green-500   // Success
```

### Background Colors
```tsx
bg-white         // Cards, surfaces
bg-gray-50       // Page background
bg-gray-100      // Subtle backgrounds
bg-gray-900      // Dark sections
bg-blue-500      // Primary buttons
bg-blue-600      // Primary hover
```

---

## Typography

### Text Sizes
```tsx
text-xs    // 12px - Captions
text-sm    // 14px - Small text
text-base  // 16px - Body
text-lg    // 18px - Large body
text-xl    // 20px - Small headings
text-2xl   // 24px - H3
text-3xl   // 30px - H2
text-4xl   // 36px - H1
text-5xl   // 48px - Hero
text-6xl   // 60px - Large hero
```

### Font Weight
```tsx
font-normal    // 400
font-medium    // 500
font-semibold  // 600
font-bold      // 700
```

---

## Layout Patterns

### Container
```tsx
// Centered container with responsive padding
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>

// Full-width with max
<div className="w-full max-w-4xl mx-auto">
```

### Flexbox
```tsx
// Center everything
<div className="flex items-center justify-center">

// Space between
<div className="flex items-center justify-between">

// Column layout
<div className="flex flex-col gap-4">

// Wrap on mobile
<div className="flex flex-wrap gap-4">
```

### Grid
```tsx
// Responsive columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Auto-fit
<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
```

---

## Common Components

### Button Variants

```tsx
// Primary
<button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
  Primary
</button>

// Secondary
<button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors">
  Secondary
</button>

// Outline
<button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 font-medium py-2 px-4 rounded-lg transition-colors">
  Outline
</button>

// Ghost
<button className="text-gray-600 hover:bg-gray-100 font-medium py-2 px-4 rounded-lg transition-colors">
  Ghost
</button>
```

### Card
```tsx
<div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
  <h3 className="text-lg font-semibold text-gray-900 mb-2">
    Card Title
  </h3>
  <p className="text-gray-600">
    Card content goes here.
  </p>
</div>
```

### Input
```tsx
<input
  type="text"
  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  placeholder="Enter text..."
/>
```

---

## Responsive Design

### Mobile-First Approach

Always start with mobile styles, then add breakpoint modifiers:

```tsx
// Mobile: full width, stack vertically
// Tablet: 2 columns
// Desktop: 3 columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Mobile: smaller text
// Desktop: larger text
<h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
  Heading
</h1>

// Mobile: stack
// Desktop: row
<div className="flex flex-col md:flex-row gap-4">
```

### Breakpoints

| Prefix | Min Width | Typical Devices |
|--------|-----------|-----------------|
| (none) | 0px | Mobile portrait |
| `sm:` | 640px | Mobile landscape |
| `md:` | 768px | Tablet |
| `lg:` | 1024px | Laptop |
| `xl:` | 1280px | Desktop |
| `2xl:` | 1536px | Large desktop |

---

## Animations

### Built-in Transitions
```tsx
// Color transitions
<button className="bg-blue-500 hover:bg-blue-600 transition-colors duration-200">

// All transitions
<div className="hover:scale-105 transition-transform duration-300">

// Combined
<div className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
```

### Built-in Animations
```tsx
// Pulse (loading)
<div className="animate-pulse bg-gray-200 h-4 rounded">

// Spin (loading)
<svg className="animate-spin h-5 w-5">

// Bounce (attention)
<div className="animate-bounce">
```

---

## Dark Mode (Optional)

```tsx
// Toggle with class
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">

// In tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media'
}
```

---

## Best Practices

1. **Keep classes readable** - Break long class strings into multiple lines
2. **Use cn() helper** - For conditional classes
3. **Extract components** - Don't repeat long class strings
4. **Mobile-first** - Start with base styles, add breakpoints
5. **Consistent spacing** - Use Tailwind's spacing scale
6. **Color palette** - Stick to a consistent set of colors
