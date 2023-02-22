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
  {
    id: 'c633f63113',
    name: 'SAL de IBIZA' as const,
  },
  {
    id: 'c7c483b8ce',
    name: 'ICAM Chocolate' as const,
  },
  {
    id: '27ae402dd7',
    name: 'Rózsavölgyi Csokoládé' as const,
  },
  {
    id: 'b89ceeee28',
    name: 'Belvie Chocolate' as const,
  },
  {
    id: 'd9ee5dfb23',
    name: 'Chocolate Naive' as const,
  },
  {
    id: '1cad973d60',
    name: 'Exquisito Chocolates' as const,
  },
  {
    id: 'c772fe5d0b',
    name: 'Firetree Chocolate' as const,
  },
  {
    id: '32e54752c5',
    name: 'Dandelion Chocolate' as const,
  },
  {
    id: 'f997d3494e',
    name: 'Deux Cranes' as const,
  },
  {
    id: '6bc7e956dd',
    name: 'Latitude Craft Chocolate' as const,
  },
  {
    id: 'a52c73ba08',
    name: 'Zimt Chocolates' as const,
  },
  {
    id: '926811b1fc',
    name: 'Amano Artisan Chocolate' as const,
  },
  {
    id: '84be5c9130',
    name: 'Domori' as const,
  },
  {
    id: '3f35411338',
    name: 'BETA5' as const,
  },
  {
    id: 'c2d00ad6ca',
    name: 'Hu' as const,
  },
  {
    id: 'bf3f9600e5',
    name: 'Spinnaker Chocolate' as const,
  },
  {
    id: 'd01e68094a',
    name: 'Pacific Chocolate Company' as const,
  },
  {
    id: '0954aaa467',
    name: 'Cacao Hunters' as const,
  },
  {
    id: '0e5e7765d1',
    name: 'Baianí Chocolates' as const,
  },
  {
    id: '3287cd2a8b',
    name: 'Fruition Chocolate Works' as const,
  },
  {
    id: 'd7ff49415a',
    name: 'Videri Chocolate Factory' as const,
  },
  {
    id: '3faed3a682',
    name: 'Auro Chocolate' as const,
  },
  {
    id: '1012f5ab15',
    name: 'Whistler Chocolate' as const,
  },
  {
    id: 'e1b3c2d6db',
    name: 'Cacaosuyo' as const,
  },
  {
    id: '4dd095ef1d',
    name: 'Pascha Chocolate Co' as const,
  },
  {
    id: '506b8b627c',
    name: 'MARKHAM & FITZ' as const,
  },
  {
    id: 'e4d7ab180d',
    name: 'Maverick Chocolate Co' as const,
  },
  {
    id: '6cc5a0c870',
    name: 'Solstice Chocolate' as const,
  },
  {
    id: 'fcf3939898',
    name: 'Nibble Chocolate' as const,
  },
  {
    id: '47f307bd73',
    name: 'definite chocolate' as const,
  },
  {
    id: '4b2a7f7421',
    name: 'Ranger Chocolate Co' as const,
  },
  {
    id: 'e7c202940d',
    name: 'Ritual Chocolate' as const,
  },
  {
    id: '52cb62d387',
    name: 'Askinosie Chocolate' as const,
  },
  {
    id: 'a28fa8a1d2',
    name: 'Omnom Chocolate' as const,
  },
  {
    id: 'd805c6f134',
    name: 'Fjak Chocolate' as const,
  },
  {
    id: '0388399847',
    name: 'Dick Taylor' as const,
  },
  {
    id: '62d80dffe3',
    name: 'Honeymoon Chocolates' as const,
  },
  {
    id: '0c1aa2ccc2',
    name: 'Laderach' as const,
  },
  {
    id: '205c59419f',
    name: 'Fu Wan Chocolate' as const,
  },
  {
    id: 'dfd53f3948',
    name: 'Wildwood Chocolate' as const,
  },
  {
    id: 'bf5b6ed621',
    name: 'Cocoa Parlor' as const,
  },
  {
    id: 'c4104304ec',
    name: 'Those Girls at the Market' as const,
  },
]

export type MakerNames = typeof makers[number]['name']

export default makers
