interface Bar {
  name: string
  maker: string
  subtitle?: string
  slug?: string
  productUrl?: string
  retailer: string
  location: string
  retailPrice: number // USD
  dateObtained: string
}

const vault: Array<Bar> = [
  {
    name: 'Dark Horse Coffee',
    subtitle: 'Dark Chocolate',
    maker: 'Nibble Chocolate',
    slug: 'dark-horse-coffee-dark-chocolate-nibble-chocolate',
    productUrl:
      'https://nibblechocolate.com/products/nibble-brazil-72-infused-coffee',

    retailer: 'Nibble Chocolate',
    location: 'Hillcrest Farmers Market',
    retailPrice: 6,
    dateObtained: '2023-02-05',
  },
  {
    name: '72% Cocoa',
    subtitle: 'Brazil',
    maker: 'Nibble Chocolate',
    slug: '72-cocoa-brazil-nibble-chocolate',
    productUrl:
      'https://nibblechocolate.com/products/nibble-brazil-72-infused-coffee',

    retailer: 'Nibble Chocolate',
    location: 'Hillcrest Farmers Market',
    retailPrice: 6,
    dateObtained: '2023-02-05',
  },

  //
  {
    name: 'Japan Sea Salt',
    subtitle: 'Chocolate Bar',
    maker: 'Ranger Chocolate Co',
    slug: 'japan-sea-salt-chocolate-bar-ranger-chocolate-co',
    productUrl: 'https://rangerchocolate.co/shop/wa/shop?id=13&e=KHCItem',

    retailer: 'Blackmarket Bakery',
    location: 'North Park',
    retailPrice: 7,
    dateObtained: '2023-01-31',
  },

  //
  {
    name: '(White) Chocolate Covered Strawberry',
    maker: 'Askinosie Chocolate',
    slug: 'white-chocolate-covered-strawberry-askinosie-chocolate',
    productUrl:
      'https://askinosie.com/products/white-chocolate-covered-strawberry-bar',

    retailer: 'Askinosie Chocolate',
    location: 'https://askinosie.com/',
    retailPrice: 14.0,
    dateObtained: '2023-01-31',
  },
  {
    name: 'Davao, Philippines',
    subtitle: '77% Dark Chocolate',
    maker: 'Askinosie Chocolate',
    slug: 'davao-philippines-77-dark-chocolate-askinosie-chocolate',
    productUrl:
      'https://askinosie.com/products/77-davao-philippines-dark-chocolate-bar',

    retailer: 'Askinosie Chocolate',
    location: 'https://askinosie.com/',
    retailPrice: 10.0,
    dateObtained: '2023-01-31',
  },
  {
    name: 'Dark Chocolate + Avocado & Rosemary',
    subtitle: 'Heath Ceramics Collabaration Bar',
    maker: 'Askinosie Chocolate',
    slug: 'dark-chocolate-avocado-rosemary-heath-ceramics-collabaration-bar-askinosie-chocolate',
    productUrl:
      'https://askinosie.com/products/dark-chocolate-avocado-rosemary-collabaration-bar',

    retailer: 'Askinosie Chocolate',
    location: 'https://askinosie.com/',
    retailPrice: 10.5,
    dateObtained: '2023-01-31',
  },

  //
  {
    name: "S'mores Bar",
    subtitle: 'Graham Cracker and Caramelized Sugar',
    maker: 'Ritual Chocolate',
    slug: 'smores-bar-graham-cracker-and-caramelized-sugar-ritual-chocolate',
    productUrl: 'https://www.ritualchocolate.com/shop/smoresbar',

    retailer: 'Bar & Cocoa',
    location: 'https://barandcocoa.com/',
    retailPrice: 10.0,
    dateObtained: '2023-01-30',
  },
  {
    name: 'The Après Chocolate',
    subtitle: 'Sparkling White Wine Infused Chocolate With Dried Raspberries',
    maker: 'Ritual Chocolate',
    slug: 'the-apres-chocolate-sparkling-white-wine-infused-chocolate-with-dried-raspberries-ritual-chocolate',
    productUrl: 'https://www.ritualchocolate.com/shop/apresbar',

    retailer: 'Bar & Cocoa',
    location: 'https://barandcocoa.com/',
    retailPrice: 12.0,
    dateObtained: '2023-01-30',
  },
  {
    name: 'Wild Berry Pop',
    subtitle: 'White Chocolate with Berries and Pop Rocks',
    maker: 'SOMA Chocolatemaker',
    slug: 'wild-berry-pop-white-chocolate-with-berries-and-pop-rocks-soma-chocolatemaker',
    productUrl: 'https://www.somachocolate.com/products/wild-berry-pop-bar',

    retailer: 'Bar & Cocoa',
    location: 'https://barandcocoa.com/',
    retailPrice: 14.5,
    dateObtained: '2023-01-30',
  },
  {
    name: 'Lakkrís + Raspberry',
    maker: 'Omnom Chocolate',
    slug: 'lakkris-raspberry-omnom-chocolate',
    productUrl: 'https://omnomchocolate.com/products/lakkris-raspberry',

    retailer: 'Bar & Cocoa',
    location: 'https://barandcocoa.com/',
    retailPrice: 9,
    dateObtained: '2023-01-30',
  },
  {
    name: 'Pavlova Party',
    subtitle: 'White Chocolate, Festive Fruits & Meringue',
    maker: 'Fjak Chocolate',
    slug: 'pavlova-party-white-chocolate-festive-fruits-meringue-fjak-chocolate',
    productUrl: 'https://fjaak.no/en/product/pavlova-party/',

    retailer: 'Bar & Cocoa',
    location: 'https://barandcocoa.com/',
    retailPrice: 11,
    dateObtained: '2023-01-30',
  },
  {
    name: 'Strawberry Milk Chocolate',
    maker: 'Honeymoon Chocolates',
    slug: 'strawberry-milk-chocolate-honeymoon-chocolates',
    productUrl:
      'https://hmchocolates.com/products/belize-milk-chocolate-strawberry',

    retailer: 'Bar & Cocoa',
    location: 'https://barandcocoa.com/',
    retailPrice: 12,
    dateObtained: '2023-01-30',
  },

  //
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
    name: '75% Vietnam Dark Chocolate',
    maker: 'Maverick Chocolate Co',
    productUrl:
      'https://maverickchocolate.com/products/75-vietnam-dark-chocolate',

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
