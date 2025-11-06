@echo off
echo Building static Next.js site...

rem Set production environment
set NODE_ENV=production

rem Install dependencies
call npm ci

rem Build static site
call npm run build:static

rem Create routes-manifest.json for Vercel compatibility
if not exist out\_next\server mkdir out\_next\server
echo {"version": 3, "pages404": true, "caseSensitive": false} > out\routes-manifest.json

echo Build completed successfully!