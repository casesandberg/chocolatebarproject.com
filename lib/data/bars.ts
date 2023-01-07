import { customAlphabet } from 'nanoid'
import { MakerNames } from './makers'
import { OriginNames } from './origins'

// Generate Random ID
const nanoid = customAlphabet('1234567890abcdef', 10)
console.log(nanoid())

// Generate URL Safe Slug
// console.log(urlSlug('Dominican Republic Dark 72% Schoki Chocolate'))

// TODO: Generic ingridients: Cocoa Mass, Sugar, Cocoa Nibs, Strawberries, etc...
// TODO: generate slug and ID when adding
// TODO: Ensure id is unique?
// TODO: Strip location and add copywright to images with URL
// TODO: Workflow for adding images with names to bars.
// TODO: Where does roast-type go?
// TODO: SEO best practices for naming images (bar name + maker?)
// TODO: Track price and currency. Allow for currency selector for different regions.
// TODO: I18N for labels.
// TODO: Differentiate retailer and location purchased??
// TODO: Differentiate guess? end with Question Mark?
// TODO: Location if online? domain?
// TODO: What happens if given bar, still want to list obtained/price right?
// TODO: filter by published: true? last updated date?
// TODO: Packaging print language? Shine/Matte/Linen. Colors: Dual-tone, full-color, monotone.
// TODO: Google Structured Data for Product

export interface Image {
  src: `/${string}`
  alt: string
}

export interface Bar {
  id: string
  name: string
  subtitle?: string
  slug: string
  maker: MakerNames

  images: {
    HERO: Image
    BAR_FRONT: Image
    BAR_BACK: Image
    PACKAGE_FRONT: Image
    PACKAGE_BACK: Image
    PACKAGE_INSIDE?: Image
  }

  barType: 'Dark' | 'Dark Milk' | 'Milk' | 'White'
  percent: number
  barWeight: number // in grams
  barDimensions: [number, number, number] // as Height, Width, Depth, in mm
  ingredients: Array<string | [string, Array<string>]>
  foodAllergen?: Array<string>
  facilityAllergen?: Array<string>
  barDamaged?: boolean

  packagingType: string
  packagingDimensions: [number, number, number] // as Height, Width, Depth, in mm
  wrapper?: string
  certifiedLabels?: Array<string>
  uncertifiedLabels?: Array<string>
  marketingTerms?: Array<string>
  tastingNotes?: Array<string>
  insidePrinting?: boolean
  productionLocationHighlighted?: boolean

  retailer: string
  location: string
  retailPrice: number // USD
  dateObtained: string

  origin:
    | OriginNames
    | {
        producer?: string
        region?: string
        country: string
      }
}

const bars: Array<Bar> = [
  {
    id: 'cdc0143f5b',
    name: 'Caramel Crack',
    subtitle: 'Organic 50% dark milk chocolate',
    slug: 'caramel-crack-organic-50-dark-milk-chocolate-torroir-chocolate',
    maker: 'Terroir Chocolate',

    images: {
      HERO: {
        src: '/bars/caramel-crack-organic-50-dark-milk-chocolate-torroir-chocolate.jpg',
        alt: 'Caramel Crack Organic 50% dark milk chocolate bar from Terroir Chocolate on shattered sugar glass and a red background',
      },
      BAR_FRONT: {
        src: '/bars/caramel-crack-organic-50-dark-milk-chocolate-torroir-chocolate-bar-front.jpg',
        alt: 'Front of Caramel Crack Organic 50% dark milk chocolate bar from Terroir Chocolate with a custom branded bar',
      },
      BAR_BACK: {
        src: '/bars/caramel-crack-organic-50-dark-milk-chocolate-torroir-chocolate-bar-back.jpg',
        alt: 'Back of Caramel Crack Organic 50% dark milk chocolate bar from Terroir Chocolate',
      },
      PACKAGE_FRONT: {
        src: '/bars/caramel-crack-organic-50-dark-milk-chocolate-torroir-chocolate-package-front.jpg',
        alt: 'Front of Caramel Crack Organic 50% dark milk chocolate bar from Terroir Chocolate package',
      },
      PACKAGE_BACK: {
        src: '/bars/caramel-crack-organic-50-dark-milk-chocolate-torroir-chocolate-package-back.jpg',
        alt: 'Back of Caramel Crack Organic 50% dark milk chocolate bar from Terroir Chocolate package',
      },
    },

    barType: 'Dark Milk',
    percent: 50,
    barWeight: 57,
    barDimensions: [150, 76, 5],
    ingredients: [
      'Organic Cocoa Beans',
      'Organic Cane Sugar',
      'Organic Cocoa Butter',
      'Organic Whole Milk Powder',
      [
        'MN Maple Toffee',
        [
          'Organic Cane Sugar',
          'Organic Butter',
          'Organic Maple Syrup',
          'Sea Salt',
        ],
      ],
    ],
    foodAllergen: ['Milk'],
    barDamaged: true,

    packagingType: 'Envelope',
    packagingDimensions: [165, 80, 8],
    wrapper: 'Foil with Paper Backing',
    marketingTerms: [
      'Organic',
      'Tasting Notes',
      'Texture',
      'Finish',
      'Crafted',
      'Bean to Bar',
    ],
    certifiedLabels: ['USDA Organic'], // MCIA
    uncertifiedLabels: ['Gluten-free', 'Soy-free'],
    productionLocationHighlighted: true,

    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 7.5,
    dateObtained: '2022-12-16',

    origin: {
      country: 'Unknown',
    },
  },
  {
    id: '2d32855f96',
    name: 'Dark & Salty',
    subtitle: 'Dark Chocolate & Vanilla-Infused Sea Salt',
    slug: 'dark-and-salty-dark-chocolate-and-vanilla-infused-sea-salt-xocolatl-small-batch-chocolate',
    maker: 'Xocolatl Small Batch Chocolate',

    images: {
      HERO: {
        src: '/bars/dark-and-salty-dark-chocolate-and-vanilla-infused-sea-salt-xocolatl-small-batch-chocolate.jpg',
        alt: 'Dark & Salty Dark Chocolate & Vanilla-Infused Sea Salt bar from Xocolatl Small Batch Chocolate in cast iron pan with salt',
      },
      BAR_FRONT: {
        src: '/bars/dark-and-salty-dark-chocolate-and-vanilla-infused-sea-salt-xocolatl-small-batch-chocolate-bar-front.jpg',
        alt: 'Front of Dark & Salty Dark Chocolate & Vanilla-Infused Sea Salt bar from Xocolatl Small Batch Chocolate with a custom branded bar',
      },
      BAR_BACK: {
        src: '/bars/dark-and-salty-dark-chocolate-and-vanilla-infused-sea-salt-xocolatl-small-batch-chocolate-bar-back.jpg',
        alt: 'Back of Dark & Salty Dark Chocolate & Vanilla-Infused Sea Salt bar from Xocolatl Small Batch Chocolate',
      },
      PACKAGE_FRONT: {
        src: '/bars/dark-and-salty-dark-chocolate-and-vanilla-infused-sea-salt-xocolatl-small-batch-chocolate-package-front.jpg',
        alt: 'Front of Dark & Salty Dark Chocolate & Vanilla-Infused Sea Salt bar from Xocolatl Small Batch Chocolate package',
      },
      PACKAGE_BACK: {
        src: '/bars/dark-and-salty-dark-chocolate-and-vanilla-infused-sea-salt-xocolatl-small-batch-chocolate-package-back.jpg',
        alt: 'Back of Dark & Salty Dark Chocolate & Vanilla-Infused Sea Salt bar from Xocolatl Small Batch Chocolate package',
      },
    },

    barType: 'Dark',
    percent: 80,
    barWeight: 75,
    barDimensions: [148, 72, 7],
    ingredients: [
      'Organic Cacao',
      'Organic Cane Sugar',
      'Vanilla-infused Sea Salt',
    ],
    facilityAllergen: ['Peanuts', 'Tree Nuts'],

    packagingType: 'Paper Wrap',
    packagingDimensions: [152, 76, 10],
    wrapper: 'Foil with Paper Backing',
    marketingTerms: ['Small Batch', 'Fair Trade'],
    uncertifiedLabels: ['Gluten-free', 'Soy-free', 'Dairy-free'],
    productionLocationHighlighted: true,

    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 10,
    dateObtained: '2022-12-16',

    origin: {
      country: 'Uganda',
    },
  },
  {
    id: 'dab435f9c9',
    name: 'Pink Sea Salt',
    subtitle: 'Unroasted Dark Chocolate',
    slug: 'pink-sea-salt-unroasted-dark-chocolate-raaka-chocolate',
    maker: 'Raaka Chocolate',

    images: {
      HERO: {
        src: '/bars/pink-sea-salt-unroasted-dark-chocolate-raaka-chocolate.jpg',
        alt: 'Pink Sea Salt Unroasted Dark Chocolate bar from Raaka Chocolate on rippled linen tablecloth',
      },
      BAR_FRONT: {
        src: '/bars/pink-sea-salt-unroasted-dark-chocolate-raaka-chocolate-bar-front.jpg',
        alt: 'Front of Pink Sea Salt Unroasted Dark Chocolate bar from Raaka Chocolate with a custom branded bar',
      },
      BAR_BACK: {
        src: '/bars/pink-sea-salt-unroasted-dark-chocolate-raaka-chocolate-bar-back.jpg',
        alt: 'Back of Pink Sea Salt Unroasted Dark Chocolate bar from Raaka Chocolate',
      },
      PACKAGE_FRONT: {
        src: '/bars/pink-sea-salt-unroasted-dark-chocolate-raaka-chocolate-package-front.jpg',
        alt: 'Front of Pink Sea Salt Unroasted Dark Chocolate bar from Raaka Chocolate package',
      },
      PACKAGE_BACK: {
        src: '/bars/pink-sea-salt-unroasted-dark-chocolate-raaka-chocolate-package-back.jpg',
        alt: 'Back of Pink Sea Salt Unroasted Dark Chocolate bar from Raaka Chocolate package',
      },
    },

    barType: 'Dark',
    percent: 71,
    barWeight: 51,
    barDimensions: [134, 61, 6],
    ingredients: [
      'Organic Cacao Beans',
      'Organic Cane Sugar',
      'Organic Maple Sugar',
      'Organic Cocoa Butter',
      'Peruvian Pink Sea Salt',
    ],

    packagingType: 'Paper Wrap',
    packagingDimensions: [136, 63, 7],
    wrapper: 'Foil with Paper Backing',
    marketingTerms: ['Bean to Bar', 'Unroasted', 'Transparent'],
    certifiedLabels: ['Non GMO', 'USDA Organic', 'Transparent Trade'],
    uncertifiedLabels: ['Vegan', 'Gluten Free', 'Soy Free', 'Nut Free'],
    productionLocationHighlighted: true,

    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 7,
    dateObtained: '2022-12-16',

    origin: 'Zorzal Reserve',
  },
  {
    id: 'd8e2e9afee',
    name: 'Coffee Crunch',
    slug: 'coffee-crunch-olive-and-sinclair-chocolate-co',
    maker: 'Olive & Sinclair Chocolate Co',

    images: {
      HERO: {
        src: '/bars/coffee-crunch-olive-and-sinclair-chocolate-co.jpg',
        alt: 'Coffee Crunch bar from Olive & Sinclair Chocolate Co on a marble table with a laptop and coffee cup',
      },
      BAR_FRONT: {
        src: '/bars/coffee-crunch-olive-and-sinclair-chocolate-co-bar-front.jpg',
        alt: 'Front of Coffee Crunch bar from Olive & Sinclair Chocolate Co with a custom branded bar',
      },
      BAR_BACK: {
        src: '/bars/coffee-crunch-olive-and-sinclair-chocolate-co-bar-back.jpg',
        alt: 'Back of Coffee Crunch bar from Olive & Sinclair Chocolate Co',
      },
      PACKAGE_FRONT: {
        src: '/bars/coffee-crunch-olive-and-sinclair-chocolate-co-package-front.jpg',
        alt: 'Front of Coffee Crunch bar from Olive & Sinclair Chocolate Co package',
      },
      PACKAGE_BACK: {
        src: '/bars/coffee-crunch-olive-and-sinclair-chocolate-co-package-back.jpg',
        alt: 'Back of Coffee Crunch bar from Olive & Sinclair Chocolate Co package',
      },
    },

    barType: 'Dark', // Not listed, inferred from percent
    percent: 67,
    barWeight: 71,
    barDimensions: [94, 132, 7],
    ingredients: ['Cacao Beans', 'Brown Sugar', 'Coffee Beans'],
    foodAllergen: ['Nuts'],

    packagingType: 'Box',
    packagingDimensions: [98, 135, 10],
    wrapper: 'Metallised plastic',
    marketingTerms: [
      'Small Batch',
      'Artisan',
      'Slow Roasted',
      'Stone Ground',
      'Hand Crafted',
    ],
    uncertifiedLabels: ['Non GMO', 'All Natural', 'Gluten Free'],
    productionLocationHighlighted: true,

    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 7,
    dateObtained: '2022-12-16',

    origin: {
      country: 'Dominican Republic',
    },
  },
  {
    id: '3b2e8a2a3d',
    name: 'Kope X Coffee',
    subtitle: '60% Dark Milk Chocolate & Nibs',
    slug: 'kope-x-coffee-60-dark-milk-chocolate-and-nibs-manoa-chocolate',
    maker: 'Manoa Chocolate',

    images: {
      HERO: {
        src: '/bars/kope-coffee-60-dark-milk-chocolate-nibs-manoa-chocolate.jpg',
        alt: 'Kope Coffee 60% Dark Milk Chocolate & Nibs bar from Manoa Chocolate exploded with nibs on a brown background',
      },
      BAR_FRONT: {
        src: '/bars/kope-coffee-60-dark-milk-chocolate-nibs-manoa-chocolate-bar-front.jpg',
        alt: 'Front of Kope Coffee 60% Dark Milk Chocolate & Nibs bar from Manoa Chocolate with a geometric triangle pattern',
      },
      BAR_BACK: {
        src: '/bars/kope-coffee-60-dark-milk-chocolate-nibs-manoa-chocolate-bar-back.jpg',
        alt: 'Back of Kope Coffee 60% Dark Milk Chocolate & Nibs bar from Manoa Chocolate',
      },
      PACKAGE_FRONT: {
        src: '/bars/kope-coffee-60-dark-milk-chocolate-nibs-manoa-chocolate-package-front.jpg',
        alt: 'Front of Kope Coffee 60% Dark Milk Chocolate & Nibs bar from Manoa Chocolate package',
      },
      PACKAGE_BACK: {
        src: '/bars/kope-coffee-60-dark-milk-chocolate-nibs-manoa-chocolate-package-back.jpg',
        alt: 'Back of Kope Coffee 60% Dark Milk Chocolate & Nibs bar from Manoa Chocolate package',
      },
    },

    barType: 'Dark Milk',
    percent: 60,
    barWeight: 60,
    barDimensions: [141, 73, 7],
    ingredients: [
      'Cacao',
      'Organic Cane Sugar',
      'Organic Whole Milk Powder',
      'Cocoa Butter',
      'Hawaiian Coffee',
    ],
    facilityAllergen: ['Dairy', 'Nuts'],

    packagingType: 'Envelope',
    packagingDimensions: [158, 90, 9],
    wrapper: 'Plant-based Cellulose',
    marketingTerms: [
      'Bean to Bar',
      'Pairings',
      'Artwork by',
      'Biodegradable',
      'Recycled',
    ],
    insidePrinting: true,
    productionLocationHighlighted: true,

    retailer: 'Kilauea Market + Cafe',
    location: '2555 Ala Namahana Pkwy B1, Kilauea, HI 96754',
    retailPrice: 10,
    dateObtained: '2022-12-5',

    origin: {
      country: 'unknown',
    },
  },
  {
    id: '1f81c6b0b3',
    name: 'Dominican Republic 72%',
    slug: 'dominican-republic-72-schoki-chocolate',
    maker: 'Schoki Chocolate',

    images: {
      HERO: {
        src: '/bars/dominican-republic-dark-72-schoki-chocolate.jpg',
        alt: 'Dominican Republic Dark 72% bar from Schoki Chocolate on a green background',
      },
      BAR_FRONT: {
        src: '/bars/dominican-republic-dark-72-schoki-chocolate-bar-front.jpg',
        alt: 'Front of Dominican Republic Dark 72% bar from Schoki Chocolate with a traditional mold pattern',
      },
      BAR_BACK: {
        src: '/bars/dominican-republic-dark-72-schoki-chocolate-bar-back.jpg',
        alt: 'Back of Dominican Republic Dark 72% bar from Schoki Chocolate',
      },
      PACKAGE_FRONT: {
        src: '/bars/dominican-republic-dark-72-schoki-chocolate-package-front.jpg',
        alt: 'Front of Dominican Republic Dark 72% bar from Schoki Chocolate package',
      },
      PACKAGE_BACK: {
        src: '/bars/dominican-republic-dark-72-schoki-chocolate-package-back.jpg',
        alt: 'Back of Dominican Republic Dark 72% bar from Schoki Chocolate package',
      },
    },

    barType: 'Dark',
    percent: 72,
    barWeight: 65,
    barDimensions: [0, 0, 0],
    ingredients: [
      'Organic Cacao Beans',
      'Organic Cane Sugar',
      'Organic Cocoa Butter',
    ],
    facilityAllergen: ['Peanuts', 'Tree Nuts', 'Dairy'],

    packagingType: 'Envelope',
    packagingDimensions: [155, 76, 8],
    wrapper: 'Foil',
    marketingTerms: ['Bean to Bar', 'Crafted', 'Ethically Sourced'],
    insidePrinting: true,
    productionLocationHighlighted: true,

    retailer: 'les amis du FROMAGE',
    location: '843 E Hastings St, Vancouver, BC V6A 1R8, Canada',
    retailPrice: 6.96,
    dateObtained: '2022-12-27',

    origin: 'Zorzal Reserve',
  },
]

export default bars
