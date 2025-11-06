@echo off
echo Building static Next.js site...

rem Set production environment
set NODE_ENV=production

rem Install dependencies if needed
if not exist node_modules (
    echo Installing dependencies...
    call npm ci
)

rem Build static site
echo Building Next.js static site...
call npm run build:static

rem Ensure out directory exists
if not exist out mkdir out

rem Create routes-manifest.json for Vercel compatibility
echo Creating routes-manifest.json...
(
echo {
echo   "version": 3,
echo   "pages404": true,
echo   "caseSensitive": false,
echo   "basePath": "",
echo   "redirects": [],
echo   "rewrites": [],
echo   "headers": [],
echo   "staticRoutes": [
echo     "/",
echo     "/blog",
echo     "/hizmetler",
echo     "/projeler", 
echo     "/hakkimizda",
echo     "/referanslar",
echo     "/iletisim",
echo     "/sss",
echo     "/site-haritasi",
echo     "/kvkk-aydinlatma-metni",
echo     "/gizlilik-politikasi",
echo     "/cerez-politikasi"
echo   ],
echo   "dynamicRoutes": [
echo     {
echo       "page": "/blog/[slug]",
echo       "regex": "^/blog/([^/]+?)(?:/)?$"
echo     },
echo     {
echo       "page": "/hizmetler/[slug]",
echo       "regex": "^/hizmetler/([^/]+?)(?:/)?$"
echo     },
echo     {
echo       "page": "/projeler/[slug]",
echo       "regex": "^/projeler/([^/]+?)(?:/)?$"
echo     }
echo   ]
echo }
) > out\routes-manifest.json

echo Build completed successfully!
echo Static files are in the 'out' directory