import { DateString } from '../types'
import { MakerNames } from './makers'
import { OriginNames } from './origins'

// Generate Random ID
// const nanoid = customAlphabet('1234567890abcdef', 10)
// console.log(nanoid())

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

export interface Award {
  body: string
  level: string
  year: number
}

export interface Bar {
  id: string
  releaseDate?: DateString
  name: string
  subtitle?: string
  description?: string | Array<string>
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

  barType?: 'Dark' | 'Dark Milk' | 'Milk' | 'White' | 'Flavored'
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
  awards?: Array<Award>
  productionCountry: string
  mentionsRecycleOrCompost?: boolean

  retailer: string
  location: string
  retailPrice: number // USD
  dateObtained: string

  reviewerBarFavorite?: boolean
  reviewerBarNotes?: string
  reviewerWouldEatAgain: boolean
  reviewerPackagingFavorite?: boolean
  reviewerPackagingNotes?: string

  origin:
    | OriginNames
    | {
        producer?: string // Supplier?
        locality?: string
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
    id: 'f7636346e6',
    releaseDate: '2023-02-12',
    name: 'Japan Sea Salt',
    subtitle: 'Chocolate Bar',
    maker: 'Ranger Chocolate Co',
    slug: 'japan-sea-salt-chocolate-bar-ranger-chocolate-co',
    productUrl: 'https://rangerchocolate.co/shop/wa/shop?id=13&e=KHCItem',
    productionCountry: 'United States',
    description: [
      `"Our Japan Sea Salt Chocolate Bar is one of three bars in our sea salt adventure series - where we explore salt harvested from the Pacific Ocean. We teamed up with our friends at Bitterman Salt Co to pair the exquisite Japanese Hana Flake Sea Salt with cacao beans from the Semuliki Forest in Uganda. Sea salt is turned into the chocolate to add texture and retain its true flavor."`,
    ],

    images: {
      HERO: {
        src: '/bars/japan-sea-salt-chocolate-bar-ranger-chocolate-co.jpg',
        alt: 'Japan Sea Salt Chocolate bar made by Ranger Chocolate Co in the United States in a bookshelf',
      },
      BAR_FRONT: {
        src: '/bars/japan-sea-salt-chocolate-bar-ranger-chocolate-co-bar-front.jpg',
        alt: 'Front of Japan Sea Salt Chocolate bar made by Ranger Chocolate Co in the United States',
      },
      BAR_BACK: {
        src: '/bars/japan-sea-salt-chocolate-bar-ranger-chocolate-co-bar-back.jpg',
        alt: 'Back of Japan Sea Salt Chocolate bar made by Ranger Chocolate Co in the United States',
      },
      PACKAGE_FRONT: {
        src: '/bars/japan-sea-salt-chocolate-bar-ranger-chocolate-co-package-front.jpg',
        alt: 'Front of Japan Sea Salt Chocolate bar made by Ranger Chocolate Co in the United States package',
      },
      PACKAGE_BACK: {
        src: '/bars/japan-sea-salt-chocolate-bar-ranger-chocolate-co-package-back.jpg',
        alt: 'Back of Japan Sea Salt Chocolate bar made by Ranger Chocolate Co in the United States package',
      },
    },

    barWeight: 64,
    barDimensions: [140, 57, 8],
    ingredients: ['Organic Cacao', 'Organic Sugar', 'Cacao Butter', 'Sea Salt'],

    packagingType: 'Envelope',
    packagingDimensions: [152, 78, 10],
    wrapper: 'Foil with Paper Backing', // Silver
    marketingTerms: ['Paired'],

    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 7,
    dateObtained: '2023-01-31',

    reviewerWouldEatAgain: true,

    origin: {
      country: 'Uganda',
      region: 'Bundibugyo District',
      locality: 'Semuliki Forest',
    },
    beanVariety: 'Forestero',
  },
  {
    id: '851d4b05ac',
    releaseDate: '2023-02-11',
    name: 'Dominican Rum',
    subtitle: 'Finca Elvesia',
    maker: 'definite chocolate',
    slug: 'dominic-rum-finca-elvesia-definite-chocolate',
    productUrl:
      'https://definitechocolate.com/products/domincan-rum-75-finca-elvesia',
    productionCountry: 'Dominican Republic',
    description: [
      `"This chocolate bar was infused with rum from Brugal. Let this bar melt slowly on your tongue and feel the flavor of the rum in your mouth.`,
      `The cacao used for this chocolate comes from Finca Elvesia, a plantation located in the northeastern part of the Dominican Republic which was established in the 19th century. It became the largest cacao plantation in the Caribbean and had even its own railroad system for the transportation of the cacao to the port.`,
      `The tasting notes of this chocolate are dried fruits and molasses."`,
    ],

    images: {
      HERO: {
        src: '/bars/dominic-rum-finca-elvesia-definite-chocolate.jpg',
        alt: 'Dominican Rum Finca Elvesia bar made by definite chocolate in the Dominican Republic hanging on a wall with a to go bag',
      },
      BAR_FRONT: {
        src: '/bars/dominic-rum-finca-elvesia-definite-chocolate-bar-front.jpg',
        alt: 'Front of Dominican Rum Finca Elvesia bar made by definite chocolate in the Dominican Republic',
      },
      BAR_BACK: {
        src: '/bars/dominic-rum-finca-elvesia-definite-chocolate-bar-back.jpg',
        alt: 'Back of Dominican Rum Finca Elvesia bar made by definite chocolate in the Dominican Republic',
      },
      PACKAGE_FRONT: {
        src: '/bars/dominic-rum-finca-elvesia-definite-chocolate-package-front.jpg',
        alt: 'Front of Dominican Rum Finca Elvesia bar made by definite chocolate in the Dominican Republic package',
      },
      PACKAGE_BACK: {
        src: '/bars/dominic-rum-finca-elvesia-definite-chocolate-package-back.jpg',
        alt: 'Back of Dominican Rum Finca Elvesia bar made by definite chocolate in the Dominican Republic package',
      },
    },

    barType: 'Dark',
    percent: 75,
    barWeight: 60,
    barDimensions: [145, 70, 6],
    ingredients: ['Organic Cacao Beans', 'Organic Cane Sugar', 'Rum'],

    packagingType: 'Envelope',
    packagingDimensions: [152, 78, 10],
    wrapper: 'Plastic Bag',
    marketingTerms: [
      'Single Origin',
      'Organic',
      'Family Run',
      'Micro Batch',
      'Bean to Bar',
      'Tasting Notes',
    ],
    tastingNotes: ['Dried Fruits', 'Molasses'],
    insidePrinting: true,
    packageLanguages: ['English', 'Spanish'],

    retailer: 'Bar & Cocoa',
    location: 'https://barandcocoa.com/',
    retailPrice: 9.0,
    dateObtained: '2023-01-11',

    reviewerWouldEatAgain: true,

    origin: {
      producer: 'Finca Elvesia', // https://barandcocoa.com/collections/estate-finca-elvesia
      locality: 'El Valle',
      region: 'Hato Mayor',
      country: 'Dominican Republic',
    },
  },
  {
    id: '4590fdbbff',
    releaseDate: '2023-02-10',
    name: 'Dark Horse Coffee',
    subtitle: 'Dark Chocolate',
    maker: 'Nibble Chocolate',
    slug: 'dark-horse-coffee-dark-chocolate-nibble-chocolate',
    productUrl:
      'https://nibblechocolate.com/products/nibble-brazil-72-infused-coffee',
    productionCountry: 'United States',
    description: `"Just the right amount of coffee and chocolate to create a super smooth, balanced and awakening bar. Coffee was provided by our amazing local partner Dark Horse Coffee Roasters featuring Brazil as our single origin for the cacao and the coffee."`,

    images: {
      HERO: {
        src: '/bars/dark-horse-coffee-dark-chocolate-nibble-chocolate.jpg',
        alt: 'Dark Horse Coffee Dark Chocolate bar made by Nibble Chocolate in the United States on a table with dark horse coffee and a pastry',
      },
      BAR_FRONT: {
        src: '/bars/dark-horse-coffee-dark-chocolate-nibble-chocolate-bar-front.jpg',
        alt: 'Front of Dark Horse Coffee Dark Chocolate bar made by Nibble Chocolate in the United States',
      },
      BAR_BACK: {
        src: '/bars/dark-horse-coffee-dark-chocolate-nibble-chocolate-bar-back.jpg',
        alt: 'Back of Dark Horse Coffee Dark Chocolate bar made by Nibble Chocolate in the United States',
      },
      PACKAGE_FRONT: {
        src: '/bars/dark-horse-coffee-dark-chocolate-nibble-chocolate-package-front.jpg',
        alt: 'Front of Dark Horse Coffee Dark Chocolate bar made by Nibble Chocolate in the United States package',
      },
      PACKAGE_BACK: {
        src: '/bars/dark-horse-coffee-dark-chocolate-nibble-chocolate-package-back.jpg',
        alt: 'Back of Dark Horse Coffee Dark Chocolate bar made by Nibble Chocolate in the United States package',
      },
    },

    barType: 'Dark',
    barWeight: 65,
    percent: 72,
    barDimensions: [106, 106, 5],
    ingredients: [
      'Organic Cocoa Beans',
      'Organic Cane Sugar',
      'Organic Cocoa Butter',
      'Coffee',
      'Organic Vanilla',
      'Sea Salt',
    ],

    packagingType: 'Envelope',
    packagingDimensions: [123, 123, 9],
    wrapper: 'Plastic Bag',
    marketingTerms: ['Single Origin', 'Art', 'Quality'],

    retailer: 'Nibble Chocolate',
    location: 'Hillcrest Farmers Market',
    retailPrice: 6,
    dateObtained: '2023-02-05',

    reviewerWouldEatAgain: true,
    reviewerPackagingNotes: 'Bar arrived broken.',

    origin: {
      // small family estate https://nibblechocolate.com/collections/brazil
      region: 'Bahia',
      country: 'Brazil',
    },
    beanVariety: 'Trinitario',
  },
  {
    id: '6efd363c4f',
    releaseDate: '2023-02-09',
    name: '70% Rio Claro',
    subtitle: 'Dark Chocolate',
    maker: 'Solstice Chocolate',
    slug: '70-rio-claro-dark-chocolate-solstice-chocolate',
    productUrl: 'https://www.solsticechocolate.com/shop/trini',
    productionCountry: 'United States',
    description: `"Our new micro-batch is made with exclusive cacao grown in Rio Claro-Mayaro Trinidad.  The results are a lovely bar with notes of pie crust, almonds, and berries."`,

    images: {
      HERO: {
        src: '/bars/70-rio-claro-dark-chocolate-solstice-chocolate.jpg',
        alt: '70% Rio Claro Dark Chocolate bar made by Solstice Chocolate in the United States floating on a gradient blue background',
      },
      BAR_FRONT: {
        src: '/bars/70-rio-claro-dark-chocolate-solstice-chocolate-bar-front.jpg',
        alt: 'Front of 70% Rio Claro Dark Chocolate bar made by Solstice Chocolate in the United States',
      },
      BAR_BACK: {
        src: '/bars/70-rio-claro-dark-chocolate-solstice-chocolate-bar-back.jpg',
        alt: 'Back of 70% Rio Claro Dark Chocolate bar made by Solstice Chocolate in the United States',
      },
      PACKAGE_FRONT: {
        src: '/bars/70-rio-claro-dark-chocolate-solstice-chocolate-package-front.jpg',
        alt: 'Front of 70% Rio Claro Dark Chocolate bar made by Solstice Chocolate in the United States package',
      },
      PACKAGE_BACK: {
        src: '/bars/70-rio-claro-dark-chocolate-solstice-chocolate-package-back.jpg',
        alt: 'Back of 70% Rio Claro Dark Chocolate bar made by Solstice Chocolate in the United States package',
      },
    },

    barType: 'Dark',
    barWeight: 65,
    percent: 70,
    barDimensions: [147, 69, 6],
    ingredients: ['Cacao Bean', 'Organic Cane Sugar', 'Cocoa Butter'],

    packagingType: 'Box',
    packagingDimensions: [154, 81, 9],
    wrapper: 'Plastic Bag',
    marketingTerms: [
      'Bean to Bar',
      'Handcrafted',
      'Limited Edition',
      'Tasting Notes',
    ],
    tastingNotes: ['Berries', 'Pie Crust', 'Almonds'],

    retailer: 'Solstice Chocolate',
    location: 'https://www.solsticechocolate.com',
    retailPrice: 16,
    dateObtained: '2023-01-28',

    reviewerWouldEatAgain: true,
    reviewerPackagingFavorite: true,
    reviewerBarNotes: 'Both the bar and the box',

    origin: {
      region: 'Rio Claro',
      country: 'Trinidad',
    },
  },
  {
    id: '1790a9b3fd',
    releaseDate: '2023-02-08',
    name: 'Peanut Butter',
    subtitle: 'Dark Chocolate',
    maker: 'Maverick Chocolate Co',
    slug: 'peanut-butter-dark-chocolate-maverick-chocolate-co',
    productUrl:
      'https://maverickchocolate.com/products/peanut-butter-dark-chocolate',
    productionCountry: 'United States',
    description: `"This is our third batch of Peanut Butter Dark Chocolate and I think we perfected it. We increased the peanut butter in the recipe... a lot! And we changed the cocoa beans to our Ecuador and Tanzania cocoa beans to reduce the fruit note. The result is a delicious balance of dark chocolate and peanut butter!"`,

    images: {
      HERO: {
        src: '/bars/peanut-butter-dark-chocolate-maverick-chocolate-co.jpg',
        alt: 'Peanut Butter Dark Chocolate bar made by Maverick Chocolate Co in the United States on an orange background with peanuts',
      },
      BAR_FRONT: {
        src: '/bars/peanut-butter-dark-chocolate-maverick-chocolate-co-bar-front.jpg',
        alt: 'Front of Peanut Butter Dark Chocolate bar made by Maverick Chocolate Co in the United States',
      },
      BAR_BACK: {
        src: '/bars/peanut-butter-dark-chocolate-maverick-chocolate-co-bar-back.jpg',
        alt: 'Back of Peanut Butter Dark Chocolate bar made by Maverick Chocolate Co in the United States',
      },
      PACKAGE_FRONT: {
        src: '/bars/peanut-butter-dark-chocolate-maverick-chocolate-co-package-front.jpg',
        alt: 'Front of Peanut Butter Dark Chocolate bar made by Maverick Chocolate Co in the United States package',
      },
      PACKAGE_BACK: {
        src: '/bars/peanut-butter-dark-chocolate-maverick-chocolate-co-package-back.jpg',
        alt: 'Back of Peanut Butter Dark Chocolate bar made by Maverick Chocolate Co in the United States package',
      },
    },

    barType: 'Dark',
    barWeight: 65,
    barDimensions: [148, 60, 9],
    ingredients: [
      'Organic Cocoa Beans',
      'Organic Cane Sugar',
      ['Peanut Butter', ['Roasted Peanuts', 'Salt']],
      'Organic Cocoa Butter',
    ],

    packagingType: 'Envelope',
    packagingDimensions: [174, 79, 12],
    wrapper: 'Plastic Bag',
    marketingTerms: [
      'Bean to Bar',
      'Hand Crafted',
      'Small Batch',
      'Elevating the Chocolate Standard',
    ],
    facilityAllergen: [
      'Milk',
      'Eggs',
      'Wheat',
      'Peanuts',
      'Almonds',
      'Coconut',
      'Hazelnuts',
    ],
    insidePrinting: true,

    retailer: 'Maverick Chocolate Co',
    location: 'https://maverickchocolate.com',
    retailPrice: 12,
    dateObtained: '2023-01-28',

    reviewerWouldEatAgain: true,
    reviewerBarFavorite: true,
    reviewerBarNotes: 'So tasty.',

    origin: {
      country: 'Ecuador and Tanzania',
    },
  },
  {
    id: '90aa882d1e',
    releaseDate: '2023-02-07',
    name: 'Brain Food',
    maker: 'MARKHAM & FITZ',
    slug: 'brain-food-markham-fitz-chocolate-makers',
    productUrl: 'https://markhamandfitz.com/products/brainfood',
    productionCountry: 'United States',
    description: [
      `"Surprisingly sweet for an 85% dark chocolate, this natural superfood is loaded with healthy theobromine and antioxidants.`,
      `Dark chocolate blended with blueberry, maca root & a̤çai berry powders, and topped with wild organic blueberries, almonds & cashews for the ultimate cognitive boost.`,
      `Perfectly dark without the bite."`,
    ],

    images: {
      HERO: {
        src: '/bars/brain-food-markham-fitz-chocolate-makers.jpg',
        alt: 'Brain Food bar made by MARKHAM & FITZ in the United States on with simple leaves on a tan background',
      },
      BAR_FRONT: {
        src: '/bars/brain-food-markham-fitz-chocolate-makers-bar-front.jpg',
        alt: 'Front of Brain Food bar made by MARKHAM & FITZ in the United States',
      },
      BAR_BACK: {
        src: '/bars/brain-food-markham-fitz-chocolate-makers-bar-back.jpg',
        alt: 'Back of Brain Food bar made by MARKHAM & FITZ in the United States',
      },
      PACKAGE_FRONT: {
        src: '/bars/brain-food-markham-fitz-chocolate-makers-package-front.jpg',
        alt: 'Front of Brain Food bar made by MARKHAM & FITZ in the United States package',
      },
      PACKAGE_BACK: {
        src: '/bars/brain-food-markham-fitz-chocolate-makers-package-back.jpg',
        alt: 'Back of Brain Food bar made by MARKHAM & FITZ in the United States package',
      },
    },

    barType: 'Dark',
    percent: 85,
    barWeight: 57,
    barDimensions: [149, 74, 7],
    ingredients: [
      'Organic Cacao',
      'Organic Cane Sugar',
      'Organic Blueberries',
      'Almonds',
      'Cashews',
      'Organic Blueberry Powder',
      'Organic Acai Powder',
      'Organic Maca Powder',
    ],

    packagingType: 'Envelope',
    packagingDimensions: [168, 101, 11],
    wrapper: 'Compostable Bag',
    marketingTerms: [
      'Nourish',
      'Ethical Sourcing',
      'Sustainability',
      'Natural Superfood',
      'Cognitive Boost',
      'Pairs well with',
    ],
    facilityAllergen: ['Dairy', 'Nuts'],
    foodAllergen: ['Nuts'],
    mentionsRecycleOrCompost: true,

    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 10,
    dateObtained: '2023-01-31',

    reviewerWouldEatAgain: true,

    origin: {
      producer: 'Öko Caribe', // Supplier. See: https://www.uncommoncacao.com/okocaribe
      region: 'Duarte Province',
      country: 'Dominican Republic',
    },
  },
  {
    id: 'a81817c167',
    releaseDate: '2023-02-06',
    name: 'Vegan White Bar',
    subtitle: 'With Organic Vanilla',
    maker: 'Pascha Chocolate Co',
    slug: 'vegan-white-bar-with-organic-vanilla-pascha-chocolate-co',
    productionCountry: 'Peru',
    productUrl:
      'https://paschachocolate.com/collections/dark-chocolate-bars/products/new-product-pascha-white-bar-48-cacao-vegan-white-chocolate-alternative-2-8-oz-bar',
    description: `"Seriously...A DAIRY-FREE White Bar! YAY! A vegan, organic white chocolate alternative, made with organic cocoa butter and using rice milk instead of dairy milk. We include a little vanilla to round out the yummy flavor of the organic cocoa butter. Made from the bean at the source in Peru, traveling from the growing region to the manufacturing plant so it's practically tree-to-bar. Keep it simple..Just say yes."`,

    images: {
      HERO: {
        src: '/bars/vegan-white-bar-with-organic-vanilla-pascha-chocolate-co.jpg',
        alt: 'Vegan White Bar With Organic Vanilla bar made by Pascha Chocolate Co in Peru on a geometric red background',
      },
      BAR_FRONT: {
        src: '/bars/vegan-white-bar-with-organic-vanilla-pascha-chocolate-co-bar-front.jpg',
        alt: 'Front of Vegan White Bar With Organic Vanilla bar made by Pascha Chocolate Co in Peru',
      },
      BAR_BACK: {
        src: '/bars/vegan-white-bar-with-organic-vanilla-pascha-chocolate-co-bar-back.jpg',
        alt: 'Back of Vegan White Bar With Organic Vanilla bar made by Pascha Chocolate Co in Peru',
      },
      PACKAGE_FRONT: {
        src: '/bars/vegan-white-bar-with-organic-vanilla-pascha-chocolate-co-package-front.jpg',
        alt: 'Front of Vegan White Bar With Organic Vanilla bar made by Pascha Chocolate Co in Peru package',
      },
      PACKAGE_BACK: {
        src: '/bars/vegan-white-bar-with-organic-vanilla-pascha-chocolate-co-package-back.jpg',
        alt: 'Back of Vegan White Bar With Organic Vanilla bar made by Pascha Chocolate Co in Peru package',
      },
    },

    barType: 'White',
    barWeight: 80,
    barDimensions: [151, 72, 7],
    ingredients: [
      'Organic Cocoa Butter',
      'Organic Cane Sugar',
      'Organic Tapioca Starch',
      'Organic Rice Syrup Solids',
      'Organic Rice Maltodextrin',
      'Organic Vanilla',
      'Salt',
    ],

    packagingType: 'Box',
    packagingDimensions: [165, 80, 12],
    wrapper: 'Metallised plastic', // Silver printed
    marketingTerms: ['Dairy-free', 'Plant-based', 'Bean to Bar', 'Certified'],

    retailer: 'Lazy Acres',
    location: 'Hillcrest',
    retailPrice: 3.29,
    dateObtained: '2023-01-03',

    reviewerWouldEatAgain: true,

    origin: {
      country: 'unknown',
    },
  },
  {
    id: '0dbf6777d6',
    releaseDate: '2023-02-05',
    name: 'Piura Select',
    subtitle: 'Dark Chocolate',
    maker: 'Cacaosuyo',
    slug: 'piura-select-dark-chocolate-cacaosuyo',
    productionCountry: 'Peru',
    productUrl: 'https://cacaosuyo.pe/product/piura-select-70/',
    description: `"70% Chocolate from Piura, with its fruity, citric profile, with notes of nuts, panela and malt."`,

    images: {
      HERO: {
        src: '/bars/piura-select-dark-chocolate-cacaosuyo.jpg',
        alt: 'Piura Select Dark Chocolate bar made by Cacaosuyo in Peru on a geometric red background',
      },
      BAR_FRONT: {
        src: '/bars/piura-select-dark-chocolate-cacaosuyo-bar-front.jpg',
        alt: 'Front of Piura Select Dark Chocolate bar made by Cacaosuyo in Peru',
      },
      BAR_BACK: {
        src: '/bars/piura-select-dark-chocolate-cacaosuyo-bar-back.jpg',
        alt: 'Back of Piura Select Dark Chocolate bar made by Cacaosuyo in Peru',
      },
      PACKAGE_FRONT: {
        src: '/bars/piura-select-dark-chocolate-cacaosuyo-package-front.jpg',
        alt: 'Front of Piura Select Dark Chocolate bar made by Cacaosuyo in Peru package',
      },
      PACKAGE_BACK: {
        src: '/bars/piura-select-dark-chocolate-cacaosuyo-package-back.jpg',
        alt: 'Back of Piura Select Dark Chocolate bar made by Cacaosuyo in Peru package',
      },
    },

    barType: 'Dark',
    percent: 70,
    barWeight: 70,
    barDimensions: [131, 63, 8],
    ingredients: ['Cocoa Paste', 'Sugar'],

    packagingType: 'Box',
    packagingDimensions: [150, 76, 12],
    wrapper: 'Metallised plastic', // Gold printed
    marketingTerms: ['Tree to Bar'],
    facilityAllergen: ['Milk', 'Nuts', 'Peanuts'],
    awards: [
      {
        body: 'International Chocolate Awards Americas',
        level: 'Gold',
        year: 2019,
      },
    ],

    retailer: 'Bar & Cocoa',
    location: 'https://barandcocoa.com/',
    retailPrice: 9.25,
    dateObtained: '2023-01-11',

    reviewerWouldEatAgain: true,
    reviewerPackagingFavorite: true,

    origin: {
      country: 'Peru',
      region: 'Piura Region',
    },
  },
  {
    id: '026637ecf2',
    releaseDate: '2023-02-04',
    name: 'Dark Orange',
    maker: 'Whistler Chocolate',
    slug: 'dark-orange-whistler-chocolate',
    productionCountry: 'Canada',
    productUrl:
      'https://whistlerchocolate.com/collections/all/products/dark-chocolate-case',
    description: `"Our famous dark chocolate with an infusion of sweet Caribbean orange essence. The orange essence used in the chocolate is fully certified organic and imparts a very subtle but distinct orange flavour to our dark chocolate."`,

    images: {
      HERO: {
        src: '/bars/dark-orange-whistler-chocolate.jpg',
        alt: 'Dark Orange bar made by Whistler Chocolate in Canada standing up with a blue background',
      },
      BAR_FRONT: {
        src: '/bars/dark-orange-whistler-chocolate-bar-front.jpg',
        alt: 'Front of Dark Orange bar made by Whistler Chocolate in Canada',
      },
      BAR_BACK: {
        src: '/bars/dark-orange-whistler-chocolate-bar-back.jpg',
        alt: 'Back of Dark Orange bar made by Whistler Chocolate in Canada',
      },
      PACKAGE_FRONT: {
        src: '/bars/dark-orange-whistler-chocolate-package-front.jpg',
        alt: 'Front of Dark Orange bar made by Whistler Chocolate in Canada package',
      },
      PACKAGE_BACK: {
        src: '/bars/dark-orange-whistler-chocolate-package-back.jpg',
        alt: 'Back of Dark Orange bar made by Whistler Chocolate in Canada package',
      },
    },

    barType: 'Dark',
    percent: 74,
    barWeight: 80,
    barDimensions: [153, 74, 7],
    ingredients: [
      'Organic Cococa Mass',
      'Organic Cane Sugar',
      'Organic Cocoa Butter',
      'Organic Orange Essence',
    ],

    packagingType: 'Box',
    packagingDimensions: [170, 84, 10],
    wrapper: 'Metallised plastic', // Silver
    marketingTerms: ['Organic', 'Fair Trade'],
    facilityAllergen: ['Milk', 'Tree Nuts'],
    uncertifiedLabels: ['Gluten Free'],
    certifiedLabels: ['Organic'], // Pro-cert
    packageLanguages: ['English', 'French'],

    retailer: 'Dufry',
    location: 'YVR Airport',
    retailPrice: 5.49,
    dateObtained: '2022-12-30',

    reviewerWouldEatAgain: true,

    origin: {
      country: 'unknown',
    },
  },
  {
    id: 'a916f5b173',
    releaseDate: '2023-02-03',
    name: '85% Dark Chocolate',
    subtitle: 'Mana Single-Estate',
    maker: 'Auro Chocolate',
    slug: '85-dark-chocolate-mana-single-estate-auro-chocolate',
    productionCountry: 'Philippines',
    productUrl:
      'https://aurochocolate.com/products/85-dark-chocolate-single-estate-mana-60g-reserve-bar',
    description: `"Our Reserve Collection is passionately crafted from the finest beans of a single harvest to bring out the rare, distinctive characteristics of each community and their land. Located in the lush tropical forests of Davao, Mana has notes of caramelized apple, rum, sweet banana & cashew apple."`,

    images: {
      HERO: {
        src: '/bars/85-dark-chocolate-mana-single-estate-auro-chocolate.jpg',
        alt: '85% Dark Chocolate Mana Single-Estate bar made by Auro Chocolate in the Philippines on a red ruffled background',
      },
      BAR_FRONT: {
        src: '/bars/85-dark-chocolate-mana-single-estate-auro-chocolate-bar-front.jpg',
        alt: 'Front of 85% Dark Chocolate Mana Single-Estate bar made by Auro Chocolate in the Philippines',
      },
      BAR_BACK: {
        src: '/bars/85-dark-chocolate-mana-single-estate-auro-chocolate-bar-back.jpg',
        alt: 'Back of 85% Dark Chocolate Mana Single-Estate bar made by Auro Chocolate in the Philippines',
      },
      PACKAGE_FRONT: {
        src: '/bars/85-dark-chocolate-mana-single-estate-auro-chocolate-package-front.jpg',
        alt: 'Front of 85% Dark Chocolate Mana Single-Estate bar made by Auro Chocolate in the Philippines package',
      },
      PACKAGE_BACK: {
        src: '/bars/85-dark-chocolate-mana-single-estate-auro-chocolate-package-back.jpg',
        alt: 'Back of 85% Dark Chocolate Mana Single-Estate bar made by Auro Chocolate in the Philippines package',
      },
    },

    barType: 'Dark',
    percent: 85,
    barWeight: 60,
    barDimensions: [139, 63, 7],
    ingredients: ['Cacao Mass', 'Organic Muscovado Sugar'],

    packagingType: 'Envelope',
    packagingDimensions: [191, 94, 9],
    wrapper: 'Metallised plastic', // Gold with printed pattern
    marketingTerms: [
      'Single Estate',
      'Crafted',
      'Single Harvest',
      'Rare',
      'Limited Edition',
      'Tasting Notes',
    ],
    facilityAllergen: ['Milk', 'Soy', 'Tree Nuts', 'Peanuts'],
    uncertifiedLabels: ['Vegan Friendly', 'Gluten Free'],
    certifiedLabels: ['Kosher', 'HACCP', 'GMP Quality'], // IDCP

    retailer: 'Bar & Cocoa',
    location: 'https://barandcocoa.com/',
    retailPrice: 9.5,
    dateObtained: '2023-01-11',

    reviewerWouldEatAgain: true,

    origin: {
      country: 'Philippines', // https://www.chocolaterie.brussels/service/cacao-auro-philippines-mana/
      region: 'Davao Region',
      locality: 'Davao del Sur',
    },
  },
  {
    id: '48209f242f',
    releaseDate: '2023-02-02',
    name: 'Sea Salt',
    subtitle: 'Dark Chocolate',
    maker: 'Videri Chocolate Factory',
    productionCountry: 'United States',
    slug: 'sea-salt-dark-chocolate-videri-chocolate-factory',
    productUrl: 'https://viderichocolatefactory.com/shop/p/70-sea-salt-bar',
    description: `"Our Classic Dark Chocolate Bar with a little coarse sea salt sprinkled on the back. Smooth, delicious, and just salty enough to get that irresistible sweet-salty combo. Like a chocolate covered pretzel without the pretzel, this is our year round best selling chocolate bar."`,

    images: {
      HERO: {
        src: '/bars/sea-salt-dark-chocolate-videri-chocolate-factory.jpg',
        alt: 'Sea Salt Dark Chocolate bar made by Videri Chocolate Factory in the United States on a brown paper background',
      },
      BAR_FRONT: {
        src: '/bars/sea-salt-dark-chocolate-videri-chocolate-factory-bar-front.jpg',
        alt: 'Front of Sea Salt Dark Chocolate bar made by Videri Chocolate Factory in the United States',
      },
      BAR_BACK: {
        src: '/bars/sea-salt-dark-chocolate-videri-chocolate-factory-bar-back.jpg',
        alt: 'Back of Sea Salt Dark Chocolate bar made by Videri Chocolate Factory in the United States',
      },
      PACKAGE_FRONT: {
        src: '/bars/sea-salt-dark-chocolate-videri-chocolate-factory-package-front.jpg',
        alt: 'Front of Sea Salt Dark Chocolate bar made by Videri Chocolate Factory in the United States package',
      },
      PACKAGE_BACK: {
        src: '/bars/sea-salt-dark-chocolate-videri-chocolate-factory-package-back.jpg',
        alt: 'Back of Sea Salt Dark Chocolate bar made by Videri Chocolate Factory in the United States package',
      },
    },

    barType: 'Dark',
    percent: 70,
    barWeight: 60,
    barDimensions: [140, 63, 6],
    ingredients: [
      'Organic Cocoa Nibs',
      'Organic Cane Sugar',
      'Organic Cocoa Butter',
      'Sea Salt',
    ],

    packagingType: 'Bag',
    packagingDimensions: [176, 112, 7],

    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 9,
    dateObtained: '2022-12-16',

    reviewerWouldEatAgain: true,

    origin: {
      country: 'unknown',
    },
  },
  {
    id: '8e2069ea30',
    releaseDate: '2023-02-01',
    name: 'Bolivia Wild Forest',
    subtitle: 'Dark 74%',
    description: `"Rare cacao gathered in the wild forests of Itenez, Bolivia after being fermented and dried, and is finally dried again and sorted at the renowned Hacienda Tranquilidad. This bar is pleasantly complex with an earthy and bright, yet chocolate-centric flavor profile."`,
    slug: 'bolivia-wild-forest-dark-74-fruition-chocolate-works',
    maker: 'Fruition Chocolate Works',
    productionCountry: 'United States',
    productUrl:
      'https://www.fruitionchocolateworks.com/products/bolivia-wild-forest-74',

    images: {
      HERO: {
        src: '/bars/bolivia-wild-forest-dark-74-fruition-chocolate-works.jpg',
        alt: 'Bolivia Wild Forest Dark 74% bar made by Fruition Chocolate Works in the United States arranged torn open with the bar exposed',
      },
      BAR_FRONT: {
        src: '/bars/bolivia-wild-forest-dark-74-fruition-chocolate-works-bar-front.jpg',
        alt: 'Front of Bolivia Wild Forest Dark 74% bar made by Fruition Chocolate Works in the United States',
      },
      BAR_BACK: {
        src: '/bars/bolivia-wild-forest-dark-74-fruition-chocolate-works-bar-back.jpg',
        alt: 'Back of Bolivia Wild Forest Dark 74% bar made by Fruition Chocolate Works in the United States',
      },
      PACKAGE_FRONT: {
        src: '/bars/bolivia-wild-forest-dark-74-fruition-chocolate-works-package-front.jpg',
        alt: 'Front of Bolivia Wild Forest Dark 74% bar made by Fruition Chocolate Works in the United States package',
      },
      PACKAGE_BACK: {
        src: '/bars/bolivia-wild-forest-dark-74-fruition-chocolate-works-package-back.jpg',
        alt: 'Back of Bolivia Wild Forest Dark 74% bar made by Fruition Chocolate Works in the United States package',
      },
    },

    barType: 'Dark',
    percent: 74,
    barWeight: 60,
    barDimensions: [151, 66, 8],
    ingredients: [
      'Organic Cocoa Beans',
      'Organic Cane Sugar',
      'Organic Cocoa Butter',
    ],

    packagingType: 'Envelope',
    packagingDimensions: [175, 82, 9],
    wrapper: 'Plastic', // With printed pattern
    marketingTerms: ['New Edition', 'Crafted', 'Bean to Bar'],
    facilityAllergen: ['Milk', 'Peanuts', 'Tree Nuts', 'Wheat'],

    retailer: 'Bar & Cocoa',
    location: 'https://barandcocoa.com/',
    retailPrice: 17.0,
    dateObtained: '2023-01-30',

    reviewerWouldEatAgain: true,

    origin: {
      country: 'Bolivia', // https://www.uncommoncacao.com/wilditenezbolivia
      region: 'Baures',
      producer: 'Wild Itenez',
    },
  },
  {
    id: '852dc2327d',
    releaseDate: '2023-01-31',
    name: 'Dark Chocolate with Caipirinha',
    description: [
      `"The exotic flavor that is typical of the cacao originated in the southern part of the State of Bahia, where our origin Vale Potumuju is located, is considered a true Brazilian flavor. So, we decided to enhance it even more by adding it to a worldwide famous Brazilian recipe, the Caipirinha.`,
      `To manufacture this bar requires time, 3 different processes and a lot of labor, but in the end it is so worth it! The cacao nibs, used as the base for our chocolate, is infused in Cachaça for at least 30 days. After that we grind, conch and mold the chocolate bars that get on their backs a sprinkle of caramelized sugar and dehydrated lime zests that were also quickly infused in Cachaça.`,
      `To keep with our Baianí style and standard of excellence, we chose one of the best cachaças from famous Da Tulha Destillers. This one, aged in Jequitibá wood barrels, brings out the complexities and aromas of this Brazilian spirit. The harmonious result of this charming recipe is precious and delicious!"`,
    ],
    slug: 'dark-chocolate-with-caipirinha-baiani-chocolates',
    maker: 'Baianí Chocolates',
    productionCountry: 'Brazil',
    productUrl: 'https://www.baiani.com.br/en/chocolate/65-cacao-caipirinha',

    images: {
      HERO: {
        src: '/bars/dark-chocolate-with-caipirinha-baiani-chocolates.jpg',
        alt: 'Dark Chocolate with Caipirinha bar made by Baianí Chocolates in Brazil arranged as a grid on a blue background',
      },
      BAR_FRONT: {
        src: '/bars/dark-chocolate-with-caipirinha-baiani-chocolates-bar-front.jpg',
        alt: 'Front of Dark Chocolate with Caipirinha bar made by Baianí Chocolates in Brazil',
      },
      BAR_BACK: {
        src: '/bars/dark-chocolate-with-caipirinha-baiani-chocolates-bar-back.jpg',
        alt: 'Back of Dark Chocolate with Caipirinha bar made by Baianí Chocolates in Brazil',
      },
      PACKAGE_FRONT: {
        src: '/bars/dark-chocolate-with-caipirinha-baiani-chocolates-package-front.jpg',
        alt: 'Front of Dark Chocolate with Caipirinha bar made by Baianí Chocolates in Brazil package',
      },
      PACKAGE_BACK: {
        src: '/bars/dark-chocolate-with-caipirinha-baiani-chocolates-package-back.jpg',
        alt: 'Back of Dark Chocolate with Caipirinha bar made by Baianí Chocolates in Brazil package',
      },
    },

    barType: 'Dark',
    percent: 65,
    barWeight: 58,
    barDimensions: [142, 70, 6],
    ingredients: [
      'Single Origin Cacao Beans',
      'Organic Cane Sugar',
      'Cocoa Butter',
      'Lime Zest',
      'Aged Cachaça',
    ],

    packagingType: 'Envelope',
    packagingDimensions: [167, 100, 12],
    wrapper: 'Foil with Paper Backing', // Gold
    marketingTerms: [
      'Small Batch',
      'Terroir',
      'Soil',
      'Fermentation',
      'Drying',
      'Inclusion',
    ],
    facilityAllergen: ['Tree Nuts', 'Milk'],
    insidePrinting: true,

    retailer: 'Bar & Cocoa',
    location: 'https://barandcocoa.com/',
    retailPrice: 11,
    dateObtained: '2023-01-11',

    reviewerWouldEatAgain: true,
    reviewerBarFavorite: true,
    reviewerPackagingFavorite: true, // Esp Bar

    origin: {
      country: 'Brazil',
      region: 'Bahia',
      producer: 'Vale Potumuju',
    },
  },
  {
    id: '56c68f25e7',
    releaseDate: '2023-01-30',
    name: '70% Arauca',
    description: `"In a land surrounded by radiant and endless rivers, a variety of cocoa is cultivated that gives life to a chocolate with aromas of honey, mandarins and flowers."`,
    slug: '70-arauca-cacao-hunters',
    maker: 'Cacao Hunters',
    productionCountry: 'Colombia',
    productUrl:
      'https://www.cacaohunters.com/products/chocolate-negro-barras-arauca70',

    images: {
      HERO: {
        src: '/bars/70-arauca-cacao-hunters.jpg',
        alt: '70% Arauca bar made by Cacao Hunters in Colombia arranged as a grid on a blue background',
      },
      BAR_FRONT: {
        src: '/bars/70-arauca-cacao-hunters-bar-front.jpg',
        alt: 'Front of 70% Arauca bar made by Cacao Hunters in Colombia',
      },
      BAR_BACK: {
        src: '/bars/70-arauca-cacao-hunters-bar-back.jpg',
        alt: 'Back of 70% Arauca bar made by Cacao Hunters in Colombia',
      },
      PACKAGE_FRONT: {
        src: '/bars/70-arauca-cacao-hunters-package-front.jpg',
        alt: 'Front of 70% Arauca bar made by Cacao Hunters in Colombia package',
      },
      PACKAGE_BACK: {
        src: '/bars/70-arauca-cacao-hunters-package-back.jpg',
        alt: 'Back of 70% Arauca bar made by Cacao Hunters in Colombia package',
      },
    },

    barType: 'Dark',
    percent: 70,
    barWeight: 56,
    barDimensions: [77, 77, 5], // Packaged as Two Bars
    ingredients: ['Cocoa Beans', 'Cane Sugar', 'Cocoa Butter', 'Soy Lecithin'],

    packagingType: 'Box',
    packagingDimensions: [96, 96, 15],
    wrapper: 'Metallised plastic', // Silver
    marketingTerms: ['Heritage'],
    facilityAllergen: ['Milk'],
    packageLanguages: ['English', 'Spanish'],

    retailer: 'Bar & Cocoa',
    location: 'https://barandcocoa.com/',
    retailPrice: 8,
    dateObtained: '2023-01-11',

    reviewerWouldEatAgain: true,

    origin: {
      country: 'Colombia',
      region: 'Arauca',
    },
  },
  {
    id: '49e57529f9',
    releaseDate: '2023-01-29',
    name: 'Pacific Razz Crisp',
    description: `"Pacific Razz began as a whimsical way to get crispy bits into our Pacific Original. What developed from the raspberry is much more elegant than we intended, and thankfully so. The interplay of raspberry tartness and creamy caramel notes is perfectly matched for a milk chocolate with a light and crispy crunch."`,
    slug: 'pacific-razz-crisp-pacific-chocolate-company',
    maker: 'Pacific Chocolate Company',
    productionCountry: 'United States',
    productUrl:
      'https://pacificchocolatecompany.com/product/pacific-razz-crisp-3-pack',

    images: {
      HERO: {
        src: '/bars/pacific-razz-crisp-pacific-chocolate-company.jpg',
        alt: 'Pacific Razz Crisp bar made by Pacific Chocolate Company in the United States on a yellow background with raspberries',
      },
      BAR_FRONT: {
        src: '/bars/pacific-razz-crisp-pacific-chocolate-company-bar-front.jpg',
        alt: 'Front of Pacific Razz Crisp bar made by Pacific Chocolate Company in the United States',
      },
      BAR_BACK: {
        src: '/bars/pacific-razz-crisp-pacific-chocolate-company-bar-back.jpg',
        alt: 'Back of Pacific Razz Crisp bar made by Pacific Chocolate Company in the United States',
      },
      PACKAGE_FRONT: {
        src: '/bars/pacific-razz-crisp-pacific-chocolate-company-package-front.jpg',
        alt: 'Front of Pacific Razz Crisp bar made by Pacific Chocolate Company in the United States package',
      },
      PACKAGE_BACK: {
        src: '/bars/pacific-razz-crisp-pacific-chocolate-company-package-back.jpg',
        alt: 'Back of Pacific Razz Crisp bar made by Pacific Chocolate Company in the United States package',
      },
    },

    barType: 'Milk',
    barWeight: 85,
    barDimensions: [158, 70, 10],
    ingredients: [
      'Organic Cocoa Beans',
      'Organic Raw Cane Sugar',
      'Milk Powder',
      'Organic Cocoa Butter',
      [
        'Crisp Rice',
        [
          'Rice',
          'Flour',
          'Sugar',
          'Barley Malt Extract',
          'Salt',
          'Ruce Extract',
          'Distilled Monoglycerides',
        ],
      ],
      'Clarified Butter',
      [
        'Raspberry Juice Powder',
        [
          'Sugar',
          'Raspberry Juice Solids',
          'Natural Raspberry Flavor',
          'Malic Acid',
        ],
      ],
      'Salt',
      'Soy Lecithin',
    ],

    packagingType: 'Box',
    packagingDimensions: [184, 83, 11],
    wrapper: 'Metallised plastic', // Gold outside, silver inside
    foodAllergen: ['Milk', 'Soy'],
    facilityAllergen: ['Milk', 'Wheat', 'Soy', 'Tree Nuts'],

    retailer: 'Olive Tree Marketplace',
    location: 'Ocean Beach',
    retailPrice: 7.99,
    dateObtained: '2023-01-07',

    reviewerWouldEatAgain: true,

    origin: {
      country: 'unknown',
    },
  },
  {
    id: '84955337d7',
    releaseDate: '2023-01-28',
    name: '70% Belize',
    description: `"A hint of fruit blended with classic chocolate notes. Each flavor note on its own is subtle, but when combined, the overall flavor profile is quite powerful."`,
    slug: '70-belize-spinnaker-chocolate',
    maker: 'Spinnaker Chocolate',
    productionCountry: 'United States',
    productUrl: 'https://www.spinnakerchocolate.com/shop/70-belize',

    images: {
      HERO: {
        src: '/bars/70-belize-spinnaker-chocolate.jpg',
        alt: '70% Belize bar made by Spinnaker Chocolate in the United States in front of warn deck boards',
      },
      BAR_FRONT: {
        src: '/bars/70-belize-spinnaker-chocolate-bar-front.jpg',
        alt: 'Front of 70% Belize bar made by Spinnaker Chocolate in the United States',
      },
      BAR_BACK: {
        src: '/bars/70-belize-spinnaker-chocolate-bar-back.jpg',
        alt: 'Back of 70% Belize bar made by Spinnaker Chocolate in the United States',
      },
      PACKAGE_FRONT: {
        src: '/bars/70-belize-spinnaker-chocolate-package-front.jpg',
        alt: 'Front of 70% Belize bar made by Spinnaker Chocolate in the United States package',
      },
      PACKAGE_BACK: {
        src: '/bars/70-belize-spinnaker-chocolate-package-back.jpg',
        alt: 'Back of 70% Belize bar made by Spinnaker Chocolate in the United States package',
      },
    },

    barType: 'Dark',
    percent: 70,
    barWeight: 57,
    barDimensions: [130, 77, 6],
    ingredients: ['Cacao', 'Organic Cane Sugar'],

    packagingType: 'Biodegradable Bag',
    packagingDimensions: [170, 108, 7],
    facilityAllergen: ['Milk Powder', 'Nuts'],
    awards: [
      {
        body: 'Academy Of Chocolate',
        level: 'Silver',
        year: 2022,
      },
    ],

    retailer: 'Spinnaker Chocolate',
    location: 'spinnakerchocolate.com',
    retailPrice: 12,
    dateObtained: '2023-01-25',

    reviewerWouldEatAgain: true,

    origin: {
      country: 'Belize',
      region: 'Toledo District',
      producer: 'Maya Mountain',
    },
  },
  {
    id: '3b7453595a',
    releaseDate: '2023-01-27',
    name: 'Salty',
    subtitle: 'Dark Chocolate',
    description: `"It's salty. It's chocolatey. It's salty dark chocolate."`,
    slug: 'salty-dark-chocolate-hu',
    maker: 'Hu',
    productionCountry: 'Italy',
    productUrl: 'https://hukitchen.com/products/hu-salty',

    images: {
      HERO: {
        src: '/bars/salty-dark-chocolate-hu.jpg',
        alt: 'Salty Dark Chocolate bar made by Hu in Italy on crumpled butcher paper',
      },
      BAR_FRONT: {
        src: '/bars/salty-dark-chocolate-hu-bar-front.jpg',
        alt: 'Front of Salty Dark Chocolate bar made by Hu in Italy',
      },
      BAR_BACK: {
        src: '/bars/salty-dark-chocolate-hu-bar-back.jpg',
        alt: 'Back of Salty Dark Chocolate bar made by Hu in Italy',
      },
      PACKAGE_FRONT: {
        src: '/bars/salty-dark-chocolate-hu-package-front.jpg',
        alt: 'Front of Salty Dark Chocolate bar made by Hu in Italy package',
      },
      PACKAGE_BACK: {
        src: '/bars/salty-dark-chocolate-hu-package-back.jpg',
        alt: 'Back of Salty Dark Chocolate bar made by Hu in Italy package',
      },
    },

    barType: 'Dark',
    percent: 70,
    barWeight: 60,
    barDimensions: [117, 50, 11],
    ingredients: [
      'Organic Cacao',
      'Organic Unrefined Coconut Sugar',
      'Organic Cocoa Butter',
      'Sea Salt',
    ],

    packagingType: 'Envelope', // Paper
    packagingDimensions: [159, 71, 13],
    wrapper: 'Biodegradable Bag',
    marketingTerms: [
      'No Refined Sugar',
      'No Lecithins',
      'Vegan',
      'Paleo',
      'Organic',
      'Fair Trade',
    ],
    foodAllergen: ['Coconut'],
    facilityAllergen: [
      'Almond',
      'Cashew',
      'Hazelnut',
      'Pistachio',
      'Dairy',
      'Tree Nuts',
      'Soy',
      'Wheat',
    ],
    certifiedLabels: ['Vegan', 'Paleo', 'Non GMO', 'Kosher'], // Vegan.org, Paleo Foundation, NonGmoProject.org, CUK-G-187

    retailer: 'Wholefoods',
    location: 'Hillcrest',
    retailPrice: 5.99,
    dateObtained: '2022-12-13',

    reviewerWouldEatAgain: true,

    origin: {
      country: 'unknown',
    },
  },
  {
    id: 'a7deee02d0',
    releaseDate: '2023-01-26',
    name: 'Technicolour Crunch',
    description: [
      `"Developed in collaboration with our coffee partner, House of Funk, this bar reminds us of a delicious cup of coffee and a bowl of sugary, crisp cereal.`,
      `Caramelized white chocolate infused with House of Funk's Technicolour Espresso, and caramelized puffed wheat.`,
      `Ridiculously tasty."`,
    ],
    slug: 'technicolour-crunch-beta5',
    maker: 'BETA5',
    productionCountry: 'Canada',
    productUrl:
      'https://shop.beta5chocolates.com/collections/polygon-bars-2017/products/technicolour-crunch',

    images: {
      HERO: {
        src: '/bars/technicolour-crunch-beta5.jpg',
        alt: 'Technicolour Crunch bar made by BETA5 in Canada on a table with an oculus rift headset and controllers',
      },
      BAR_FRONT: {
        src: '/bars/technicolour-crunch-beta5-bar-front.jpg',
        alt: 'Front of Technicolour Crunch bar made by BETA5 in Canada',
      },
      BAR_BACK: {
        src: '/bars/technicolour-crunch-beta5-bar-back.jpg',
        alt: 'Back of Technicolour Crunch bar made by BETA5 in Canada',
      },
      PACKAGE_FRONT: {
        src: '/bars/technicolour-crunch-beta5-package-front.jpg',
        alt: 'Front of Technicolour Crunch bar made by BETA5 in Canada package',
      },
      PACKAGE_BACK: {
        src: '/bars/technicolour-crunch-beta5-package-back.jpg',
        alt: 'Back of Technicolour Crunch bar made by BETA5 in Canada package',
      },
    },

    barType: 'Flavored',
    barWeight: 65,
    barDimensions: [151, 76, 10],
    ingredients: [
      [
        'Caramelized White Chocolate',
        [
          'Cocoa Butter',
          'Sugar',
          'Whole Milk Powder',
          'Dried Skimmed Milk',
          'Whey',
          'Butter',
          'Soy Lecithin',
          'Natural Vanilla Extract',
        ],
      ],
      [
        'Caramelized Puffed Wheat',
        ['Organic Puffed Kamut', 'Sugar', 'Cocoa Butter'],
      ],
      'Coffee Beans',
    ],

    packagingType: 'Envelope',
    packagingDimensions: [162, 85, 12],
    wrapper: 'Plastic Bag',
    facilityAllergen: ['Tree Nuts', 'Peanuts', 'Sesame', 'Wheat'],

    retailer: 'Beta 5',
    location: 'Vancouver Factory',
    retailPrice: 8.22, // Purchased for 11 CAD
    dateObtained: '2022-12-29',

    reviewerWouldEatAgain: true,
    reviewerBarFavorite: true,

    origin: {
      country: 'unknown',
    },
  },
  {
    id: '0789723dc0',
    releaseDate: '2023-01-25',
    name: 'Nacional 70%',
    subtitle: 'Ecuador',
    description: [
      `"Chocolate bar originating from lands considered sacred in Ecuador. Arriba Nacional variety cocoa, has particular aromatic notes of white flowers.`,
      `Cultivated in the recovery of the most ancient tradition of cultivation of the "fruit of the gods", in tasting it unfolds an extreme elegance and a note of absolute white flowers."`,
    ],
    slug: 'nacional-70-ecuador-domori',
    maker: 'Domori',
    productionCountry: 'Italy',
    productUrl:
      'https://domori.com/en/the-origins-land/148-ecuador-dark-chocolate-bar-70-50g.html',

    images: {
      HERO: {
        src: '/bars/nacional-70-ecuador-domori.jpg',
        alt: 'Nacional 70% Ecuador bar made by Domori in Italy on a rattan background',
      },
      BAR_FRONT: {
        src: '/bars/nacional-70-ecuador-domori-bar-front.jpg',
        alt: 'Front of Nacional 70% Ecuador bar made by Domori in Italy',
      },
      BAR_BACK: {
        src: '/bars/nacional-70-ecuador-domori-bar-back.jpg',
        alt: 'Back of Nacional 70% Ecuador bar made by Domori in Italy',
      },
      PACKAGE_FRONT: {
        src: '/bars/nacional-70-ecuador-domori-package-front.jpg',
        alt: 'Front of Nacional 70% Ecuador bar made by Domori in Italy package',
      },
      PACKAGE_BACK: {
        src: '/bars/nacional-70-ecuador-domori-package-back.jpg',
        alt: 'Back of Nacional 70% Ecuador bar made by Domori in Italy package',
      },
    },

    barType: 'Dark',
    percent: 70,
    barWeight: 50,
    barDimensions: [94, 94, 5],
    ingredients: ['Cocoa mass', 'Cane Sugar'],
    uncertifiedLabels: ['Gluten Free'],

    packagingType: 'Box',
    packagingDimensions: [115, 114, 10],
    wrapper: 'Metallised plastic', // Red logo checker outside, silver inside
    facilityAllergen: ['Nuts', 'Milk', 'Soy'],

    retailer: 'Bar & Cocoa',
    location: 'https://barandcocoa.com/',
    retailPrice: 9.5,
    dateObtained: '2023-01-11',

    reviewerWouldEatAgain: true,
    reviewerBarFavorite: true, // I think?

    origin: {
      producer: 'Hacienda Victoria',
      locality: 'Guayaquil',
      region: 'Guayas',
      country: 'Ecuador',
    },
  },
  {
    id: 'a1eeca2ea1',
    releaseDate: '2023-01-24',
    name: 'Dos Rios',
    subtitle: 'Dominican Republic',
    description: [
      `"One day a friend called me excitedly about some very special cocoa beans he found in the Dominican Republic. He said they were truly unique, and I was the perfect person to make them into chocolate. This is that chocolate.`,
      `Industrial chocolate companies like their chocolate to taste simply like “traditional chocolate.” This does not. This chocolate has a haunting flavor like bergamot, orange and lavender. These natural flavors are due to the unique way the coca beans are fermented. It took all of my skills to do these beans justice. I believe you will be thrilled by the results. If you want to try a chocolate with that extra bit of “magic,” this is it."`,
    ],
    slug: 'dos-rios-dominican-republic-amano-artisan-chocolate',
    maker: 'Amano Artisan Chocolate',
    productionCountry: 'United States',
    productUrl:
      'https://amanochocolate.com/product/dos-rios-dominican-republic/',

    images: {
      HERO: {
        src: '/bars/dos-rios-dominican-republic-amano-artisan-chocolate.jpg',
        alt: 'Dos Rios Dominican Republic bar made by Amano Artisan Chocolate in the United States propped up against a light gray circular tile background',
      },
      BAR_FRONT: {
        src: '/bars/dos-rios-dominican-republic-amano-artisan-chocolate-bar-front.jpg',
        alt: 'Front of Dos Rios Dominican Republic bar made by Amano Artisan Chocolate in the United States',
      },
      BAR_BACK: {
        src: '/bars/dos-rios-dominican-republic-amano-artisan-chocolate-bar-back.jpg',
        alt: 'Back of Dos Rios Dominican Republic bar made by Amano Artisan Chocolate in the United States',
      },
      PACKAGE_FRONT: {
        src: '/bars/dos-rios-dominican-republic-amano-artisan-chocolate-package-front.jpg',
        alt: 'Front of Dos Rios Dominican Republic bar made by Amano Artisan Chocolate in the United States package',
      },
      PACKAGE_BACK: {
        src: '/bars/dos-rios-dominican-republic-amano-artisan-chocolate-package-back.jpg',
        alt: 'Back of Dos Rios Dominican Republic bar made by Amano Artisan Chocolate in the United States package',
      },
    },

    barType: 'Dark',
    percent: 70,
    barWeight: 85,
    barDimensions: [161, 78, 7],
    ingredients: [
      'Cocoa Beans',
      'Pure Cane Sugar',
      'Cocoa Butter',
      'Whole Vanilla Beans',
    ],

    packagingType: 'Box',
    packagingDimensions: [199, 82, 13],
    wrapper: 'Metallised plastic', // Black outside, silver inside
    marketingTerms: [
      'Fairly Traded',
      'Hand Crafted',
      'Single Origin',
      'Small Batch',
      'Tasting Notes',
      'Highly Awarded',
      'Four Pure & Simple Ingredients',
      'Artist',
    ],
    facilityAllergen: ['Peanuts', 'Tree Nuts', 'Soy', 'Wheat', 'Milk'],

    retailer: 'Bar & Cocoa',
    location: 'https://barandcocoa.com/',
    retailPrice: 9,
    dateObtained: '2023-01-11',

    reviewerWouldEatAgain: true,

    origin: {
      country: 'Dominican Republic',
      region: 'Hato Mayor',
      locality: 'Dos Rios',
    },
  },
  {
    id: '2519a08b89',
    releaseDate: '2023-01-23',
    name: "Chocolate Nib'd",
    description: `Smooth dark chocolate and crunchy cacao nibs- a complete delight! Totally understated but once you try it... there's a good chance it'll become your favourite child.`,
    slug: 'chocolate-nibd-zimt-chocolates',
    maker: 'Zimt Chocolates',
    productUrl: 'https://zimtchocolates.com/products/chocolate-nibd-bar-2',

    images: {
      HERO: {
        src: '/bars/chocolate-nibd-zimt-chocolates.jpg',
        alt: "Chocolate Nib'd bar made by Zimt Chocolates in a bucket of cacao nibs",
      },
      BAR_FRONT: {
        src: '/bars/chocolate-nibd-zimt-chocolates-bar-front.jpg',
        alt: "Front of Chocolate Nib'd bar made by Zimt Chocolates",
      },
      BAR_BACK: {
        src: '/bars/chocolate-nibd-zimt-chocolates-bar-back.jpg',
        alt: "Back of Chocolate Nib'd bar made by Zimt Chocolates",
      },
      PACKAGE_FRONT: {
        src: '/bars/chocolate-nibd-zimt-chocolates-package-front.jpg',
        alt: "Front of Chocolate Nib'd bar made by Zimt Chocolates package",
      },
      PACKAGE_BACK: {
        src: '/bars/chocolate-nibd-zimt-chocolates-package-back.jpg',
        alt: "Back of Chocolate Nib'd bar made by Zimt Chocolates package",
      },
    },

    barType: 'Dark',
    percent: 80,
    barWeight: 40,
    barDimensions: [124, 56, 6],
    ingredients: [
      'Organic Cacao Nibs',
      'Organic Coconut Sugar',
      'Organic Cacao Butter',
    ],

    packagingType: 'Envelope',
    packagingDimensions: [136, 62, 13],
    wrapper: 'Cellulose',
    marketingTerms: ['Raw', 'Ethical', 'Vegan'],
    productionCountry: 'Canada',
    certifiedLabels: ['USDA Organic'],
    facilityAllergen: [
      'Nuts',
      'Peanuts',
      'Coconuts',
      'Sesame',
      'Gluten',
      'Soy',
    ],
    packageLanguages: ['English', 'French'],

    retailer: 'Zimt',
    location: 'Vancouver Factory',
    retailPrice: 0,
    dateObtained: '2022-12-29',

    reviewerWouldEatAgain: true,

    origin: {
      country: 'Unknown',
    },
  },
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
    marketingTerms: ['Batch', 'Bean to Bar', 'Transparent Trade', 'Unroasted'],
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
    facilityAllergen: ['Tree Nuts', 'Wheat', 'Dairy', 'Eggs', 'Peanuts', 'Soy'],

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
  },
  {
    id: '3fc071f734',
    releaseDate: '2023-01-20',
    name: 'Matcha Chocolate with Caramelized Sesame',
    description: `Finely ground Japanese green tea mixed with creamy, milky white chocolate. White sesame seeds are caramelized and toasted for extra crunch and bite. Like a matcha latte, but better.`,
    slug: 'matcha-chocolate-with-caramelized-sesame-deux-cranes',
    maker: 'Deux Cranes',
    productUrl:
      'https://www.deuxcranes.com/products/matcha-chocolate-with-caramelized-sesame',

    images: {
      HERO: {
        src: '/bars/matcha-chocolate-with-caramelized-sesame-deux-cranes.jpg',
        alt: 'Pair of Matcha Chocolate with Caramelized Sesame bars made by Deux Cranes floating on a green background',
      },
      BAR_FRONT: {
        src: '/bars/matcha-chocolate-with-caramelized-sesame-deux-cranes-bar-front.jpg',
        alt: 'Front of Matcha Chocolate with Caramelized Sesame bar made by Deux Cranes',
      },
      BAR_BACK: {
        src: '/bars/matcha-chocolate-with-caramelized-sesame-deux-cranes-bar-back.jpg',
        alt: 'Back of Matcha Chocolate with Caramelized Sesame bar made by Deux Cranes',
      },
      PACKAGE_FRONT: {
        src: '/bars/matcha-chocolate-with-caramelized-sesame-deux-cranes-package-front.jpg',
        alt: 'Front of Matcha Chocolate with Caramelized Sesame bar made by Deux Cranes package',
      },
      PACKAGE_BACK: {
        src: '/bars/matcha-chocolate-with-caramelized-sesame-deux-cranes-package-back.jpg',
        alt: 'Back of Matcha Chocolate with Caramelized Sesame bar made by Deux Cranes package',
      },
    },

    barType: 'Flavored',
    barWeight: 70,
    barDimensions: [137, 72, 11],
    ingredients: [
      [
        'White Chocolate',
        [
          'Sugar',
          'Cocoa Butter',
          'Whole Milk Powder',
          'Sunflower Lecithin',
          'Natural Vanilla Extract',
        ],
      ],
      ['Candied Sesame Seeds', ['White Sesame', 'Sugar', 'Salt']],
      'Matcha Green Tea',
    ],
    foodAllergen: ['Soy', 'Nuts', 'Milk', 'Gluten'],
    facilityAllergen: [
      'Soy',
      'Peanuts',
      'Tree Nuts',
      'Wheat',
      'Sesame',
      'Milk Products',
    ],

    packagingType: 'Box', // With Top Flap and Window
    packagingDimensions: [157, 84, 18],
    wrapper: 'Plastic',
    marketingTerms: ['Handcrafted', 'Flavor Notes'],
    productionCountry: 'United States',

    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 11,
    dateObtained: '2022-12-16',

    reviewerWouldEatAgain: true,

    origin: {
      country: 'Unknown',
    },
  },
  {
    id: 'b165f01a0c',
    releaseDate: '2023-01-19',
    name: 'Hacienda Azul, Costa Rica',
    subtitle: '2018 Harvest',
    description: `The beans in this bar come from Hacienda Azul, a single estate near Turrialba, Costa Rica. Dandelion Japan Chocolate Maker Mariko loves the diverse range of herbal notes in the 2018 harvest, as well as the gradual increase in flavor upon tasting. We taste notes of caramelized almonds, milk tea, and a hint of ginger.`,
    slug: 'hacienda-azul-costa-rica-2018-harvest-dandelion-chocolate',
    maker: 'Dandelion Chocolate',
    productUrl:
      'https://store.dandelionchocolate.com/products/hacienda-azul-costa-rica-70-chocolate-bar-japan',

    images: {
      HERO: {
        src: '/bars/hacienda-azul-costa-rica-2018-harvest-dandelion-chocolate.jpg',
        alt: 'Hacienda Azul, Costa Rica 2018 Harvest bar made by Dandelion Chocolate heald in a hand',
      },
      BAR_FRONT: {
        src: '/bars/hacienda-azul-costa-rica-2018-harvest-dandelion-chocolate-bar-front.jpg',
        alt: 'Front of Hacienda Azul, Costa Rica 2018 Harvest bar made by Dandelion Chocolate',
      },
      BAR_BACK: {
        src: '/bars/hacienda-azul-costa-rica-2018-harvest-dandelion-chocolate-bar-back.jpg',
        alt: 'Back of Hacienda Azul, Costa Rica 2018 Harvest bar made by Dandelion Chocolate',
      },
      PACKAGE_FRONT: {
        src: '/bars/hacienda-azul-costa-rica-2018-harvest-dandelion-chocolate-package-front.jpg',
        alt: 'Front of Hacienda Azul, Costa Rica 2018 Harvest bar made by Dandelion Chocolate package',
      },
      PACKAGE_BACK: {
        src: '/bars/hacienda-azul-costa-rica-2018-harvest-dandelion-chocolate-package-back.jpg',
        alt: 'Back of Hacienda Azul, Costa Rica 2018 Harvest bar made by Dandelion Chocolate package',
      },
    },

    barType: 'Dark',
    percent: 70,
    barWeight: 56,
    barDimensions: [144, 65, 7],
    ingredients: ['Cocoa Beans', 'Cane Sugar'],

    packagingType: 'Paper Wrap',
    packagingDimensions: [145, 67, 8],
    wrapper: 'Foil', // Gold outside, Silver inside
    marketingTerms: [
      'Small Batch',
      'Crafting',
      'Single Estate',
      'Roast Profile',
    ],
    productionCountry: 'Japan',
    packageLanguages: ['English', 'Japanese'],

    retailer: 'Dandelion Chocolate',
    location: 'https://dandelionchocolate.com/',
    retailPrice: 15,
    dateObtained: '2023-01-19',

    reviewerBarFavorite: true,
    reviewerWouldEatAgain: true,
    reviewerPackagingFavorite: true,

    origin: {
      country: 'Costa Rica',
      region: 'Cartago',
      locality: 'Turrialba',
      producer: 'Hacienda Azul',
    },
  },
  {
    id: '81b2b84d37',
    releaseDate: '2023-01-18',
    name: 'Solomon Islands, Guadalcanal',
    subtitle: 'Oat Milk',
    description: `The Innovations Collection has been created to explore new and exotic chocolate experiences. Our plant-based milk chocolate alternative. Crafted from gluten-free oats, providing the smooth, buttery richness of toasted oats with Solomon Islands Single-Estate dark chocolate, creating a rich creamy alternative to milk chocolate.`,
    slug: 'solomon-islands-guadalcanal-oat-milk-firetree-chocolate',
    maker: 'Firetree Chocolate',
    productUrl:
      'https://www.firetreechocolate.com/collections/innovations/products/solomon-islands-guadalcanal-oat-milk',

    images: {
      HERO: {
        src: '/bars/solomon-islands-guadalcanal-oat-milk-firetree-chocolate.jpg',
        alt: 'Solomon Islands, Guadalcanal Oat Milk bar made by Firetree Chocolate on a yellow background with ripped paper texture',
      },
      BAR_FRONT: {
        src: '/bars/solomon-islands-guadalcanal-oat-milk-firetree-chocolate-bar-front.jpg',
        alt: 'Front of Solomon Islands, Guadalcanal Oat Milk bar made by Firetree Chocolate',
      },
      BAR_BACK: {
        src: '/bars/solomon-islands-guadalcanal-oat-milk-firetree-chocolate-bar-back.jpg',
        alt: 'Back of Solomon Islands, Guadalcanal Oat Milk bar made by Firetree Chocolate',
      },
      PACKAGE_FRONT: {
        src: '/bars/solomon-islands-guadalcanal-oat-milk-firetree-chocolate-package-front.jpg',
        alt: 'Front of Solomon Islands, Guadalcanal Oat Milk bar made by Firetree Chocolate package',
      },
      PACKAGE_BACK: {
        src: '/bars/solomon-islands-guadalcanal-oat-milk-firetree-chocolate-package-back.jpg',
        alt: 'Back of Solomon Islands, Guadalcanal Oat Milk bar made by Firetree Chocolate package',
      },
    },

    barType: 'Milk',
    barWeight: 65,
    barDimensions: [143, 71, 8],
    ingredients: [
      'Unrefined Sugar',
      'Cocoa Butter',
      'Oat Milk Powder',
      'Rice Flour',
      ['Solomon Islands Chocolate', ['Cocoa Mass', 'Sugar', 'Cocoa Butter']],
      'Cocoa Powder',
      'Vegetable Oil',
      'Sunflower Lecithin',
      'Natural Flavorings',
    ],

    packagingType: 'Envelope',
    packagingDimensions: [168, 93, 10],
    wrapper: 'Parchment Paper Bag',
    marketingTerms: [
      'Single-estate',
      'Plant-based',
      'Tasting Notes',
      'Crafted',
    ],
    uncertifiedLabels: ['Dairy free', 'Vegan'],
    certifiedLabels: ['Kosher'], // KLBD
    productionCountry: 'United Kingdom',
    packageLanguages: ['English', 'German', 'French'],

    retailer: 'Bar & Cocoa',
    location: 'https://barandcocoa.com/',
    retailPrice: 8.0,
    dateObtained: '2023-01-11',

    reviewerWouldEatAgain: true,

    origin: {
      country: 'Solomon Islands',
      region: 'Guadalcanal',
    },
  },
  {
    id: '0f7e2f38c2',
    releaseDate: '2023-01-17',
    name: 'Black Toasted Sesame Seeds, Cacao Shell & Nibs',
    description: `Reworking is one of the first methods adopted by Casa Bosques to denfine an individual style, that is, adapting traditional chocolate-making methods to create something innovative. The Black Toasted Sesame Seed Chocolate uses all parts of the cacao, including the nib and the crunchy shell, the interior and exterior, to create an economy of taste and crunch. This chocolate is slightly bitter, and with the smokiness of the black toasted sesame seeds, its pleasant acidity hits the back of the tongue.`,
    slug: 'black-toasted-sesame-seeds-cacao-shell-nibs-casa-bosques-chocolates',
    maker: 'Casa Bosques Chocolates',
    productUrl:
      'https://casabosques.co/collections/cbb-bars/products/sesame-seeds',

    images: {
      HERO: {
        src: '/bars/black-toasted-sesame-seeds-cacao-shell-nibs-casa-bosques-chocolates.jpg',
        alt: 'Black Toasted Sesame Seeds, Cacao Shell & Nibs bar made by Casa Bosques Chocolates broken into pieces with shells, nibs, and sesame seeds scattered around',
      },
      BAR_FRONT: {
        src: '/bars/black-toasted-sesame-seeds-cacao-shell-nibs-casa-bosques-chocolates-bar-front.jpg',
        alt: 'Front of Black Toasted Sesame Seeds, Cacao Shell & Nibs bar made by Casa Bosques Chocolates',
      },
      BAR_BACK: {
        src: '/bars/black-toasted-sesame-seeds-cacao-shell-nibs-casa-bosques-chocolates-bar-back.jpg',
        alt: 'Back of Black Toasted Sesame Seeds, Cacao Shell & Nibs bar made by Casa Bosques Chocolates',
      },
      PACKAGE_FRONT: {
        src: '/bars/black-toasted-sesame-seeds-cacao-shell-nibs-casa-bosques-chocolates-package-front.jpg',
        alt: 'Front of Black Toasted Sesame Seeds, Cacao Shell & Nibs bar made by Casa Bosques Chocolates package',
      },
      PACKAGE_BACK: {
        src: '/bars/black-toasted-sesame-seeds-cacao-shell-nibs-casa-bosques-chocolates-package-back.jpg',
        alt: 'Back of Black Toasted Sesame Seeds, Cacao Shell & Nibs bar made by Casa Bosques Chocolates package',
      },
    },

    barType: 'Dark',
    percent: 74,
    barWeight: 60,
    barDimensions: [65, 137, 7],
    ingredients: [
      'Black Sesame Seeds',
      'Cacao Nibs',
      'Sea Salt',
      'Cacao Shell',
      'Organic Cacao',
      'Organic Cane Sugar',
    ],
    facilityAllergen: ['Peanuts', 'Tree nuts', 'Dairy'],

    packagingType: 'Envelope',
    packagingDimensions: [85, 157, 12],
    wrapper: 'Foil with Paper Backing', // Gold
    marketingTerms: [
      'Handcrafted',
      'Bean to Bar',
      'Organic',
      'Artisanally Made',
    ],
    uncertifiedLabels: ['Organic', 'Vegan'],
    productionCountry: 'Mexico',

    retailer: 'Casa Bosques Chocolates',
    location: 'https://casabosques.co',
    retailPrice: 13,
    dateObtained: '2023-01-09',

    reviewerBarNotes: 'Bar arrived broken',
    reviewerWouldEatAgain: true,

    origin: {
      country: 'Mexico',
      region: 'Chiapas',
      locality: 'Pichucalco',
    },
    beanVariety: 'Criollo',
  },
  {
    id: '6519f99552',
    releaseDate: '2023-01-16',
    name: 'Cafe Con Leche',
    subtitle: "Milk Chocolate & Per'La Coffee",
    description: `Creamy milk chocolate, roasted deep-flavored La Per'La Coffee, and unrefined cane sugar come together to create our irresistible “Cafe Con Leche” 63% bar. The organically-cultivated cacao beans ethically sourced from the coastal town of Guayaquil, Ecuador are roasted to perfection to produce the chocolate and coffee flavor that awakens your tastebuds. The bar’s flavor honors its origin and conserves the unique terroir of its farm.`,
    slug: 'cafe-con-leche-milk-chocolate-and-perla-coffee-exquisito-chocolates',
    maker: 'Exquisito Chocolates',
    productUrl:
      'https://www.exquisitochocolates.com/products/copy-of-73-gettin-nibby-wit-it-ecuador-dark-chocolate-nib-bar',

    images: {
      HERO: {
        src: '/bars/cafe-con-leche-milk-chocolate-and-perla-coffee-exquisito-chocolates.jpg',
        alt: "Cafe Con Leche Milk Chocolate & Per'La Coffee bar made by Exquisito Chocolates repeating on a pink background",
      },
      BAR_FRONT: {
        src: '/bars/cafe-con-leche-milk-chocolate-and-perla-coffee-exquisito-chocolates-bar-front.jpg',
        alt: "Front of Cafe Con Leche Milk Chocolate & Per'La Coffee bar made by Exquisito Chocolates",
      },
      BAR_BACK: {
        src: '/bars/cafe-con-leche-milk-chocolate-and-perla-coffee-exquisito-chocolates-bar-back.jpg',
        alt: "Back of Cafe Con Leche Milk Chocolate & Per'La Coffee bar made by Exquisito Chocolates",
      },
      PACKAGE_FRONT: {
        src: '/bars/cafe-con-leche-milk-chocolate-and-perla-coffee-exquisito-chocolates-package-front.jpg',
        alt: "Front of Cafe Con Leche Milk Chocolate & Per'La Coffee bar made by Exquisito Chocolates package",
      },
      PACKAGE_BACK: {
        src: '/bars/cafe-con-leche-milk-chocolate-and-perla-coffee-exquisito-chocolates-package-back.jpg',
        alt: "Back of Cafe Con Leche Milk Chocolate & Per'La Coffee bar made by Exquisito Chocolates package",
      },
    },

    barType: 'Dark Milk',
    percent: 63,
    barWeight: 71,
    barDimensions: [143, 70, 8],
    ingredients: [
      'Cacao Beans',
      'Unrefined Cane Sugar',
      'Cocoa Butter',
      'Milk',
      'Espresso',
    ],

    packagingType: 'Paper Wrap',
    packagingDimensions: [145, 73, 9],
    wrapper: 'Foil with Paper Backing', // Gold
    marketingTerms: [
      'Sustainably Sourced Cacao',
      'Handcrafted',
      'award-winning',
    ],
    insidePrinting: true,
    productionCountry: 'United States',

    retailer: 'Bar & Cocoa',
    location: 'https://barandcocoa.com/',
    retailPrice: 9.25,
    dateObtained: '2023-01-11',

    reviewerWouldEatAgain: true,

    origin: {
      producer: 'Hacienda Victoria',
      locality: 'Guayaquil',
      region: 'Guayas',
      country: 'Ecuador',
    },
    beanVariety: 'Arriba Cacao',
  },
  {
    id: '7d71e82380',
    releaseDate: '2023-01-15',
    name: 'Black Sauna',
    subtitle: 'Smoked Chocolate',
    description: `True Lithuanian smoke sauna is anything but spa procedure. It's an esoteric experience where bathers "die & resurrect". In pagan times, people used sauna's for bathing, birthing, preserving and worshipping. Pitch black walls, hot stones and steam enables bathers to build the spiritual bond with the basic elements of fire and water while a heady aroma of Siberian fir whisks and wormwood leaf rustle opens up their consciousness. As a black sauna enthusiast and chocolate maker, Naive's chocolatier tempted to interpret his black sauna experience through chocolate. Would you like to taste how?`,
    slug: 'black-sauna-smoked-chocolate-chocolate-naive',
    maker: 'Chocolate Naive',
    productUrl:
      'https://barandcocoa.com/products/naive-black-sauna-smoked-chocolate-70', // Not on https://chocolatenaive.com/

    images: {
      HERO: {
        src: '/bars/black-sauna-smoked-chocolate-chocolate-naive.jpg',
        alt: 'Black Sauna Smoked Chocolate bar made by Chocolate Naive on a smokey looking background',
      },
      BAR_FRONT: {
        src: '/bars/black-sauna-smoked-chocolate-chocolate-naive-bar-front.jpg',
        alt: 'Front of Black Sauna Smoked Chocolate bar made by Chocolate Naive',
      },
      BAR_BACK: {
        src: '/bars/black-sauna-smoked-chocolate-chocolate-naive-bar-back.jpg',
        alt: 'Back of Black Sauna Smoked Chocolate bar made by Chocolate Naive',
      },
      PACKAGE_FRONT: {
        src: '/bars/black-sauna-smoked-chocolate-chocolate-naive-package-front.jpg',
        alt: 'Front of Black Sauna Smoked Chocolate bar made by Chocolate Naive package',
      },
      PACKAGE_BACK: {
        src: '/bars/black-sauna-smoked-chocolate-chocolate-naive-package-back.jpg',
        alt: 'Back of Black Sauna Smoked Chocolate bar made by Chocolate Naive package',
      },
    },

    barType: 'Dark',
    percent: 70,
    barWeight: 57,
    barDimensions: [113, 97, 8],
    ingredients: [
      'Organic Smoked Cacao',
      'Organic Cane Sugar',
      'Organic Pure Cacao Butter',
      'Siberian Fir',
      'Activated Birch Charcoal',
      'Wormwood',
      'Sea Salt',
    ],
    facilityAllergen: ['Milk', 'Wheat', 'Treenuts', 'Peanuts'],

    packagingType: 'Envelope',
    packagingDimensions: [157, 122, 9],
    wrapper: 'Eco Bag', // White
    marketingTerms: ['Limited Release', 'Made with Renewables'],
    packageLanguages: ['English', 'Lithuanian'],
    awards: [
      {
        body: 'NW Chocolate Festival',
        level: 'Innovation Award',
        year: 2014,
      },
      {
        body: 'Next Organic Berlin',
        level: 'Best Start-up',
        year: 2013,
      },
    ],
    insidePrinting: true,
    productionCountry: 'Lithuania',

    retailer: 'Bar & Cocoa',
    location: 'https://barandcocoa.com/',
    retailPrice: 15,
    dateObtained: '2023-01-11',

    reviewerBarFavorite: true,
    reviewerWouldEatAgain: true,

    origin: {
      country: 'unknown blend',
    },
  },
  {
    id: 'b4c155854a',
    releaseDate: '2023-01-14',
    name: 'Terroir of Lam Dong',
    description:
      'Lam Dong is a highland region, a mountainous province with a temperate, mild climate all year round. This stable climate rarely changes from year to year. Lam Dong has other weather phenomena of notice such as fog, salt flog, rain, thunderstorms and hail but these are not periodic. The result of growing in this area and being influenced by the weather make that cacao beans in Lam Dong result in a special type of chocolate. The taste starts with a hint of red berries and an intense chocolate flavour. Rich and very enjoyable, the flavour is dark and robust without tasting like being burnt.',
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
    awards: [
      {
        body: 'Academy of Chocolate',
        level: 'Gold',
        year: 2017,
      },
    ],
    productionCountry: 'Vietnam',

    retailer: 'Bar & Cocoa',
    location: 'https://barandcocoa.com/',
    retailPrice: 9,
    dateObtained: '2023-01-11',

    reviewerBarNotes: 'Bar arrived cracked down the middle',
    reviewerWouldEatAgain: true,

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
    description:
      'Gran Nativo Blanco cocoa is grown by smallholder members of the Norandino cooperative in the Piura region, North of Peru. This criollo cacao varietal is completely white, with intense aroma of gooseberries and lime, which you can find luckily in our chocolate as well.',
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
    productionCountry: 'Hungary',

    packagingType: 'Box',
    packagingDimensions: [115, 115, 10],
    wrapper: 'Parchment Paper',
    marketingTerms: ['From cocoa bean to chocolate'],
    packageLanguages: ['English', 'Hungarian'],

    retailer: 'Bar & Cocoa',
    location: 'https://barandcocoa.com/',
    retailPrice: 20,
    dateObtained: '2023-01-11',

    reviewerWouldEatAgain: true,
    reviewerPackagingFavorite: true,

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
    description: `The beans are from a series of small farms in Western Uganda, located at the foot of the Rwenzori Mountains. In true bean-to-bar fashion, the cacao is harvested, dried, and fermented in partnership with a 3rd generation, family-owned Italian chocolatier. But don't assume this partnership is a long-distance relationship. In fact, one of the Italian Executive Directors is based in Uganda where he helps guarantee the origin of the beans from Ugandan farmers who still own the lands on which the cacao is cultivated. It's a symbiotic partnership that yields some stellar chocolate!`,
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
    productionCountry: 'Italy',

    packagingType: 'Envelope', // Glued. https://www.nuceriagroup.com/
    packagingDimensions: [191, 93, 8],
    wrapper: 'Foil',
    marketingTerms: ['Single Origin'],

    retailer: 'Trader Joes',
    location: 'Hillcrest',
    retailPrice: 1.99,
    dateObtained: '2023-01-11',

    reviewerBarNotes: 'Didnt taste good. Unlikely ethically sourced.',
    reviewerWouldEatAgain: false,

    origin: {
      country: 'Uganda',
      region: 'Bundibugyo District',
      locality: 'Semuliki Forest',
    },
    beanVariety: 'Forestero',
  },
  {
    id: 'e1c6587355',
    releaseDate: '2023-01-11',
    name: 'Creamy White Chocolate 38%',
    subtitle: 'a la Flor de Sal',
    description: `The “Creamy White Chocolate 38% a la Flor de Sal” from SAL de IBIZA is made from the highest quality organic whole milk powder, organic raw cane sugar and the finest organic cocoa butter. The light ivory colour, the pleasant creamy flavour and the elegant buttery note make this chocolate a delicious experience. If you thought "white chocolate is for children", that's about to change.`,
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
    productionCountry: 'Spain',

    retailer: 'les amis du FROMAGE',
    location: 'E Hastings',
    retailPrice: 8.27,
    dateObtained: '2022-12-27',

    reviewerWouldEatAgain: true,

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
    description: [
      `An indulgent homage to the classic Italian Gianduja, slow roasted hazelnuts added to a creamy milk chocolate.`,
      `Born of the long standing friendship between Casa Bosques & Gohar World, the collaboration celebrates craft, beauty and time spent together around the table.`,
    ],
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
    productionCountry: 'Mexico',

    retailer: 'Casa Bosques Chocolates',
    location: 'https://casabosques.co',
    retailPrice: 22,
    dateObtained: '2023-01-09',

    reviewerBarNotes: 'Bar arrived severly broken',
    reviewerWouldEatAgain: true,
    reviewerPackagingNotes: 'Packaging malformed from Hazelnuts',

    origin: {
      country: 'Mexico',
      region: 'Chiapas',
      locality: 'Pichucalco',
    },
    beanVariety: 'Criollo',
  },
  {
    id: '027bdf6bb7',
    releaseDate: '2023-01-09',
    name: 'Sea Salt 70%',
    description: `For the salted chocolate lover: welcome home. Made with 50% roasted and 50% raw cacao, this 70% dark chocolate bar is topped with just enough sea salt to open up the incredible cacao flavor.`,
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
    productionCountry: 'United States',

    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 9.5,
    dateObtained: '2022-12-16',

    reviewerBarNotes: 'Bar had bloomed, did not like the taste',
    reviewerWouldEatAgain: false,

    origin: {
      country: 'Unknown',
    },
  },
  {
    id: '65bd8cb329',
    releaseDate: '2023-01-08',
    name: 'Udzungwa 70% with Nibs',
    subtitle: 'Organic Vegan Dark',
    description: `Warm whispers of orange and toffee reverberate as an ultra rare Trinitario cacao makes its way through your senses, echoing the elephants’ playfully winding journey from the mountain forest to the savannah.`,
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
    productionCountry: 'Switzerland',

    retailer: 'Olive Tree Marketplace',
    location: 'Ocean Beach',
    retailPrice: 6.49,
    dateObtained: '2023-01-07',

    reviewerWouldEatAgain: true,

    origin: {
      locality: 'Udzungwa Park',
      region: 'Iringa Region',
      country: 'Tanzania',
    },
    beanVariety: 'Trinitario',
  },
  {
    id: '9548da595f',
    releaseDate: '2023-01-07',
    name: 'Lavender Flowers + Red Salt',
    description: `Potent and floral. Heavenly lavender flowers sprinkled through grains of earthy red-alaea salt on dark chocolate of 84% slow-roasted cacao. Opposites attract, and a new pleasure is born from this perfect union.`,
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
    productionCountry: 'United States',

    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 7.5,
    dateObtained: '2022-12-16',

    reviewerWouldEatAgain: true,

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
    description: [
      `Tasting Notes — Dark milk chocolate set off with the "crack" of house-made maple toffee, using the finest Minnesota-harvested maple syrup straight from the sugar shack up the road.`,
      `Texture — Smooth bar studded with toffee bits.`,
      `Finish — This bar has a slow melt, accented with the butter from the maple toffee.`,
    ],
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
    productionCountry: 'United States',

    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 7.5,
    dateObtained: '2022-12-16',

    reviewerWouldEatAgain: true,

    origin: {
      country: 'Dominican Republic', // Via Instagram post
    },
  },
  {
    id: '2d32855f96',
    releaseDate: '2023-01-05',
    name: 'Dark & Salty',
    subtitle: 'Dark Chocolate & Vanilla-Infused Sea Salt',
    description: `Though 80% dark, this chocolate has surprisingly low bitterness and a lot of chocolate flavor.  The vanilla-infused sea salt sprinkled on the back brings out the magic in this Ugandan cacao with subtle flavors that remind us of cinnamon chocolate cake.`,
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
    productionCountry: 'United States',

    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 10,
    dateObtained: '2022-12-16',

    reviewerWouldEatAgain: true,

    origin: {
      country: 'Uganda',
      region: 'Bundibugyo District',
      locality: 'Semuliki Forest',
      // Exporter: Latitude Trade Co
    },
    beanVariety: 'Forestero',
  },
  {
    id: 'dab435f9c9',
    releaseDate: '2023-01-04',
    name: 'Pink Sea Salt',
    subtitle: 'Unroasted Dark Chocolate',
    description: `A fruity, complex salted dark chocolate to end all salted dark chocolates. Made with single origin cacao from Zorzal Cacao, a farm and fermentary within a bird sanctuary in the Dominican Republic, and sprinkled with Peruvian pink salt sourced from Salt of the Earth Co. We think New York Magazine said it best: this bar has a “deep, dark, mysterious flavor with hints of cherry; and a finish as long as a David Foster Wallace footnote.”`,
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
    productionCountry: 'United States',

    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 7,
    dateObtained: '2022-12-16',

    reviewerBarFavorite: true,
    reviewerWouldEatAgain: true,

    origin: 'Zorzal Reserve',
  },
  {
    id: 'd8e2e9afee',
    releaseDate: '2023-01-03',
    name: 'Coffee Crunch',
    description: `The fudgy backbone of our 67% chocolate with hints of red stone fruit and brown butter mixes and matches perfectly when studded with freshly-roasted coffee from our friends at Bongo Java Roasting Co. here in Nashville.`,
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
    productionCountry: 'United States',

    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 7,
    dateObtained: '2022-12-16',

    reviewerWouldEatAgain: true,

    origin: {
      country: 'Dominican Republic',
    },
  },
  {
    id: '3b2e8a2a3d',
    releaseDate: '2023-01-02',
    name: 'Kope X Coffee',
    subtitle: '60% Dark Milk Chocolate & Nibs',
    description: `Coffee plantations first emerged in Hawaii in the mid 1800’s. From then the crop has thrived, with over 8,200 acres planted across the state. Here in Hawaii, more farms now grow coffee than any other crop, and we are proud to be able to source locally grown coffee for this bar. The infusion of Hawaiian coffee (kope) into creamy dark milk chocolate and a sprinkling of crunchy cacao nibs make this the ideal chocolate breakfast bar.`,
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
    wrapper: 'Cellulose',
    marketingTerms: [
      'Bean to Bar',
      'Pairings',
      'Artwork by',
      'Biodegradable',
      'Recycled',
    ],
    insidePrinting: true,
    productionLocationHighlighted: true,
    productionCountry: 'United States',

    retailer: 'Kilauea Market + Cafe',
    location: '2555 Ala Namahana Pkwy B1, Kilauea, HI 96754',
    retailPrice: 10,
    dateObtained: '2022-12-5',

    reviewerWouldEatAgain: true,

    origin: {
      // TODO: Account for blends in origin as array
      country: 'Blend of Uganca, Ecuador, and Dominican Republic', // Via Instagram message
    },
  },
  {
    id: '1f81c6b0b3',
    releaseDate: '2023-01-01',
    name: 'Dominican Republic 72%',
    description: `Handcrafted in Squamish, B.C., this 72% single-origin dark chocolate is made with ethically sourced cacao beans from the Zorzal Reserve, a cacao farm and bird sanctuary in the Dominican Republic.`,
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
    productionCountry: 'Canada',

    retailer: 'les amis du FROMAGE',
    location: '843 E Hastings St, Vancouver, BC V6A 1R8, Canada',
    retailPrice: 6.96,
    dateObtained: '2022-12-27',

    reviewerBarFavorite: true,
    reviewerWouldEatAgain: true,

    origin: 'Zorzal Reserve',
  },
]

export default bars
