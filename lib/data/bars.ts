import { customAlphabet } from 'nanoid'
import { DateString } from '../types'
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
// TODO: Track price and currency. Allow for currency selector for different regions.
// TODO: I18N for labels.
// TODO: Differentiate guess? end with Question Mark?
// TODO: What happens if given bar, still want to list obtained/price right?
// TODO: Shine/Matte/Linen. Colors: Dual-tone, full-color, monotone.
// TODO: Google Structured Data for Product

export interface Image {
  src: `/${string}`
  alt: string
}

export interface Bar {
  id: string
  releaseDate?: DateString
  name: string
  subtitle?: string
  slug: string
  maker: MakerNames
  productUrl?: string

  images: {
    HERO: Image
    BAR_FRONT: Image
    BAR_BACK: Image
    PACKAGE_FRONT: Image
    PACKAGE_BACK: Image
    PACKAGE_INSIDE?: Image
  }

  barType?: 'Dark' | 'Dark Milk' | 'Milk' | 'White'
  percent?: number
  barWeight: number // in grams
  barDimensions: [number, number, number] // as Height, Width, Depth, in mm
  ingredients: Ingridients
  foodAllergen?: Array<string>
  facilityAllergen?: Array<string>
  barDamaged?: boolean
  barBloom?: boolean

  packagingType: string
  packagingDimensions: [number, number, number] // as Height, Width, Depth, in mm
  wrapper?: string
  certifiedLabels?: Array<string>
  uncertifiedLabels?: Array<string>
  marketingTerms?: Array<string>
  tastingNotes?: Array<string>
  insidePrinting?: boolean
  productionLocationHighlighted?: boolean
  packageLanguages?: Array<string>

  retailer: string
  location: string
  retailPrice: number // USD
  dateObtained: string

  favorite?: boolean
  wouldEatAgain: boolean

  origin:
    | OriginNames
    | {
        producer?: string
        town?: string
        region?: string
        country: string
      }
  beanVariety?: string
}

export type Ingredient = string
export type CompoundIngredient = [string, Array<Ingredient>]
export type Ingridients = Array<Ingredient | CompoundIngredient>

const bars: Array<Bar> = [
  {
    id: 'b4c155854a',
    releaseDate: '2023-01-14',
    name: 'Terroir of Lam Dong',
    slug: 'terroir-of-lam-dong-belvie-chocolate',
    maker: 'Belvie Chocolate',
    productUrl: 'http://www.belviechocolate.com/product/terroir-lam-dong/',

    images: {
      HERO: {
        src: '/bars/terroir-of-lam-dong-belvie-chocolate.jpg',
        alt: 'Terroir of Lam Dong bar made by Belvie Chocolate in the pocket of a backpack',
      },
      BAR_FRONT: {
        src: '/bars/terroir-of-lam-dong-belvie-chocolate-bar-front.jpg',
        alt: 'Front of Terroir of Lam Dong bar made by Belvie Chocolate',
      },
      BAR_BACK: {
        src: '/bars/terroir-of-lam-dong-belvie-chocolate-bar-back.jpg',
        alt: 'Back of Terroir of Lam Dong bar made by Belvie Chocolate',
      },
      PACKAGE_FRONT: {
        src: '/bars/terroir-of-lam-dong-belvie-chocolate-package-front.jpg',
        alt: 'Front of Terroir of Lam Dong bar made by Belvie Chocolate package',
      },
      PACKAGE_BACK: {
        src: '/bars/terroir-of-lam-dong-belvie-chocolate-package-back.jpg',
        alt: 'Back of Terroir of Lam Dong bar made by Belvie Chocolate package',
      },
    },

    barType: 'Dark',
    percent: 70,
    barWeight: 80,
    barDimensions: [148, 78, 7],
    ingredients: ['Cacao', 'Cane Sugar'],
    facilityAllergen: ['Nuts'],

    packagingType: 'Paper Wrap',
    packagingDimensions: [149, 79, 7],
    wrapper: 'Foil with Paper Backing',
    marketingTerms: ['Single Terroir', 'above fair trade'],
    uncertifiedLabels: ['Gluten Free', 'Dairy Free'],

    retailer: 'Bar & Cocoa',
    location: 'https://barandcocoa.com/',
    retailPrice: 9,
    dateObtained: '2023-01-11',

    wouldEatAgain: true,

    origin: {
      country: 'Vietnam',
      region: 'Lam Dong',
    },
    beanVariety: 'Trinitario',
  },
  {
    id: '27231b9343',
    releaseDate: '2023-01-13',
    name: 'Peru',
    subtitle: 'Gran Nativo Blanco',
    slug: 'peru-gran-nativo-blanco-rozsavolgyi-csokolade',
    maker: 'Rózsavölgyi Csokoládé',
    productUrl:
      'https://www.rozsavolgyi.com/en/chocolate/single-origin-tablets/104/peru-blanco',

    images: {
      HERO: {
        src: '/bars/peru-gran-nativo-blanco-rozsavolgyi-csokolade.jpg',
        alt: 'Peru Gran Nativo Blanco bar from Rózsavölgyi Csokoládé in a fuzzy off-white fabric',
      },
      BAR_FRONT: {
        src: '/bars/peru-gran-nativo-blanco-rozsavolgyi-csokolade-bar-front.jpg',
        alt: 'Front of Peru Gran Nativo Blanco bar from Rózsavölgyi Csokoládé',
      },
      BAR_BACK: {
        src: '/bars/peru-gran-nativo-blanco-rozsavolgyi-csokolade-bar-back.jpg',
        alt: 'Back of Peru Gran Nativo Blanco bar from Rózsavölgyi Csokoládé',
      },
      PACKAGE_FRONT: {
        src: '/bars/peru-gran-nativo-blanco-rozsavolgyi-csokolade-package-front.jpg',
        alt: 'Front of Peru Gran Nativo Blanco bar from Rózsavölgyi Csokoládé package',
      },
      PACKAGE_BACK: {
        src: '/bars/peru-gran-nativo-blanco-rozsavolgyi-csokolade-package-back.jpg',
        alt: 'Back of Peru Gran Nativo Blanco bar from Rózsavölgyi Csokoládé package',
      },
    },

    barType: 'Dark',
    percent: 72,
    barWeight: 70,
    barDimensions: [112, 110, 6],
    ingredients: ['Cocoa Beans', 'Organic Cane Sugar', 'Organic Cocoa Butter'],
    facilityAllergen: ['Nuts', 'Oats', 'Milk Powder'],

    packagingType: 'Box',
    packagingDimensions: [115, 115, 10],
    wrapper: 'Parchment Paper',
    marketingTerms: ['From cocoa bean to chocolate'],
    packageLanguages: ['English', 'Hungarian'],

    retailer: 'Bar & Cocoa',
    location: 'https://barandcocoa.com/',
    retailPrice: 20,
    dateObtained: '2023-01-11',

    wouldEatAgain: true,
    favorite: true,

    origin: {
      country: 'Peru',
      region: 'Piura',
      producer: 'Norandino Cooperative',
    },
    beanVariety: 'Gran Nativo Blanco',
  },
  {
    id: '44de88bee9',
    releaseDate: '2023-01-12',
    name: '85% Dark Chocolate Bar from Uganda',
    subtitle: 'for Trader Joes',
    slug: '85-dark-chocolate-bar-from-uganda-for-trader-joes-icam-chocolate',
    maker: 'ICAM Chocolate',
    productUrl: 'https://www.traderjoes.com/home/products/pdp/066292',

    images: {
      HERO: {
        src: '/bars/85-dark-chocolate-bar-from-uganda-for-trader-joes-icam-chocolate.jpg',
        alt: '85% Dark Chocolate Bar from Uganda for Trader Joes bar from ICAM Chocolate surrounded by Trader Joes purchases',
      },
      BAR_FRONT: {
        src: '/bars/85-dark-chocolate-bar-from-uganda-for-trader-joes-icam-chocolate-bar-front.jpg',
        alt: 'Front of 85% Dark Chocolate Bar from Uganda for Trader Joes bar from ICAM Chocolate',
      },
      BAR_BACK: {
        src: '/bars/85-dark-chocolate-bar-from-uganda-for-trader-joes-icam-chocolate-bar-back.jpg',
        alt: 'Back of 85% Dark Chocolate Bar from Uganda for Trader Joes bar from ICAM Chocolate',
      },
      PACKAGE_FRONT: {
        src: '/bars/85-dark-chocolate-bar-from-uganda-for-trader-joes-icam-chocolate-package-front.jpg',
        alt: 'Front of 85% Dark Chocolate Bar from Uganda for Trader Joes bar from ICAM Chocolate package',
      },
      PACKAGE_BACK: {
        src: '/bars/85-dark-chocolate-bar-from-uganda-for-trader-joes-icam-chocolate-package-back.jpg',
        alt: 'Back of 85% Dark Chocolate Bar from Uganda for Trader Joes bar from ICAM Chocolate package',
      },
    },

    barType: 'Dark',
    percent: 85,
    barWeight: 100,
    barDimensions: [188, 91, 6],
    ingredients: ['Cocoa Mass', 'Sugar', 'Cocoa Butter'],
    facilityAllergen: [
      'Milk',
      'Soy',
      'Wheat',
      'Almond',
      'Cashew',
      'Coconut',
      'Hazelnut',
      'Pistachio',
    ],

    packagingType: 'Envelope', // Glued. https://www.nuceriagroup.com/
    packagingDimensions: [191, 93, 8],
    wrapper: 'Foil',
    marketingTerms: ['Single Origin'],

    retailer: 'Trader Joes',
    location: 'Hillcrest',
    retailPrice: 1.99,
    dateObtained: '2023-01-11',

    wouldEatAgain: false, // Didnt taste good. Unlikely ethically sourced.

    origin: {
      country: 'Uganda',
      region: 'Bundibugyo District',
      town: 'Semuliki Forest', // TODO: Rename town to something more specific?
    },
    beanVariety: 'Forestero',
  },
  {
    id: 'e1c6587355',
    releaseDate: '2023-01-11',
    name: 'Creamy White Chocolate 38%',
    subtitle: 'a la Flor de Sal',
    slug: 'creamy-white-chocolate-38-a-la-flor-de-sal-sal-de-ibiza',
    maker: 'SAL de IBIZA',
    productUrl:
      'https://www.saldeibiza.com/en/snacks/36-sal-de-ibiza-feinste-weisse-schokolade-80g-4260062060312.html',

    images: {
      HERO: {
        src: '/bars/creamy-white-chocolate-38-a-la-flor-de-sal-sal-de-ibiza.jpg',
        alt: 'Creamy White Chocolate 38% a la Flor de Sal bar from SAL de IBIZA standing up with a blue background',
      },
      BAR_FRONT: {
        src: '/bars/creamy-white-chocolate-38-a-la-flor-de-sal-sal-de-ibiza-bar-front.jpg',
        alt: 'Front of Creamy White Chocolate 38% a la Flor de Sal bar from SAL de IBIZA',
      },
      BAR_BACK: {
        src: '/bars/creamy-white-chocolate-38-a-la-flor-de-sal-sal-de-ibiza-bar-back.jpg',
        alt: 'Back of Creamy White Chocolate 38% a la Flor de Sal bar from SAL de IBIZA',
      },
      PACKAGE_FRONT: {
        src: '/bars/creamy-white-chocolate-38-a-la-flor-de-sal-sal-de-ibiza-package-front.jpg',
        alt: 'Front of Creamy White Chocolate 38% a la Flor de Sal bar from SAL de IBIZA package',
      },
      PACKAGE_BACK: {
        src: '/bars/creamy-white-chocolate-38-a-la-flor-de-sal-sal-de-ibiza-package-back.jpg',
        alt: 'Back of Creamy White Chocolate 38% a la Flor de Sal bar from SAL de IBIZA package',
      },
    },

    barType: 'White',
    percent: 38,
    barWeight: 80,
    barDimensions: [160, 80, 7],
    ingredients: [
      'Organic Raw Cane Sugar',
      'Organic Cocoa Butter',
      'Organic Milk Powder',
      'Sea Salt',
    ],
    foodAllergen: ['Nuts', 'Soy'],

    packagingType: 'Box',
    packagingDimensions: [164, 83, 12],
    wrapper: 'Plastic Wrap',
    marketingTerms: ['Organic', 'Hand-crafted'],

    retailer: 'les amis du FROMAGE',
    location: 'E Hastings',
    retailPrice: 8.27,
    dateObtained: '2022-12-27',

    wouldEatAgain: true,

    origin: {
      country: 'unknown',
    },
    beanVariety: 'Criollo',
  },
  {
    id: 'f45e36f312',
    releaseDate: '2023-01-10',
    name: 'Milk Chocolate & Toasted Hazelnuts',
    subtitle: 'with Gohar World',
    slug: 'milk-chocolate-and-toasted-hazelnuts-with-gohar-world-casa-bosques-chocolates',
    maker: 'Casa Bosques Chocolates',
    productUrl:
      'https://casabosques.co/products/gohar-world-milk-chocolate-and-hazelnuts',

    images: {
      HERO: {
        src: '/bars/milk-chocolate-and-toasted-hazelnuts-with-gohar-world-casa-bosques-chocolates.jpg',
        alt: 'Milk Chocolate & Toasted Hazelnuts with Gohar World bar from Casa Bosques Chocolates cleverly hidden behind a leaf',
      },
      BAR_FRONT: {
        src: '/bars/milk-chocolate-and-toasted-hazelnuts-with-gohar-world-casa-bosques-chocolates-bar-front.jpg',
        alt: 'Front of Milk Chocolate & Toasted Hazelnuts with Gohar World bar from Casa Bosques Chocolates',
      },
      BAR_BACK: {
        src: '/bars/milk-chocolate-and-toasted-hazelnuts-with-gohar-world-casa-bosques-chocolates-bar-back.jpg',
        alt: 'Back of Milk Chocolate & Toasted Hazelnuts with Gohar World bar from Casa Bosques Chocolates',
      },
      PACKAGE_FRONT: {
        src: '/bars/milk-chocolate-and-toasted-hazelnuts-with-gohar-world-casa-bosques-chocolates-package-front.jpg',
        alt: 'Front of Milk Chocolate & Toasted Hazelnuts with Gohar World bar from Casa Bosques Chocolates package',
      },
      PACKAGE_BACK: {
        src: '/bars/milk-chocolate-and-toasted-hazelnuts-with-gohar-world-casa-bosques-chocolates-package-back.jpg',
        alt: 'Back of Milk Chocolate & Toasted Hazelnuts with Gohar World bar from Casa Bosques Chocolates package',
      },
    },

    barType: 'Milk',
    barWeight: 60,
    barDimensions: [66, 138, 13],
    ingredients: [
      'Organic Heirloom Bean Cacao',
      'Powdered Milk',
      'Organic Cacao Butter',
      'Organic Cane Sugar',
      'Toasted Hazelnuts',
    ],
    facilityAllergen: ['Nuts', 'Dairy'],
    foodAllergen: ['Nuts', 'Dairy'], // Inferred from ingredients
    barDamaged: true,

    packagingType: 'Envelope',
    packagingDimensions: [84, 157, 16],
    wrapper: 'Foil with Paper Backing',
    marketingTerms: [
      'Bean to Bar',
      'Organic',
      'Artisanally Made',
      'Single Origin Cacao',
    ],

    retailer: 'Casa Bosques Chocolates',
    location: 'https://casabosques.co',
    retailPrice: 22,
    dateObtained: '2023-01-09',

    wouldEatAgain: true,

    origin: {
      country: 'Mexico',
      region: 'Chiapas',
      town: 'Pichucalco',
    },
    beanVariety: 'Criollo',
  },
  {
    id: '027bdf6bb7',
    releaseDate: '2023-01-09',
    name: 'Sea Salt 70%',
    slug: 'sea-salt-70-fine-and-raw-chocolate',
    maker: 'Fine & Raw Chocolate',
    productUrl:
      'https://www.fineandraw.com/collections/bars/products/sea-salt-bar-brooklyn-bonnie-collection',

    images: {
      HERO: {
        src: '/bars/sea-salt-70-fine-and-raw-chocolate.jpg',
        alt: 'Sea Salt 70% bar from Fine & Raw Chocolate stood up in front of board games',
      },
      BAR_FRONT: {
        src: '/bars/sea-salt-70-fine-and-raw-chocolate-bar-front.jpg',
        alt: 'Front of Sea Salt 70% bar from Fine & Raw Chocolate',
      },
      BAR_BACK: {
        src: '/bars/sea-salt-70-fine-and-raw-chocolate-bar-back.jpg',
        alt: 'Back of Sea Salt 70% bar from Fine & Raw Chocolate',
      },
      PACKAGE_FRONT: {
        src: '/bars/sea-salt-70-fine-and-raw-chocolate-package-front.jpg',
        alt: 'Front of Sea Salt 70% bar from Fine & Raw Chocolate package',
      },
      PACKAGE_BACK: {
        src: '/bars/sea-salt-70-fine-and-raw-chocolate-package-back.jpg',
        alt: 'Back of Sea Salt 70% bar from Fine & Raw Chocolate package',
      },
    },

    barType: 'Dark',
    percent: 70,
    barWeight: 56,
    barDimensions: [159, 76, 6],
    ingredients: [
      'Organic Cacao',
      'Organic Coconut Sugar',
      'Organic Cacao Butter',
      'Sea Salt',
    ],
    facilityAllergen: ['Nuts'],
    barBloom: true,

    packagingType: 'Sleeve',
    packagingDimensions: [160, 76, 6],
    wrapper: 'Foil with Paper Backing',
    marketingTerms: [
      '50% Roast & 50% Raw',
      'Bean to Bar',
      '100% Organic',
      'Ethically Sourced',
      'No Refined Sugar',
      'Plant Based',
    ],
    certifiedLabels: ['Gluten Free', 'Kosher'],

    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 9.5,
    dateObtained: '2022-12-16',

    wouldEatAgain: false, // Not sure if its the bloom or not, but I didn't like it.

    origin: {
      country: 'Unknown',
    },
  },
  {
    id: '65bd8cb329',
    releaseDate: '2023-01-08',
    name: 'Udzungwa 70% with Nibs',
    subtitle: 'Organic Vegan Dark',
    slug: 'udzungwa-70-with-nibs-organic-vegan-dark-original-beans',
    maker: 'Original Beans',
    productUrl: 'https://originalbeans.com/shop/bars/udzungwa-70-chocolate',

    images: {
      HERO: {
        src: '/bars/udzungwa-70-with-nibs-organic-vegan-dark-original-beans.jpg',
        alt: 'Udzungwa 70% with Nibs Organic Vegan Dark bar from Original Beans embedded in a pile of cacao beans',
      },
      BAR_FRONT: {
        src: '/bars/udzungwa-70-with-nibs-organic-vegan-dark-original-beans-bar-front.jpg',
        alt: 'Front of Udzungwa 70% with Nibs Organic Vegan Dark bar from Original Beans with a radiating pattern',
      },
      BAR_BACK: {
        src: '/bars/udzungwa-70-with-nibs-organic-vegan-dark-original-beans-bar-back.jpg',
        alt: 'Back of Udzungwa 70% with Nibs Organic Vegan Dark bar from Original Beans',
      },
      PACKAGE_FRONT: {
        src: '/bars/udzungwa-70-with-nibs-organic-vegan-dark-original-beans-package-front.jpg',
        alt: 'Front of Udzungwa 70% with Nibs Organic Vegan Dark bar from Original Beans package',
      },
      PACKAGE_BACK: {
        src: '/bars/udzungwa-70-with-nibs-organic-vegan-dark-original-beans-package-back.jpg',
        alt: 'Back of Udzungwa 70% with Nibs Organic Vegan Dark bar from Original Beans package',
      },
    },

    barType: 'Dark',
    percent: 70,
    barWeight: 70,
    barDimensions: [155, 75, 8],
    ingredients: [
      'Organic Cacao Mass',
      'Organic Raw Cane Sugar',
      'Organic Cacao Butter',
      'Organic Cacao Beans',
    ],
    facilityAllergen: ['Nuts'],

    packagingType: 'Envelope',
    packagingDimensions: [158, 80, 9],
    wrapper: 'Biodegradable',
    marketingTerms: ['On Bar One Tree', 'Rare', 'Ultra Rare'],
    certifiedLabels: ['Organic'], // CH-BIO-006
    packageLanguages: [
      'English',
      'German',
      'French',
      'Portuguese',
      'Dutch',
      'Danish',
      'Russian',
      'Arabic',
    ],

    retailer: 'Olive Tree Marketplace',
    location: 'Ocean Beach',
    retailPrice: 6.49,
    dateObtained: '2023-01-07',

    wouldEatAgain: false,

    origin: {
      region: 'Udzungwa Park',
      country: 'Tanzania',
    },
    beanVariety: 'Trinitario',
  },
  {
    id: '9548da595f',
    releaseDate: '2023-01-07',
    name: 'Lavender Flowers + Red Salt',
    slug: 'lavender-flowers-plus-red-salt-antidote-chocolate',
    maker: 'Antidote Chocolate',
    productUrl: 'https://antidotechoco.com/products/lavender-red-salt-84',

    images: {
      HERO: {
        src: '/bars/lavender-flowers-plus-red-salt-antidote-chocolate.jpg',
        alt: 'Lavender Flowers + Red Salt bar from Antidote Chocolate floating on a teal background',
      },
      BAR_FRONT: {
        src: '/bars/lavender-flowers-plus-red-salt-antidote-chocolate-bar-front.jpg',
        alt: 'Front of Lavender Flowers + Red Salt bar from Antidote Chocolate with a custom branded bar',
      },
      BAR_BACK: {
        src: '/bars/lavender-flowers-plus-red-salt-antidote-chocolate-bar-back.jpg',
        alt: 'Back of Lavender Flowers + Red Salt bar from Antidote Chocolate',
      },
      PACKAGE_FRONT: {
        src: '/bars/lavender-flowers-plus-red-salt-antidote-chocolate-package-front.jpg',
        alt: 'Front of Lavender Flowers + Red Salt bar from Antidote Chocolate package',
      },
      PACKAGE_BACK: {
        src: '/bars/lavender-flowers-plus-red-salt-antidote-chocolate-package-back.jpg',
        alt: 'Back of Lavender Flowers + Red Salt bar from Antidote Chocolate package',
      },
    },

    barType: 'Dark',
    percent: 84,
    barWeight: 65,
    barDimensions: [155, 62, 8],
    ingredients: [
      'Cacao Beans',
      'Whole Cane Sugar',
      'Cacao Butter',
      'Lavender Flowers',
      'Red Alaea Salt',
      'Sunflower Lecithin',
    ],
    facilityAllergen: ['Milk', 'Soy', 'Nuts'],

    packagingType: 'Box',
    packagingDimensions: [182, 69, 10],
    wrapper: 'Metallised plastic',
    marketingTerms: [
      'Love',
      'Less Sugar',
      'Endorphin Boosting',
      'Minimal Processing',
      'Mood',
      'Female Creator',
    ],
    certifiedLabels: ['Kosher'], // International Kosher Council
    uncertifiedLabels: ['Gluten-free', 'Vegan'],
    productionLocationHighlighted: true,
    packageLanguages: ['English', 'German', 'French'],

    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 7.5,
    dateObtained: '2022-12-16',

    wouldEatAgain: true,

    origin: {
      region: 'Manabi Province',
      country: 'Ecuador',
    },
    beanVariety: 'Arriba Nacional',
  },
  {
    id: 'cdc0143f5b',
    releaseDate: '2023-01-06',
    name: 'Caramel Crack',
    subtitle: 'Organic 50% dark milk chocolate',
    slug: 'caramel-crack-organic-50-dark-milk-chocolate-torroir-chocolate',
    maker: 'Terroir Chocolate',
    productUrl:
      'https://www.tcchocolate.com/products/caramel-crack-60-dark-milk',

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

    wouldEatAgain: true,

    origin: {
      country: 'Unknown',
    },
  },
  {
    id: '2d32855f96',
    releaseDate: '2023-01-05',
    name: 'Dark & Salty',
    subtitle: 'Dark Chocolate & Vanilla-Infused Sea Salt',
    slug: 'dark-and-salty-dark-chocolate-and-vanilla-infused-sea-salt-xocolatl-small-batch-chocolate',
    maker: 'Xocolatl Small Batch Chocolate',
    productUrl: 'https://xocolatlchocolate.com/products/dark-salty',

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

    wouldEatAgain: true,

    origin: {
      country: 'Uganda',
    },
  },
  {
    id: 'dab435f9c9',
    releaseDate: '2023-01-04',
    name: 'Pink Sea Salt',
    subtitle: 'Unroasted Dark Chocolate',
    slug: 'pink-sea-salt-unroasted-dark-chocolate-raaka-chocolate',
    maker: 'Raaka Chocolate',
    productUrl: 'https://www.raakachocolate.com/products/pink-sea-salt',

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

    favorite: true,
    wouldEatAgain: true,

    origin: 'Zorzal Reserve',
  },
  {
    id: 'd8e2e9afee',
    releaseDate: '2023-01-03',
    name: 'Coffee Crunch',
    slug: 'coffee-crunch-olive-and-sinclair-chocolate-co',
    maker: 'Olive & Sinclair Chocolate Co',
    productUrl: 'https://www.oliveandsinclair.com/shop/coffee-chocolate-bar',

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

    wouldEatAgain: true,

    origin: {
      country: 'Dominican Republic',
    },
  },
  {
    id: '3b2e8a2a3d',
    releaseDate: '2023-01-02',
    name: 'Kope X Coffee',
    subtitle: '60% Dark Milk Chocolate & Nibs',
    slug: 'kope-x-coffee-60-dark-milk-chocolate-and-nibs-manoa-chocolate',
    maker: 'Manoa Chocolate',
    productUrl:
      'https://manoachocolate.com/products/breakfast-chocolate-bar-kona-coffee-cacao-nibs',

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

    wouldEatAgain: true,

    origin: {
      country: 'unknown',
    },
  },
  {
    id: '1f81c6b0b3',
    releaseDate: '2023-01-01',
    name: 'Dominican Republic 72%',
    slug: 'dominican-republic-72-schoki-chocolate',
    maker: 'Schoki Chocolate',
    productUrl:
      'https://www.schokichocolate.com/products/dominican-republic-dark-72',

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
    wrapper: 'Foil with Paper Backing',
    marketingTerms: ['Bean to Bar', 'Crafted', 'Ethically Sourced'],
    insidePrinting: true,
    productionLocationHighlighted: true,

    retailer: 'les amis du FROMAGE',
    location: '843 E Hastings St, Vancouver, BC V6A 1R8, Canada',
    retailPrice: 6.96,
    dateObtained: '2022-12-27',

    favorite: true,
    wouldEatAgain: true,

    origin: 'Zorzal Reserve',
  },
]

export default bars
