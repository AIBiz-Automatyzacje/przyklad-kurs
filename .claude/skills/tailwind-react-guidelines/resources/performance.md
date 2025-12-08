# Performance Optimization

## React Optimization

### useMemo - Expensive Computations

Use when:
- Filtering/sorting large arrays
- Complex calculations
- Data transformations

```tsx
// ✅ Good - expensive filter
const filteredItems = useMemo(() => {
  return items.filter(item => item.active).sort((a, b) => a.name.localeCompare(b.name));
}, [items]);

// ❌ Bad - simple value
const doubledValue = useMemo(() => value * 2, [value]);
```

### useCallback - Stable References

Use when:
- Handler passed to child components
- Handler in dependency array

```tsx
// ✅ Good - passed to child
const handleSubmit = useCallback((data: FormData) => {
  onSubmit(data);
}, [onSubmit]);

<ChildForm onSubmit={handleSubmit} />

// ❌ Overkill - not passed anywhere
const handleClick = useCallback(() => {
  setOpen(true);
}, []);
```

### React.memo - Prevent Re-renders

Use for:
- Expensive components
- Components that receive complex props

```tsx
const ExpensiveList = React.memo(({ items }: { items: Item[] }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
});
```

---

## Code Splitting

### Lazy Loading Components

```tsx
import { lazy, Suspense } from 'react';

// Lazy load heavy components
const HeavyChart = lazy(() => import('./HeavyChart'));
const Modal = lazy(() => import('./Modal'));

function Dashboard() {
  return (
    <div>
      <Suspense fallback={<ChartSkeleton />}>
        <HeavyChart />
      </Suspense>
    </div>
  );
}
```

### When to Lazy Load

- Charts and data visualizations
- Rich text editors
- Image galleries
- Modal dialogs
- Components below the fold
- Admin/settings panels

---

## Image Optimization

### Lazy Loading Images

```tsx
// Native lazy loading
<img
  src="/image.jpg"
  alt="Description"
  loading="lazy"
  decoding="async"
  className="w-full h-auto"
/>
```

### Responsive Images

```tsx
<img
  src="/image-800.jpg"
  srcSet="/image-400.jpg 400w, /image-800.jpg 800w, /image-1200.jpg 1200w"
  sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
  alt="Description"
  loading="lazy"
/>
```

### WebP with Fallback

```tsx
<picture>
  <source srcSet="/image.webp" type="image/webp" />
  <source srcSet="/image.jpg" type="image/jpeg" />
  <img src="/image.jpg" alt="Description" loading="lazy" />
</picture>
```

---

## Avoiding Layout Shift (CLS)

### Reserve Space for Images

```tsx
// ✅ Good - aspect ratio container
<div className="aspect-video relative">
  <img
    src="/video-thumbnail.jpg"
    alt="Video"
    className="absolute inset-0 w-full h-full object-cover"
    loading="lazy"
  />
</div>

// ✅ Good - explicit dimensions
<img
  src="/avatar.jpg"
  alt="Avatar"
  width={48}
  height={48}
  className="rounded-full"
/>
```

### Skeleton Loaders

```tsx
const CardSkeleton = () => (
  <div className="bg-white rounded-lg p-6 animate-pulse">
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4" />
    <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
    <div className="h-4 bg-gray-200 rounded w-5/6" />
  </div>
);
```

---

## Event Handler Optimization

### Debouncing

```tsx
import { useMemo } from 'react';
import debounce from 'lodash/debounce';

const SearchInput = ({ onSearch }: { onSearch: (term: string) => void }) => {
  const debouncedSearch = useMemo(
    () => debounce(onSearch, 300),
    [onSearch]
  );

  return (
    <input
      type="text"
      onChange={(e) => debouncedSearch(e.target.value)}
      placeholder="Search..."
    />
  );
};
```

### Throttling Scroll

```tsx
useEffect(() => {
  const handleScroll = throttle(() => {
    // Handle scroll
  }, 100);

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

---

## Bundle Size

### Import Only What You Need

```tsx
// ❌ Bad - imports entire library
import _ from 'lodash';

// ✅ Good - tree-shakeable
import debounce from 'lodash/debounce';
```

### Dynamic Imports for Heavy Libraries

```tsx
const handleExport = async () => {
  // Only load when needed
  const { exportToPDF } = await import('@/lib/pdf-export');
  exportToPDF(data);
};
```

---

## Rendering Optimization

### Key Prop Best Practices

```tsx
// ✅ Good - stable, unique key
{items.map(item => (
  <Item key={item.id} {...item} />
))}

// ❌ Bad - index as key (causes issues on reorder)
{items.map((item, index) => (
  <Item key={index} {...item} />
))}
```

### Avoid Inline Objects/Arrays in Props

```tsx
// ❌ Bad - new object every render
<Component style={{ marginTop: 10 }} />
<Component items={[1, 2, 3]} />

// ✅ Good - stable reference
const style = useMemo(() => ({ marginTop: 10 }), []);
const items = useMemo(() => [1, 2, 3], []);
<Component style={style} />
<Component items={items} />
```

---

## Checklist

- [ ] Lazy load components below fold
- [ ] Use Suspense boundaries
- [ ] Add loading="lazy" to images
- [ ] Reserve space for dynamic content
- [ ] Debounce search inputs
- [ ] Use React.memo for expensive lists
- [ ] Import only needed functions
- [ ] Use stable keys for lists
