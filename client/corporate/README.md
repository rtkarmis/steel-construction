# Steel Construction Client

This is a Next.js application for managing steel construction projects, built with TypeScript and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

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
- `npm run start` - Runs the built app in production mode
- `npm run lint` - Runs ESLint to check for code issues

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
```

## Features

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **ESLint** for code linting
- Responsive design
- Steel construction project management interface

## Development

The project uses Next.js App Router with server components by default. The main application layout is defined in `src/app/layout.tsx` and the home page is in `src/app/page.tsx`.

### Styling

This project uses Tailwind CSS for styling. Global styles are defined in `src/app/globals.css`.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
