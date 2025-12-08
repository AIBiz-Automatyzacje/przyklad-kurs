# Color & Contrast Guide

Complete guide for using colors effectively and ensuring accessible contrast in UI design.

## Table of Contents

- [WCAG Contrast Requirements](#wcag-contrast-requirements)
- [Contrast Ratios Explained](#contrast-ratios-explained)
- [Checking Contrast](#checking-contrast)
- [Color Psychology in UI](#color-psychology-in-ui)
- [Building Color Palettes](#building-color-palettes)
- [Tailwind Color Utilities](#tailwind-color-utilities)
- [Common Mistakes](#common-mistakes)

---

## WCAG Contrast Requirements

### Minimum Standards (Level AA)

| Element | Ratio | Example |
|---------|-------|---------|
| Normal text (< 18px) | 4.5:1 | `text-gray-700` on white |
| Large text (18px+ bold, 24px+) | 3:1 | `text-gray-600` on white |
| UI components & graphics | 3:1 | Icons, borders, focus rings |

### Enhanced Standards (Level AAA)

| Element | Ratio |
|---------|-------|
| Normal text | 7:1 |
| Large text | 4.5:1 |

**Recommendation:** Aim for AA minimum, AAA where possible.

---

## Contrast Ratios Explained

### What the Numbers Mean

- **21:1** - Maximum (black on white)
- **7:1** - AAA standard for normal text
- **4.5:1** - AA standard for normal text
- **3:1** - Minimum for large text & UI
- **1:1** - No contrast (same color)

### Quick Reference for Tailwind Grays on White

| Class | Contrast | Passes |
|-------|----------|--------|
| `text-gray-900` | 15.8:1 | AAA |
| `text-gray-800` | 11.9:1 | AAA |
| `text-gray-700` | 8.6:1 | AAA |
| `text-gray-600` | 5.7:1 | AA |
| `text-gray-500` | 4.6:1 | AA (barely) |
| `text-gray-400` | 3.0:1 | Large text only |
| `text-gray-300` | 1.9:1 | Fails |

---

## Checking Contrast

### Online Tools

1. **WebAIM Contrast Checker** - https://webaim.org/resources/contrastchecker/
2. **Coolors Contrast Checker** - https://coolors.co/contrast-checker
3. **Adobe Color** - https://color.adobe.com/create/color-contrast-analyzer

### Browser DevTools

```
Chrome DevTools:
1. Inspect element
2. Click color swatch in Styles panel
3. See "Contrast ratio" section
```

### Automated Testing

```tsx
// Using axe-core in tests
import { axe } from 'jest-axe';

test('has no accessibility violations', async () => {
  const { container } = render(<MyComponent />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

---

## Color Psychology in UI

### Semantic Colors

| Color | Meaning | Use For |
|-------|---------|---------|
| **Blue** | Trust, calm, professional | Primary actions, links |
| **Green** | Success, growth, go | Success states, confirmations |
| **Red** | Error, danger, stop | Errors, destructive actions |
| **Yellow/Orange** | Warning, attention | Warnings, alerts |
| **Gray** | Neutral, secondary | Secondary text, borders |

### Tailwind Semantic Classes

```tsx
// Success
<div className="bg-green-50 text-green-800 border border-green-200">
  Operation successful
</div>

// Error
<div className="bg-red-50 text-red-800 border border-red-200">
  Something went wrong
</div>

// Warning
<div className="bg-yellow-50 text-yellow-800 border border-yellow-200">
  Please review before continuing
</div>

// Info
<div className="bg-blue-50 text-blue-800 border border-blue-200">
  Here's some helpful information
</div>
```

---

## Building Color Palettes

### Primary Color Scale

Start with your brand color and build a scale:

```tsx
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',   // Lightest - backgrounds
          100: '#e0f2fe',  // Light backgrounds
          200: '#bae6fd',  // Borders, dividers
          300: '#7dd3fc',  // Disabled states
          400: '#38bdf8',  // Icons
          500: '#0ea5e9',  // Primary buttons
          600: '#0284c7',  // Hover states
          700: '#0369a1',  // Active states
          800: '#075985',  // Text on light
          900: '#0c4a6e',  // Headings
        }
      }
    }
  }
}
```

### Color Combinations That Work

```tsx
// Light mode
<div className="bg-white text-gray-900">
  <h1 className="text-gray-900">Heading</h1>
  <p className="text-gray-600">Body text</p>
  <span className="text-gray-500">Secondary text</span>
  <button className="bg-blue-500 text-white">Action</button>
</div>

// Dark mode
<div className="bg-gray-900 text-gray-100">
  <h1 className="text-white">Heading</h1>
  <p className="text-gray-300">Body text</p>
  <span className="text-gray-400">Secondary text</span>
  <button className="bg-blue-400 text-gray-900">Action</button>
</div>
```

---

## Tailwind Color Utilities

### Text Colors

```tsx
// Primary text (high contrast)
<p className="text-gray-900 dark:text-white">Primary</p>

// Secondary text (medium contrast)
<p className="text-gray-600 dark:text-gray-300">Secondary</p>

// Muted text (lower contrast - use sparingly)
<p className="text-gray-500 dark:text-gray-400">Muted</p>

// Colored text (ensure contrast!)
<a className="text-blue-600 hover:text-blue-800">Link</a>
```

### Background Colors

```tsx
// Page backgrounds
<div className="bg-white dark:bg-gray-900">

// Card backgrounds
<div className="bg-gray-50 dark:bg-gray-800">

// Subtle highlights
<div className="bg-blue-50 dark:bg-blue-900/20">
```

### Border Colors

```tsx
// Default borders
<div className="border border-gray-200 dark:border-gray-700">

// Subtle borders
<div className="border border-gray-100 dark:border-gray-800">

// Focus rings
<input className="focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
```

---

## Common Mistakes

### Mistake 1: Light Gray Text

```tsx
// ❌ Poor contrast
<p className="text-gray-400">Important information</p>

// ✅ Sufficient contrast
<p className="text-gray-600">Important information</p>
```

### Mistake 2: Color as Only Indicator

```tsx
// ❌ Color only
<span className="text-red-500">Error occurred</span>

// ✅ Color + icon + text
<div className="flex items-center gap-2 text-red-600">
  <ExclamationIcon className="h-5 w-5" />
  <span>Error: Please check your input</span>
</div>
```

### Mistake 3: Placeholder Contrast

```tsx
// ❌ Placeholder too light
<input placeholder="Email" className="placeholder:text-gray-300" />

// ✅ Readable placeholder
<input placeholder="Email" className="placeholder:text-gray-500" />
```

### Mistake 4: Colored Backgrounds Without Adjusting Text

```tsx
// ❌ Dark text on dark background
<div className="bg-blue-600 text-gray-700">Hard to read</div>

// ✅ Light text on dark background
<div className="bg-blue-600 text-white">Easy to read</div>
```

### Mistake 5: Ignoring Focus States

```tsx
// ❌ No visible focus
<button className="focus:outline-none">Click</button>

// ✅ Visible focus ring
<button className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Click
</button>
```

---

## Quick Reference Card

### Safe Text Colors on White

| Use Case | Class | Contrast |
|----------|-------|----------|
| Headings | `text-gray-900` | 15.8:1 |
| Body text | `text-gray-700` | 8.6:1 |
| Secondary | `text-gray-600` | 5.7:1 |
| Links | `text-blue-600` | 4.7:1 |

### Safe Text Colors on Dark (gray-900)

| Use Case | Class | Contrast |
|----------|-------|----------|
| Headings | `text-white` | 15.8:1 |
| Body text | `text-gray-200` | 11.6:1 |
| Secondary | `text-gray-300` | 9.0:1 |
| Links | `text-blue-400` | 5.4:1 |

---

## See Also

- [accessibility.md](accessibility.md) - Full accessibility guide
- [visual-hierarchy.md](visual-hierarchy.md) - Using color for emphasis
- [typography.md](typography.md) - Text styling
