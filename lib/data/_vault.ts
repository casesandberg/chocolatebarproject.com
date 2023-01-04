interface Bar {
  name: string
  maker: string
  retailer: string
  location: string
  retailPrice: number // USD
  dateObtained: string
}

const vault: Array<Bar> = [
  {
    name: 'Born Fruity',
    maker: 'TCHO',
    retailer: 'Lazy Acres',
    location: 'Hillcrest',
    retailPrice: 3.99,
    dateObtained: '2023-01-03',
  },
  {
    name: 'Crispy Rice 73% Cacao',
    maker: 'Beyond Good',
    retailer: 'Lazy Acres',
    location: 'Hillcrest',
    retailPrice: 4.49,
    dateObtained: '2023-01-03',
  },
  {
    name: '70% Cacao',
    maker: 'Divine Chocolate',
    retailer: 'Lazy Acres',
    location: 'Hillcrest',
    retailPrice: 4.49,
    dateObtained: '2023-01-03',
  },
  {
    name: 'Royal Dark 88',
    maker: 'Cocoa Parlor',
    retailer: 'Lazy Acres',
    location: 'Hillcrest',
    retailPrice: 4.99,
    dateObtained: '2023-01-03',
  },
  {
    name: 'Vegan White Bar with Organic Vanilla',
    maker: 'Pascha',
    retailer: 'Lazy Acres',
    location: 'Hillcrest',
    retailPrice: 3.29,
    dateObtained: '2023-01-03',
  },
  {
    name: '70% Cacao Classic Dark',
    maker: 'Pascha',
    retailer: 'Lazy Acres',
    location: 'Hillcrest',
    retailPrice: 2.99,
    dateObtained: '2023-01-03',
  },

  //
  {
    name: 'Milk Hazelnut',
    maker: 'Whistler Chocolate',
    retailer: 'Dufry',
    location: 'YVR Airport',
    retailPrice: 5.49,
    dateObtained: '2022-12-30',
  },
  {
    name: 'Dark Orange',
    maker: 'Whistler Chocolate',
    retailer: 'Dufry',
    location: 'YVR Airport',
    retailPrice: 5.49,
    dateObtained: '2022-12-30',
  },

  //
  {
    name: 'Hokey Pokey',
    maker: 'Beta 5',
    retailer: 'Beta 5',
    location: 'Vancouver Factory',
    retailPrice: 0,
    dateObtained: '2022-12-29',
  },
  {
    name: 'Technicolour Crunch',
    maker: 'Beta 5',
    retailer: 'Beta 5',
    location: 'Vancouver Factory',
    retailPrice: 0,
    dateObtained: '2022-12-29',
  },
  {
    name: 'The London Fog',
    maker: 'Zimt',
    retailer: 'Zimt',
    location: 'Vancouver Factory',
    retailPrice: 0,
    dateObtained: '2022-12-29',
  },
  {
    name: 'Chocolate Nib"d',
    maker: 'Zimt',
    retailer: 'Zimt',
    location: 'Vancouver Factory',
    retailPrice: 0,
    dateObtained: '2022-12-29',
  },

  //
  {
    name: 'Dominican Republic',
    maker: 'Schoki Chocolate',
    retailer: 'les amis du FROMAGE',
    location: 'E Hastings',
    retailPrice: 0,
    dateObtained: '2022-12-27',
  },
  {
    name: 'Dark Milk',
    maker: 'Schoki Chocolate',
    retailer: 'les amis du FROMAGE',
    location: 'E Hastings',
    retailPrice: 0,
    dateObtained: '2022-12-27',
  },
  {
    name: 'Espresso',
    maker: 'Seed and Bean',
    retailer: 'les amis du FROMAGE',
    location: 'E Hastings',
    retailPrice: 0,
    dateObtained: '2022-12-27',
  },
  {
    name: 'a la Flor de Sal',
    maker: 'SAL de Ibiza',
    retailer: 'les amis du FROMAGE',
    location: 'E Hastings',
    retailPrice: 0,
    dateObtained: '2022-12-27',
  },
  {
    name: 'Romeo"s Combover',
    maker: 'Mink',
    retailer: 'Mink',
    location: 'W Hastings',
    retailPrice: 0,
    dateObtained: '2022-12-27',
  },
  {
    name: 'Mink Original',
    maker: 'Mink',
    retailer: 'Mink',
    location: 'W Hastings',
    retailPrice: 0,
    dateObtained: '2022-12-27',
  },

  //
  {
    name: 'Simply Dark',
    maker: 'Denman Island Chocolate',
    retailer: 'BC Ferry',
    location: 'Horseshoe Bay',
    retailPrice: 0,
    dateObtained: '2022-12-22',
  },
  {
    name: 'Espresso Chunk',
    maker: 'Denman Island Chocolate',
    retailer: 'BC Ferry',
    location: 'Horseshoe Bay',
    retailPrice: 0,
    dateObtained: '2022-12-22',
  },

  //
  {
    name: 'Ultra Dark',
    maker: 'Whistler Chocolate',
    retailer: 'The Little Market Box',
    location: 'Saskatoon',
    retailPrice: 5.86,
    dateObtained: '2022-12-21',
  },
  {
    name: 'LMB Vanilla Bean Special',
    maker: 'Whistler Chocolate',
    retailer: 'The Little Market Box',
    location: 'Saskatoon',
    retailPrice: 9.52,
    dateObtained: '2022-12-21',
  },

  //
  {
    name: '60% Espresso + Sea Salt',
    maker: 'Cultra Craft Chocolate',
    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 5,
    dateObtained: '2022-12-16',
  },
  {
    name: 'Matcha Chocolate with Caramelized Sesame',
    maker: 'Deux Cranes',
    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 11,
    dateObtained: '2022-12-16',
  },
  {
    name: 'Strawberry and Dark Chocolate',
    maker: 'Deux Cranes',
    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 11,
    dateObtained: '2022-12-16',
  },
  {
    name: 'Lavender Flowers + Red Salt',
    maker: 'Antidote',
    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 7.5,
    dateObtained: '2022-12-16',
  },
  {
    name: 'Naked',
    maker: 'Antidote',
    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 7.5,
    dateObtained: '2022-12-16',
  },
  {
    name: 'Pink Sea Salt',
    maker: 'Raaka',
    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 7,
    dateObtained: '2022-12-16',
  },
  {
    name: 'Maple & Nibs',
    maker: 'Raaka',
    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 7,
    dateObtained: '2022-12-16',
  },
  {
    name: 'Dark & Salty',
    maker: 'Xocolatl',
    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 10,
    dateObtained: '2022-12-16',
  },
  {
    name: 'Commuter',
    maker: 'Xocolatl',
    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 10,
    dateObtained: '2022-12-16',
  },
  {
    name: 'Coffee Crunch',
    maker: 'Olive & Sinclair',
    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 7,
    dateObtained: '2022-12-16',
  },
  {
    name: '67% Cacao Nibs',
    maker: 'Olive & Sinclair',
    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 7,
    dateObtained: '2022-12-16',
  },
  {
    name: 'Caramel Crack',
    maker: 'Terroir Chocolate',
    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 7.5,
    dateObtained: '2022-12-16',
  },
  {
    name: 'Cardamom Krumkake',
    maker: 'Terroir Chocolate',
    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 7.5,
    dateObtained: '2022-12-16',
  },
  {
    name: 'Sea Salt 70%',
    maker: 'Fine & Raw Chocolate',
    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 9.5,
    dateObtained: '2022-12-16',
  },
  {
    name: 'Dark Milk',
    maker: 'French Broad Chocolate',
    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 5.5,
    dateObtained: '2022-12-16',
  },
  {
    name: 'Sea Salt',
    maker: 'Videri',
    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 9,
    dateObtained: '2022-12-16',
  },
  {
    name: '',
    maker: '',
    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 0,
    dateObtained: '2022-12-16',
  },
  //
  {
    name: 'Salty & Sweet',
    maker: 'Evolved',
    retailer: 'Wholefoods',
    location: 'Hillcrest',
    retailPrice: 0, // ?
    dateObtained: '2022-12-13',
  },
  {
    name: 'Sea Salt',
    maker: 'Alter Eco',
    retailer: 'Wholefoods',
    location: 'Hillcrest',
    retailPrice: 0, // ?
    dateObtained: '2022-12-13',
  },
  {
    name: 'Mo"s Dark Bacon',
    maker: 'Vosges',
    retailer: 'Wholefoods',
    location: 'Hillcrest',
    retailPrice: 0, // ?
    dateObtained: '2022-12-13',
  },
  {
    name: 'Salty Dark Chocolate',
    maker: 'Hu',
    retailer: 'Wholefoods',
    location: 'Hillcrest',
    retailPrice: 0, // ?
    dateObtained: '2022-12-13',
  },
  {
    name: 'Simple Milk Chocolate',
    maker: 'Hu',
    retailer: 'Wholefoods',
    location: 'Hillcrest',
    retailPrice: 0, // ?
    dateObtained: '2022-12-13',
  },

  //
  {
    name: 'Kope Coffee',
    maker: 'Manoa',
    retailer: 'Kilauea Market + Cafe',
    location: 'Kilauea',
    retailPrice: 0, // ?
    dateObtained: '2022-12-5',
  },
  {
    name: 'Kona',
    maker: 'Manoa',
    retailer: 'Kilauea Market + Cafe',
    location: 'Kilauea',
    retailPrice: 0, // ?
    dateObtained: '2022-12-5',
  },
  {
    name: 'Mililani',
    maker: 'Manoa',
    retailer: 'Kilauea Market + Cafe',
    location: 'Kilauea',
    retailPrice: 0, // ?
    dateObtained: '2022-12-5',
  },
  {
    name: 'Midnight Velvelt',
    maker: 'Lulu"s',
    retailer: 'Kilauea Market + Cafe',
    location: 'Kilauea',
    retailPrice: 0, // ?
    dateObtained: '2022-12-5',
  },
]

export {}