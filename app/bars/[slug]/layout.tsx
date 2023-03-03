import { fetchBarBySlug } from '#/lib/getBars'
import type { Metadata } from 'next'

export default function BarsSlugLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

export async function generateMetadata({
  params,
}: {
  params?: any
}): Promise<Metadata> {
  const bar = await fetchBarBySlug(params.slug)

  if (!bar) {
    return {}
  }

  return {
    title: `${bar.name} ${
      bar.subtitle || ''
    } - The Chocolate Bar Project | Cataloging the Worlds Chocolate`,
    description: `${bar.barType} chocolate bar by ${bar.maker} in ${bar.productionCountry}. ${bar.description}`,

    keywords: [
      `${bar.barType} Chocolate`,
      `${
        typeof bar.origin === 'string' ? bar.origin : bar.origin.country
      } Origin`,
      ...(bar.marketingTerms || []),
    ],

    openGraph: {
      siteName: 'The Chocolate Bar Project | Cataloging the Worlds Chocolate',
      title: `${bar.name} ${
        bar.subtitle || ''
      } - The Chocolate Bar Project | Cataloging the Worlds Chocolate`,
      description: `${bar.barType} chocolate bar by ${bar.maker} in ${bar.productionCountry}. ${bar.description}`,
      url: `https://chocolatebarproject.com/bars/${bar.slug}`,
      images: [
        {
          url: `http://chocolatebarproject.com${bar.images.HERO.src}`,
          width: 1200,
          height: 800,
          alt: bar.images.HERO.alt,
        },
        {
          url: `http://chocolatebarproject.com${bar.images.PACKAGE_FRONT.src}`,
          width: 800,
          height: 1200,
          alt: bar.images.PACKAGE_FRONT.alt,
        },
        {
          url: `http://chocolatebarproject.com${bar.images.PACKAGE_BACK.src}`,
          width: 800,
          height: 1200,
          alt: bar.images.PACKAGE_BACK.alt,
        },
        {
          url: `http://chocolatebarproject.com${bar.images.BAR_FRONT.src}`,
          width: 800,
          height: 1200,
          alt: bar.images.BAR_FRONT.alt,
        },
        {
          url: `http://chocolatebarproject.com${bar.images.BAR_BACK.src}`,
          width: 800,
          height: 1200,
          alt: bar.images.BAR_BACK.alt,
        },
      ],
    },

    twitter: {
      site: '@chocobarproject',
      card: 'summary_large_image',
    },

    other: {
      'og:type': 'product',
      'og:price:amount': String(bar.retailPrice),
      'og:price:currency': 'USD',
    },
  }
}
