# Internationalization (i18n) Usage Guide

This project uses **next-intl** for internationalization with support for Thai (th) and English (en).

## Supported Languages
- **Thai (th)** - Default language
- **English (en)**

## How to Use Translations in Components

### 1. Client Components

For client components (with `"use client"`), use the `useTranslations` hook:

```tsx
"use client";

import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('nav'); // 'nav' is the namespace
  
  return (
    <div>
      <h1>{t('home')}</h1>
      <p>{t('services')}</p>
    </div>
  );
}
```

### 2. Server Components

For server components, use `getTranslations`:

```tsx
import { getTranslations } from 'next-intl/server';

export default async function MyServerComponent() {
  const t = await getTranslations('home.companyProfile');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description1')}</p>
    </div>
  );
}
```

### 3. Getting Current Locale

```tsx
import { useLocale } from 'next-intl';

export default function MyComponent() {
  const locale = useLocale(); // Returns 'th' or 'en'
  
  return <div>Current locale: {locale}</div>;
}
```

### 4. Language Switching

The language switcher is already implemented in the Navbar component. Users can switch between Thai and English using the TH/EN buttons.

## Translation File Structure

Translation files are located in `/messages/`:
- `/messages/en.json` - English translations
- `/messages/th.json` - Thai translations

### Translation Namespaces

```json
{
  "nav": { ... },           // Navigation menu items
  "home": { ... },          // Home page content
  "footer": { ... },        // Footer content
  "common": { ... }         // Common/shared translations
}
```

### Example: Adding New Translations

1. Add to `/messages/en.json`:
```json
{
  "mySection": {
    "title": "My Title",
    "description": "My Description"
  }
}
```

2. Add to `/messages/th.json`:
```json
{
  "mySection": {
    "title": "หัวข้อของฉัน",
    "description": "คำอธิบายของฉัน"
  }
}
```

3. Use in component:
```tsx
const t = useTranslations('mySection');
return <h1>{t('title')}</h1>;
```

## Routing

The app uses locale-based routing:
- `/` or `/th` - Thai version (default)
- `/en` - English version

All pages automatically support both languages through the `[locale]` dynamic route.

## Adding New Pages

When creating new pages, place them in `/app/[locale]/your-page/page.tsx`:

```tsx
import { getTranslations } from 'next-intl/server';

export default async function YourPage() {
  const t = await getTranslations('yourPage');
  
  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  );
}
```

## Configuration Files

- `/i18n/routing.ts` - Routing configuration
- `/i18n/request.ts` - Request configuration
- `/middleware.ts` - Middleware for locale detection
- `/next.config.ts` - Next.js config with next-intl plugin

## Notes

- Default locale is Thai (`th`)
- Locale prefix is set to `as-needed`, meaning Thai URLs won't have `/th` prefix
- The middleware automatically detects and redirects to the appropriate locale
