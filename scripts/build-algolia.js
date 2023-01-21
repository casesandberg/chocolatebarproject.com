const dotenv = require('dotenv')
const { algoliasearch } = require('algoliasearch')

;(async function () {
  dotenv.config()

  try {
    const bars = [
      {
        id: '969bffbfcd',
        releaseDate: '2023-01-22',
        name: 'Purple Yam Mochi',
        subtitle: 'Vegan White Chocolate',
        description: `We infused our vegan white chocolate with purple yam (also known as ube) and rice four, creating a surreal, lilac purple bar with a mochi-like chew and hits of almond, vanilla and violet. There's a little hint of acai bowl in there too. Single origina cacao butter from our parters at Kokoa Kamili lends a rich, buttery melt.`,
        slug: 'purple-yam-mochi-vegan-white-chocolate-raaka-chocolate',
        maker: 'Raaka Chocolate',
        productUrl: 'https://www.raakachocolate.com/pages/first-nibs',

        images: {
          HERO: {
            src: '/bars/purple-yam-mochi-vegan-white-chocolate-raaka-chocolate.jpg',
            alt: 'Purple Yam Mochi Vegan White Chocolate bar made by Raaka Chocolate Chocolate lined up with other bars on a red background',
          },
          BAR_FRONT: {
            src: '/bars/purple-yam-mochi-vegan-white-chocolate-raaka-chocolate-bar-front.jpg',
            alt: 'Front of Purple Yam Mochi Vegan White Chocolate bar made by Raaka Chocolate Chocolate',
          },
          BAR_BACK: {
            src: '/bars/purple-yam-mochi-vegan-white-chocolate-raaka-chocolate-bar-back.jpg',
            alt: 'Back of Purple Yam Mochi Vegan White Chocolate bar made by Raaka Chocolate Chocolate',
          },
          PACKAGE_FRONT: {
            src: '/bars/purple-yam-mochi-vegan-white-chocolate-raaka-chocolate-package-front.jpg',
            alt: 'Front of Purple Yam Mochi Vegan White Chocolate bar made by Raaka Chocolate Chocolate package',
          },
          PACKAGE_BACK: {
            src: '/bars/purple-yam-mochi-vegan-white-chocolate-raaka-chocolate-package-back.jpg',
            alt: 'Back of Purple Yam Mochi Vegan White Chocolate bar made by Raaka Chocolate Chocolate package',
          },
        },

        barType: 'White',
        percent: 29,
        barWeight: 51,
        barDimensions: [134, 61, 6],
        ingredients: [
          'Organic Cane Sugar',
          'Organic Cacao Butter',
          'Organic Coconut Milk Powder',
          'Organic Rice Flour',
          'Organic Purple Yam Powder',
          'Organic Brown Rice Syrup',
          'Organic Lemon Powder',
          'Organic Sunflower Lecithin',
          'Organic Beetroot Powder',
        ],

        packagingType: 'Paper Wrap',
        packagingDimensions: [136, 62, 13],
        wrapper: 'Foil with Paper Backing', // Silver
        marketingTerms: [
          'Batch',
          'Bean to Bar',
          'Transparent Trade',
          'Unroasted',
        ],
        productionCountry: 'United States',
        uncertifiedLabels: [
          'Transparent Trade',
          'Vegan',
          'Gluten Free',
          'Soy Free',
        ],

        retailer: 'Raaka',
        location: 'https://www.raakachocolate.com',
        retailPrice: 9, // Part of first-nibs program, 25$ for 3 bars
        dateObtained: '2023-01-20',

        reviewerWouldEatAgain: true,

        // https://www.raakachocolate.com/pages/kokoa-kamili-tanzania
        origin: {
          country: 'Tanzania',
          region: 'Morogoro Region',
          locality: 'Kilombero Valley',
          producer: 'Kokoa Kamili',
        },

        'categories.lvl0': ['products', 'goods'],
        'categories.lvl1': ['products > veggies', 'goods > to display'],
      },
      {
        id: '9c96d1778d',
        releaseDate: '2023-01-21',
        name: 'Semuliki 70%',
        description: `Our signature flavor is a cocoa-first, dark chocolate with hints of panela, fig, and browned fruits.`,
        slug: 'semuliki-70-latitute-craft-chocolate',
        maker: 'Latitude Craft Chocolate',
        productUrl:
          'https://latitudecraftchocolate.com/collections/all-products/products/copy-of-semuliki-70',

        images: {
          HERO: {
            src: '/bars/semuliki-70-latitute-craft-chocolate.jpg',
            alt: 'Semuliki 70% bar made by Latitude Craft Chocolate on a console table with sunglasses and keys',
          },
          BAR_FRONT: {
            src: '/bars/semuliki-70-latitute-craft-chocolate-bar-front.jpg',
            alt: 'Front of Semuliki 70% bar made by Latitude Craft Chocolate',
          },
          BAR_BACK: {
            src: '/bars/semuliki-70-latitute-craft-chocolate-bar-back.jpg',
            alt: 'Back of Semuliki 70% bar made by Latitude Craft Chocolate',
          },
          PACKAGE_FRONT: {
            src: '/bars/semuliki-70-latitute-craft-chocolate-package-front.jpg',
            alt: 'Front of Semuliki 70% bar made by Latitude Craft Chocolate package',
          },
          PACKAGE_BACK: {
            src: '/bars/semuliki-70-latitute-craft-chocolate-package-back.jpg',
            alt: 'Back of Semuliki 70% bar made by Latitude Craft Chocolate package',
          },
        },

        barType: 'Dark',
        percent: 70,
        barWeight: 70,
        barDimensions: [149, 70, 6],
        ingredients: ['Organic Cocoa Beans', 'Cane Sugar'],
        facilityAllergen: [
          'Tree Nuts',
          'Wheat',
          'Dairy',
          'Eggs',
          'Peanuts',
          'Soy',
        ],

        packagingType: 'Paper Wrap',
        packagingDimensions: [149, 72, 9],
        wrapper: 'Foil', // Black outside, Silver inside
        marketingTerms: ['Bean to Bar', 'Source'],
        productionCountry: 'Uganda',
        certifiedLabels: ['B Corp'],
        uncertifiedLabels: ['Vegan', 'Direct Trade'],

        retailer: 'Bar & Cocoa',
        location: 'https://barandcocoa.com/',
        retailPrice: 9,
        dateObtained: '2023-01-11',

        reviewerWouldEatAgain: true,

        origin: {
          country: 'Uganda',
          region: 'Bundibugyo District',
          locality: 'Semuliki Forest',
        },
        beanVariety: 'Forestero',

        'categories.lvl0': ['products', 'goods'],
        'categories.lvl1': ['products > fruits', 'goods > to eat'],
      },
    ]

    const client = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
      process.env.ALGOLIA_SEARCH_ADMIN_KEY
    )

    const requests = bars.map((record) => {
      return {
        action: 'addObject',
        objectID: record.id,
        body: record,
      }
    })

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
          'categories',
        ],
        renderingContent: {
          facetOrdering: {
            facets: {
              order: [
                'barType',
                'maker',
                'ingredients',
                'productionCountry',
                'categories',
              ],
            },
            values: {
              barType: {
                order: ['Dark', 'Dark Milk', 'Milk', 'White', 'Flavored'],
              },
              maker: {
                sortRemainingBy: 'alpha',
              },
              ingredients: {
                sortRemainingBy: 'alpha',
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
