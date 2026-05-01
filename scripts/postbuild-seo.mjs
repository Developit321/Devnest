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

console.log(`[postbuild-seo] Applied SITE_URL=${siteUrl}`)
