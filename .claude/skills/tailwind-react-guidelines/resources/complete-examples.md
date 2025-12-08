# Complete Examples

## Landing Page Hero Section

```tsx
import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  onCtaClick,
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <button
          onClick={onCtaClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          {ctaText}
        </button>
      </div>
    </section>
  );
};

export default Hero;
```

---

## Email Capture Form

```tsx
import React, { useState, useCallback } from 'react';

interface EmailCaptureProps {
  onSubmit: (email: string) => Promise<void>;
  buttonText?: string;
  placeholder?: string;
}

export const EmailCapture: React.FC<EmailCaptureProps> = ({
  onSubmit,
  buttonText = 'Dołącz',
  placeholder = 'Twój adres email',
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setErrorMessage('Email jest wymagany');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      await onSubmit(email);
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setErrorMessage('Coś poszło nie tak. Spróbuj ponownie.');
    }
  }, [email, onSubmit]);

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
        <p className="text-green-800 font-medium">
          Dziękujemy! Sprawdź swoją skrzynkę email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          disabled={status === 'loading'}
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
        >
          {status === 'loading' && (
            <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          )}
          {buttonText}
        </button>
      </div>
      {status === 'error' && errorMessage && (
        <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
      )}
    </form>
  );
};

export default EmailCapture;
```

---

## Feature Card Grid

```tsx
import React from 'react';

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  title?: string;
  subtitle?: string;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  features,
  title,
  subtitle,
}) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
```

---

## Testimonial Card

```tsx
import React from 'react';

interface TestimonialProps {
  quote: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
}

export const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      {/* Quote icon */}
      <svg
        className="w-10 h-10 text-blue-500 mb-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      {/* Quote text */}
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center">
        {author.avatar ? (
          <img
            src={author.avatar}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
            <span className="text-gray-500 font-semibold">
              {author.name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-semibold text-gray-900">{author.name}</p>
          <p className="text-sm text-gray-500">{author.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
```

---

## Complete Landing Page Structure

```tsx
import React, { Suspense, lazy } from 'react';
import { Hero } from '@/features/hero';
import { EmailCapture } from '@/features/email-capture';

// Lazy load below-fold sections
const FeatureGrid = lazy(() => import('@/features/features/FeatureGrid'));
const Testimonials = lazy(() => import('@/features/testimonials/Testimonials'));
const FAQ = lazy(() => import('@/features/faq/FAQ'));

const LandingPage: React.FC = () => {
  const handleEmailSubmit = async (email: string) => {
    // API call
    await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  };

  const scrollToSignup = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      {/* Above fold - loads immediately */}
      <Hero
        title="Opanuj automatyzację z N8N"
        subtitle="Dołącz do Akademii Automatyzacji i naucz się budować potężne workflow bez kodowania"
        ctaText="Rozpocznij za darmo"
        onCtaClick={scrollToSignup}
      />

      {/* Email signup section */}
      <section id="signup" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Zapisz się na listę
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Otrzymaj darmowy dostęp do pierwszego modułu kursu
          </p>
          <EmailCapture onSubmit={handleEmailSubmit} />
        </div>
      </section>

      {/* Below fold - lazy loaded */}
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
        <FeatureGrid
          title="Co zyskujesz?"
          features={[
            // ...features
          ]}
        />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <FAQ />
      </Suspense>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Akademia Automatyzacji. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default LandingPage;
```

---

## Project Structure Example

```
src/
├── features/
│   ├── hero/
│   │   ├── components/
│   │   │   └── Hero.tsx
│   │   └── index.ts
│   ├── email-capture/
│   │   ├── components/
│   │   │   ├── EmailCapture.tsx
│   │   │   └── SuccessMessage.tsx
│   │   ├── hooks/
│   │   │   └── useEmailSubmit.ts
│   │   └── index.ts
│   ├── features/
│   │   ├── components/
│   │   │   └── FeatureGrid.tsx
│   │   └── index.ts
│   └── testimonials/
│       ├── components/
│       │   ├── Testimonials.tsx
│       │   └── TestimonialCard.tsx
│       └── index.ts
├── components/
│   └── ui/
│       ├── Button.tsx
│       └── Card.tsx
├── lib/
│   └── utils.ts
├── App.tsx
└── main.tsx
```
