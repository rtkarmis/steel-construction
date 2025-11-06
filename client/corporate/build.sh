#!/bin/bash
echo "Building static Next.js site..."

# Set production environment
export NODE_ENV=production

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm ci
fi

# Build static site
echo "Building Next.js static site..."
npm run build:static

# Ensure out directory exists
mkdir -p out

# Create routes-manifest.json for Vercel compatibility
echo "Creating routes-manifest.json..."
cat > out/routes-manifest.json << 'EOF'
{
  "version": 3,
  "pages404": true,
  "caseSensitive": false,
  "basePath": "",
  "redirects": [],
  "rewrites": [],
  "headers": [],
  "staticRoutes": [
    "/",
    "/blog",
    "/hizmetler", 
    "/projeler",
    "/hakkimizda",
    "/referanslar",
    "/iletisim",
    "/sss",
    "/site-haritasi",
    "/kvkk-aydinlatma-metni",
    "/gizlilik-politikasi",
    "/cerez-politikasi"
  ],
  "dynamicRoutes": [
    {
      "page": "/blog/[slug]",
      "regex": "^/blog/([^/]+?)(?:/)?$"
    },
    {
      "page": "/hizmetler/[slug]", 
      "regex": "^/hizmetler/([^/]+?)(?:/)?$"
    },
    {
      "page": "/projeler/[slug]",
      "regex": "^/projeler/([^/]+?)(?:/)?$"
    }
  ]
}
EOF

echo "Build completed successfully!"
echo "Static files are in the 'out' directory"