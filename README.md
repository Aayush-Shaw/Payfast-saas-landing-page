# Payfast

> [!WARNING]
> 🚧 **UNDER CONSTRUCTION** 🚧
> This repository is currently under active development. Features, design, and architecture are subject to change.

A SaaS landing page designed professionally through detailed UI/UX research. Built with enterprise-grade architecture using **Next.js 16**, **Tailwind CSS v4**, and **TypeScript** to deliver a highly optimized, fully responsive, and intuitive user experience.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ System Architecture & Features

- **Comprehensive Route Topology** — Includes 15 distinct, statically generated routes ensuring rapid content delivery and optimal SEO performance.
- **Component-Driven UI** — Architected using atomic design principles, featuring highly reusable, typed UI primitives for scalable development.
- **Advanced State Management** — Centralized data configurations serve as a single source of truth, eliminating hardcoded constants and ensuring data integrity.
- **Responsive & Fluid Design** — Meticulously crafted layouts that dynamically adapt across all viewport breakpoints, from mobile devices to ultra-wide displays.
- **Performance Optimized** — Leverages Next.js App Router and static site generation (SSG) for sub-second page loads and maximum Lighthouse scores.
- **Strict Type Safety** — End-to-end TypeScript integration with strict mode enabled, guaranteeing predictable data flow and significantly reducing runtime errors.

---

## 🛠 Technology Stack

| Technology | Version | Application |
|------------|---------|-------------|
| [Next.js](https://nextjs.org) | 16.2.10 | Core framework, routing, and static generation |
| [Tailwind CSS](https://tailwindcss.com) | v4 | Utility-first design system and token management |
| [TypeScript](https://typescriptlang.org) | 5.x | Static typing and compiler-level validation |
| [lucide-react](https://lucide.dev) | latest | Scalable vector iconography |
| [clsx](https://github.com/lukeed/clsx) | latest | Dynamic class name resolution |

---

## 📁 Repository Structure

```
src/
├── app/                          # Next.js App Router implementation
│   ├── layout.tsx                # Global layout and context providers
│   ├── page.tsx                  # Primary landing page composition
│   ├── globals.css               # Global stylesheets and design tokens
│   └── [...routes]/              # 13 additional functional routes
│
├── components/                   # React component library
│   ├── ui/                       # Atomic UI primitives (Buttons, Cards, Badges)
│   ├── layout/                   # Structural components (Navbar, Footer, Wrappers)
│   └── sections/                 # Complex, domain-specific page sections
│
└── lib/                          # Core business logic and utilities
    ├── data/                     # Typed static data registries
    ├── types/                    # Global TypeScript interfaces
    └── utils.ts                  # Pure utility functions and formatters
```

---

## 🚀 Environment Setup

### Prerequisites

- **Node.js** (v18.18.0 or higher)
- **npm** (v9.0.0 or higher)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/payfast-landing-page.git
   cd payfast-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Initialize the development server**
   ```bash
   npm run dev
   ```
   *The application will be available at [http://localhost:3000](http://localhost:3000).*

### Production Build

To compile the application for production deployment:

```bash
npm run build
npm start
```

---

## 📄 Routing Infrastructure

| Endpoint | Purpose |
|----------|---------|
| `/` | Primary landing page showcasing all core value propositions |
| `/activity` | Detailed analytics and activity tracking interface |
| `/manage` | Administrative management and configuration portal |
| `/program` | Comprehensive program overview and details |
| `/folders` | Hierarchical directory management |
| `/documents` | Centralized repository for document access |
| `/pricing` | Tiered subscription and pricing models |
| `/about` | Organizational background and mission statement |
| `/blog` | Content management system index |
| `/blog/[slug]` | Dynamically generated individual content articles |
| `/contact` | User inquiry and support request interface |
| `/privacy-policy` | Legal privacy documentation |
| `/terms-of-service` | Legal terms of service documentation |

---

## 📝 License

This software is released under the [MIT License](LICENSE).
