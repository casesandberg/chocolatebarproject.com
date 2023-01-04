import { fetchBarBySlug } from '#/lib/getBars'

export default async function BarSlugPageHead({ params }: { params?: any }) {
  const bar = await fetchBarBySlug(params.slug)

  if (!bar) {
    return null
  }

  return (
    <>
      <title>
        {`${bar.name} - The Chocolate Bar Project | Cataloging the Worlds Chocolate`}
      </title>
      <meta name="title" content={`${bar.name} - The Chocolate Bar Project`} />
      <meta
        name="description"
        content={`${bar.barType} chocolate bar by ${bar.maker}`}
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={`${bar.name} - The Chocolate Bar Project`}
      />
      <meta
        property="og:description"
        content={`${bar.barType} chocolate bar by ${bar.maker}`}
      />
      <meta
        property="og:image"
        content={`https://chocolatebarproject.com/${bar.images.HERO.src}`}
      />
    </>
  )
}
