# Content Presentation Guide

Complete guide for presenting content in a clear, scannable, and user-friendly way.

## Table of Contents

- [Scanability](#scanability)
- [Text Length & Readability](#text-length--readability)
- [Data Presentation](#data-presentation)
- [Empty States](#empty-states)
- [Microcopy](#microcopy)
- [Content Hierarchy](#content-hierarchy)
- [Common Mistakes](#common-mistakes)

---

## Scanability

### The F-Pattern

Users scan in an F-shape:
1. Horizontal line across the top
2. Second horizontal line (shorter)
3. Vertical scan down the left

### Design for Scanning

```tsx
// ✅ Scannable layout
<article className="space-y-6">
  {/* Strong headline - catches first horizontal scan */}
  <h1 className="text-3xl font-bold">
    Clear, Descriptive Headline
  </h1>

  {/* Key info early - second horizontal scan */}
  <p className="text-lg text-gray-600">
    The most important information goes here in the first paragraph.
  </p>

  {/* Subheadings for vertical scan */}
  <section>
    <h2 className="text-xl font-semibold mb-3">Key Point One</h2>
    <p>Supporting details...</p>
  </section>

  <section>
    <h2 className="text-xl font-semibold mb-3">Key Point Two</h2>
    <p>Supporting details...</p>
  </section>
</article>
```

### Break Up Text

```tsx
// ❌ Wall of text
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
  in reprehenderit in voluptate velit esse cillum dolore...
</p>

// ✅ Broken into digestible chunks
<div className="space-y-4">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed do eiusmod tempor incididunt ut labore.
  </p>

  <p>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</div>
```

### Use Lists

```tsx
// ✅ Bulleted list for features
<ul className="space-y-2">
  {features.map((feature) => (
    <li key={feature} className="flex items-start gap-2">
      <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
      <span>{feature}</span>
    </li>
  ))}
</ul>

// ✅ Numbered list for steps
<ol className="space-y-4">
  {steps.map((step, index) => (
    <li key={index} className="flex gap-4">
      <span className="
        flex-shrink-0 h-8 w-8 rounded-full
        bg-blue-100 text-blue-600 font-medium
        flex items-center justify-center
      ">
        {index + 1}
      </span>
      <div>
        <h3 className="font-medium">{step.title}</h3>
        <p className="text-gray-600">{step.description}</p>
      </div>
    </li>
  ))}
</ol>
```

### Highlight Key Information

```tsx
// Callout box
<div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
  <p className="font-medium text-blue-900">Pro tip</p>
  <p className="text-blue-800">Key information highlighted here.</p>
</div>

// Inline emphasis
<p>
  The deadline is <strong className="font-semibold">December 31st</strong>.
  Make sure to <mark className="bg-yellow-200 px-1">submit before midnight</mark>.
</p>

// Key stats
<div className="grid grid-cols-3 gap-4 text-center">
  <div>
    <p className="text-3xl font-bold text-blue-600">99%</p>
    <p className="text-sm text-gray-600">Uptime</p>
  </div>
  <div>
    <p className="text-3xl font-bold text-blue-600">24/7</p>
    <p className="text-sm text-gray-600">Support</p>
  </div>
  <div>
    <p className="text-3xl font-bold text-blue-600">1M+</p>
    <p className="text-sm text-gray-600">Users</p>
  </div>
</div>
```

---

## Text Length & Readability

### Optimal Line Length

**45-75 characters** per line for body text.

```tsx
// ✅ Constrained line length
<p className="max-w-prose">
  This text has an optimal reading width, making it comfortable
  to read without losing your place.
</p>

// Tailwind's max-w-prose = 65ch (characters)

// Alternative fixed widths
<p className="max-w-xl">   {/* 576px */}</p>
<p className="max-w-2xl">  {/* 672px */}</p>
```

### Line Height

```tsx
// Tight - headings
<h1 className="text-4xl leading-tight">Headline</h1>

// Relaxed - body text (recommended)
<p className="text-base leading-relaxed">Body text...</p>

// Loose - small text
<p className="text-sm leading-loose">Fine print...</p>
```

### Paragraph Length

```tsx
// ❌ Too long (10+ sentences)
// ✅ 2-4 sentences per paragraph

<div className="space-y-4">
  <p>First point explained in 2-3 sentences. Clear and focused.</p>
  <p>Second point in another short paragraph. Easy to scan.</p>
  <p>Third point. Each paragraph = one idea.</p>
</div>
```

---

## Data Presentation

### Tables

```tsx
// Responsive table
<div className="overflow-x-auto">
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Name
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Status
        </th>
        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
          Amount
        </th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {items.map((item) => (
        <tr key={item.id} className="hover:bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <StatusBadge status={item.status} />
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right">
            {formatCurrency(item.amount)}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
```

### Cards for Complex Data

```tsx
// Card grid for rich content
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item) => (
    <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden">
      {item.image && (
        <img src={item.image} alt="" className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">{item.price}</span>
          <button className="text-blue-600 hover:text-blue-800">
            View details
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
```

### Lists for Simple Data

```tsx
// Definition list
<dl className="space-y-4">
  <div className="flex justify-between">
    <dt className="text-gray-600">Status</dt>
    <dd className="font-medium">Active</dd>
  </div>
  <div className="flex justify-between">
    <dt className="text-gray-600">Created</dt>
    <dd className="font-medium">Jan 15, 2024</dd>
  </div>
  <div className="flex justify-between">
    <dt className="text-gray-600">Last updated</dt>
    <dd className="font-medium">2 hours ago</dd>
  </div>
</dl>
```

### Choose the Right Format

| Data Type | Best Format |
|-----------|-------------|
| Comparison data | Table |
| Rich content items | Cards |
| Key-value pairs | Definition list |
| Sequential items | Numbered list |
| Related items | Bulleted list |
| Metrics/stats | Stat cards |

---

## Empty States

### Anatomy of a Good Empty State

```
┌─────────────────────────────────┐
│                                 │
│        [Illustration]           │
│                                 │
│     Descriptive Headline        │
│                                 │
│   Helpful explanation text      │
│   that guides the user          │
│                                 │
│      [ Primary Action ]         │
│                                 │
└─────────────────────────────────┘
```

### Implementation

```tsx
// ✅ Complete empty state
<div className="text-center py-12 px-4">
  {/* Illustration */}
  <div className="mx-auto w-24 h-24 mb-6">
    <FolderOpenIcon className="w-full h-full text-gray-300" />
  </div>

  {/* Headline */}
  <h3 className="text-lg font-medium text-gray-900 mb-2">
    No projects yet
  </h3>

  {/* Explanation */}
  <p className="text-gray-500 mb-6 max-w-sm mx-auto">
    Get started by creating your first project.
    Projects help you organize your work.
  </p>

  {/* Action */}
  <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
    Create project
  </button>
</div>

// ❌ Poor empty state
<div className="text-gray-500 text-center py-4">
  No data
</div>
```

### Context-Specific Empty States

```tsx
// Search with no results
<div className="text-center py-12">
  <SearchIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
  <h3 className="text-lg font-medium mb-2">No results found</h3>
  <p className="text-gray-500 mb-4">
    Try adjusting your search or filters to find what you're looking for.
  </p>
  <button onClick={clearFilters} className="text-blue-600 hover:text-blue-800">
    Clear all filters
  </button>
</div>

// Error state
<div className="text-center py-12">
  <ExclamationCircleIcon className="mx-auto h-12 w-12 text-red-400 mb-4" />
  <h3 className="text-lg font-medium mb-2">Failed to load data</h3>
  <p className="text-gray-500 mb-4">
    Something went wrong. Please try again.
  </p>
  <button onClick={retry} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
    Try again
  </button>
</div>

// First-time user
<div className="text-center py-12">
  <SparklesIcon className="mx-auto h-12 w-12 text-yellow-400 mb-4" />
  <h3 className="text-lg font-medium mb-2">Welcome to ProjectApp!</h3>
  <p className="text-gray-500 mb-4">
    Let's get started with a quick tour of the features.
  </p>
  <div className="flex gap-3 justify-center">
    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
      Start tour
    </button>
    <button className="text-gray-600 px-4 py-2">
      Skip for now
    </button>
  </div>
</div>
```

---

## Microcopy

### Button Labels

```tsx
// ❌ Vague
<button>Submit</button>
<button>OK</button>
<button>Click here</button>

// ✅ Specific and action-oriented
<button>Create account</button>
<button>Save changes</button>
<button>Download report</button>
<button>Send message</button>
```

### Error Messages

```tsx
// ❌ Technical or vague
"Error 500"
"Invalid input"
"Something went wrong"

// ✅ Clear and helpful
"We couldn't save your changes. Please try again."
"Please enter a valid email address (e.g., name@example.com)"
"This username is already taken. Try another one."
```

### Confirmation Messages

```tsx
// ❌ Generic
"Success"
"Done"

// ✅ Specific
"Your message has been sent!"
"Changes saved successfully"
"Project 'Website Redesign' created"

// ✅ With next steps
<div className="bg-green-50 border border-green-200 p-4 rounded-lg">
  <p className="font-medium text-green-800">
    Account created successfully!
  </p>
  <p className="text-green-700 text-sm mt-1">
    Check your email to verify your account.
  </p>
</div>
```

### Form Helper Text

```tsx
// ❌ Too technical
"Must match regex: ^[a-zA-Z0-9]+$"

// ✅ User-friendly
"Use only letters and numbers"
"8+ characters, include a number"
"We'll never share this with anyone"
```

### Loading States

```tsx
// ❌ Generic
"Loading..."
"Please wait"

// ✅ Contextual
"Loading your projects..."
"Saving changes..."
"Sending your message..."
"Uploading files (3 of 5)..."
```

---

## Content Hierarchy

### Visual Weight

```tsx
// Primary content - largest, boldest
<h1 className="text-3xl font-bold text-gray-900">
  Main Headline
</h1>

// Secondary - supporting information
<p className="text-lg text-gray-600">
  Supporting description that provides context.
</p>

// Tertiary - additional details
<span className="text-sm text-gray-500">
  Less important metadata
</span>
```

### Information Architecture

```tsx
// Progressive disclosure
<div className="space-y-6">
  {/* Summary - always visible */}
  <div className="flex justify-between items-center">
    <div>
      <h2 className="font-semibold">Order #12345</h2>
      <p className="text-sm text-gray-600">Delivered on Jan 15</p>
    </div>
    <span className="text-lg font-bold">$99.00</span>
  </div>

  {/* Details - expandable */}
  <details className="group">
    <summary className="cursor-pointer text-blue-600 hover:text-blue-800">
      View order details
    </summary>
    <div className="mt-4 pt-4 border-t">
      {/* Detailed information */}
    </div>
  </details>
</div>
```

---

## Common Mistakes

### Mistake 1: Walls of Text

```tsx
// ❌ No structure
<p>{longParagraph}</p>

// ✅ Structured with headings and lists
<div className="space-y-4">
  <h2>Key Benefits</h2>
  <ul>
    <li>Benefit one</li>
    <li>Benefit two</li>
  </ul>
</div>
```

### Mistake 2: Jargon and Technical Terms

```tsx
// ❌ Technical
"Authentication failed: Invalid credentials"

// ✅ Human
"The email or password you entered is incorrect"
```

### Mistake 3: Inconsistent Tone

```tsx
// ❌ Inconsistent
"Error occurred!" // Scary
"Success :)" // Casual
"Operation completed" // Formal

// ✅ Consistent friendly tone
"Oops, something went wrong. Please try again."
"Great, your changes are saved!"
"All done! Your project is ready."
```

### Mistake 4: Missing Context

```tsx
// ❌ No context
<button disabled>Delete</button>

// ✅ With explanation
<div>
  <button disabled className="opacity-50">Delete</button>
  <p className="text-sm text-gray-500 mt-1">
    You can't delete a project with active tasks
  </p>
</div>
```

---

## See Also

- [typography.md](typography.md) - Text styling details
- [visual-hierarchy.md](visual-hierarchy.md) - Layout emphasis
- [user-feedback-states.md](user-feedback-states.md) - Loading/error states
