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
  productionCountry?: string
}

const vault: Array<Bar> = [
  {
    name: "Caputo's Wild Jurua 70%",
    subtitle: 'by Luisa Abram',
    maker: "Caputo's Market & Deli",
    slug: 'caputos-wild-jurua-70-by-luisa-abram-caputos-market-deli',
    productUrl:
      'https://caputos.com/product/caputos-wild-jurua-70-luisa-abram/',
    productionCountry: 'United States',

    retailer: "Caputo's",
    location: 'https://caputos.com/',
    retailPrice: 14.99,
    dateObtained: '2023-03-09',
  },
  {
    name: 'Nicaliso 70%',
    maker: 'Friis-Holm Chokolade',
    slug: 'nicaliso-70-friis-holm-chokolade',
    productUrl: 'https://www.friisholmchokolade.dk/product-page/nicaliso-70',
    productionCountry: 'Denmark',

    retailer: "Caputo's",
    location: 'https://caputos.com/',
    retailPrice: 19.99,
    dateObtained: '2023-03-09',
  },
  {
    name: 'Nicaliso 70%',
    maker: 'Friis-Holm Chokolade',
    slug: 'nicaliso-70-friis-holm-chokolade',
    productUrl: 'https://www.friisholmchokolade.dk/product-page/nicaliso-70',
    productionCountry: 'Denmark',

    retailer: "Caputo's",
    location: 'https://caputos.com/',
    retailPrice: 19.99,
    dateObtained: '2023-03-09',
  },
  {
    name: 'Salted Honeycomb',
    subtitle: 'Milk Chocolate 41%',
    maker: 'Artisan du Chocolat',
    slug: 'salted-honeycomb-milk-chocolate-41-artisan-du-chocolat',
    productUrl:
      'https://www.artisanduchocolat.com/products/salted-honeycomb-milk-bar',
    productionCountry: 'England',

    retailer: "Caputo's",
    location: 'https://caputos.com/',
    retailPrice: 6.99,
    dateObtained: '2023-03-09',
  },
  {
    name: 'Pure Nacional',
    subtitle: '80% Pure Nacional from Peru',
    maker: 'Goodio',
    slug: 'pure-nacional-80-pure-nacional-from-peru-goodio',
    productUrl: 'https://caputos.com/product/goodio-pure-nacional-80/',
    productionCountry: 'Finland',

    retailer: "Caputo's",
    location: 'https://caputos.com/',
    retailPrice: 6.99,
    dateObtained: '2023-03-09',
  },
  {
    name: 'Forest',
    subtitle: 'Chocolate Topped with Birch Leaves & Forest Crystals',
    maker: 'Goodio',
    slug: 'forest-chocolate-topped-with-birch-leaves-forest-crystals-goodio',
    productUrl: 'https://goodio.us/products/metsa',
    productionCountry: 'Finland',

    retailer: "Caputo's",
    location: 'https://caputos.com/',
    retailPrice: 9.99,
    dateObtained: '2023-03-09',
  },
  {
    name: 'The Big Gorilla Bar',
    subtitle: 'Virunga Congo 77%',
    maker: 'Rózsavölgyi Csokoládé',
    slug: 'the-big-gorilla-bar-virunga-congo-77-rozsavolgyi-csokolade',
    productUrl:
      'https://www.rozsavolgyi.com/en/chocolate/single-origin-tablets/123/virunga-77',
    productionCountry: 'Hungary',

    retailer: "Caputo's",
    location: 'https://caputos.com/',
    retailPrice: 13.99,
    dateObtained: '2023-03-09',
  },
  {
    name: '73% CACAO MEXICANO de Soconusco',
    subtitle: 'Chiapas con Mezcal Joven',
    maker: 'CUNA DE PIEDRA',
    slug: '73-cacao-mexicano-de-soconusco-chiapas-con-mezcal-joven-cuna-de-piedra',
    productUrl:
      'https://shop.cunadepiedra.com/es/products/73-cacao-mexicano-de-soconusco-chiapas-con-mezcal-joven',
    productionCountry: 'Mexico',

    retailer: "Caputo's",
    location: 'https://caputos.com/',
    retailPrice: 12.99,
    dateObtained: '2023-03-09',
  },
  {
    name: 'Haiti Cap-Haïtien 70%',
    maker: 'Standout Chocolate',
    slug: 'haiti-cap-haitien-70-standout-chocolate',
    productUrl:
      'https://www.standoutchocolate.com/en/shop/single-origin-bars/haiti-cap-haitien-70',
    productionCountry: 'Sweden',

    retailer: "Caputo's",
    location: 'https://caputos.com/',
    retailPrice: 9.99,
    dateObtained: '2023-03-09',
  },
  {
    name: 'Milk Chocolate with Loqaimat',
    maker: 'Mirzam Chocoalte Makers',
    slug: 'milk-chocolate-with-loqaimat-mirzam-chocoalte-makers',
    productUrl: 'https://mirzam.com/product/45-milk-chocolate-with-loqaimat/',
    productionCountry: 'United Arab Emirates',

    retailer: "Caputo's",
    location: 'https://caputos.com/',
    retailPrice: 10.99,
    dateObtained: '2023-03-09',
  },
  {
    name: 'Dong Nai 72%',
    subtitle: 'Single Origin Dark Chocolate',
    maker: 'Marou',
    slug: 'dong-nai-72-single-origin-dark-chocolate-marou',
    productUrl:
      'https://caputos.com/product/marou-dong-nai-pod-to-bar-72-chocolate-bar/',
    productionCountry: 'Vietnam',

    retailer: "Caputo's",
    location: 'https://caputos.com/',
    retailPrice: 7.99,
    dateObtained: '2023-03-09',
  },

  //
  {
    name: 'Venezuela Rio Caribe 100%',
    maker: 'Chapon Chocolatier',
    slug: 'venezuela-rio-caribe-100-chapon-chocolatier',
    productUrl:
      'https://chapon.com/products/pure-origine-rio-caribe-venezuela-100',
    productionCountry: 'France',

    retailer: 'Gjusta Grocer',
    location: 'Venice',
    retailPrice: 15,
    dateObtained: '2023-02-25',
  },

  {
    name: '70% Rio Acará',
    maker: 'Luisa Abram',
    slug: '70-rio-acara-luisa-abram',
    productUrl: 'https://barandcocoa.com/products/luisa-abram-rio-acara-70', // https://luisaabram.com/product/rio-acara-70-cacau/
    productionCountry: 'Brazil',

    retailer: 'Erewhon',
    location: 'Venice',
    retailPrice: 12.99,
    dateObtained: '2023-02-25',
  },
  {
    name: 'Bejofo Estate MADAGASCAR',
    subtitle: '64% Dark Milk Chocolate',
    maker: 'Monsoon Chocolate',
    slug: 'bejofo-estate-madagascar-64-dark-milk-chocolate-monsoon-chocolate',
    productUrl:
      'https://monsoonchocolate.com/products/bejofo-estate-madagascar-64-dark-chocolate',
    productionCountry: 'United States',

    retailer: 'Erewhon',
    location: 'Venice',
    retailPrice: 12.99,
    dateObtained: '2023-02-25',
  },
  {
    name: 'Big Orgasm',
    maker: 'Eat Gold Organics',
    slug: 'big-orgasm-eat-gold-organics',
    productUrl: 'https://eatgoldorganics.com/products/big-orgasm',
    productionCountry: 'Unknown', // Does not say... How?

    retailer: 'Erewhon',
    location: 'Venice',
    retailPrice: 8.99,
    dateObtained: '2023-02-25',
  },
  {
    name: 'Milk Chocolate',
    subtitle: 'made with Maple Sugar',
    maker: 'Rad Chocolate',
    slug: 'milk-chocolate-made-with-maple-sugar-rad-chocolate',
    productUrl:
      'https://radchocolate.com/products/1-bar-organic-vegan-milk-chocolate-maple-sugar',
    productionCountry: 'United States',

    retailer: 'Erewhon',
    location: 'Venice',
    retailPrice: 5.99,
    dateObtained: '2023-02-25',
  },
  {
    name: 'Almond Butter Crunch',
    maker: 'Erewhon', // Made by unknown, distributed by Erewhon
    slug: 'almond-butter-crunch-erewhon',
    productUrl:
      'https://shipping.erewhonmarket.com/products/organic-chocolate-bar-almond-butter-crunch',
    productionCountry: 'Canada',

    retailer: 'Erewhon',
    location: 'Venice',
    retailPrice: 6.99,
    dateObtained: '2023-02-25',
  },

  {
    name: 'Dark Chocolate + Coffee',
    subtitle: 'Intelligentsia Collabaration Bar',
    maker: 'Askinosie Chocolate',
    slug: 'dark-chocolate-coffee-intelligentsia-collabaration-bar-askinosie-chocolate',
    productUrl:
      'https://askinosie.com/products/dark-chocolate-coffee-collabaration-bar',
    productionCountry: 'United States',

    retailer: 'Farmshop',
    location: 'Santa Monica',
    retailPrice: 12,
    dateObtained: '2023-02-25',
  },

  {
    name: 'Caramel Crunch',
    subtitle: 'Milk Chocolate Salted Caramel Crunch',
    maker: 'Compartés',
    slug: 'caramel-crunch-milk-chocolate-salted-caramel-crunch-compartes',
    productUrl:
      'https://compartes.com/products/salted-caramel-crunch-gourmet-chocolate-bar',
    productionCountry: 'United States',

    retailer: 'Burro',
    location: 'Venice Beach',
    retailPrice: 11.25,
    dateObtained: '2023-02-25',
  },

  {
    name: 'Tranquilidad',
    subtitle: '70% Dark Chocolate',
    maker: 'LetterPress Chocolate',
    slug: 'tranquilidad-70-dark-chocolate-letterpress-chocolate',
    productUrl: 'https://www.letterpresschocolate.com/products/tranquilidad-70',
    productionCountry: 'United States',

    retailer: 'LetterPress Chocolate',
    location: '2835 S Robertson Blvd, Los Angeles, CA 90034',
    retailPrice: 18,
    dateObtained: '2023-02-25',
  },

  //
  {
    name: '65% Dark Chocolate',
    subtitle: 'Cote d’Ivoire',
    maker: 'Lumineux Chocolate',
    slug: '65-dark-chocolate-cote-divoire-lumineux-chocolate',
    productUrl:
      'https://www.lumineuxchocolate.com/product/65-cdi-dark-chocolate-tablet/',

    retailer: 'Lumineux Chocolate',
    location: 'https://www.lumineuxchocolate.com/',
    retailPrice: 8,
    dateObtained: '2023-02-23',
  },
  {
    name: 'Gingerbread White Chocolate',
    maker: 'Lumineux Chocolate',
    slug: 'gingerbread-white-chocolate-lumineux-chocolate',
    productUrl:
      'https://www.lumineuxchocolate.com/product/gingerbread-white-chocolate-tablet/',

    retailer: 'Lumineux Chocolate',
    location: 'https://www.lumineuxchocolate.com/',
    retailPrice: 7,
    dateObtained: '2023-02-23',
  },

  //
  {
    name: '70% Ecuador',
    subtitle: 'Grand Cru Noir',
    maker: 'Laderach',
    slug: '70-ecuador-grand-cru-noir-laderach',
    productUrl:
      'https://laderach.com/us-en/tablet-grand-cru-ecuador-70-single-origin',

    retailer: 'Laderach',
    location: 'Fashion Valley',
    retailPrice: 7.9,
    dateObtained: '2023-02-11',
  },

  //
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
