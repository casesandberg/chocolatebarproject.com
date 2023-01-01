// TODO: Differentiate producer from origin?

export interface Origin {
  id: string
  producer: OriginNames
  region: string
  country: string
}

const origins = [
  {
    id: '668ee3d1df',
    producer: 'Zorzal Reserve' as const,
    region: 'Duarte Province',
    country: 'Dominican Republic',
  },
]

export type OriginNames = typeof origins[number]['producer']

export default origins
