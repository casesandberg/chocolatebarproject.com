export interface Maker {
  id: string
  name: MakerNames
}

const makers = [
  {
    id: '07ef0bfa14',
    name: 'Schoki Chocolate' as const,
  },
  {
    id: '5a1d356c26',
    name: 'Manoa Chocolate' as const,
  },
  {
    id: '37d76a0451',
    name: 'Olive & Sinclair Chocolate Co' as const,
  },
  {
    id: '4c283dad0d',
    name: 'Raaka Chocolate' as const,
  },
  {
    id: '4c5e3ee85f',
    name: 'Xocolatl Small Batch Chocolate' as const,
  },
  {
    id: '75269ba864',
    name: 'Terroir Chocolate' as const,
  },
  {
    id: '139446e064',
    name: 'Antidote Chocolate' as const,
  },
  {
    id: 'ffab80adbc',
    name: 'Original Beans' as const,
  },
  {
    id: 'fdc42eea5a',
    name: 'Fine & Raw Chocolate' as const,
  },
  {
    id: 'cd2184a66b',
    name: 'Casa Bosques Chocolates' as const,
  },
]

export type MakerNames = typeof makers[number]['name']

export default makers
