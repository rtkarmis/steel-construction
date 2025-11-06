const fs = require("fs");
const path = require("path");

const routesManifest = {
  version: 3,
  pages404: true,
  caseSensitive: false,
  basePath: "",
  redirects: [],
  rewrites: [],
  headers: [],
  staticRoutes: [
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
    "/cerez-politikasi",
  ],
  dynamicRoutes: [
    {
      page: "/blog/[slug]",
      regex: "^/blog/([^/]+?)(?:/)?$",
    },
    {
      page: "/hizmetler/[slug]",
      regex: "^/hizmetler/([^/]+?)(?:/)?$",
    },
    {
      page: "/projeler/[slug]",
      regex: "^/projeler/([^/]+?)(?:/)?$",
    },
  ],
};

const outDir = path.join(process.cwd(), "out");

// Ensure out directory exists
if (!fs.existsSync(outDir)) {
  console.log("Out directory does not exist, creating...");
  fs.mkdirSync(outDir, { recursive: true });
}

// Write routes-manifest.json
const manifestPath = path.join(outDir, "routes-manifest.json");
fs.writeFileSync(manifestPath, JSON.stringify(routesManifest, null, 2));

console.log("✓ Created routes-manifest.json for Vercel compatibility");
console.log("  Path:", manifestPath);
