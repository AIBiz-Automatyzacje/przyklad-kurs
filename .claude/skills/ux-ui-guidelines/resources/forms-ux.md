# Forms UX Guide

Complete guide for creating user-friendly, accessible forms.

## Table of Contents

- [Form Anatomy](#form-anatomy)
- [Labels Best Practices](#labels-best-practices)
- [Input Types for Mobile](#input-types-for-mobile)
- [Validation Patterns](#validation-patterns)
- [Error Handling](#error-handling)
- [Accessibility Requirements](#accessibility-requirements)
- [Complete Form Examples](#complete-form-examples)
- [Common Mistakes](#common-mistakes)

---

## Form Anatomy

### Essential Components

```
┌─────────────────────────────────────┐
│  Label *                            │  ← Label (required indicator)
│  ┌─────────────────────────────────┐│
│  │ Placeholder text                ││  ← Input field
│  └─────────────────────────────────┘│
│  Helper text or character count     │  ← Helper text
│  ⚠ Error message                    │  ← Error message (when invalid)
└─────────────────────────────────────┘
```

### Implementation

```tsx
<div className="space-y-1">
  {/* Label */}
  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
    Email address
    <span className="text-red-500 ml-1">*</span>
  </label>

  {/* Input */}
  <input
    id="email"
    type="email"
    placeholder="you@example.com"
    aria-describedby="email-helper email-error"
    className="
      w-full px-3 py-2 border rounded-lg
      border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    "
  />

  {/* Helper text */}
  <p id="email-helper" className="text-sm text-gray-500">
    We'll never share your email with anyone.
  </p>

  {/* Error message (shown when invalid) */}
  <p id="email-error" className="text-sm text-red-600 flex items-center gap-1">
    <ExclamationIcon className="h-4 w-4" />
    Please enter a valid email address.
  </p>
</div>
```

---

## Labels Best Practices

### Always Use Visible Labels

```tsx
// ❌ Placeholder only - disappears on focus
<input placeholder="Email" />

// ❌ Hidden label - bad for sighted users
<label className="sr-only">Email</label>
<input placeholder="Email" />

// ✅ Visible label above input
<label className="block text-sm font-medium text-gray-700 mb-1">
  Email
</label>
<input placeholder="you@example.com" />
```

### Label Placement

```tsx
// ✅ Label above (recommended for most cases)
<div className="space-y-1">
  <label className="block text-sm font-medium">Email</label>
  <input className="w-full" />
</div>

// ✅ Label inline (for simple forms, checkboxes)
<div className="flex items-center gap-2">
  <input type="checkbox" id="terms" />
  <label htmlFor="terms">I agree to the terms</label>
</div>

// ⚠️ Label to the left (use sparingly, alignment issues)
<div className="flex items-center gap-4">
  <label className="w-24">Email</label>
  <input className="flex-1" />
</div>
```

### Required Field Indicators

```tsx
// Option 1: Asterisk (most common)
<label>
  Email <span className="text-red-500">*</span>
</label>

// Option 2: Text indicator
<label>
  Email <span className="text-gray-500 text-sm">(required)</span>
</label>

// Option 3: Mark optional fields instead (if mostly required)
<label>
  Phone <span className="text-gray-500 text-sm">(optional)</span>
</label>
```

---

## Input Types for Mobile

### Use Correct Input Types

Mobile keyboards adapt to input type:

| Type | Keyboard | Use For |
|------|----------|---------|
| `type="email"` | @ symbol visible | Email addresses |
| `type="tel"` | Number pad | Phone numbers |
| `type="number"` | Number pad | Quantities, amounts |
| `type="url"` | .com shortcut | Website URLs |
| `type="search"` | Search key | Search boxes |
| `type="date"` | Date picker | Dates |

### Examples

```tsx
// Email - shows @ key
<input type="email" inputMode="email" autoComplete="email" />

// Phone - number pad
<input type="tel" inputMode="tel" autoComplete="tel" />

// Credit card - number pad with larger keys
<input
  type="text"
  inputMode="numeric"
  pattern="[0-9]*"
  autoComplete="cc-number"
/>

// Zip code - number pad
<input
  type="text"
  inputMode="numeric"
  pattern="[0-9]*"
  autoComplete="postal-code"
/>
```

### Autocomplete Attributes

```tsx
// Name fields
<input type="text" autoComplete="name" />           // Full name
<input type="text" autoComplete="given-name" />     // First name
<input type="text" autoComplete="family-name" />    // Last name

// Contact
<input type="email" autoComplete="email" />
<input type="tel" autoComplete="tel" />

// Address
<input type="text" autoComplete="street-address" />
<input type="text" autoComplete="address-line1" />
<input type="text" autoComplete="city" />
<input type="text" autoComplete="postal-code" />
<input type="text" autoComplete="country" />

// Payment
<input type="text" autoComplete="cc-number" />
<input type="text" autoComplete="cc-exp" />
<input type="text" autoComplete="cc-csc" />
```

---

## Validation Patterns

### Inline Validation (Recommended)

Validate on blur (when user leaves field):

```tsx
const [email, setEmail] = useState('');
const [error, setError] = useState('');
const [touched, setTouched] = useState(false);

const validateEmail = (value: string) => {
  if (!value) return 'Email is required';
  if (!value.includes('@')) return 'Please enter a valid email';
  return '';
};

const handleBlur = () => {
  setTouched(true);
  setError(validateEmail(email));
};

return (
  <div>
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      onBlur={handleBlur}
      className={touched && error ? 'border-red-500' : 'border-gray-300'}
    />
    {touched && error && (
      <p className="text-red-600 text-sm mt-1">{error}</p>
    )}
  </div>
);
```

### Success Indicators

```tsx
// Show checkmark when valid
<div className="relative">
  <input
    type="email"
    className={`pr-10 ${isValid ? 'border-green-500' : ''}`}
  />
  {isValid && (
    <CheckIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" />
  )}
</div>
```

### When to Validate

| Event | Validate? | Notes |
|-------|-----------|-------|
| On change | ⚠️ Sparingly | Can be annoying, use for passwords |
| On blur | ✅ Yes | Best for most fields |
| On submit | ✅ Yes | Final validation |
| On focus | ❌ No | Too early |

---

## Error Handling

### Clear Error Messages

```tsx
// ❌ Vague
<p className="text-red-600">Invalid input</p>

// ❌ Technical
<p className="text-red-600">Validation failed: regex mismatch</p>

// ✅ Clear and actionable
<p className="text-red-600">
  Please enter a valid email address (e.g., name@example.com)
</p>
```

### Error State Styling

```tsx
// Error state with icon
<div className="space-y-1">
  <label className="block text-sm font-medium text-gray-700">
    Email
  </label>
  <div className="relative">
    <input
      type="email"
      className="
        w-full px-3 py-2 pr-10 rounded-lg border
        border-red-500
        focus:ring-2 focus:ring-red-500 focus:border-red-500
      "
      aria-invalid="true"
      aria-describedby="email-error"
    />
    <ExclamationCircleIcon
      className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-red-500"
    />
  </div>
  <p id="email-error" className="text-sm text-red-600 flex items-center gap-1">
    <span>Please enter a valid email address</span>
  </p>
</div>
```

### Form-Level Errors

```tsx
// Error summary at top of form
{errors.length > 0 && (
  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
    <div className="flex items-start gap-3">
      <ExclamationIcon className="h-5 w-5 text-red-500 mt-0.5" />
      <div>
        <h3 className="font-medium text-red-800">
          Please fix the following errors:
        </h3>
        <ul className="mt-2 text-sm text-red-700 list-disc list-inside">
          {errors.map((error, i) => (
            <li key={i}>{error}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)}
```

---

## Accessibility Requirements

### Essential ARIA Attributes

```tsx
<div>
  <label htmlFor="username">Username</label>
  <input
    id="username"
    type="text"
    aria-required="true"           // Required field
    aria-invalid={hasError}        // Currently invalid
    aria-describedby="username-helper username-error"  // Associated text
  />
  <p id="username-helper">Choose a unique username</p>
  {hasError && <p id="username-error">Username is taken</p>}
</div>
```

### Fieldset for Related Inputs

```tsx
<fieldset>
  <legend className="text-lg font-medium mb-4">
    Shipping Address
  </legend>

  <div className="space-y-4">
    <div>
      <label htmlFor="street">Street</label>
      <input id="street" type="text" />
    </div>
    <div>
      <label htmlFor="city">City</label>
      <input id="city" type="text" />
    </div>
  </div>
</fieldset>
```

### Radio and Checkbox Groups

```tsx
<fieldset>
  <legend className="text-sm font-medium text-gray-700 mb-2">
    Preferred contact method
  </legend>

  <div className="space-y-2">
    <div className="flex items-center gap-2">
      <input type="radio" id="contact-email" name="contact" value="email" />
      <label htmlFor="contact-email">Email</label>
    </div>
    <div className="flex items-center gap-2">
      <input type="radio" id="contact-phone" name="contact" value="phone" />
      <label htmlFor="contact-phone">Phone</label>
    </div>
  </div>
</fieldset>
```

---

## Complete Form Examples

### Login Form

```tsx
<form className="space-y-6 max-w-md">
  <div className="space-y-1">
    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
      Email address
    </label>
    <input
      id="email"
      type="email"
      autoComplete="email"
      required
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>

  <div className="space-y-1">
    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
      Password
    </label>
    <input
      id="password"
      type="password"
      autoComplete="current-password"
      required
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>

  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <input type="checkbox" id="remember" className="rounded" />
      <label htmlFor="remember" className="text-sm text-gray-700">
        Remember me
      </label>
    </div>
    <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
      Forgot password?
    </a>
  </div>

  <button
    type="submit"
    className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  >
    Sign in
  </button>
</form>
```

### Contact Form

```tsx
<form className="space-y-6 max-w-lg">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="space-y-1">
      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
        First name <span className="text-red-500">*</span>
      </label>
      <input
        id="firstName"
        type="text"
        autoComplete="given-name"
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
      />
    </div>

    <div className="space-y-1">
      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
        Last name <span className="text-red-500">*</span>
      </label>
      <input
        id="lastName"
        type="text"
        autoComplete="family-name"
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
      />
    </div>
  </div>

  <div className="space-y-1">
    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
      Email <span className="text-red-500">*</span>
    </label>
    <input
      id="email"
      type="email"
      autoComplete="email"
      required
      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
    />
  </div>

  <div className="space-y-1">
    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
      Message <span className="text-red-500">*</span>
    </label>
    <textarea
      id="message"
      rows={4}
      required
      className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none"
    />
    <p className="text-sm text-gray-500 text-right">0/500 characters</p>
  </div>

  <button
    type="submit"
    className="w-full sm:w-auto py-2 px-6 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600"
  >
    Send message
  </button>
</form>
```

---

## Common Mistakes

### Mistake 1: No Labels

```tsx
// ❌ No label
<input placeholder="Enter email" />

// ✅ With label
<label htmlFor="email">Email</label>
<input id="email" placeholder="you@example.com" />
```

### Mistake 2: Disabled Submit Without Explanation

```tsx
// ❌ Button disabled but user doesn't know why
<button disabled>Submit</button>

// ✅ Explain what's missing
<button disabled title="Please fill all required fields">Submit</button>
// Or show inline message
<p className="text-sm text-gray-500">Please fill all required fields</p>
```

### Mistake 3: Clearing Form on Error

```tsx
// ❌ Clears all input on error
if (error) {
  setFormData({});
}

// ✅ Keep data, highlight errors
if (error) {
  setErrors(validation.errors);
  focusFirstError();
}
```

### Mistake 4: Tiny Touch Targets

```tsx
// ❌ Too small for touch
<input className="px-1 py-0.5 text-sm" />

// ✅ Touch-friendly
<input className="px-3 py-2 min-h-[44px]" />
```

---

## See Also

- [accessibility.md](accessibility.md) - Full a11y guide
- [mobile-ux.md](mobile-ux.md) - Mobile form considerations
- [user-feedback-states.md](user-feedback-states.md) - Loading/success states
