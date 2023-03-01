export async function GET() {
  return new Response(`
User-agent: *
Allow: /
  
Sitemap: http://chocolatebarproject.com/sitemap.xml
`)
}
