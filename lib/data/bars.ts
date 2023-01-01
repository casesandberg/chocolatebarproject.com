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
// TODO: SEO best practices for naming images (bar name + maker?)
// TODO: Track price and currency. Allow for currency selector for different regions.
// TODO: I18N for labels.
// TODO: Differentiate retailer and location purchased??
// TODO: Differentiate guess? end with Question Mark?
// TODO: Location if online? domain?
// TODO: What happens if given bar, still want to list obtained/price right?
// TODO: filter by published: true? last updated date?
// TODO: Packaging print language? Shine/Matte/Linen. Colors: Dual-tone, full-color, monotone.

export interface Image {
  src: `/${string}`
  alt: string
}

export interface Bar {
  id: string
  name: string
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
  ingredients: Array<string>
  foodAllergen?: Array<string>
  facilityAllergen?: Array<string>

  packagingType: string
  wrapper?: string
  certifiedLabels?: Array<string>
  uncertifiedLabels?: Array<string>
  marketingTerms?: Array<string>
  tastingNotes?: Array<string>
  insidePrinting?: boolean

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
    id: '1f81c6b0b3',
    name: 'Dominican Republic Dark 72%',
    slug: 'dominican-republic-dark-72-schoki-chocolate',
    maker: 'Schoki Chocolate',

    images: {
      HERO: {
        src: '/bars/dominican-republic-dark-72-schoki-chocolate.jpg',
        alt: 'Dominican Republic Dark 72% bar from Schoki Chocolate on a background with coffee',
      },
      BAR_FRONT: {
        src: '/bars/dominican-republic-dark-72-schoki-chocolate-bar-front.png',
        alt: 'Front of Dominican Republic Dark 72% bar from Schoki Chocolate with a custom geometric design',
      },
      BAR_BACK: {
        src: '/bars/dominican-republic-dark-72-schoki-chocolate-bar-back.png',
        alt: 'Back of Dominican Republic Dark 72% bar from Schoki Chocolate with nibs visible',
      },
      PACKAGE_FRONT: {
        src: '/bars/dominican-republic-dark-72-schoki-chocolate-package-front.png',
        alt: 'Front of Dominican Republic Dark 72% bar from Schoki Chocolate with a custom geometric design',
      },
      PACKAGE_BACK: {
        src: '/bars/dominican-republic-dark-72-schoki-chocolate-package-back.png',
        alt: 'Back of Dominican Republic Dark 72% bar from Schoki Chocolate with nibs visible',
      },
      PACKAGE_INSIDE: {
        src: '/bars/dominican-republic-dark-72-schoki-chocolate-package-front.png',
        alt: 'Front of Dominican Republic Dark 72% bar from Schoki Chocolate with a custom geometric design',
      },
    },

    barType: 'Dark',
    percent: 72,
    barWeight: 65,
    ingredients: [
      'Organic Cacao Beans',
      'Organic Cane Sugar',
      'Organic Cocoa Butter',
    ],
    facilityAllergen: ['Peanuts', 'Tree Nuts', 'Dairy'],

    packagingType: 'Box',
    wrapper: 'Foil',
    marketingTerms: ['Bean to Bar', 'Crafted', 'Ethically Sourced'],
    insidePrinting: true,

    origin: 'Zorzal Reserve',
  },
]

export default bars
