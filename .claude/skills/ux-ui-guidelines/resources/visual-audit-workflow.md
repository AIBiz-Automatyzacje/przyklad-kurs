# Visual Audit Workflow with Playwright

Complete guide for conducting UX/UI audits using Playwright MCP tools.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Step-by-Step Audit Process](#step-by-step-audit-process)
- [Playwright Tools Reference](#playwright-tools-reference)
- [Audit Checklist](#audit-checklist)
- [Report Template](#report-template)
- [Common Issues & Fixes](#common-issues--fixes)

---

## Overview

Visual audits combine:
1. **Screenshots** - Visual capture of current state
2. **Accessibility snapshots** - DOM structure and a11y tree
3. **Design analysis** - Evaluation against UX principles
4. **Actionable recommendations** - Specific fixes with code

---

## Prerequisites

Ensure Playwright MCP server is configured and available:
- `mcp__playwright__browser_navigate`
- `mcp__playwright__browser_take_screenshot`
- `mcp__playwright__browser_snapshot`
- `mcp__playwright__browser_resize`

---

## Step-by-Step Audit Process

### Step 1: Navigate to Page

```
Tool: mcp__playwright__browser_navigate
Parameters:
  url: "http://localhost:3000/page-to-audit"
```

Wait for page to fully load before proceeding.

### Step 2: Capture Desktop Screenshot

```
Tool: mcp__playwright__browser_take_screenshot
Parameters:
  filename: "audit-desktop-[page-name].png"
  fullPage: true  (for long pages)
```

### Step 3: Capture Mobile Screenshot

First resize browser to mobile dimensions:

```
Tool: mcp__playwright__browser_resize
Parameters:
  width: 390
  height: 844
```

Then take screenshot:

```
Tool: mcp__playwright__browser_take_screenshot
Parameters:
  filename: "audit-mobile-[page-name].png"
  fullPage: true
```

### Step 4: Get Accessibility Snapshot

```
Tool: mcp__playwright__browser_snapshot
```

This returns the accessibility tree showing:
- Heading structure (H1, H2, H3...)
- Interactive elements (buttons, links)
- Form controls with labels
- ARIA roles and states

### Step 5: Analyze & Document

Review screenshots and snapshot against checklists below.
Document findings in structured report.

### Step 6: Reset Browser Size (Optional)

```
Tool: mcp__playwright__browser_resize
Parameters:
  width: 1280
  height: 720
```

---

## Playwright Tools Reference

### browser_navigate

Opens a URL in the browser.

```
url: string (required) - Full URL to navigate to
```

### browser_take_screenshot

Captures page screenshot.

```
filename: string - Output filename (e.g., "audit.png")
fullPage: boolean - Capture entire scrollable page
element: string - Description of element to screenshot
ref: string - Element reference from snapshot
type: "png" | "jpeg" - Image format
```

**Tips:**
- Use `fullPage: true` for long pages
- Use specific element screenshots for detailed analysis
- PNG for quality, JPEG for smaller files

### browser_snapshot

Returns accessibility tree of current page.

**Output includes:**
- Page title and URL
- Heading hierarchy
- Interactive elements
- Form controls
- ARIA landmarks

**Use for:**
- Checking heading structure
- Verifying form labels
- Finding accessibility issues
- Understanding page structure

### browser_resize

Changes browser viewport dimensions.

```
width: number (required) - Viewport width in pixels
height: number (required) - Viewport height in pixels
```

**Common sizes:**
| Device | Width | Height |
|--------|-------|--------|
| Mobile (iPhone 14) | 390 | 844 |
| Tablet (iPad) | 768 | 1024 |
| Laptop | 1280 | 720 |
| Desktop | 1920 | 1080 |

---

## Audit Checklist

### Visual Hierarchy

- [ ] **One clear focal point** - What's the most important element?
- [ ] **Size indicates importance** - Larger = more important
- [ ] **Contrast draws attention** - CTA stands out
- [ ] **F/Z-pattern considered** - Content follows reading patterns
- [ ] **Whitespace creates emphasis** - Important elements have breathing room

### Typography

- [ ] **Heading hierarchy** - H1 → H2 → H3, no skipping
- [ ] **Readable body text** - 16px+ base size
- [ ] **Adequate line height** - 1.5-1.6 for body
- [ ] **Reasonable line length** - 45-75 characters
- [ ] **Sufficient contrast** - 4.5:1 minimum

### Spacing & Layout

- [ ] **Consistent spacing** - Following 8px grid
- [ ] **Proximity grouping** - Related items closer together
- [ ] **Breathing room** - Not cramped
- [ ] **Responsive layout** - Works on all screen sizes
- [ ] **No horizontal scroll** - Especially on mobile

### Accessibility

- [ ] **Proper heading structure** - Check snapshot for H1→H2→H3
- [ ] **Form labels present** - Not just placeholders
- [ ] **Alt text on images** - Check snapshot for img elements
- [ ] **Focus indicators** - Visible on interactive elements
- [ ] **Color not only indicator** - Icons/text accompany colors
- [ ] **Touch targets 44px+** - For mobile

### User Feedback States

- [ ] **Loading states exist** - Skeleton or spinner
- [ ] **Error states clear** - Message + how to fix
- [ ] **Empty states helpful** - Not just "no data"
- [ ] **Success confirmation** - User knows action worked

### Mobile UX

- [ ] **Touch-friendly buttons** - Minimum 44x44px
- [ ] **No hover-only interactions** - Works with touch
- [ ] **Readable without zoom** - Text large enough
- [ ] **Bottom navigation reachable** - Thumb-friendly zone
- [ ] **Forms work on mobile** - Proper input types

---

## Report Template

```markdown
# Visual Audit Report

**Page:** [Page Name]
**URL:** [URL]
**Date:** [Date]
**Auditor:** Claude with Playwright

---

## Screenshots

### Desktop View
![Desktop](audit-desktop-[page].png)

### Mobile View
![Mobile](audit-mobile-[page].png)

---

## Executive Summary

[2-3 sentence overview of findings]

**Overall Score:** [Good / Needs Work / Critical Issues]

---

## Critical Issues

### 1. [Issue Title]

**Impact:** [High/Medium/Low]
**Category:** [Hierarchy/Typography/Accessibility/etc.]

**Current state:**
[Description of issue]

**Recommendation:**
[How to fix]

**Code example:**
```tsx
// Before
<div className="...">

// After
<div className="...">
```

---

## Accessibility Findings

### Heading Structure
- H1: [count] - [content]
- H2: [count]
- H3: [count]

**Issues:**
- [List any heading hierarchy problems]

### Form Labels
- [List forms and label status]

### Color Contrast
- [Note any contrast issues]

---

## Recommendations Summary

| Priority | Issue | Fix |
|----------|-------|-----|
| High | [Issue] | [Fix] |
| Medium | [Issue] | [Fix] |
| Low | [Issue] | [Fix] |

---

## Positive Observations

- [What's working well]
- [Good patterns to maintain]

---

## Next Steps

1. [First action item]
2. [Second action item]
3. [Third action item]
```

---

## Common Issues & Fixes

### Issue: No Visual Hierarchy

**Symptoms:**
- Everything looks the same weight
- User doesn't know where to look
- CTA doesn't stand out

**Fix:**
```tsx
// Before - No hierarchy
<div>
  <div className="text-base">Headline</div>
  <div className="text-base">Description</div>
  <button className="text-base">Click</button>
</div>

// After - Clear hierarchy
<div>
  <h1 className="text-3xl font-bold mb-4">Headline</h1>
  <p className="text-lg text-gray-600 mb-6">Description</p>
  <button className="bg-blue-500 text-white px-6 py-3 text-lg font-medium rounded-lg">
    Click
  </button>
</div>
```

---

### Issue: Heading Hierarchy Broken

**Symptoms (from snapshot):**
- H1 → H3 (skipped H2)
- Multiple H1s on page
- No H1 at all

**Fix:**
```tsx
// Before - Skipped H2
<h1>Page Title</h1>
<h3>Section</h3>

// After - Proper hierarchy
<h1>Page Title</h1>
<h2>Section</h2>
```

---

### Issue: Form Without Labels

**Symptoms (from snapshot):**
- Input elements without associated labels
- Placeholder-only identification

**Fix:**
```tsx
// Before - Placeholder only
<input placeholder="Email" />

// After - Proper label
<div>
  <label htmlFor="email" className="block text-sm font-medium mb-1">
    Email
  </label>
  <input
    id="email"
    type="email"
    placeholder="you@example.com"
    className="..."
  />
</div>
```

---

### Issue: Poor Color Contrast

**Symptoms:**
- Light gray text on white background
- Colored text on similar colored background

**Fix:**
```tsx
// Before - Poor contrast
<p className="text-gray-300">Hard to read</p>

// After - Good contrast
<p className="text-gray-600">Easy to read</p>

// Or for dark backgrounds
<p className="text-gray-100">Light text on dark</p>
```

**Contrast requirements:**
- Normal text: 4.5:1
- Large text (18px+ bold, 24px+ regular): 3:1

---

### Issue: Tiny Touch Targets

**Symptoms (mobile screenshot):**
- Small buttons/links
- Close-together interactive elements

**Fix:**
```tsx
// Before - Too small
<button className="px-2 py-1 text-sm">Click</button>

// After - Touch-friendly
<button className="px-4 py-3 min-h-[44px] min-w-[44px]">Click</button>
```

---

### Issue: No Loading State

**Symptoms:**
- Page jumps when content loads
- User doesn't know something is happening

**Fix:**
```tsx
// Add skeleton loading
<div className="animate-pulse">
  <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
</div>
```

---

### Issue: Empty State Just Says "No Data"

**Symptoms:**
- Blank or minimal empty state
- No guidance for user

**Fix:**
```tsx
// Before
<div>No projects</div>

// After
<div className="text-center py-12">
  <svg className="mx-auto h-12 w-12 text-gray-400 mb-4">...</svg>
  <h3 className="text-lg font-medium text-gray-900 mb-2">
    No projects yet
  </h3>
  <p className="text-gray-500 mb-6">
    Get started by creating your first project.
  </p>
  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
    Create Project
  </button>
</div>
```

---

## See Also

- [visual-hierarchy.md](visual-hierarchy.md) - Detailed hierarchy principles
- [accessibility.md](accessibility.md) - Full a11y guide
- [typography.md](typography.md) - Typography best practices
