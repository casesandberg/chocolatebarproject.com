import { getBars } from '#/lib/getBars'

export async function GET() {
  const bars = getBars()

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://chocolatebarproject.com</loc>
    </url>
    <url>
      <loc>https://chocolatebarproject.com/bars</loc>
    </url>
    <url>
      <loc>https://chocolatebarproject.com/support</loc>
    </url>
    ${bars
      .map((bar) => {
        return `
      <url>
        <lastmod>${bar.releaseDate}</lastmod>
        <loc>https://chocolatebarproject.com/bars/${bar.slug}</loc>
      </url>
    `
      })
      .join('')}
  </urlset>`)
}
