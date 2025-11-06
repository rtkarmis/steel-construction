#!/bin/bash
echo "Building static Next.js site..."

# Set production environment
export NODE_ENV=production

# Install dependencies
npm ci

# Build static site
npm run build:static

# Create routes-manifest.json for Vercel compatibility
mkdir -p out/_next/server
echo '{"version": 3, "pages404": true, "caseSensitive": false}' > out/routes-manifest.json

echo "Build completed successfully!"