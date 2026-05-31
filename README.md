# Libgallery – Digital Library Platform
**A fast, secure book borrowing app built with Next.js & Express**

🔗 [Live Demo](https://ph-a-8-libgallery.vercel.app)

---

## The Problem
Users want to browse and borrow books online, but existing platforms are clunky, slow. Library apps need real-time stock tracking, secure user authentication, and a frictionless borrowing experience.

## The Solution
Libgallery delivers:
- **Instant browsing** with search & real-time category filtering
- **Secure borrowing** with JWT authentication & duplicate prevention
- **Live stock tracking** (e.g., "12 copies left")
- **Responsive design** — works perfectly on mobile, tablet, desktop

---

## Performance

Optimized load performance using dynamic imports, CSS optimization, and server-side caching:

| Metric | Before | After |
|---|---|---|
| PageSpeed Insights Score (Mobile) | 93 | **98** |
| PageSpeed Insights Score (Desktop) | 99 | **99** |
| Mobile LCP | 2.7s | **2.3s** |
| Desktop LCP | 0.6s | **0.4s** |
| Desktop TBT | 30ms | **0ms** |

**What was done:**
- Lazy-loaded `TestimonialsSection` and `QuoteSection` via `next/dynamic` with `ssr: false` inside a client wrapper — removed heavy below-the-fold components from the initial bundle
- Added `optimizeCss: true` in `next.config.mjs` to inline critical CSS and eliminate render-blocking CSS chunks (est. 720ms savings)
- Added `display: 'swap'` to Geist font config to prevent render-blocking font requests
- All non-hero images lazy-loaded via Next.js `Image` component

---

## What I Built

✅ **Frontend** — Next.js with server components, client-side search, private routes

✅ **Backend** — Express REST API with MongoDB & JWT verification

✅ **Auth** — BetterAuth (Email/Password + Google OAuth)

✅ **UX** — HeroUI + Tailwind, toast notifications, confirmation dialogs

✅ **SEO** — Dynamic metadata per book (Open Graph, Twitter Cards)

---

## Key Features

| Feature | Why It Matters |
|---------|---|
| **Search + Filter** | Real-time search by title; category sidebar for instant filtering |
| **Borrow System** | Duplicate prevention; real-time stock display; instant confirmation |
| **My Borrowed Books** | Cancel anytime with confirmation; JWT-protected routes |
| **Profile Management** | Update name & image; view borrowing history |
| **Responsive UI** | HeroUI + Tailwind — pixel-perfect on all devices |

---

## Tech Stack

**Frontend:** Next.js 15, React, Tailwind CSS, HeroUI, BetterAuth

**Backend:** Express.js, MongoDB, JWT (jose-cjs)

**Auth:** BetterAuth + Google OAuth

---

## How to Run

### Prerequisites
- Node.js 18+
- MongoDB URI
- Google OAuth credentials (for social login)

### Setup

```bash
# Clone & install
git clone <repo>
cd libgallery
npm install

# Set env variables
# .env.local (frontend)
# .env (backend)

# Run frontend
npm run dev

# Run backend (separate terminal)
cd backend
npm start
```

Visit [http://localhost:3000](http://localhost:3000)

---

## What's Impressive Here

🎯 **Full-stack ownership** — Designed, built, and deployed frontend + backend

🔐 **Security-first** — JWT auth, duplicate prevention, protected routes

⚡ **Performance** — Achieved 98 (mobile) / 99 (desktop) PageSpeed score via lazy loading, CSS optimization, and font tuning

📱 **Production-ready** — Responsive design, error handling, toast feedback

🔍 **SEO** — Dynamic metadata per book for search visibility

---

## The Result

A deployed, working product that users can access, authenticate, search, and borrow from — **right now**.  A real app solving a real problem.



