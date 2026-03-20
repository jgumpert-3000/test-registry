# My Design System

A multi-brand design system built with [shadcn/ui](https://ui.shadcn.com), Next.js and Tailwind CSS. 
Live: [test-registry-pi.vercel.app](https://test-registry-pi.vercel.app)

---

## Brands

This system supports multiple brands from a single component base. Switch between brands by applying a CSS class to the root element.

| Brand | Class | Primary Color | Font | Radius |
|-------|-------|--------------|------|--------|
| Telekom-Style | *(default)* | `#E20074` Magenta | Inter | None |
| BMW-Style | `brand-bmw` | `#0066CC` Blue | Barlow | 0.25rem |

---

## Components

| Component | Install |
|-----------|---------|
| Button | `npx shadcn@latest add https://test-registry-pi.vercel.app/r/button.tsx` |
| Card | `npx shadcn@latest add https://test-registry-pi.vercel.app/r/card.tsx` |
| Input | `npx shadcn@latest add https://test-registry-pi.vercel.app/r/input.tsx` |
| Navigation Menu | `npx shadcn@latest add https://test-registry-pi.vercel.app/r/navigation-menu.tsx` |
| Accordion | `npx shadcn@latest add https://test-registry-pi.vercel.app/r/accordion.tsx` |

---

## Adding a New Component

**1. Install the component:**
```bash
npx shadcn@latest add [component-name]
```

**2. Add it to the preview in `app/page.tsx`**

**3. Add it to `registry.json`**

**4. Copy it to the public registry:**
```bash
cp components/ui/[component].tsx public/r/[component].tsx
```

**5. Deploy:**
```bash
git add .
git commit -m "Add [component] component"
git push
```

---

## Adding a New Brand

**1. Open `app/globals.css`**

**2. Add a new CSS class at the bottom:**
```css
.brand-newbrand {
  --primary: oklch(...);
  --font-sans: var(--font-newbrand);
  --radius: 0.5rem;
}
```

**3. Add the font in `app/layout.tsx`**

**4. Add the brand switcher button in `app/page.tsx`**

---

## Local Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

## Deploy

Every push to `main` deploys automatically via Vercel.
```bash
git add .
git commit -m "Your change"
git push
```
```

**`Cmd + S`** speichern, dann pushen:
```
git add .
git commit -m "Add README"
git push