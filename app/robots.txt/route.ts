export async function GET() {
  return new Response(`
User-agent: *
Allow: /
  
Sitemap: https://chocolatebarproject.com/sitemap.xml
`)
}
