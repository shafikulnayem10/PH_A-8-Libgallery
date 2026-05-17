# Libgallery – Online Book Borrowing Platform

---

## Project Purpose

**Libgallery** is a seamless and modern web application designed to digitize the traditional library experience.  
The platform allows users to explore a vast collection of books, filter them by specific categories (Story, Tech, Science), and borrow titles digitally.  
It prioritizes high performance and security — using **JWT-based authentication** between the Next.js frontend and Express backend — to provide a smooth, secure user experience for book enthusiasts.

---

## Live URL

🔗 [https://ph-a-8-libgallery.vercel.app](https://ph-a-8-libgallery.vercel.app)

---

## Key Features

- **Authentication System**  
  Fully integrated **BetterAuth** system supporting Email/Password and **Google Social Login**

- **Dynamic Browsing**  
  "All Books" page with:
  - Search Bar (by title)
  - Category Sidebar (real-time filtering)

- **Private Routes**  
  Secure access to:
  - Single Book Details
  - My Borrowed Books
  - User Profile

- **Digital Borrowing System**  
  - Real-time stock tracking (e.g., *12 copies left*)
  - Borrow confirmation with toast notifications
  - Duplicate borrow prevention

- **My Borrowed Books Page**  
  - View all borrowed books with date and status
  - Cancel booking with confirmation dialog
  - JWT-protected — unauthorized users redirected to login

- **Profile Management**  
  Users can:
  - View personal info (name, email, user ID, join date)
  - Update name & profile image

- **Responsive Design**  
  Built with **HeroUI + Tailwind CSS**  
  Fully optimized for:
  - Mobile
  - Tablet
  - Desktop

- **Interactive Home Page**  
  Includes:
  - Hero Banner
  - Scrolling Marquee (new arrivals)
  - Featured Books section
  - Quote section

- **SEO Optimized**  
  Dynamic `generateMetadata` for every book detail page (Open Graph, Twitter Card, canonical URL)

---

## Tech Stack & NPM Packages

### Frontend (Next.js App)

| Technology | Purpose |
|---|---|
| **Next.js 15** | React framework — SSR, routing, server components |
| **Tailwind CSS** | Utility-first styling |
| **HeroUI** | UI component library |
| **BetterAuth** | Authentication — email/password & Google OAuth |
| **MongoDB** | Database (via BetterAuth adapter) |

### Backend (Express Server)

| Technology | Purpose |
|---|---|
| **Express.js** | REST API server |
| **MongoDB** | Database — `libgalleryDB` → `bookings` collection |
| **jose-cjs** | JWT verification via JWKS |
| **cors** | Cross-origin requests |
| **dotenv** | Environment variable management |

### NPM Packages

**Frontend:**
- `better-auth` — Auth & session management
- `@heroui/react` — UI components
- `sonner` — Toast notifications
- `react-icons` — Icon library
- `swiper` — Book slider

**Backend:**
- `express` — Server framework
- `mongodb` — Database driver
- `jose-cjs` — JWT JWKS verification
- `cors` — CORS middleware
- `dotenv` — Env config

---

