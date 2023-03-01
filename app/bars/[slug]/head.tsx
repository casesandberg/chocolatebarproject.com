import { fetchBarBySlug } from '#/lib/getBars'

export default async function BarSlugPageHead({ params }: { params?: any }) {
  const bar = await fetchBarBySlug(params.slug)

  if (!bar) {
    return null
  }

  return (
    <>
      <title>
        {`${bar.name} ${bar.subtitle} - The Chocolate Bar Project | Cataloging the Worlds Chocolate`}
      </title>
      <meta name="title" content={`${bar.name} ${bar.subtitle}`} />
      <meta
        property="og:site_name"
        content="The Chocolate Bar Project | Cataloging the Worlds Chocolate"
      />
      <meta
        name="description"
        content={`${bar.barType} chocolate bar by ${bar.maker} in ${bar.productionCountry}. ${bar.description}`}
      />

      <meta
        property="og:url"
        content={`https://chocolatebarproject.com/bars/${bar.slug}`}
      />
      <meta property="og:title" content={`${bar.name} ${bar.subtitle}`} />
      <meta
        property="og:description"
        content={`${bar.barType} chocolate bar by ${bar.maker} in ${bar.productionCountry}. ${bar.description}`}
      />

      <meta property="og:image:alt" content={bar.images.HERO.alt} />
      <meta
        property="og:image"
        content={`http://chocolatebarproject.com${bar.images.HERO.src}`}
      />
      <meta
        property="og:image"
        content={`http://chocolatebarproject.com${bar.images.PACKAGE_FRONT.src}`}
      />
      <meta
        property="og:image"
        content={`http://chocolatebarproject.com${bar.images.PACKAGE_BACK.src}`}
      />
      <meta
        property="og:image"
        content={`http://chocolatebarproject.com${bar.images.BAR_FRONT.src}`}
      />
      <meta
        property="og:image"
        content={`http://chocolatebarproject.com${bar.images.BAR_BACK.src}`}
      />

      <meta property="og:type" content="product" />
      <meta property="og:price:amount" content={String(bar.retailPrice)} />
      <meta property="og:price:currency" content="USD" />

      <meta name="twitter:site" content="@chocobarproject" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}
