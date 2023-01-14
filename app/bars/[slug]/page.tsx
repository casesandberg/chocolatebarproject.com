// TODO: research generateStaticParams

import { Container } from '#/components/Container'
import { ItemBlock } from '#/components/ItemBlock'
import { ItemBlockSupportingImages } from '#/components/ItemBlockSupportingImages'
import { Metadata } from '#/components/Metadata'
import {
  AwardsMetadataItem,
  DimensionsMetadataItem,
  IngredientMetadataItem,
  MetadataItem,
  transformDimensions,
  transformPercent,
  transformWeight,
} from '#/components/MetadataItem'
import { fetchBarBySlug } from '#/lib/getBars'
import { fetchMakerByName } from '#/lib/getMakers'
import { fetchOriginByProducer } from '#/lib/getOrigins'
import { e } from 'easy-tailwind'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export default async function BarSlugPage({ params }: { params?: any }) {
  const bar = await fetchBarBySlug(params.slug)
  const maker = await fetchMakerByName(bar?.maker)
  const origin =
    typeof bar?.origin === 'string'
      ? await fetchOriginByProducer(bar?.origin)
      : undefined

  if (!bar) {
    return notFound()
  }

  return (
    <section className="relative min-h-screen">
      <Container className="relative h-full h-[80vh]">
        <Image
          priority
          src={bar.images.HERO.src}
          alt={bar.images.HERO.alt}
          fill
          className="object-cover object-center"
        />
      </Container>

      <Container as="article" className="">
        <div
          className={e(
            'flex flex-row items-center gap-1',
            '-mt-4 min-h-[80px] bg-primary-800 px-4 py-1',
            'relative' // To ensure its above the absolute image above
          )}
        >
          <div className="flex flex-col justify-center">
            <h1 className="text-primary-50">{bar.name}</h1>
            {bar.subtitle ? (
              <p role="doc-subtitle" className="text-primary-50/50">
                {bar.subtitle}
              </p>
            ) : null}
          </div>

          {bar.productUrl ? (
            <a
              rel="noreferrer"
              target="_blank"
              href={bar.productUrl}
              className="ml-auto flex-shrink-0 rounded font-bold text-primary-50"
            >
              Buy Now
            </a>
          ) : null}
        </div>

        <ItemBlock
          title="Bar"
          renderSupporting={() => (
            <ItemBlockSupportingImages
              images={[bar.images.BAR_FRONT, bar.images.BAR_BACK]}
            />
          )}
        >
          <Metadata>
            <MetadataItem label="Type" value={bar.barType} />
            <MetadataItem
              label="Percent"
              value={bar.percent}
              transformValue={transformPercent}
            />
            <MetadataItem
              label="Weight"
              value={bar.barWeight}
              transformValue={transformWeight}
            />
            <DimensionsMetadataItem
              label="Dimensions"
              value={bar.barDimensions}
              transformValue={transformDimensions}
            />
            <IngredientMetadataItem
              label="Ingredients"
              value={bar.ingredients}
            />
            <MetadataItem label="Food Allergen" value={bar.foodAllergen} />
            <MetadataItem
              label="Facility Allergen"
              value={bar.facilityAllergen}
            />
          </Metadata>
        </ItemBlock>

        <ItemBlock
          title="Packaging"
          renderSupporting={() => (
            <ItemBlockSupportingImages
              images={[bar.images.PACKAGE_FRONT, bar.images.PACKAGE_BACK]}
            />
          )}
        >
          <Metadata>
            <MetadataItem label="Type" value={bar.packagingType} />
            <DimensionsMetadataItem
              label="Dimensions"
              value={bar.packagingDimensions}
              transformValue={transformDimensions}
            />
            <MetadataItem label="Wrapper" value={bar.wrapper} />
            <MetadataItem
              label="Certified Labels"
              value={bar.certifiedLabels}
            />
            <MetadataItem
              label="Uncertified Labels"
              value={bar.uncertifiedLabels}
            />
            <MetadataItem label="Marketing Terms" value={bar.marketingTerms} />
            <MetadataItem label="Tasting Notes" value={bar.tastingNotes} />

            <AwardsMetadataItem label="Awards" value={bar.awards} />
          </Metadata>
        </ItemBlock>

        {maker ? (
          <ItemBlock title="Maker">
            <Metadata>
              <MetadataItem label="Name" value={maker.name} />
            </Metadata>
          </ItemBlock>
        ) : null}

        {origin ? (
          <ItemBlock title="Origin">
            <Metadata>
              <MetadataItem label="Producer" value={origin.producer} />
              <MetadataItem label="Region" value={origin.region} />
              <MetadataItem label="Country" value={origin.country} />
            </Metadata>
          </ItemBlock>
        ) : typeof bar.origin !== 'string' ? (
          <ItemBlock title="Origin">
            <Metadata>
              <MetadataItem label="Producer" value={bar.origin.producer} />
              <MetadataItem label="Region" value={bar.origin.region} />
              <MetadataItem label="Country" value={bar.origin.country} />
            </Metadata>
          </ItemBlock>
        ) : null}
      </Container>
    </section>
  )
}
