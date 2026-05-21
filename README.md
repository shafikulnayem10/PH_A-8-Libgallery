# Libgallery – Digital Library Platform
**A fast, secure book borrowing app built with Next.js & Express**

🔗 [Live Demo](https://ph-a-8-libgallery.vercel.app)

---

## The Problem
Users want to browse and borrow books online, but existing platforms are clunky, slow, or unsecure. Library apps need real-time stock tracking, secure user authentication, and a frictionless borrowing experience.

## The Solution
Libgallery delivers:
- **Instant browsing** with search & real-time category filtering  
- **Secure borrowing** with JWT authentication & duplicate prevention  
- **Live stock tracking** (e.g., "12 copies left")  
- **Responsive design** — works perfectly on mobile, tablet, desktop  

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
⚡ **Performance** — Real-time filtering, SSR with Next.js, optimized API calls  
📱 **Production-ready** — Responsive design, error handling, toast feedback  
🔍 **SEO** — Dynamic metadata per book for search visibility  

---

## The Result
A deployed, working product that users can access, authenticate, search, and borrow from — **right now**. Not a tutorial project. Not a code-along. A real app solving a real problem.

