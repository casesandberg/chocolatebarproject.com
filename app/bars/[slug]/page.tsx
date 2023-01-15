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
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Balancer from 'react-wrap-balancer'

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
      <div className="bg-primary-100/25">
        <Container className="relative h-full h-[80vh]">
          <Image
            priority
            src={bar.images.HERO.src}
            alt={bar.images.HERO.alt}
            fill
            className="object-cover object-center"
          />
        </Container>
      </div>

      <Container as="article" className="">
        <div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-3 sm:gap-0">
          <section className="col-span-2 grid gap-2 ">
            <h1 className="font-heading text-4xl font-bold text-primary-800">
              <Balancer>{bar.name}</Balancer>
            </h1>
            {bar.subtitle ? (
              <p
                role="doc-subtitle"
                className="font-heading text-lg text-primary-900/50"
              >
                <Balancer>{bar.subtitle}</Balancer>
              </p>
            ) : null}
          </section>

          <div className="sm:text-right">
            <p className="mb-2 text-lg text-primary-900/50">
              <Balancer>
                Made by {bar.maker} in {bar.productionCountry}
              </Balancer>
            </p>
            {bar.productUrl ? (
              <a
                rel="noreferrer"
                target="_blank"
                href={bar.productUrl}
                className="text-lg text-primary-900/50 underline"
              >
                Buy Now
              </a>
            ) : null}
          </div>
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
              <MetadataItem
                label="Production Country"
                value={bar.productionCountry}
              />
            </Metadata>
          </ItemBlock>
        ) : null}

        {origin ? (
          <ItemBlock title="Origin">
            <Metadata>
              <MetadataItem label="Producer" value={origin.producer} />
              <MetadataItem label="Locality" value={origin.locality} />
              <MetadataItem label="Region" value={origin.region} />
              <MetadataItem label="Country" value={origin.country} />
            </Metadata>
          </ItemBlock>
        ) : typeof bar.origin !== 'string' ? (
          <ItemBlock title="Origin">
            <Metadata>
              <MetadataItem label="Producer" value={bar.origin.producer} />
              <MetadataItem label="Locality" value={bar.origin.locality} />
              <MetadataItem label="Region" value={bar.origin.region} />
              <MetadataItem label="Country" value={bar.origin.country} />
            </Metadata>
          </ItemBlock>
        ) : null}
      </Container>
    </section>
  )
}
