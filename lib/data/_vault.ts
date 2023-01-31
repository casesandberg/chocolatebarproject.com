interface Bar {
  name: string
  maker: string
  productUrl?: string
  retailer: string
  location: string
  retailPrice: number // USD
  dateObtained: string
}

const vault: Array<Bar> = [
  {
    name: 'Black Fig',
    maker: 'Dick Taylor',
    productUrl: 'https://dicktaylorchocolate.com/products/black-fig',

    retailer: 'Dick Taylor',
    location: 'https://dicktaylorchocolate.com',
    retailPrice: 10,
    dateObtained: '2023-01-28',
  },
  {
    name: 'Strawberries & Cream',
    maker: 'Dick Taylor',
    productUrl:
      'https://dicktaylorchocolate.com/collections/all/products/strawberries-cream',

    retailer: 'Dick Taylor',
    location: 'https://dicktaylorchocolate.com',
    retailPrice: 14,
    dateObtained: '2023-01-28',
  },
  {
    name: '70% Ben Tre',
    maker: 'Solstice Chocolate',
    productUrl: 'https://www.solsticechocolate.com/shop/70vietnam',

    retailer: 'Solstice Chocolate',
    location: 'https://www.solsticechocolate.com',
    retailPrice: 14,
    dateObtained: '2023-01-28',
  },
  {
    name: '70% Rio Claro',
    maker: 'Solstice Chocolate',
    productUrl: 'https://www.solsticechocolate.com/shop/trini',

    retailer: 'Solstice Chocolate',
    location: 'https://www.solsticechocolate.com',
    retailPrice: 16,
    dateObtained: '2023-01-28',
  },
  {
    name: '75% Vietnam Dark Chocolate',
    maker: 'Maverick Chocolate Co',
    productUrl:
      'https://maverickchocolate.com/products/75-vietnam-dark-chocolate',

    retailer: 'Maverick Chocolate Co',
    location: 'https://maverickchocolate.com',
    retailPrice: 12,
    dateObtained: '2023-01-28',
  },
  {
    name: 'Peanut Butter Dark Chocolate',
    maker: 'Maverick Chocolate Co',
    productUrl:
      'https://maverickchocolate.com/products/peanut-butter-dark-chocolate',

    retailer: 'Maverick Chocolate Co',
    location: 'https://maverickchocolate.com',
    retailPrice: 12,
    dateObtained: '2023-01-28',
  },

  //
  {
    name: '58% Colombia Oatnog',
    maker: 'Spinnaker Chocolate',
    retailer: 'Spinnaker Chocolate',
    location: 'spinnakerchocolate.com',
    retailPrice: 11,
    dateObtained: '2023-01-25',
  },
  {
    name: '70% Belize with Bourbon',
    maker: 'Spinnaker Chocolate',
    retailer: 'Spinnaker Chocolate',
    location: 'spinnakerchocolate.com',
    retailPrice: 13,
    dateObtained: '2023-01-25',
  },

  //
  {
    name: 'Momofuku Chili Chocolate Crunch',
    maker: 'Raaka',
    productUrl: 'https://www.raakachocolate.com/pages/first-nibs',

    retailer: 'Raaka',
    location: 'https://www.raakachocolate.com',
    retailPrice: 9, // Part of first-nibs program, 25$ for 3 bars
    dateObtained: '2023-01-20',
  },
  {
    name: 'Green Tea Crunch',
    maker: 'Raaka',
    productUrl: 'https://www.raakachocolate.com/products/green-tea-crunch',

    retailer: 'Raaka',
    location: 'https://www.raakachocolate.com',
    retailPrice: 7,
    dateObtained: '2023-01-20',
  },
  {
    name: 'Zorzal Comunitario',
    maker: 'Dandelion Chocolate',
    productUrl:
      'https://store.dandelionchocolate.com/products/zorzal-comunitario-dominican-republic-70-chocolate-bar',

    retailer: 'Dandelion Chocolate',
    location: 'https://dandelionchocolate.com/',
    retailPrice: 11,
    dateObtained: '2023-01-19',
  },
  {
    name: 'Piura Select 70%',
    maker: 'Cacaosuyo',
    productUrl: 'https://cacaosuyo.pe/product/piura-select-70/',

    retailer: 'Bar & Cocoa',
    location: 'https://barandcocoa.com/',
    retailPrice: 9.25,
    dateObtained: '2023-01-11',
  },
  {
    name: 'Dominican Rum',
    maker: 'Definite Chocolate',
    productUrl:
      'https://definitechocolate.com/products/domincan-rum-75-finca-elvesia',

    retailer: 'Bar & Cocoa',
    location: 'https://barandcocoa.com/',
    retailPrice: 9.0,
    dateObtained: '2023-01-11',
  },
  {
    name: 'Taiwan #9 Double Ferment',
    maker: 'Fu Wan Chocolate',
    productUrl: 'https://www.fuwanshop.com/products/taiwanno9',

    retailer: 'Bar & Cocoa',
    location: 'https://barandcocoa.com/',
    retailPrice: 13.5,
    dateObtained: '2023-01-11',
  },
  {
    name: 'Dark Chocolate with Citrus and Licorice',
    maker: 'Chocolate Naive',
    productUrl:
      'https://chocolatenaive.com/s/chocolates/equator/dark-chocolate-with-orange-and-liquorice/',

    retailer: 'Bar & Cocoa',
    location: 'https://barandcocoa.com/',
    retailPrice: 10.25,
    dateObtained: '2023-01-11',
  },
  {
    name: 'Japanese Sea Salt & Cocoa Nibs',
    maker: 'Amano Chocolate',
    productUrl:
      'https://amanochocolate.com/product/japanese-sea-salt-and-cocoa-nibs/',

    retailer: 'Bar & Cocoa',
    location: 'https://barandcocoa.com/',
    retailPrice: 10,
    dateObtained: '2023-01-11',
  },
  {
    name: 'Mana',
    maker: 'Auro Chocolate',
    productUrl:
      'https://aurochocolate.com/products/85-dark-chocolate-single-estate-mana-60g-reserve-bar?_pos=2&_sid=19c38cae5&_ss=r',

    retailer: 'Bar & Cocoa',
    location: 'https://barandcocoa.com/',
    retailPrice: 9.5,
    dateObtained: '2023-01-11',
  },
  {
    name: 'Dark Chocolate with Caipirinha',
    maker: 'Chocolates Baiani',
    productUrl: 'https://www.baiani.com.br/en/chocolate/65-cacao-caipirinha',

    retailer: 'Bar & Cocoa',
    location: 'https://barandcocoa.com/',
    retailPrice: 11,
    dateObtained: '2023-01-11',
  },

  //
  {
    name: 'Organic Dark Chocolate Bar',
    maker: 'Unknown',
    productUrl:
      'https://www.traderjoes.com/home/products/pdp/organic-dark-chocolate-bar-73-cacao-070561',
    retailer: 'Trader Joes',
    location: 'Hillcrest',
    retailPrice: 1.99,
    dateObtained: '2023-01-11',
  },

  //
  {
    name: 'Pure Dark Chocolate',
    maker: 'Casa Bosques Chocolates',
    productUrl:
      'https://casabosques.co/collections/cbb-bars/products/sesame-seeds',
    retailer: 'Casa Bosques Chocolates',
    location: 'https://casabosques.co',
    retailPrice: 22,
    dateObtained: '2023-01-09',
  },

  //
  {
    name: 'Udzungwa 70% with Nibs',
    maker: 'Original Beans',
    productUrl: 'https://originalbeans.com/shop/bars/udzungwa-70-chocolate',
    retailer: 'Olive Tree Marketplace',
    location: 'Ocean Beach',
    retailPrice: 6.49,
    dateObtained: '2023-01-07',
  },
  {
    name: 'Cheeky Cheeky Churro',
    maker: 'Chuao Chocolatier',
    productUrl: 'https://chuaochocolatier.com/products/cheeky-cheeky-churro',
    retailer: 'Ralphs',
    location: 'Hillcrest',
    retailPrice: 5.99,
    dateObtained: '2023-01-07',
  },
  {
    name: 'Happy Birthday',
    maker: 'Seattle Chocolate',
    productUrl:
      'https://www.seattlechocolate.com/products/happy-birthday-truffle-bar',
    retailer: 'Ralphs',
    location: 'Hillcrest',
    retailPrice: 5.99,
    dateObtained: '2023-01-07',
  },

  //
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
    name: 'The London Fog',
    maker: 'Zimt',
    retailer: 'Zimt',
    location: 'Vancouver Factory',
    retailPrice: 0,
    dateObtained: '2022-12-29',
  },

  //
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
    name: 'Maple & Nibs',
    maker: 'Raaka',
    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 7,
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
    name: '67% Cacao Nibs',
    maker: 'Olive & Sinclair',
    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 7,
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
    name: 'Simple Milk Chocolate',
    maker: 'Hu',
    retailer: 'Wholefoods',
    location: 'Hillcrest',
    retailPrice: 0, // ?
    dateObtained: '2022-12-13',
  },

  //
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
