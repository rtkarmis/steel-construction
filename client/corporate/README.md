# Steel Construction Client

This is a Next.js application for managing steel construction projects, built with TypeScript and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+ package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run build:static` - Builds the app as static site for deployment
- `npm run start` - Runs the built app in production mode
- `npm run serve:static` - Serves the static build locally
- `npm run lint` - Runs ESLint to check for code issues

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
├── contexts/           # React contexts
├── data/               # Static data files
├── lib/                # Utility functions
├── locales/            # Internationalization
├── styles/             # Global CSS
└── types/              # TypeScript type definitions
```

## Features

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Static Site Generation** for optimal performance
- **ESLint** for code linting
- **Responsive design** with mobile-first approach
- **Internationalization** support
- **SEO optimization** with metadata generation
- Steel construction project showcase
- Dynamic routing for services, projects, and blog

## Development

The project uses Next.js App Router with server components by default. The main application layout is defined in `src/app/layout.tsx`.

### Static Site Generation

This project is configured for static site generation. All pages are pre-rendered at build time for optimal performance and SEO.

### Responsive Design

The application uses Tailwind CSS with responsive breakpoints:

- Mobile: Default (< 768px)
- Tablet: `md:` (≥ 768px)
- Desktop: `lg:` (≥ 1024px)
- Large: `xl:` (≥ 1280px)

### Styling

This project uses Tailwind CSS for styling. Global styles are defined in `src/styles/globals.css`.

## Deployment

The application is configured for deployment on Vercel with static site generation:

1. **Automatic deployment** via GitHub integration
2. **Static export** for optimal performance
3. **Custom routing** for dynamic pages
4. **Optimized caching** headers

### Build Process

1. `npm run build:static` - Generates static site in `out/` directory
2. Automated `routes-manifest.json` creation for Vercel routing
3. Static assets optimization and compression

### Environment Variables

The build process uses:

- `NODE_ENV=production` for static export configuration

## Live Site

Visit the deployed application at: [https://steel-construction.vercel.app](https://steel-construction.vercel.app)
