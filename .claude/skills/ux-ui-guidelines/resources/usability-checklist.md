# Usability Checklist

Comprehensive checklist for evaluating and improving interface usability.

## Table of Contents

- [Nielsen's 10 Heuristics](#nielsens-10-heuristics)
- [Quick Usability Audit](#quick-usability-audit)
- [Pre-Launch Checklist](#pre-launch-checklist)
- [Mobile Usability Checklist](#mobile-usability-checklist)
- [Form Usability Checklist](#form-usability-checklist)
- [Scoring Guide](#scoring-guide)
- [Audit Report Template](#audit-report-template)

---

## Nielsen's 10 Heuristics

Jakob Nielsen's usability heuristics - the gold standard for UX evaluation.

### 1. Visibility of System Status

**Principle:** Keep users informed about what's happening.

**Checklist:**
- [ ] Loading indicators show when content is loading
- [ ] Progress bars show completion status for multi-step processes
- [ ] Success/error messages confirm actions
- [ ] Current location is highlighted in navigation
- [ ] Form validation provides immediate feedback

```tsx
// ✅ Good: Clear loading state
<button disabled={isLoading}>
  {isLoading ? (
    <>
      <Spinner className="mr-2" />
      Saving...
    </>
  ) : (
    'Save changes'
  )}
</button>
```

---

### 2. Match Between System and Real World

**Principle:** Use familiar language and concepts.

**Checklist:**
- [ ] Labels use everyday language, not jargon
- [ ] Icons match real-world conventions
- [ ] Information appears in natural order
- [ ] Date/time formats match user locale
- [ ] Currency/numbers formatted appropriately

```tsx
// ❌ Technical jargon
"Authentication token expired"

// ✅ Natural language
"Your session has ended. Please sign in again."
```

---

### 3. User Control and Freedom

**Principle:** Provide clear exits and undo options.

**Checklist:**
- [ ] Cancel buttons on all forms/modals
- [ ] Undo available for destructive actions
- [ ] Back navigation works as expected
- [ ] Easy to dismiss dialogs and popups
- [ ] Clear way to exit multi-step processes

```tsx
// ✅ Good: Undo option
<div className="bg-gray-800 text-white p-4 rounded-lg flex justify-between">
  <span>Item deleted</span>
  <button onClick={undo} className="text-blue-400 hover:text-blue-300">
    Undo
  </button>
</div>
```

---

### 4. Consistency and Standards

**Principle:** Follow conventions, be predictable.

**Checklist:**
- [ ] Same action = same result everywhere
- [ ] Consistent visual styling (buttons, links, forms)
- [ ] Consistent terminology throughout
- [ ] Navigation in same location on all pages
- [ ] Error states look consistent

```tsx
// ✅ Consistent button styles
const buttonStyles = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  danger: "bg-red-500 text-white hover:bg-red-600",
};
```

---

### 5. Error Prevention

**Principle:** Prevent errors before they happen.

**Checklist:**
- [ ] Confirmation for destructive actions
- [ ] Disabled states prevent invalid actions
- [ ] Input constraints (max length, valid characters)
- [ ] Smart defaults reduce errors
- [ ] Auto-save prevents data loss

```tsx
// ✅ Good: Confirmation dialog
<Dialog>
  <DialogTitle>Delete project?</DialogTitle>
  <DialogDescription>
    This will permanently delete "My Project" and all its data.
    This action cannot be undone.
  </DialogDescription>
  <DialogActions>
    <Button variant="secondary" onClick={close}>Cancel</Button>
    <Button variant="danger" onClick={confirmDelete}>Delete project</Button>
  </DialogActions>
</Dialog>
```

---

### 6. Recognition Rather Than Recall

**Principle:** Make information visible, don't rely on memory.

**Checklist:**
- [ ] Labels visible on form fields (not just placeholders)
- [ ] Recently used items accessible
- [ ] Search suggestions/autocomplete
- [ ] Breadcrumbs show navigation path
- [ ] Related actions grouped together

```tsx
// ✅ Good: Visible labels
<label className="block text-sm font-medium mb-1">
  Email address
</label>
<input placeholder="you@example.com" />

// ❌ Bad: Placeholder only (disappears on focus)
<input placeholder="Email address" />
```

---

### 7. Flexibility and Efficiency of Use

**Principle:** Cater to both novice and expert users.

**Checklist:**
- [ ] Keyboard shortcuts for power users
- [ ] Default settings work for most users
- [ ] Customizable preferences available
- [ ] Bulk actions for managing multiple items
- [ ] Quick actions/shortcuts visible

```tsx
// ✅ Good: Keyboard shortcut hint
<button title="Save (Ctrl+S)" aria-keyshortcuts="Control+s">
  Save
</button>
```

---

### 8. Aesthetic and Minimalist Design

**Principle:** Show only what's needed.

**Checklist:**
- [ ] No unnecessary decorative elements
- [ ] White space used effectively
- [ ] Content prioritized by importance
- [ ] Progressive disclosure for complexity
- [ ] Focus on one primary action per screen

```tsx
// ✅ Good: Clear hierarchy, minimal design
<div className="max-w-md mx-auto p-8">
  <h1 className="text-2xl font-bold mb-2">Welcome back</h1>
  <p className="text-gray-600 mb-6">Sign in to continue</p>

  <form className="space-y-4">
    <Input label="Email" type="email" />
    <Input label="Password" type="password" />
    <Button className="w-full">Sign in</Button>
  </form>
</div>
```

---

### 9. Help Users Recognize, Diagnose, and Recover from Errors

**Principle:** Error messages should help users fix problems.

**Checklist:**
- [ ] Errors clearly identify the problem
- [ ] Errors suggest a solution
- [ ] Error messages in plain language
- [ ] Error location highlighted visually
- [ ] Easy to correct and resubmit

```tsx
// ❌ Bad: Unhelpful error
"Error 422"

// ✅ Good: Helpful error
<div className="text-red-600">
  <p className="font-medium">This email is already registered</p>
  <p className="text-sm">
    Try <a href="/login" className="underline">signing in</a> or
    <a href="/reset-password" className="underline">reset your password</a>
  </p>
</div>
```

---

### 10. Help and Documentation

**Principle:** Provide help when needed.

**Checklist:**
- [ ] Tooltips for complex features
- [ ] FAQ or help section available
- [ ] Contextual help near relevant features
- [ ] Search available in documentation
- [ ] Contact/support option visible

```tsx
// ✅ Good: Contextual help
<label className="flex items-center gap-2">
  API Key
  <Tooltip content="Find this in your account settings under 'Developer'">
    <QuestionMarkCircleIcon className="h-4 w-4 text-gray-400" />
  </Tooltip>
</label>
```

---

## Quick Usability Audit

### 5-Minute Check

Run through these quickly on any page:

- [ ] **Clear headline** - Do I know what this page is for?
- [ ] **Primary action** - Is the main CTA obvious?
- [ ] **Navigation** - Can I get to main sections easily?
- [ ] **Loading state** - Does something show while loading?
- [ ] **Error handling** - What happens if something fails?
- [ ] **Mobile** - Does it work on a phone?

### Common Red Flags

| Issue | What to Look For |
|-------|------------------|
| Hidden actions | Important features only on hover |
| Dead ends | No next step or navigation after action |
| Mystery meat | Icons without labels |
| Form confusion | Missing labels, unclear validation |
| Infinite scroll | No way to reach footer |

---

## Pre-Launch Checklist

### Core Functionality

- [ ] All links work (no 404s)
- [ ] Forms submit correctly
- [ ] Error states are handled
- [ ] Loading states exist
- [ ] Success confirmations show

### Accessibility

- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast passes WCAG AA
- [ ] Focus states visible
- [ ] Alt text on images

### Performance

- [ ] Page loads in < 3 seconds
- [ ] Images optimized
- [ ] No layout shift on load
- [ ] Works on slow connections

### Cross-Browser

- [ ] Chrome ✓
- [ ] Firefox ✓
- [ ] Safari ✓
- [ ] Edge ✓
- [ ] Mobile browsers ✓

### Content

- [ ] No placeholder text (Lorem ipsum)
- [ ] Spelling/grammar checked
- [ ] Legal pages present (Privacy, Terms)
- [ ] Contact information correct

---

## Mobile Usability Checklist

- [ ] Touch targets ≥ 44x44px
- [ ] No horizontal scrolling
- [ ] Text readable without zooming (16px+ base)
- [ ] Forms use appropriate keyboard types
- [ ] Buttons reachable with thumb
- [ ] Navigation accessible on mobile
- [ ] No hover-only interactions
- [ ] Safe areas respected (notch, home bar)

---

## Form Usability Checklist

### Labels & Instructions

- [ ] All inputs have visible labels
- [ ] Required fields marked clearly
- [ ] Helper text explains format when needed
- [ ] Placeholder text is supplementary, not primary

### Validation

- [ ] Inline validation on blur
- [ ] Clear error messages
- [ ] Errors near the relevant field
- [ ] Success indicators when valid

### Mobile

- [ ] Correct input types (email, tel, etc.)
- [ ] Autocomplete attributes set
- [ ] Large enough touch targets
- [ ] Keyboard doesn't cover inputs

### Submission

- [ ] Submit button clearly labeled
- [ ] Loading state during submission
- [ ] Success confirmation after submit
- [ ] Error recovery if submission fails

---

## Scoring Guide

### Heuristic Severity Rating

| Score | Severity | Description |
|-------|----------|-------------|
| 0 | None | Not a usability problem |
| 1 | Cosmetic | Fix if time permits |
| 2 | Minor | Low priority issue |
| 3 | Major | Important to fix |
| 4 | Catastrophic | Must fix before launch |

### How to Score

For each heuristic violation found:
1. Identify which heuristic is violated
2. Describe the specific problem
3. Rate severity (0-4)
4. Suggest a fix

---

## Audit Report Template

```markdown
# Usability Audit Report

**Product:** [Product Name]
**Date:** [Date]
**Auditor:** [Name]
**Pages Reviewed:** [List of pages]

---

## Executive Summary

[2-3 sentence overview of findings]

**Overall Score:** [Good / Needs Work / Critical Issues]
**Critical Issues:** [Number]
**Major Issues:** [Number]
**Minor Issues:** [Number]

---

## Critical Issues (Severity 4)

### Issue 1: [Title]

**Heuristic:** [Which of the 10 heuristics]
**Location:** [Page/component]
**Description:** [What's wrong]
**Impact:** [Effect on users]
**Recommendation:** [How to fix]

---

## Major Issues (Severity 3)

### Issue 2: [Title]

[Same format as above]

---

## Minor Issues (Severity 2)

[List format is fine for minor issues]
- Issue description - Recommendation
- Issue description - Recommendation

---

## Positive Observations

- [What's working well]
- [Good patterns to maintain]

---

## Recommendations Summary

| Priority | Issue | Fix | Effort |
|----------|-------|-----|--------|
| P0 | [Critical] | [Fix] | [Low/Med/High] |
| P1 | [Major] | [Fix] | [Low/Med/High] |
| P2 | [Minor] | [Fix] | [Low/Med/High] |

---

## Next Steps

1. [First action]
2. [Second action]
3. [Third action]
```

---

## See Also

- [visual-audit-workflow.md](visual-audit-workflow.md) - Playwright visual audit
- [accessibility.md](accessibility.md) - Accessibility requirements
- [mobile-ux.md](mobile-ux.md) - Mobile-specific checks
