import { fetchMostRecentBar, getBars } from '#/lib/getBars'

export async function GET() {
  const bars = getBars()
  const mostRecentBar = await fetchMostRecentBar()

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    <url>
      <loc>https://chocolatebarproject.com</loc>
      <lastmod>${mostRecentBar?.releaseDate}</lastmod>
      <changefreq>daily</changefreq>
    </url>
    <url>
      <loc>https://chocolatebarproject.com/bars</loc>
      <lastmod>${mostRecentBar?.releaseDate}</lastmod>
      <changefreq>daily</changefreq>
    </url>
    <url>
      <loc>https://chocolatebarproject.com/support</loc>
      <lastmod>2023-01-01</lastmod>
    </url>
    ${bars
      .map((bar) => {
        return `
      <url>
        <loc>https://chocolatebarproject.com/bars/${bar.slug}</loc>
        <lastmod>${bar.releaseDate}</lastmod>
        <image:image>
          <image:loc>https://chocolatebarproject.com${bar.images.HERO.src}</image:loc>
        </image:image>
        <image:image>
          <image:loc>https://chocolatebarproject.com${bar.images.PACKAGE_FRONT.src}</image:loc>
        </image:image>
        <image:image>
          <image:loc>https://chocolatebarproject.com${bar.images.PACKAGE_BACK.src}</image:loc>
        </image:image>
        <image:image>
          <image:loc>https://chocolatebarproject.com${bar.images.BAR_FRONT.src}</image:loc>
        </image:image>
        <image:image>
          <image:loc>https://chocolatebarproject.com${bar.images.BAR_BACK.src}</image:loc>
        </image:image>
      </url>
    `
      })
      .join('')}
  </urlset>`)
}
