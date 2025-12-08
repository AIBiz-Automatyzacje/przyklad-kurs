# Visual Hierarchy

Guide user attention to what matters most through deliberate visual design.

## Table of Contents

- [Core Principle](#core-principle)
- [Hierarchy Tools](#hierarchy-tools)
- [Reading Patterns](#reading-patterns)
- [Focal Points](#focal-points)
- [Tailwind Implementation](#tailwind-implementation)
- [Common Mistakes](#common-mistakes)
- [Examples](#examples)

---

## Core Principle

**Visual hierarchy is the arrangement of elements in order of importance.**

Users should instantly understand:
1. What is the page about? (headline)
2. What are the key points? (subheadings, highlights)
3. What should I do? (call-to-action)

**Rule of thumb:** If everything is emphasized, nothing is emphasized.

---

## Hierarchy Tools

### 1. Size

Larger elements attract more attention.

| Element | Recommended Size |
|---------|-----------------|
| Hero headline | 48-72px |
| Section headline | 28-36px |
| Subheadline | 20-24px |
| Body text | 16-18px |
| Caption/small | 12-14px |

```tsx
// Clear size hierarchy
<h1 className="text-5xl font-bold">Main Headline</h1>
<h2 className="text-2xl font-semibold">Section Title</h2>
<p className="text-base">Body content</p>
<span className="text-sm text-gray-500">Caption</span>
```

---

### 2. Weight

Bold text stands out from regular text.

```tsx
// Weight hierarchy
<h1 className="font-bold">Bold headline</h1>
<h2 className="font-semibold">Semi-bold subhead</h2>
<p className="font-normal">Regular body</p>
<span className="font-light">Light caption</span>
```

**Use sparingly:** Too much bold reduces its effect.

---

### 3. Color

Contrast draws attention. Muted colors recede.

```tsx
// Color hierarchy
<h1 className="text-gray-900">Primary content</h1>
<p className="text-gray-600">Secondary content</p>
<span className="text-gray-400">Tertiary content</span>

// Accent for emphasis
<button className="bg-blue-500 text-white">Primary CTA</button>
<button className="text-blue-500">Secondary action</button>
```

**Primary colors** = Important actions
**Muted colors** = Supporting content

---

### 4. Position

Users scan in predictable patterns (F-pattern, Z-pattern).

**Above the fold:** Most important content
**Top-left:** Starting point for reading
**Center:** Natural focal point

```tsx
// Position for emphasis
<header className="mb-12">
  {/* Most important - top */}
  <h1>Headline first</h1>
</header>

<main>
  {/* Key content - center */}
</main>

<footer>
  {/* Least important - bottom */}
</footer>
```

---

### 5. Whitespace

Isolation creates emphasis. Surrounded by space = important.

```tsx
// Whitespace for emphasis
<section className="py-24">  {/* Large vertical padding */}
  <h2 className="mb-8">Headline with room to breathe</h2>
  <p className="mb-12">Content with generous spacing</p>
  <button>CTA stands out</button>
</section>

// vs Cramped (no emphasis)
<section className="py-4">
  <h2 className="mb-2">Cramped headline</h2>
  <p className="mb-2">Tight content</p>
  <button>Lost CTA</button>
</section>
```

---

### 6. Visual Treatment

Special styling draws attention.

```tsx
// Visual treatments for emphasis
<div className="bg-blue-50 border-l-4 border-blue-500 p-4">
  Important callout
</div>

<span className="bg-yellow-100 px-1 rounded">Highlighted text</span>

<div className="shadow-lg rounded-lg p-6">
  Elevated card (more important)
</div>

<div className="border rounded-lg p-6">
  Regular card (less important)
</div>
```

---

## Reading Patterns

### F-Pattern

Users scan in F-shape on text-heavy pages.

```
████████████████████
████████████████████
██████████
██████████████████
██████████████████
██████
```

**Optimize for F-pattern:**
- Put key info in first two paragraphs
- Start paragraphs with important words
- Use headings and subheadings
- Break up long text blocks

### Z-Pattern

Users scan in Z-shape on visual/minimal pages.

```
████████████████████
          ↘
████████████████████
```

**Optimize for Z-pattern:**
- Logo/brand top-left
- Navigation top-right
- Hero content center-left
- CTA center-right or center

```tsx
// Z-pattern layout
<header className="flex justify-between items-center">
  <Logo />              {/* Top-left: Start */}
  <Navigation />        {/* Top-right: Second stop */}
</header>

<main className="text-center">
  <h1>Headline</h1>     {/* Center: Focus */}
  <Button>CTA</Button>  {/* Center: End point */}
</main>
```

---

## Focal Points

**Every screen should have ONE primary focal point.**

### Creating a Focal Point

1. **Make it larger** than surrounding elements
2. **Use contrasting color** (bright on muted, dark on light)
3. **Isolate with whitespace** around it
4. **Position strategically** (center, top-left)

### Hierarchy of Elements

```
1. Primary Focal Point (ONE only)
   └── Hero headline or main CTA

2. Secondary Elements (2-4)
   └── Subheadlines, key features, supporting CTAs

3. Tertiary Elements (many)
   └── Body text, navigation, footer links
```

### Example: Landing Page

```tsx
<section className="min-h-screen flex items-center justify-center">
  <div className="text-center max-w-3xl">
    {/* PRIMARY - Largest, boldest, center */}
    <h1 className="text-5xl md:text-6xl font-bold mb-6">
      Ship products faster
    </h1>

    {/* SECONDARY - Smaller, lighter */}
    <p className="text-xl text-gray-600 mb-8">
      Build beautiful interfaces in minutes, not months.
    </p>

    {/* PRIMARY CTA - High contrast, isolated */}
    <button className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold px-8 py-4 rounded-lg">
      Get Started Free
    </button>

    {/* TERTIARY - Smallest, muted */}
    <p className="mt-4 text-sm text-gray-500">
      No credit card required
    </p>
  </div>
</section>
```

---

## Tailwind Implementation

### Text Hierarchy Scale

```tsx
// Complete text hierarchy
const textHierarchy = {
  // Headlines
  h1: "text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight",
  h2: "text-2xl md:text-3xl font-semibold text-gray-900 leading-snug",
  h3: "text-xl md:text-2xl font-semibold text-gray-900",
  h4: "text-lg font-semibold text-gray-900",

  // Body
  lead: "text-xl text-gray-600 leading-relaxed",
  body: "text-base text-gray-700 leading-relaxed",
  small: "text-sm text-gray-500",

  // UI
  label: "text-sm font-medium text-gray-700",
  caption: "text-xs text-gray-500",
};
```

### Button Hierarchy

```tsx
// Button hierarchy by importance
<button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold">
  Primary Action
</button>

<button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium">
  Secondary Action
</button>

<button className="text-blue-500 hover:text-blue-600 font-medium">
  Tertiary Action
</button>

<button className="text-gray-500 hover:text-gray-700 text-sm">
  Minor Action
</button>
```

### Card Hierarchy

```tsx
// Card hierarchy by elevation
<div className="bg-white shadow-xl rounded-2xl p-8">
  Featured/Primary Card
</div>

<div className="bg-white shadow-md rounded-lg p-6">
  Standard Card
</div>

<div className="bg-gray-50 rounded-lg p-4">
  Subtle/Background Card
</div>

<div className="border border-gray-200 rounded-lg p-4">
  Minimal Card
</div>
```

---

## Common Mistakes

### ❌ Everything is Important

```tsx
// Bad - No hierarchy
<div>
  <h1 className="text-2xl font-bold text-blue-500">Title</h1>
  <h2 className="text-2xl font-bold text-blue-500">Subtitle</h2>
  <p className="text-xl font-bold">Body text is also bold!</p>
  <button className="text-xl font-bold text-blue-500">CTA</button>
</div>
```

**Fix:** Vary size, weight, and color.

---

### ❌ Multiple Focal Points

```tsx
// Bad - Competing for attention
<div className="flex gap-4">
  <button className="bg-red-500 text-white text-xl px-8 py-4">BUY NOW</button>
  <button className="bg-green-500 text-white text-xl px-8 py-4">SUBSCRIBE</button>
  <button className="bg-blue-500 text-white text-xl px-8 py-4">LEARN MORE</button>
</div>
```

**Fix:** Choose ONE primary action.

```tsx
// Good - Clear primary
<div className="flex gap-4 items-center">
  <button className="bg-blue-500 text-white text-lg px-8 py-4 rounded-lg">
    Get Started
  </button>
  <button className="text-gray-600 hover:text-gray-900">
    Learn more
  </button>
</div>
```

---

### ❌ Important Content Below Fold

```tsx
// Bad - CTA buried
<section className="min-h-screen">
  <img className="w-full h-[80vh]" />  {/* Huge image */}
</section>
<section>
  <h1>Finally, the headline!</h1>  {/* User has to scroll */}
  <button>CTA down here</button>
</section>
```

**Fix:** Key content above the fold.

---

### ❌ No Breathing Room

```tsx
// Bad - Cramped
<div className="p-2">
  <h1 className="mb-1">Headline</h1>
  <p className="mb-1">Text</p>
  <button>CTA</button>
</div>
```

**Fix:** Generous spacing around important elements.

```tsx
// Good - Space to breathe
<div className="p-8">
  <h1 className="mb-4">Headline</h1>
  <p className="mb-8">Text</p>
  <button>CTA</button>
</div>
```

---

## Examples

### Hero Section

```tsx
<section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-4">
  <div className="max-w-4xl text-center">
    {/* Eyebrow - Tertiary */}
    <p className="text-blue-400 font-medium mb-4 tracking-wide uppercase text-sm">
      Introducing v2.0
    </p>

    {/* Headline - Primary focal point */}
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
      Build products users love
    </h1>

    {/* Subheadline - Secondary */}
    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
      The modern toolkit for creating beautiful, accessible
      interfaces that convert.
    </p>

    {/* CTA Group */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {/* Primary CTA */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors">
        Start Free Trial
      </button>

      {/* Secondary CTA */}
      <button className="border border-gray-600 text-white hover:bg-gray-800 font-medium px-8 py-4 rounded-lg text-lg transition-colors">
        Watch Demo
      </button>
    </div>

    {/* Trust signal - Tertiary */}
    <p className="text-gray-500 text-sm mt-6">
      Trusted by 10,000+ teams worldwide
    </p>
  </div>
</section>
```

### Feature Card Grid

```tsx
<section className="py-20 px-4">
  {/* Section heading - Secondary focal point */}
  <div className="text-center mb-16">
    <h2 className="text-3xl font-bold mb-4">Why choose us</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Everything you need to build modern applications.
    </p>
  </div>

  {/* Cards - Equal weight, no competition */}
  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {features.map(feature => (
      <div key={feature.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
        {/* Icon - Visual anchor */}
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          {feature.icon}
        </div>

        {/* Title - Card focal point */}
        <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>

        {/* Description - Supporting */}
        <p className="text-gray-600 text-sm">{feature.description}</p>
      </div>
    ))}
  </div>
</section>
```

---

## Summary

1. **One focal point** per screen/section
2. **Use all tools:** Size, weight, color, position, whitespace
3. **Respect reading patterns:** F-pattern for text, Z-pattern for visual
4. **Vary styling deliberately:** If everything is bold, nothing is bold
5. **Test with squint test:** Blur your eyes - what stands out?

---

## See Also

- [typography.md](typography.md) - Text sizing and readability
- [spacing-and-layout.md](spacing-and-layout.md) - Whitespace as design tool
- [color-and-contrast.md](color-and-contrast.md) - Color for hierarchy
