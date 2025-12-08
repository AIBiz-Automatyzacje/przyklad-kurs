# Mobile UX Guide

Complete guide for creating touch-friendly, mobile-optimized interfaces.

## Table of Contents

- [Touch Targets](#touch-targets)
- [Thumb Zones](#thumb-zones)
- [Responsive Breakpoints](#responsive-breakpoints)
- [Mobile-First Approach](#mobile-first-approach)
- [Gestures & Interactions](#gestures--interactions)
- [Mobile Navigation Patterns](#mobile-navigation-patterns)
- [Performance Considerations](#performance-considerations)
- [Common Mistakes](#common-mistakes)

---

## Touch Targets

### Minimum Size Requirements

| Standard | Minimum Size | Recommended |
|----------|--------------|-------------|
| Apple HIG | 44x44 pt | 44x44 pt |
| Material Design | 48x48 dp | 48x48 dp |
| WCAG 2.2 | 44x44 CSS px | 44x44 CSS px |

### Implementation

```tsx
// ✅ Touch-friendly button
<button className="min-h-[44px] min-w-[44px] px-4 py-2">
  Click me
</button>

// ✅ Touch-friendly icon button
<button className="h-11 w-11 flex items-center justify-center rounded-full">
  <MenuIcon className="h-6 w-6" />
</button>

// ✅ Touch-friendly link
<a href="#" className="inline-block py-3 px-4">
  Learn more
</a>

// ❌ Too small
<button className="px-2 py-1 text-xs">
  Click
</button>
```

### Spacing Between Targets

```tsx
// ✅ Adequate spacing (8px minimum between targets)
<div className="flex gap-2">
  <button className="min-h-[44px] px-4">Action 1</button>
  <button className="min-h-[44px] px-4">Action 2</button>
</div>

// ❌ Targets too close together
<div className="flex gap-0">
  <button>Action 1</button>
  <button>Action 2</button>
</div>
```

---

## Thumb Zones

### The Thumb Zone Map

```
┌─────────────────────────┐
│     Hard to reach       │  ← Top corners - avoid primary actions
│   ┌───────────────┐     │
│   │               │     │
│   │   Stretch     │     │  ← Upper area - secondary actions
│   │               │     │
│   ├───────────────┤     │
│   │               │     │
│   │   Natural     │     │  ← Center-bottom - primary actions
│   │               │     │
│   └───────────────┘     │
│         Easy            │  ← Bottom center - most accessible
└─────────────────────────┘
      👍 Thumb here
```

### Design Implications

```tsx
// ✅ Primary action in easy reach zone
<div className="fixed bottom-0 inset-x-0 p-4 bg-white border-t">
  <button className="w-full py-3 bg-blue-500 text-white rounded-lg">
    Primary Action
  </button>
</div>

// ✅ Navigation at bottom
<nav className="fixed bottom-0 inset-x-0 bg-white border-t">
  <div className="flex justify-around py-2">
    <NavItem icon={<HomeIcon />} label="Home" />
    <NavItem icon={<SearchIcon />} label="Search" />
    <NavItem icon={<UserIcon />} label="Profile" />
  </div>
</nav>

// ⚠️ Important action in hard zone - consider alternatives
<header className="fixed top-0">
  <button className="absolute right-4 top-4">
    Critical Action  {/* Hard to reach with one hand */}
  </button>
</header>
```

### Safe Areas (Notches & Home Indicators)

```tsx
// Handle iPhone notch and home indicator
<div className="
  pt-safe    /* Safe area top */
  pb-safe    /* Safe area bottom */
  pl-safe    /* Safe area left */
  pr-safe    /* Safe area right */
">
  Content
</div>

// Or using env() directly
<div className="pb-[env(safe-area-inset-bottom)]">
  Fixed bottom content
</div>

// Tailwind config for safe areas
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      padding: {
        'safe': 'env(safe-area-inset-bottom)',
      }
    }
  }
}
```

---

## Responsive Breakpoints

### Tailwind Default Breakpoints

| Prefix | Min Width | Typical Devices |
|--------|-----------|-----------------|
| (none) | 0px | Mobile phones |
| `sm:` | 640px | Large phones, small tablets |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Laptops, tablets landscape |
| `xl:` | 1280px | Desktops |
| `2xl:` | 1536px | Large desktops |

### Common Device Widths

| Device | Width |
|--------|-------|
| iPhone SE | 375px |
| iPhone 14 | 390px |
| iPhone 14 Pro Max | 430px |
| iPad Mini | 768px |
| iPad Pro 11" | 834px |
| iPad Pro 12.9" | 1024px |

### Using Breakpoints

```tsx
// Mobile-first: base styles for mobile, add complexity for larger
<div className="
  px-4          /* Mobile: 16px padding */
  sm:px-6       /* 640px+: 24px padding */
  lg:px-8       /* 1024px+: 32px padding */
">

<div className="
  grid
  grid-cols-1   /* Mobile: single column */
  sm:grid-cols-2  /* 640px+: 2 columns */
  lg:grid-cols-3  /* 1024px+: 3 columns */
  gap-4
">
```

---

## Mobile-First Approach

### Philosophy

1. Design for mobile constraints first
2. Add enhancements for larger screens
3. Mobile is not "desktop minus features"

### Implementation Pattern

```tsx
// ✅ Mobile-first (recommended)
<div className="
  text-base       /* Mobile default */
  md:text-lg      /* Tablet enhancement */
  lg:text-xl      /* Desktop enhancement */
">

// ❌ Desktop-first (avoid)
<div className="
  text-xl         /* Desktop default */
  md:text-lg      /* Tablet override */
  sm:text-base    /* Mobile override */
">
```

### Layout Examples

```tsx
// Stack on mobile, row on desktop
<div className="flex flex-col md:flex-row gap-4">
  <div className="md:w-1/2">Content A</div>
  <div className="md:w-1/2">Content B</div>
</div>

// Full width on mobile, contained on desktop
<div className="w-full max-w-4xl mx-auto px-4">
  Content
</div>

// Hide on mobile, show on desktop
<div className="hidden lg:block">
  Desktop sidebar
</div>

// Show on mobile, hide on desktop
<div className="lg:hidden">
  Mobile menu button
</div>
```

---

## Gestures & Interactions

### Touch vs Hover

```tsx
// ❌ Hover-only interaction (doesn't work on touch)
<div className="opacity-0 group-hover:opacity-100">
  Hover content
</div>

// ✅ Works with touch (click/tap to reveal)
const [isOpen, setIsOpen] = useState(false);

<div onClick={() => setIsOpen(!isOpen)}>
  <span>Tap to reveal</span>
  {isOpen && <div>Hidden content</div>}
</div>

// ✅ Or use focus for accessibility
<button className="group">
  <span>Item</span>
  <span className="opacity-0 group-hover:opacity-100 group-focus:opacity-100">
    Actions
  </span>
</button>
```

### Pull to Refresh (concept)

```tsx
// Visual indicator for pull-to-refresh
<div className="pt-16 relative">
  <div className="absolute top-0 left-0 right-0 h-16 flex items-center justify-center">
    <RefreshIcon className={`h-6 w-6 ${isRefreshing ? 'animate-spin' : ''}`} />
  </div>
  <Content />
</div>
```

### Swipe Actions

```tsx
// Swipeable list item concept
<div className="relative overflow-hidden">
  {/* Hidden actions */}
  <div className="absolute right-0 top-0 bottom-0 flex">
    <button className="bg-red-500 text-white px-4">Delete</button>
  </div>

  {/* Main content (swipeable) */}
  <div className="bg-white relative z-10 transform transition-transform">
    List item content
  </div>
</div>
```

### Disable Zoom on Inputs

```tsx
// Prevent zoom on input focus (iOS)
<input
  className="text-base"  /* 16px+ prevents zoom */
  /* Or use: */
  style={{ fontSize: '16px' }}
/>

// Meta tag approach
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```

---

## Mobile Navigation Patterns

### Bottom Navigation Bar

```tsx
<nav className="fixed bottom-0 inset-x-0 bg-white border-t pb-safe">
  <div className="flex justify-around">
    {[
      { icon: HomeIcon, label: 'Home', href: '/' },
      { icon: SearchIcon, label: 'Search', href: '/search' },
      { icon: BellIcon, label: 'Alerts', href: '/alerts' },
      { icon: UserIcon, label: 'Profile', href: '/profile' },
    ].map((item) => (
      <a
        key={item.label}
        href={item.href}
        className="flex flex-col items-center py-2 px-3 min-w-[64px] min-h-[44px]"
      >
        <item.icon className="h-6 w-6" />
        <span className="text-xs mt-1">{item.label}</span>
      </a>
    ))}
  </div>
</nav>
```

### Hamburger Menu

```tsx
const [isOpen, setIsOpen] = useState(false);

// Menu button
<button
  onClick={() => setIsOpen(true)}
  className="lg:hidden h-11 w-11 flex items-center justify-center"
  aria-label="Open menu"
>
  <MenuIcon className="h-6 w-6" />
</button>

// Slide-out drawer
{isOpen && (
  <div className="fixed inset-0 z-50 lg:hidden">
    {/* Backdrop */}
    <div
      className="absolute inset-0 bg-black/50"
      onClick={() => setIsOpen(false)}
    />

    {/* Drawer */}
    <nav className="absolute left-0 top-0 bottom-0 w-64 bg-white p-4">
      <button
        onClick={() => setIsOpen(false)}
        className="h-11 w-11 flex items-center justify-center mb-4"
      >
        <XIcon className="h-6 w-6" />
      </button>
      {/* Navigation items */}
    </nav>
  </div>
)}
```

### Tab Navigation

```tsx
<div className="border-b">
  <div className="flex overflow-x-auto scrollbar-hide">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        className={`
          px-4 py-3 text-sm font-medium whitespace-nowrap
          min-h-[44px]
          ${activeTab === tab.id
            ? 'border-b-2 border-blue-500 text-blue-600'
            : 'text-gray-500'
          }
        `}
      >
        {tab.label}
      </button>
    ))}
  </div>
</div>
```

---

## Performance Considerations

### Reduce Motion for Battery & Accessibility

```tsx
// Respect user preference
<div className="
  transition-transform
  motion-reduce:transition-none
  motion-reduce:transform-none
">
  Animated content
</div>

// CSS
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Lazy Loading

```tsx
// Images
<img
  src="image.jpg"
  loading="lazy"
  alt="Description"
/>

// Components
const HeavyComponent = lazy(() => import('./HeavyComponent'));

<Suspense fallback={<Skeleton />}>
  <HeavyComponent />
</Suspense>
```

### Touch Feedback

```tsx
// Immediate visual feedback on touch
<button className="
  active:scale-95
  active:bg-blue-600
  transition-transform
">
  Tap me
</button>

// Disable 300ms delay
<button className="touch-manipulation">
  No delay
</button>
```

---

## Common Mistakes

### Mistake 1: Tiny Touch Targets

```tsx
// ❌ Too small
<button className="p-1 text-xs">×</button>

// ✅ Proper size
<button className="h-11 w-11 flex items-center justify-center">
  <XIcon className="h-5 w-5" />
</button>
```

### Mistake 2: Hover-Only Tooltips

```tsx
// ❌ Hover only (no touch support)
<div className="group">
  <span>Info</span>
  <div className="hidden group-hover:block">Tooltip</div>
</div>

// ✅ Click/tap to show
<Tooltip content="Helpful info" trigger="click">
  <button>Info</button>
</Tooltip>
```

### Mistake 3: Fixed Headers Eating Space

```tsx
// ❌ Large fixed header on mobile
<header className="fixed h-20">...</header>

// ✅ Compact mobile header
<header className="fixed h-14 md:h-16">...</header>

// ✅ Or hide on scroll down
<header className={`fixed transition-transform ${scrollingDown ? '-translate-y-full' : ''}`}>
```

### Mistake 4: Horizontal Scrolling Content

```tsx
// ❌ Table overflows
<table className="w-[800px]">...</table>

// ✅ Scrollable container
<div className="overflow-x-auto">
  <table className="min-w-[800px]">...</table>
</div>

// ✅ Or responsive design
<div className="hidden md:block">
  <Table />
</div>
<div className="md:hidden">
  <CardList /> {/* Mobile-friendly alternative */}
</div>
```

### Mistake 5: Keyboard Covers Input

```tsx
// ❌ Input hidden behind keyboard
<div className="fixed bottom-0">
  <input />
</div>

// ✅ Input scrolls into view
<div className="pb-20"> {/* Space for keyboard */}
  <input
    onFocus={(e) => {
      setTimeout(() => e.target.scrollIntoView({ behavior: 'smooth' }), 300);
    }}
  />
</div>
```

---

## Quick Reference

### Touch Target Sizes

```tsx
// Minimum touch target
className="min-h-[44px] min-w-[44px]"

// Icon button
className="h-11 w-11 flex items-center justify-center"

// Text link
className="py-3 px-4 inline-block"
```

### Safe Areas

```tsx
// Bottom safe area
className="pb-safe"
// or
className="pb-[env(safe-area-inset-bottom)]"
```

### Responsive Hiding

```tsx
// Mobile only
className="md:hidden"

// Desktop only
className="hidden md:block"
```

---

## See Also

- [spacing-and-layout.md](spacing-and-layout.md) - Layout principles
- [forms-ux.md](forms-ux.md) - Mobile form inputs
- [accessibility.md](accessibility.md) - Touch accessibility
