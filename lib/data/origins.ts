// TODO: Differentiate producer from origin?

export interface Origin {
  id: string
  producer: OriginNames
  locality: string
  region: string
  country: string
}

const origins = [
  {
    id: '668ee3d1df',
    producer: 'Zorzal Reserve' as const, // TODO: Maybe rename to grower?
    locality: 'San Francisco de Macorís',
    region: 'Duarte Province',
    country: 'Dominican Republic',
  },
]

export type OriginNames = typeof origins[number]['producer']

export default origins

// https://mokaorigins.com/pages/single-origin-uganda
