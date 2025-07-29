# C.A. Doose & Company Website

A modern, animated website for C.A. Doose & Company, showcasing their legacy and partner brands in Texas real estate and homebuilding.

## 🏗️ Tech Stack

- **Framework:** Next.js 15 with TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Animations:** Motion (Framer Motion)
- **CMS:** Sanity (configured)
- **Deployment:** Vercel-ready

## 🎯 Features

- **Responsive Design** - Mobile-first approach
- **Video Background** - Dynamic Georgetown street footage in hero
- **Scroll Animations** - BlurFade components with staggered reveals
- **Interactive Elements** - Team bio modals, hover effects
- **Floating Navbar** - Auto.dev-style container animations
- **Professional Styling** - Gold accent colors (#b68931)

## 📋 Development Progress

### ✅ **Completed Features**

#### **Core Sections**
- [x] Hero Section with video background and parallax effects
- [x] About Section with company history and core values
- [x] Partner Brands Section with interactive brand cards
- [x] Executive Team Section with bio modals and photo filtering
- [x] Timeline Section with company milestones
- [x] Floating Navbar with smooth scroll navigation

#### **UI & Animations**
- [x] BlurFade and BlurFadeText animation components
- [x] Scroll-triggered animations across all sections
- [x] Staggered card reveals and text animations
- [x] Hover effects and transitions
- [x] Modal system for team member bios
- [x] Responsive grid layouts

#### **Content & Assets**
- [x] Executive team photos and bios
- [x] Partner brand logos and descriptions
- [x] Company timeline data
- [x] Video background (Georgetown street footage)
- [x] Professional photography assets

#### **Technical**
- [x] TypeScript configuration
- [x] Tailwind CSS v4 setup
- [x] Motion animation library integration
- [x] Sanity CMS schema and configuration
- [x] Component architecture with proper separation

### 🚧 **In Progress**
- [ ] Contact form functionality
- [ ] Mobile hamburger menu
- [ ] Footer section

### 📋 **Next Phase**
- [ ] Contact functionality implementation
- [ ] Mobile navigation menu
- [ ] Footer with contact info and legal links
- [ ] Video optimization (current file: 850MB)
- [ ] SEO meta tags and OpenGraph
- [ ] Sanity CMS content connection
- [ ] Loading states and performance optimization
- [ ] Analytics integration
- [ ] Accessibility improvements

### 🎨 **Design System**
- **Primary Color:** Gold (#b68931)
- **Typography:** System fonts with careful hierarchy
- **Spacing:** Consistent 4px grid system
- **Animations:** 0.04s base delay with staggered reveals
- **Responsive:** Mobile-first with 4-column max grid

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended)

### Installation

```bash
# Clone the repository
git clone [repository-url]
cd doose

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Development Commands

```bash
# Development
pnpm dev          # Start dev server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm format       # Format with Biome
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── *-section.tsx   # Page sections
│   └── navbar.tsx      # Navigation component
├── config/             # Configuration files
│   ├── site-config.ts  # Site metadata
│   └── team.ts         # Team member data
└── sanity/             # Sanity CMS configuration
```

## 🎬 Animation System

The site uses a custom animation system built on Motion:

- **BlurFade:** Scroll-triggered container animations
- **BlurFadeText:** Text-specific animations with character support
- **Staggered delays:** 0.04s base with multipliers for sequence
- **Scroll triggers:** `inView` prop for performance optimization

## 📱 Responsive Design

- **Mobile:** Single column layouts
- **Tablet:** 2-column grids  
- **Desktop:** 3-4 column grids
- **Large:** Max-width containers with proper spacing

## 🔧 CMS Integration

Sanity CMS is configured with complete schemas for:
- **Timeline events** - Company milestones and history
- **Partner brands** - Brand information and logos  
- **Site settings** - Global site configuration
- **Team members** - Executive profiles with photos and bios
- **Legal pages** - Privacy policy, accessibility statement, and other legal content

## 📈 Performance Considerations

- **Video optimization needed:** Current hero video is 850MB
- **Image optimization:** Next.js automatic optimization
- **Animation performance:** GPU-accelerated transforms
- **Code splitting:** Automatic with Next.js

## 🚀 Deployment

The site is configured for easy Vercel deployment:

```bash
# Deploy to Vercel
vercel

# Or connect your Git repository to Vercel for automatic deployments
```

## 📞 Contact

For questions about this project, please contact the development team.

---

*Built with ❤️ for C.A. Doose & Company*
