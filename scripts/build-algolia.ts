import { algoliasearch } from 'algoliasearch'
import dotenv from 'dotenv'
import bars from '../lib/data/bars'
;(async function () {
  dotenv.config()

  try {
    const client = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
      process.env.ALGOLIA_SEARCH_ADMIN_KEY!
    )

    const requests = bars.map((record) => {
      return {
        action: 'addObject',
        objectID: record.id,
        body: {
          ...record,
          releaseDate: new Date(
            record.releaseDate + 'T00:00:01-0800'
          ).getTime(),
        },
      }
    }) as any

    const { taskID } = await client.batch({
      indexName: 'bars',
      batchWriteParams: {
        requests,
      },
    })

    await client.waitForTask({ indexName: 'bars', taskID })

    // https://www.algolia.com/doc/api-reference/settings-api-parameters/
    client.setSettings({
      indexName: 'bars',
      indexSettings: {
        // Sort by Release Date
        replicas: ['releaseDate'],
        ranking: [
          'desc(releaseDate)',
          'typo',
          'geo',
          'words',
          'filters',
          'proximity',
          'attribute',
          'exact',
          'custom',
        ],

        searchableAttributes: [
          'name',
          'subtitle',
          'description',
          'maker',
          'retailer',
          'ingredients',
        ],
        attributesForFaceting: [
          'barType',
          // 'percent',
          // 'packagingType',
          // 'marketingTerms',
          'productionCountry',
          'ingredients',
          // 'certifiedLabels',
          // 'uncertifiedLabels',
          'maker',
          // 'origin.country',
          // 'origin.region',
          // 'origin.locality',
          // 'origin.producer',
          // 'beanVariety',
          // 'facilityAllergen',
          // 'retailer',
          // 'reviewerWouldEatAgain',
        ],
        renderingContent: {
          facetOrdering: {
            facets: {
              order: ['barType', 'maker', 'ingredients', 'productionCountry'],
            },
            values: {
              barType: {
                order: ['Dark', 'Dark Milk', 'Milk', 'White', 'Flavored'],
              },
              maker: {
                sortRemainingBy: 'alpha',
              },
              ingredients: {
                sortRemainingBy: 'count',
              },
              productionCountry: {
                sortRemainingBy: 'alpha',
              },
            },
          },
        },
      },
    })

    console.log('Done!')
  } catch (error) {
    console.log(error)
  }
})()
