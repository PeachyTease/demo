# SiteSecure Pro - Website Security Platform

## Overview

SiteSecure Pro is a comprehensive website security platform that provides professional-grade protection for websites. The application operates in a demo mode with limited functionality, offering users the ability to purchase and activate licenses to unlock the full version. Built as a modern full-stack web application, it combines React frontend with Express backend, utilizing PostgreSQL for data persistence and Stripe for payment processing.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side is built with **React 18** using TypeScript and follows a component-based architecture. The application uses:
- **Vite** as the build tool for fast development and optimized production builds
- **Tailwind CSS** with **shadcn/ui** component library for consistent, accessible UI components
- **Wouter** for lightweight client-side routing
- **TanStack Query** for server state management and API caching
- **React Hook Form** with Zod validation for form handling

The frontend follows a page-based routing structure with reusable components organized in a clear hierarchy. All UI components support both light and dark themes through CSS custom properties.

### Backend Architecture
The server is built with **Express.js** and TypeScript, providing a RESTful API architecture. Key features include:
- **ESM modules** for modern JavaScript imports
- Middleware-based request handling with comprehensive logging
- Separation of concerns with dedicated route handlers and storage abstraction
- Error handling middleware for consistent API responses

### Data Storage
The application uses **PostgreSQL** as the primary database with **Drizzle ORM** for type-safe database operations. The schema includes:
- **Users table** for basic user authentication
- **License keys table** for managing software licenses with activation tracking
- **Payments table** for Stripe payment intent tracking

A **MemStorage** class provides an in-memory fallback implementation, allowing the application to run without a database connection during development or testing.

### Payment Processing
**Stripe** integration handles license purchases through:
- Payment intent creation for secure payment processing
- Webhook handling for payment confirmation
- License key generation upon successful payment
- Automatic license activation and download triggers

### Content Management
The application features a unique **editable content system** that allows real-time content modification:
- **EditableContent** components for text editing
- **EditableImage** components for image replacement
- Client-side editing with save callbacks for potential backend persistence

### Authentication & Security
- GitHub OAuth integration through Replit connectors for repository access
- License-based feature gating system
- Secure payment processing with Stripe
- Environment-based configuration for different deployment stages

### Development & Deployment
- **Replit-optimized** with specialized plugins for development
- **TypeScript** throughout the stack for type safety
- **ESBuild** for backend bundling in production
- **Vite** for frontend building with proper asset handling
- Path aliases configured for clean import statements

The architecture supports both development and production environments with different build strategies and optimizations for each context.

## External Dependencies

### Payment Services
- **Stripe** - Payment processing platform for license purchases ($99 licenses)
- Requires `STRIPE_SECRET_KEY` environment variable for backend integration
- Frontend uses `VITE_STRIPE_PUBLIC_KEY` for Stripe Elements integration

### Database Services
- **PostgreSQL** - Primary database for persistent data storage
- **Neon Database** - Serverless PostgreSQL provider integration
- Configured through `DATABASE_URL` environment variable

### Version Control Integration
- **GitHub API** - Repository access and download functionality via Octokit
- Integrated through Replit's connector system
- Requires GitHub connection through Replit's authentication flow
- Supports repository ZIP download for full version delivery

### UI Framework Dependencies
- **Radix UI** - Headless component primitives for accessibility
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Pre-built component library
- **Lucide React** - Icon library for consistent iconography

### Development Services
- **Replit** - Development platform with specialized tooling
- Custom Vite plugins for development banner and error overlays
- Cartographer plugin for enhanced development experience