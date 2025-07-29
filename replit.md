# Astrian - Physical Intelligence Training Data Platform

## Overview

Astrian is a modern full-stack web application built to showcase a revolutionary AI startup focused on physical intelligence training data. The platform serves as a static showcase website for investors and stakeholders, presenting the company's Neural Trajectory Factory technology through an elegant, responsive single-page application.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom design system and dark theme
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Animation**: CSS-based animations with custom Tailwind classes

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Storage**: PostgreSQL-based session storage with connect-pg-simple
- **Development**: Hot module replacement via Vite integration

### Design System
- **Color Scheme**: Custom brand colors (Astrian Teal: #00D4AA, Astrian Blue: #0080FF, Space Black: #0A0A0A)
- **Typography**: Inter font family with Hammersmith One for brand elements
- **Theme**: Dark-first design with CSS custom properties
- **Responsive**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Static Showcase Components
1. **Navigation** - Fixed header with smooth scrolling navigation
2. **Hero Section** - Primary value proposition with particle background animation
3. **Technology Section** - Neural Trajectory Synthesis explanation with visualization
4. **Applications Section** - Industry use case tiles (Multi-Modal AI, Humanoid Robotics, Autonomous Systems)
5. **Contact Section** - Investor and partnership contact forms

### Visual Elements
- **Particle Background** - Animated floating particles for visual appeal
- **Neural Visualization** - Custom component showing animated neural network connections
- **Gradient Effects** - Brand-consistent gradient backgrounds and text effects

### User Interface
- **Responsive Design** - Mobile and desktop optimized layouts
- **Smooth Scrolling** - Section-based navigation with smooth transitions
- **Interactive Elements** - Hover effects and animated components
- **Accessibility** - Proper ARIA labels and keyboard navigation support

## Data Flow

### Static Content Flow
1. React components render static marketing content
2. CSS animations and JavaScript provide interactivity
3. No dynamic data fetching - purely presentation layer
4. Contact actions redirect to email clients

### Development Flow
1. Vite serves the React application in development
2. Express server provides API structure (currently unused)
3. TypeScript compilation with strict type checking
4. Hot module replacement for rapid development

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **Build Tools**: Vite, TypeScript, ESBuild
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer

### UI and UX Libraries
- **Component Library**: Radix UI primitives for accessibility
- **Styling Utilities**: clsx, tailwind-merge, class-variance-authority
- **Icons**: Lucide React icon library
- **Animations**: CSS-based with custom Tailwind extensions

### Backend Infrastructure (Prepared but Unused)
- **Database**: Drizzle ORM with Neon PostgreSQL
- **Validation**: Zod schema validation
- **Session Management**: Express sessions with PostgreSQL store
- **Development Tools**: TSX for TypeScript execution

### Development and Deployment
- **Replit Integration**: Custom plugins for development environment
- **Error Handling**: Runtime error overlay for development
- **Type Safety**: Comprehensive TypeScript configuration

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles Node.js server to `dist/index.js`
- **Static Serving**: Express serves built React application
- **Environment**: Production mode removes development tools

### Development Environment
- **Local Development**: Vite dev server with HMR
- **API Integration**: Express server runs alongside Vite
- **Database**: Neon PostgreSQL connection ready for future features
- **Replit Compatibility**: Configured for Replit hosting environment

### Scalability Considerations
- **Static Nature**: Current implementation is purely static, enabling CDN deployment
- **Database Ready**: Infrastructure prepared for dynamic features
- **Modular Architecture**: Easy to extend with new sections or functionality
- **Performance**: Optimized build output with code splitting and lazy loading support

The application is architected as a sophisticated static showcase that can easily evolve into a full-featured platform as the startup grows and requires dynamic functionality.