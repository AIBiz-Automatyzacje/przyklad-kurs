# Accessibility (a11y)

Design for everyone, including users with disabilities.

## Table of Contents

- [Why Accessibility Matters](#why-accessibility-matters)
- [WCAG Levels](#wcag-levels)
- [Core Requirements](#core-requirements)
- [Semantic HTML](#semantic-html)
- [Keyboard Navigation](#keyboard-navigation)
- [Screen Readers](#screen-readers)
- [Color & Contrast](#color--contrast)
- [Forms](#forms)
- [Images & Media](#images--media)
- [Motion & Animation](#motion--animation)
- [Testing](#testing)
- [Tailwind Utilities](#tailwind-utilities)

---

## Why Accessibility Matters

- **15% of world population** has some form of disability
- **Legal requirement** in many countries (ADA, EAA)
- **Better SEO** - semantic HTML helps search engines
- **Better UX for everyone** - curb cut effect
- **Larger market** - accessible = more customers

---

## WCAG Levels

| Level | Description | Target |
|-------|-------------|--------|
| **A** | Minimum accessibility | Basic compliance |
| **AA** | Standard accessibility | **Recommended target** |
| **AAA** | Enhanced accessibility | Specialized needs |

**Focus on WCAG 2.1 Level AA** for most projects.

---

## Core Requirements

### The POUR Principles

| Principle | Meaning | Examples |
|-----------|---------|----------|
| **Perceivable** | Users can perceive content | Alt text, captions, contrast |
| **Operable** | Users can navigate/interact | Keyboard access, no time limits |
| **Understandable** | Users can understand | Clear language, predictable UI |
| **Robust** | Works with assistive tech | Semantic HTML, ARIA |

---

## Semantic HTML

**Use correct HTML elements for their intended purpose.**

### Document Structure

```tsx
// ✅ Semantic structure
<header>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Page Title</h1>
    <section>
      <h2>Section Title</h2>
      <p>Content...</p>
    </section>
  </article>
</main>

<footer>
  <nav aria-label="Footer navigation">...</nav>
</footer>
```

### Heading Hierarchy

```tsx
// ✅ Correct - Sequential, no skipping
<h1>Page Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>
  <h2>Another Section</h2>

// ❌ Wrong - Skipped H2
<h1>Page Title</h1>
  <h3>Section</h3>  {/* Skipped H2! */}

// ❌ Wrong - Multiple H1s
<h1>Title One</h1>
<h1>Title Two</h1>  {/* Only one H1 per page */}
```

### Landmarks

```tsx
// Landmark roles (implicit in semantic HTML)
<header>    {/* role="banner" */}
<nav>       {/* role="navigation" */}
<main>      {/* role="main" */}
<aside>     {/* role="complementary" */}
<footer>    {/* role="contentinfo" */}
<section>   {/* role="region" when labeled */}
<article>   {/* role="article" */}
```

---

## Keyboard Navigation

### Tab Order

Interactive elements should be reachable via Tab key in logical order.

```tsx
// ✅ Natural tab order (follows DOM order)
<nav>
  <a href="/">Home</a>      {/* Tab 1 */}
  <a href="/about">About</a> {/* Tab 2 */}
</nav>
<main>
  <button>Action</button>    {/* Tab 3 */}
  <input type="text" />      {/* Tab 4 */}
</main>

// ❌ Never use positive tabindex
<button tabIndex={5}>Don't do this</button>
```

### Focus Visibility

```tsx
// ✅ Visible focus indicator
<button className="
  focus:outline-none
  focus:ring-2
  focus:ring-blue-500
  focus:ring-offset-2
">
  Accessible Button
</button>

// ❌ Never remove focus without replacement
<button className="focus:outline-none">
  Inaccessible
</button>
```

### Skip Links

```tsx
// Add skip link as first focusable element
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:rounded"
>
  Skip to main content
</a>

<header>...</header>

<main id="main-content">
  ...
</main>
```

### Keyboard Patterns

| Element | Expected Keyboard Behavior |
|---------|---------------------------|
| Button | Enter/Space to activate |
| Link | Enter to activate |
| Checkbox | Space to toggle |
| Radio | Arrow keys to move, Space to select |
| Tab panel | Arrow keys to navigate tabs |
| Menu | Arrow keys to navigate, Enter to select, Escape to close |
| Modal | Tab trapped inside, Escape to close |

---

## Screen Readers

### ARIA Labels

```tsx
// Label for icon-only buttons
<button aria-label="Close dialog">
  <XIcon />
</button>

// Label for sections
<nav aria-label="Main navigation">
  ...
</nav>

<nav aria-label="Footer links">
  ...
</nav>

// Describe element with another element
<input
  type="password"
  aria-describedby="password-hint"
/>
<p id="password-hint">Minimum 8 characters</p>
```

### Live Regions

```tsx
// Announce dynamic content changes
<div aria-live="polite" aria-atomic="true">
  {statusMessage}
</div>

// For urgent announcements
<div aria-live="assertive">
  {errorMessage}
</div>

// For form validation
<div role="alert">
  Please fix the errors above.
</div>
```

### Hidden Content

```tsx
// Hide from screen readers (decorative)
<img src="decorative.svg" alt="" aria-hidden="true" />

// Visually hidden but announced
<span className="sr-only">
  (opens in new tab)
</span>

// Hide from everyone
<div hidden>Not rendered</div>
```

---

## Color & Contrast

### Contrast Requirements

| Text Type | WCAG AA | WCAG AAA |
|-----------|---------|----------|
| Normal text (<18px) | 4.5:1 | 7:1 |
| Large text (18px+ bold, 24px+ regular) | 3:1 | 4.5:1 |
| UI components & graphics | 3:1 | - |

### Checking Contrast

Tools:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Chrome DevTools (Inspect → computed → contrast ratio)
- Figma plugins

### Color-Only Information

```tsx
// ❌ Wrong - Color is only indicator
<span className="text-red-500">Error</span>
<span className="text-green-500">Success</span>

// ✅ Correct - Icon + color + text
<div className="flex items-center gap-2 text-red-600">
  <ErrorIcon />
  <span>Error: Please fix this field</span>
</div>

<div className="flex items-center gap-2 text-green-600">
  <CheckIcon />
  <span>Success: Changes saved</span>
</div>
```

### Safe Color Combinations

```tsx
// Good contrast on white background
<p className="text-gray-900">Primary text (21:1)</p>
<p className="text-gray-700">Secondary text (8.59:1)</p>
<p className="text-gray-600">Tertiary text (5.74:1)</p>

// ❌ Poor contrast
<p className="text-gray-400">Too light (2.58:1)</p>
```

---

## Forms

### Labels

```tsx
// ✅ Proper label association
<div>
  <label htmlFor="email" className="block text-sm font-medium mb-1">
    Email address
  </label>
  <input
    id="email"
    type="email"
    className="..."
  />
</div>

// ❌ Wrong - Placeholder as only label
<input type="email" placeholder="Email address" />

// ❌ Wrong - No association
<label>Email</label>
<input type="email" />
```

### Required Fields

```tsx
<label htmlFor="name">
  Name
  <span className="text-red-500 ml-1" aria-hidden="true">*</span>
  <span className="sr-only">(required)</span>
</label>
<input
  id="name"
  required
  aria-required="true"
/>
```

### Error Messages

```tsx
<div>
  <label htmlFor="email">Email</label>
  <input
    id="email"
    type="email"
    aria-invalid={hasError}
    aria-describedby={hasError ? "email-error" : undefined}
    className={hasError ? "border-red-500" : "border-gray-300"}
  />
  {hasError && (
    <p id="email-error" className="text-red-600 text-sm mt-1" role="alert">
      Please enter a valid email address
    </p>
  )}
</div>
```

### Input Types

```tsx
// Use correct input types for mobile keyboards
<input type="email" />     {/* Email keyboard */}
<input type="tel" />       {/* Phone keyboard */}
<input type="url" />       {/* URL keyboard */}
<input type="number" />    {/* Number keyboard */}
<input type="search" />    {/* Search with clear button */}
<input type="date" />      {/* Native date picker */}
```

### Autocomplete

```tsx
// Help password managers and autofill
<input type="email" autoComplete="email" />
<input type="text" autoComplete="name" />
<input type="text" autoComplete="given-name" />
<input type="text" autoComplete="family-name" />
<input type="tel" autoComplete="tel" />
<input type="text" autoComplete="street-address" />
<input type="text" autoComplete="postal-code" />
<input type="password" autoComplete="current-password" />
<input type="password" autoComplete="new-password" />
```

---

## Images & Media

### Alt Text

```tsx
// Informative image - describe content
<img src="chart.png" alt="Sales increased 25% from Q1 to Q2 2024" />

// Decorative image - empty alt
<img src="decorative-border.svg" alt="" />

// Complex image - link to description
<figure>
  <img src="complex-diagram.png" alt="System architecture diagram" />
  <figcaption>
    <a href="#diagram-description">View detailed description</a>
  </figcaption>
</figure>

// Image as link - describe destination
<a href="/profile">
  <img src="avatar.jpg" alt="View your profile" />
</a>
```

### Video & Audio

```tsx
// Video with captions
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <track kind="captions" src="captions.vtt" srcLang="en" label="English" />
</video>

// Audio with transcript
<audio controls>
  <source src="podcast.mp3" type="audio/mpeg" />
</audio>
<a href="transcript.txt">Read transcript</a>
```

---

## Motion & Animation

### Respect User Preferences

```tsx
// CSS approach
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

// Tailwind approach
<div className="
  transition-transform duration-300
  motion-reduce:transition-none
  motion-reduce:transform-none
">
  Animated content
</div>
```

### Safe Animation Patterns

```tsx
// ✅ Safe - Short duration, subtle
<div className="transition-opacity duration-200 ease-out">

// ✅ Safe - Transform only (GPU accelerated)
<div className="transition-transform duration-300">

// ⚠️ Caution - Can cause motion sickness
<div className="animate-bounce">  {/* Use sparingly */}
<div className="animate-spin">    {/* Loading spinners OK */}
```

---

## Testing

### Quick Manual Tests

1. **Keyboard only:** Navigate entire page with Tab, Enter, Space, Arrow keys
2. **Screen reader:** VoiceOver (Mac) or NVDA (Windows)
3. **Zoom:** Browser zoom to 200% - content should reflow
4. **Color:** View in grayscale - still understandable?
5. **Motion:** Enable "reduce motion" in OS settings

### Playwright Accessibility Snapshot

```
Use mcp__playwright__browser_snapshot
```

Check output for:
- Heading hierarchy (H1, H2, H3...)
- Form labels
- Button labels
- Image alt text
- ARIA roles

### Automated Tools

- axe DevTools (browser extension)
- Lighthouse (Chrome DevTools)
- WAVE (browser extension)
- pa11y (CI/CD)

---

## Tailwind Utilities

### Focus States

```tsx
// Standard focus ring
className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"

// Focus within (parent when child focused)
className="focus-within:ring-2 focus-within:ring-blue-500"

// Focus visible (keyboard only)
className="focus-visible:ring-2 focus-visible:ring-blue-500"
```

### Screen Reader Only

```tsx
// Visually hidden but accessible
className="sr-only"

// Visible when focused (skip link)
className="sr-only focus:not-sr-only"
```

### Reduced Motion

```tsx
// Respect prefers-reduced-motion
className="motion-reduce:transition-none motion-reduce:transform-none"

// Safe animations only
className="motion-safe:animate-pulse"
```

### Touch Targets

```tsx
// Minimum touch target size
className="min-h-[44px] min-w-[44px]"

// Padding to increase touch area
className="p-3"  {/* 12px padding on 20px icon = 44px total */}
```

---

## Quick Checklist

- [ ] **Headings:** H1 → H2 → H3, no skipping
- [ ] **Labels:** All form inputs have visible labels
- [ ] **Alt text:** All images have appropriate alt text
- [ ] **Contrast:** 4.5:1 minimum for text
- [ ] **Focus:** Visible focus indicator on all interactive elements
- [ ] **Keyboard:** All functionality available via keyboard
- [ ] **Touch targets:** Minimum 44x44px
- [ ] **Color:** Not the only indicator of meaning
- [ ] **Motion:** Respects prefers-reduced-motion
- [ ] **Errors:** Clear messages with suggestions

---

## See Also

- [forms-ux.md](forms-ux.md) - Accessible form patterns
- [color-and-contrast.md](color-and-contrast.md) - Color accessibility
- [visual-audit-workflow.md](visual-audit-workflow.md) - Testing with Playwright
