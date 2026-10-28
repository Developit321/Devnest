import fs from 'node:fs'
import path from 'node:path'

const distDir = path.resolve(process.cwd(), 'dist')
const siteUrl = (
  process.env.VITE_SITE_URL ||
  process.env.SITE_URL ||
  'https://devnest.uk'
).replace(/\/+$/, '')

const filesToPatch = ['robots.txt', 'sitemap.xml', 'index.html']

for (const fileName of filesToPatch) {
  const filePath = path.join(distDir, fileName)
  if (!fs.existsSync(filePath)) continue

  const source = fs.readFileSync(filePath, 'utf8')
  const next = source.replaceAll('__SITE_URL__', siteUrl)
  fs.writeFileSync(filePath, next, 'utf8')
}

// Static hosts without SPA fallback (and some CDNs) 404 on deep links unless
 // each route has a real index.html. Copy the built shell into route folders.
const spaRoutes = [
  'about',
  'privacy',
  'terms',
  'cookies',
  'safety',
  'kin/support',
  'kin/privacy',
  'kin/delete-account',
]

const indexHtmlPath = path.join(distDir, 'index.html')
if (fs.existsSync(indexHtmlPath)) {
  const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8')
  for (const route of spaRoutes) {
    const routeDir = path.join(distDir, route)
    fs.mkdirSync(routeDir, { recursive: true })
    fs.writeFileSync(path.join(routeDir, 'index.html'), indexHtml)
  }
  console.log(`[postbuild-seo] Wrote ${spaRoutes.length} SPA route index.html files`)
}

console.log(`[postbuild-seo] Applied SITE_URL=${siteUrl}`)
