---
name: ux-ui-guidelines
description: UX/UI design guidelines for creating user-friendly interfaces. Covers visual hierarchy, typography, colors, accessibility (a11y, WCAG), spacing, layout, user feedback states (loading, error, empty), forms UX, mobile experience, and content presentation. Includes visual audit workflow with Playwright screenshots. Use when designing pages, screens, layouts, improving user experience, or conducting design audits.
---

# UX/UI Design Guidelines

## Purpose

Ensure interfaces are:
- **Clear and understandable** for users
- **Accessible** (a11y compliant)
- **Visually consistent**
- **Intuitive** to use

This skill complements `tailwind-react-guidelines` (technical HOW) with design guidance (WHAT and WHY).

---

## Visual Audit Workflow (Playwright Integration)

### When to Use

- Reviewing existing pages for UX issues
- Before/after design improvements
- Accessibility audits
- Mobile responsiveness checks

### Step-by-Step Audit Process

**Step 1: Take Screenshot**

```
Use mcp__playwright__browser_navigate to open the page
Use mcp__playwright__browser_take_screenshot to capture current state
```

**Step 2: Analyze Screenshot**

Review the screenshot for:
- [ ] Visual hierarchy - Is the most important element obvious?
- [ ] Typography - Are headings clear? Is text readable?
- [ ] Spacing - Is there breathing room? Are elements grouped logically?
- [ ] Color contrast - Can all text be read easily?
- [ ] Call-to-action - Is it obvious what user should do?
- [ ] Mobile consideration - Would this work on touch devices?

**Step 3: Take Accessibility Snapshot**

```
Use mcp__playwright__browser_snapshot to get accessibility tree
```

Review for:
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] All images have alt text
- [ ] Form inputs have labels
- [ ] Interactive elements are keyboard accessible
- [ ] Focus order makes sense

**Step 4: Document Findings**

Create audit report with:
1. Screenshot reference
2. Issues found (prioritized)
3. Specific recommendations
4. Code examples for fixes

### Audit Report Template

```markdown
## Visual Audit: [Page Name]

**Date:** [Date]
**URL:** [URL]

### Screenshots
- Desktop: [filename]
- Mobile: [filename]

### Critical Issues
1. [Issue] - [Impact] - [Fix]

### Recommendations
1. [Recommendation with code example]

### Accessibility Score
- Headings: [Pass/Fail]
- Contrast: [Pass/Fail]
- Labels: [Pass/Fail]
- Focus: [Pass/Fail]
```

**[📖 Complete Workflow: resources/visual-audit-workflow.md](resources/visual-audit-workflow.md)**

---

## Quick Checklists

### New Page Checklist

- [ ] Clear visual hierarchy (one focal point)
- [ ] Readable typography (16px+ base, proper line-height)
- [ ] Adequate spacing (8px grid, breathing room)
- [ ] Accessible contrast (4.5:1 minimum)
- [ ] Obvious CTA (what should user do?)
- [ ] Loading states (skeleton, not spinner)
- [ ] Error states (clear message + action)
- [ ] Empty states (illustration + CTA)
- [ ] Mobile-friendly (touch targets 44px+)

### Accessibility Quick Check

- [ ] Heading hierarchy (H1 → H2 → H3, no skips)
- [ ] Alt text on images
- [ ] Form labels (not just placeholders)
- [ ] Keyboard navigation works
- [ ] Focus visible on interactive elements
- [ ] Color not only indicator

---

## Core Principles

### 1. Visual Hierarchy

**Guide the user's eye** to what matters most.

- Size: Larger = more important
- Color: Contrast draws attention
- Position: Top-left in F-pattern cultures
- Whitespace: Isolation emphasizes importance

```tsx
// ✅ Clear hierarchy
<section className="py-16">
  <h1 className="text-4xl font-bold mb-4">Main Headline</h1>
  <p className="text-xl text-gray-600 mb-8">Supporting text</p>
  <button className="bg-blue-500 text-white px-8 py-3 text-lg">
    Primary CTA
  </button>
</section>

// ❌ No hierarchy - everything same weight
<section className="py-4">
  <h1 className="text-lg">Headline</h1>
  <p className="text-lg">Supporting text</p>
  <button className="text-lg">CTA</button>
</section>
```

**[📖 Complete Guide: resources/visual-hierarchy.md](resources/visual-hierarchy.md)**

---

### 2. Typography

**Readable text** is non-negotiable.

| Element | Size | Line Height | Weight |
|---------|------|-------------|--------|
| H1 | 36-48px | 1.1-1.2 | Bold |
| H2 | 28-36px | 1.2-1.3 | Semibold |
| H3 | 20-24px | 1.3-1.4 | Semibold |
| Body | 16-18px | 1.5-1.6 | Regular |
| Small | 14px | 1.4-1.5 | Regular |

**Line length:** 45-75 characters for optimal readability.

```tsx
// ✅ Readable
<p className="text-lg leading-relaxed max-w-prose">
  Content that's easy to read...
</p>

// ❌ Hard to read
<p className="text-sm leading-tight w-full">
  Content that spans entire viewport...
</p>
```

**[📖 Complete Guide: resources/typography.md](resources/typography.md)**

---

### 3. Spacing & Layout

**Whitespace is not empty** - it's a design element.

**8px Grid System:**
- `p-2` = 8px
- `p-4` = 16px
- `p-6` = 24px
- `p-8` = 32px

**Proximity Principle:** Related items should be closer together.

```tsx
// ✅ Good grouping
<div className="space-y-8">           {/* Large gap between sections */}
  <div className="space-y-2">          {/* Small gap within section */}
    <h3>Section Title</h3>
    <p>Related content</p>
  </div>
  <div className="space-y-2">
    <h3>Another Section</h3>
    <p>More content</p>
  </div>
</div>

// ❌ Same spacing everywhere - no grouping
<div className="space-y-4">
  <h3>Section Title</h3>
  <p>Content</p>
  <h3>Another Section</h3>
  <p>More content</p>
</div>
```

**[📖 Complete Guide: resources/spacing-and-layout.md](resources/spacing-and-layout.md)**

---

### 4. Accessibility (a11y)

**Design for everyone**, including users with disabilities.

**WCAG AA Requirements:**
- Text contrast: 4.5:1 minimum
- Large text (18px+ bold): 3:1 minimum
- Interactive elements: Visible focus state
- Color: Never the only indicator

```tsx
// ✅ Accessible
<button className="
  bg-blue-500 text-white
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
">
  Submit
</button>

// ✅ Error with icon, not just color
<div className="text-red-600 flex items-center gap-2">
  <ErrorIcon />
  <span>This field is required</span>
</div>

// ❌ Color only indicator
<div className="text-red-600">
  This field is required
</div>
```

**[📖 Complete Guide: resources/accessibility.md](resources/accessibility.md)**

---

### 5. User Feedback States

**Always tell users what's happening.**

| State | What to Show |
|-------|--------------|
| Loading | Skeleton matching content shape |
| Empty | Illustration + helpful message + CTA |
| Error | Clear message + how to fix + retry |
| Success | Confirmation + next steps |

```tsx
// ✅ Good empty state
<div className="text-center py-12">
  <IllustrationEmpty className="mx-auto mb-4" />
  <h3 className="text-lg font-medium mb-2">No projects yet</h3>
  <p className="text-gray-600 mb-4">Create your first project to get started</p>
  <button className="bg-blue-500 text-white px-4 py-2 rounded">
    Create Project
  </button>
</div>

// ❌ Bad empty state
<div className="text-gray-500">
  No data
</div>
```

**[📖 Complete Guide: resources/user-feedback-states.md](resources/user-feedback-states.md)**

---

## Topic Guides

### Visual Design

| Need to... | Read this resource |
|------------|-------------------|
| Guide user attention | [visual-hierarchy.md](resources/visual-hierarchy.md) |
| Make text readable | [typography.md](resources/typography.md) |
| Use colors effectively | [color-and-contrast.md](resources/color-and-contrast.md) |
| Create breathing room | [spacing-and-layout.md](resources/spacing-and-layout.md) |

### User Experience

| Need to... | Read this resource |
|------------|-------------------|
| Handle loading/error/empty | [user-feedback-states.md](resources/user-feedback-states.md) |
| Design accessible forms | [forms-ux.md](resources/forms-ux.md) |
| Optimize for mobile | [mobile-ux.md](resources/mobile-ux.md) |
| Present content clearly | [content-presentation.md](resources/content-presentation.md) |

### Quality Assurance

| Need to... | Read this resource |
|------------|-------------------|
| Run visual audit | [visual-audit-workflow.md](resources/visual-audit-workflow.md) |
| Check accessibility | [accessibility.md](resources/accessibility.md) |
| Review usability | [usability-checklist.md](resources/usability-checklist.md) |

---

## Common Mistakes

### ❌ No Visual Hierarchy

Everything same size, same weight, same color.
**Fix:** Make one element clearly dominant.

### ❌ Walls of Text

No headings, no spacing, no scanability.
**Fix:** Break into sections, add headings, use bullet points.

### ❌ Placeholder-Only Labels

Form inputs with placeholders but no visible labels.
**Fix:** Always show label above input.

### ❌ Tiny Touch Targets

Buttons and links too small for fingers.
**Fix:** Minimum 44x44px for touch targets.

### ❌ Mystery Meat Navigation

Icons without labels, unclear what things do.
**Fix:** Add text labels or tooltips.

### ❌ Error States Without Guidance

"An error occurred" with no explanation.
**Fix:** Explain what went wrong and how to fix it.

---

## Quick Reference: Tailwind Utilities for UX

### Typography Hierarchy

```tsx
// Headings
<h1 className="text-4xl md:text-5xl font-bold leading-tight">
<h2 className="text-2xl md:text-3xl font-semibold leading-snug">
<h3 className="text-xl font-semibold">

// Body text
<p className="text-base leading-relaxed">
<p className="text-lg leading-relaxed max-w-prose">
```

### Spacing System

```tsx
// Section spacing
<section className="py-16 md:py-24">

// Card internal spacing
<div className="p-6 md:p-8">

// Content spacing
<div className="space-y-4">
<div className="space-y-8">
```

### Accessibility Utilities

```tsx
// Focus states
className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"

// Screen reader only
className="sr-only"

// Reduced motion
className="motion-reduce:transition-none"
```

### Touch-Friendly

```tsx
// Minimum touch target
className="min-h-[44px] min-w-[44px]"

// Thumb-friendly bottom nav
className="fixed bottom-0 pb-safe"
```

---

## Related Skills

- **tailwind-react-guidelines**: Technical implementation (HOW to code)
- **skill-developer**: Creating new skills

---

**Skill Status**: Complete with Playwright integration for visual audits
**Line Count**: Under 500 (following Anthropic best practices)
**Progressive Disclosure**: Reference files for detailed information
