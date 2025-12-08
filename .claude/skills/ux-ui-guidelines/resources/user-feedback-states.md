# User Feedback States

Always tell users what's happening. Never leave them guessing.

## Table of Contents

- [Overview](#overview)
- [Loading States](#loading-states)
- [Empty States](#empty-states)
- [Error States](#error-states)
- [Success States](#success-states)
- [Partial States](#partial-states)
- [Offline States](#offline-states)
- [Progress Indicators](#progress-indicators)
- [Common Patterns](#common-patterns)

---

## Overview

Every user action should have clear feedback:

| User Action | Expected Feedback |
|-------------|-------------------|
| Clicks button | Visual press state + loading |
| Submits form | Loading → Success/Error |
| Navigates page | Loading → Content/Empty |
| Network fails | Error message + retry option |
| No data exists | Empty state + guidance |

**Rule:** Users should never wonder "Did it work?" or "Is it loading?"

---

## Loading States

### Skeleton Loading (Preferred)

Skeleton screens maintain layout while content loads.

```tsx
// Skeleton component
const Skeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
);

// Card skeleton
const CardSkeleton: React.FC = () => (
  <div className="bg-white rounded-lg p-6 shadow-sm">
    <Skeleton className="h-6 w-3/4 mb-4" />
    <Skeleton className="h-4 w-full mb-2" />
    <Skeleton className="h-4 w-5/6 mb-4" />
    <div className="flex gap-2">
      <Skeleton className="h-10 w-24" />
      <Skeleton className="h-10 w-24" />
    </div>
  </div>
);

// Table skeleton
const TableSkeleton: React.FC<{ rows?: number }> = ({ rows = 5 }) => (
  <div className="space-y-3">
    {Array.from({ length: rows }).map((_, i) => (
      <div key={i} className="flex gap-4">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-16" />
      </div>
    ))}
  </div>
);
```

### Why Skeleton > Spinner

| Skeleton | Spinner |
|----------|---------|
| Shows expected layout | No layout hint |
| Feels faster | Feels slower |
| No layout shift | Content jumps |
| Progressive loading | All or nothing |

### Spinner (Use Sparingly)

Use spinners only for:
- Button loading states
- Overlay loading (modal submit)
- Indeterminate operations

```tsx
// Button with loading state
const Button: React.FC<{
  loading?: boolean;
  children: React.ReactNode;
}> = ({ loading, children, ...props }) => (
  <button
    disabled={loading}
    className="relative px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-70"
    {...props}
  >
    {loading && (
      <span className="absolute inset-0 flex items-center justify-center">
        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12" cy="12" r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      </span>
    )}
    <span className={loading ? "invisible" : ""}>{children}</span>
  </button>
);
```

### Loading Overlay

For operations that block the UI:

```tsx
const LoadingOverlay: React.FC<{
  loading: boolean;
  children: React.ReactNode;
}> = ({ loading, children }) => (
  <div className="relative">
    {children}
    {loading && (
      <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <Spinner />
          <p className="text-sm text-gray-600">Saving changes...</p>
        </div>
      </div>
    )}
  </div>
);
```

---

## Empty States

### Anatomy of Good Empty State

1. **Illustration** - Visual that matches context
2. **Headline** - What's empty
3. **Description** - Why it's empty, what to do
4. **Action** - CTA to fix it

```tsx
const EmptyState: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}> = ({ icon, title, description, action }) => (
  <div className="text-center py-12 px-4">
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-medium text-gray-900 mb-2">
      {title}
    </h3>
    <p className="text-gray-500 max-w-sm mx-auto mb-6">
      {description}
    </p>
    {action && (
      <button
        onClick={action.onClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        {action.label}
      </button>
    )}
  </div>
);

// Usage
<EmptyState
  icon={<FolderIcon className="w-8 h-8 text-gray-400" />}
  title="No projects yet"
  description="Get started by creating your first project. It only takes a minute."
  action={{
    label: "Create Project",
    onClick: () => setShowCreateModal(true)
  }}
/>
```

### Empty State Examples

```tsx
// Search with no results
<EmptyState
  icon={<SearchIcon />}
  title="No results found"
  description={`We couldn't find anything matching "${query}". Try different keywords.`}
  action={{
    label: "Clear search",
    onClick: clearSearch
  }}
/>

// Empty inbox
<EmptyState
  icon={<InboxIcon />}
  title="All caught up!"
  description="You have no unread messages. Check back later."
/>

// First-time user
<EmptyState
  icon={<RocketIcon />}
  title="Welcome to ProjectApp!"
  description="Let's get you started. Create your first project to begin."
  action={{
    label: "Create your first project",
    onClick: startOnboarding
  }}
/>

// Filtered view empty
<EmptyState
  icon={<FilterIcon />}
  title="No matches"
  description="No items match your current filters."
  action={{
    label: "Clear filters",
    onClick: clearFilters
  }}
/>
```

### Empty State Don'ts

```tsx
// ❌ Bad - No guidance
<div className="text-gray-400 text-center py-8">
  No data
</div>

// ❌ Bad - Technical message
<div className="text-center py-8">
  Query returned 0 results
</div>

// ❌ Bad - No action
<div className="text-center py-8">
  <p>You don't have any projects</p>
  {/* No CTA - user is stuck */}
</div>
```

---

## Error States

### Error Message Anatomy

1. **Icon** - Visual indicator (not just color)
2. **Title** - What went wrong (user-friendly)
3. **Description** - Why it happened, how to fix
4. **Action** - Retry or alternative

```tsx
const ErrorState: React.FC<{
  title: string;
  description: string;
  onRetry?: () => void;
}> = ({ title, description, onRetry }) => (
  <div className="text-center py-12 px-4">
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
      <ExclamationIcon className="w-8 h-8 text-red-600" />
    </div>
    <h3 className="text-lg font-medium text-gray-900 mb-2">
      {title}
    </h3>
    <p className="text-gray-500 max-w-sm mx-auto mb-6">
      {description}
    </p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Try again
      </button>
    )}
  </div>
);
```

### Inline Field Errors

```tsx
const FormField: React.FC<{
  label: string;
  error?: string;
  children: React.ReactNode;
}> = ({ label, error, children }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    {children}
    {error && (
      <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
        <ExclamationCircleIcon className="w-4 h-4" />
        <span>{error}</span>
      </div>
    )}
  </div>
);

// Usage
<FormField label="Email" error={errors.email}>
  <input
    type="email"
    className={`w-full px-3 py-2 border rounded-lg ${
      errors.email ? 'border-red-500' : 'border-gray-300'
    }`}
  />
</FormField>
```

### Error Examples

```tsx
// Network error
<ErrorState
  title="Connection failed"
  description="Please check your internet connection and try again."
  onRetry={refetch}
/>

// Server error
<ErrorState
  title="Something went wrong"
  description="We're having trouble on our end. Please try again in a few minutes."
  onRetry={refetch}
/>

// Permission error
<ErrorState
  title="Access denied"
  description="You don't have permission to view this content. Contact your administrator."
/>

// Not found
<ErrorState
  title="Page not found"
  description="The page you're looking for doesn't exist or has been moved."
  action={{
    label: "Go home",
    href: "/"
  }}
/>
```

### Toast/Snackbar Errors

For non-blocking errors:

```tsx
const Toast: React.FC<{
  type: 'success' | 'error' | 'warning';
  message: string;
  onClose: () => void;
}> = ({ type, message, onClose }) => {
  const styles = {
    success: 'bg-green-50 border-green-500 text-green-800',
    error: 'bg-red-50 border-red-500 text-red-800',
    warning: 'bg-yellow-50 border-yellow-500 text-yellow-800',
  };

  return (
    <div className={`
      fixed bottom-4 right-4 flex items-center gap-3
      px-4 py-3 rounded-lg border-l-4 shadow-lg
      ${styles[type]}
    `}>
      {type === 'error' && <XCircleIcon className="w-5 h-5" />}
      {type === 'success' && <CheckCircleIcon className="w-5 h-5" />}
      {type === 'warning' && <ExclamationIcon className="w-5 h-5" />}
      <span>{message}</span>
      <button onClick={onClose} className="ml-2">
        <XIcon className="w-4 h-4" />
      </button>
    </div>
  );
};
```

---

## Success States

### Confirmation Patterns

```tsx
// Inline success message
<div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-3 rounded-lg">
  <CheckCircleIcon className="w-5 h-5" />
  <span>Changes saved successfully</span>
</div>

// Success with next steps
<div className="text-center py-12">
  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
    <CheckIcon className="w-8 h-8 text-green-600" />
  </div>
  <h3 className="text-lg font-medium mb-2">Payment successful!</h3>
  <p className="text-gray-500 mb-6">
    You'll receive a confirmation email shortly.
  </p>
  <div className="flex justify-center gap-4">
    <a href="/orders" className="text-blue-500 hover:underline">
      View order
    </a>
    <a href="/" className="text-gray-500 hover:underline">
      Continue shopping
    </a>
  </div>
</div>
```

### Button Success State

```tsx
const SubmitButton: React.FC<{
  status: 'idle' | 'loading' | 'success' | 'error';
}> = ({ status }) => {
  const content = {
    idle: 'Save changes',
    loading: <Spinner />,
    success: <><CheckIcon /> Saved</>,
    error: <><XIcon /> Failed - Retry</>,
  };

  const styles = {
    idle: 'bg-blue-500 hover:bg-blue-600',
    loading: 'bg-blue-400',
    success: 'bg-green-500',
    error: 'bg-red-500 hover:bg-red-600',
  };

  return (
    <button
      className={`px-4 py-2 text-white rounded-lg transition-colors ${styles[status]}`}
      disabled={status === 'loading'}
    >
      {content[status]}
    </button>
  );
};
```

---

## Partial States

When some data is available but not all:

```tsx
// Partial content loaded
const ContentWithSidebar: React.FC = () => {
  const { data: mainContent, isLoading: mainLoading } = useMainContent();
  const { data: sidebar, isLoading: sidebarLoading } = useSidebar();

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2">
        {mainLoading ? <ContentSkeleton /> : <Content data={mainContent} />}
      </div>
      <div>
        {sidebarLoading ? <SidebarSkeleton /> : <Sidebar data={sidebar} />}
      </div>
    </div>
  );
};

// Stale data indicator
<div className="relative">
  {isStale && (
    <div className="absolute top-2 right-2 text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded">
      Updating...
    </div>
  )}
  <Content data={data} />
</div>
```

---

## Offline States

```tsx
// Offline banner
const OfflineBanner: React.FC = () => (
  <div className="bg-gray-900 text-white px-4 py-2 text-center text-sm">
    <span className="inline-flex items-center gap-2">
      <WifiOffIcon className="w-4 h-4" />
      You're offline. Some features may not work.
    </span>
  </div>
);

// Offline-aware action
<button
  onClick={handleSave}
  disabled={isOffline}
  className="..."
>
  {isOffline ? 'Offline - Cannot save' : 'Save'}
</button>

// Cached content indicator
<div className="text-xs text-gray-500 flex items-center gap-1">
  <ClockIcon className="w-3 h-3" />
  Last updated 5 minutes ago
</div>
```

---

## Progress Indicators

### Determinate Progress

When you know how long it will take:

```tsx
const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
  <div className="w-full bg-gray-200 rounded-full h-2">
    <div
      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
      style={{ width: `${progress}%` }}
    />
  </div>
);

// With label
<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>Uploading...</span>
    <span>{progress}%</span>
  </div>
  <ProgressBar progress={progress} />
</div>
```

### Step Progress

```tsx
const Steps: React.FC<{
  steps: string[];
  currentStep: number;
}> = ({ steps, currentStep }) => (
  <div className="flex items-center">
    {steps.map((step, index) => (
      <React.Fragment key={step}>
        <div className="flex items-center">
          <div className={`
            w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
            ${index < currentStep
              ? 'bg-blue-500 text-white'
              : index === currentStep
              ? 'border-2 border-blue-500 text-blue-500'
              : 'bg-gray-200 text-gray-500'
            }
          `}>
            {index < currentStep ? <CheckIcon /> : index + 1}
          </div>
          <span className={`ml-2 ${index <= currentStep ? 'text-gray-900' : 'text-gray-400'}`}>
            {step}
          </span>
        </div>
        {index < steps.length - 1 && (
          <div className={`
            flex-1 h-0.5 mx-4
            ${index < currentStep ? 'bg-blue-500' : 'bg-gray-200'}
          `} />
        )}
      </React.Fragment>
    ))}
  </div>
);
```

---

## Common Patterns

### Data Table States

```tsx
const DataTable: React.FC<{
  data: Item[];
  isLoading: boolean;
  error: Error | null;
}> = ({ data, isLoading, error }) => {
  if (isLoading) {
    return <TableSkeleton rows={5} />;
  }

  if (error) {
    return (
      <ErrorState
        title="Failed to load data"
        description="Please try again."
        onRetry={refetch}
      />
    );
  }

  if (data.length === 0) {
    return (
      <EmptyState
        icon={<TableIcon />}
        title="No records"
        description="Add your first record to get started."
        action={{ label: "Add record", onClick: openModal }}
      />
    );
  }

  return <Table data={data} />;
};
```

### Form Submission Flow

```tsx
const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Message sent!</h2>
        <p className="text-gray-600 mb-6">We'll get back to you within 24 hours.</p>
        <button onClick={() => setStatus('idle')} className="text-blue-500">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {status === 'error' && (
        <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
          Failed to send message. Please try again.
        </div>
      )}
      {/* Form fields */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="..."
      >
        {status === 'loading' ? 'Sending...' : 'Send message'}
      </button>
    </form>
  );
};
```

---

## Summary

| State | Key Elements |
|-------|--------------|
| **Loading** | Skeleton (preferred) or spinner, match expected layout |
| **Empty** | Icon + title + description + CTA |
| **Error** | Icon + friendly message + how to fix + retry |
| **Success** | Confirmation + next steps |
| **Partial** | Show what's available, indicate what's loading |
| **Offline** | Banner + disabled actions + stale data indicators |

**Golden rule:** User should always know what happened, what's happening, or what to do next.

---

## See Also

- [accessibility.md](accessibility.md) - Live regions for state announcements
- [typography.md](typography.md) - Text hierarchy in states
- [visual-hierarchy.md](visual-hierarchy.md) - Emphasis for CTAs
