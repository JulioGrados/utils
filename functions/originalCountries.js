const countries = [
  {
    name: 'Argentina',
    topLevelDomain: ['.ar'],
    alpha2Code: 'AR',
    alpha3Code: 'ARG',
    callingCodes: ['54'],
    capital: 'Buenos Aires',
    altSpellings: ['AR', 'Argentine Republic', 'República Argentina'],
    region: 'Americas',
    subregion: 'South America',
    population: 43590400,
    latlng: [-34, -64],
    demonym: 'Argentinean',
    area: 2780400,
    gini: 44.5,
    timezones: ['UTC-03:00'],
    borders: ['BOL', 'BRA', 'CHL', 'PRY', 'URY'],
    nativeName: 'Argentina',
    numericCode: '032',
    currencies: [
      {
        code: 'ARS',
        name: 'pesos argentinos',
        symbol: '$'
      }
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español'
      },
      {
        iso639_1: 'gn',
        iso639_2: 'grn',
        name: 'Guaraní',
        nativeName: "Avañe'ẽ"
      }
    ],
    translations: {
      de: 'Argentinien',
      es: 'Argentina',
      fr: 'Argentine',
      ja: 'アルゼンチン',
      it: 'Argentina',
      br: 'Argentina',
      pt: 'Argentina',
      nl: 'Argentinië',
      hr: 'Argentina',
      fa: 'آرژانتین'
    },
    flag: 'https://restcountries.eu/data/arg.svg',
    regionalBlocs: [
      {
        acronym: 'USAN',
        name: 'Union of South American Nations',
        otherAcronyms: ['UNASUR', 'UNASUL', 'UZAN'],
        otherNames: [
          'Unión de Naciones Suramericanas',
          'União de Nações Sul-Americanas',
          'Unie van Zuid-Amerikaanse Naties',
          'South American Union'
        ]
      }
    ],
    cioc: 'ARG'
  },
  {
    name: 'Bolivia (Plurinational State of)',
    topLevelDomain: ['.bo'],
    alpha2Code: 'BO',
    alpha3Code: 'BOL',
    callingCodes: ['591'],
    capital: 'Sucre',
    altSpellings: [
      'BO',
      'Buliwya',
      'Wuliwya',
      'Plurinational State of Bolivia',
      'Estado Plurinacional de Bolivia',
      'Buliwya Mamallaqta',
      'Wuliwya Suyu',
      'Tetã Volívia'
    ],
    region: 'Americas',
    subregion: 'South America',
    population: 10985059,
    latlng: [-17, -65],
    demonym: 'Bolivian',
    area: 1098581,
    gini: 56.3,
    timezones: ['UTC-04:00'],
    borders: ['ARG', 'BRA', 'CHL', 'PRY', 'PER'],
    nativeName: 'Bolivia',
    numericCode: '068',
    currencies: [
      {
        code: 'BOB',
        name: 'Bolivianos',
        symbol: 'Bs.'
      }
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español'
      },
      {
        iso639_1: 'ay',
        iso639_2: 'aym',
        name: 'Aymara',
        nativeName: 'aymar aru'
      },
      {
        iso639_1: 'qu',
        iso639_2: 'que',
        name: 'Quechua',
        nativeName: 'Runa Simi'
      }
    ],
    translations: {
      de: 'Bolivien',
      es: 'Bolivia',
      fr: 'Bolivie',
      ja: 'ボリビア多民族国',
      it: 'Bolivia',
      br: 'Bolívia',
      pt: 'Bolívia',
      nl: 'Bolivia',
      hr: 'Bolivija',
      fa: 'بولیوی'
    },
    flag: 'https://restcountries.eu/data/bol.svg',
    regionalBlocs: [
      {
        acronym: 'USAN',
        name: 'Union of South American Nations',
        otherAcronyms: ['UNASUR', 'UNASUL', 'UZAN'],
        otherNames: [
          'Unión de Naciones Suramericanas',
          'União de Nações Sul-Americanas',
          'Unie van Zuid-Amerikaanse Naties',
          'South American Union'
        ]
      }
    ],
    cioc: 'BOL'
  },
  {
    name: 'Chile',
    topLevelDomain: ['.cl'],
    alpha2Code: 'CL',
    alpha3Code: 'CHL',
    callingCodes: ['56'],
    capital: 'Santiago',
    altSpellings: ['CL', 'Republic of Chile', 'República de Chile'],
    region: 'Americas',
    subregion: 'South America',
    population: 18191900,
    latlng: [-30, -71],
    demonym: 'Chilean',
    area: 756102,
    gini: 52.1,
    timezones: ['UTC-06:00', 'UTC-04:00'],
    borders: ['ARG', 'BOL', 'PER'],
    nativeName: 'Chile',
    numericCode: '152',
    currencies: [
      {
        code: 'CLP',
        name: 'pesos Chilenos',
        symbol: '$'
      }
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español'
      }
    ],
    translations: {
      de: 'Chile',
      es: 'Chile',
      fr: 'Chili',
      ja: 'チリ',
      it: 'Cile',
      br: 'Chile',
      pt: 'Chile',
      nl: 'Chili',
      hr: 'Čile',
      fa: 'شیلی'
    },
    flag: 'https://restcountries.eu/data/chl.svg',
    regionalBlocs: [
      {
        acronym: 'PA',
        name: 'Pacific Alliance',
        otherAcronyms: [],
        otherNames: ['Alianza del Pacífico']
      },
      {
        acronym: 'USAN',
        name: 'Union of South American Nations',
        otherAcronyms: ['UNASUR', 'UNASUL', 'UZAN'],
        otherNames: [
          'Unión de Naciones Suramericanas',
          'União de Nações Sul-Americanas',
          'Unie van Zuid-Amerikaanse Naties',
          'South American Union'
        ]
      }
    ],
    cioc: 'CHI'
  },
  {
    name: 'Colombia',
    topLevelDomain: ['.co'],
    alpha2Code: 'CO',
    alpha3Code: 'COL',
    callingCodes: ['57'],
    capital: 'Bogotá',
    altSpellings: ['CO', 'Republic of Colombia', 'República de Colombia'],
    region: 'Americas',
    subregion: 'South America',
    population: 48759958,
    latlng: [4, -72],
    demonym: 'Colombian',
    area: 1141748,
    gini: 55.9,
    timezones: ['UTC-05:00'],
    borders: ['BRA', 'ECU', 'PAN', 'PER', 'VEN'],
    nativeName: 'Colombia',
    numericCode: '170',
    currencies: [
      {
        code: 'COP',
        name: 'pesos Colombianos',
        symbol: '$'
      }
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español'
      }
    ],
    translations: {
      de: 'Kolumbien',
      es: 'Colombia',
      fr: 'Colombie',
      ja: 'コロンビア',
      it: 'Colombia',
      br: 'Colômbia',
      pt: 'Colômbia',
      nl: 'Colombia',
      hr: 'Kolumbija',
      fa: 'کلمبیا'
    },
    flag: 'https://restcountries.eu/data/col.svg',
    regionalBlocs: [
      {
        acronym: 'PA',
        name: 'Pacific Alliance',
        otherAcronyms: [],
        otherNames: ['Alianza del Pacífico']
      },
      {
        acronym: 'USAN',
        name: 'Union of South American Nations',
        otherAcronyms: ['UNASUR', 'UNASUL', 'UZAN'],
        otherNames: [
          'Unión de Naciones Suramericanas',
          'União de Nações Sul-Americanas',
          'Unie van Zuid-Amerikaanse Naties',
          'South American Union'
        ]
      }
    ],
    cioc: 'COL'
  },
  {
    name: 'Costa Rica',
    topLevelDomain: ['.cr'],
    alpha2Code: 'CR',
    alpha3Code: 'CRI',
    callingCodes: ['506'],
    capital: 'San José',
    altSpellings: ['CR', 'Republic of Costa Rica', 'República de Costa Rica'],
    region: 'Americas',
    subregion: 'Central America',
    population: 4890379,
    latlng: [10, -84],
    demonym: 'Costa Rican',
    area: 51100,
    gini: 50.7,
    timezones: ['UTC-06:00'],
    borders: ['NIC', 'PAN'],
    nativeName: 'Costa Rica',
    numericCode: '188',
    currencies: [
      {
        code: 'CRC',
        name: 'Colón Costarricences',
        symbol: '₡'
      }
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español'
      }
    ],
    translations: {
      de: 'Costa Rica',
      es: 'Costa Rica',
      fr: 'Costa Rica',
      ja: 'コスタリカ',
      it: 'Costa Rica',
      br: 'Costa Rica',
      pt: 'Costa Rica',
      nl: 'Costa Rica',
      hr: 'Kostarika',
      fa: 'کاستاریکا'
    },
    flag: 'https://restcountries.eu/data/cri.svg',
    regionalBlocs: [
      {
        acronym: 'CAIS',
        name: 'Central American Integration System',
        otherAcronyms: ['SICA'],
        otherNames: ['Sistema de la Integración Centroamericana,']
      }
    ],
    cioc: 'CRC'
  },
  {
    name: 'Cuba',
    topLevelDomain: ['.cu'],
    alpha2Code: 'CU',
    alpha3Code: 'CUB',
    callingCodes: ['53'],
    capital: 'Havana',
    altSpellings: ['CU', 'Republic of Cuba', 'República de Cuba'],
    region: 'Americas',
    subregion: 'Caribbean',
    population: 11239004,
    latlng: [21.5, -80],
    demonym: 'Cuban',
    area: 109884,
    gini: null,
    timezones: ['UTC-05:00'],
    borders: [],
    nativeName: 'Cuba',
    numericCode: '192',
    currencies: [
      {
        code: 'CUC',
        name: 'pesos Cubanos',
        symbol: '$'
      },
      {
        code: 'CUP',
        name: 'pesos Cubanos',
        symbol: '$'
      }
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español'
      }
    ],
    translations: {
      de: 'Kuba',
      es: 'Cuba',
      fr: 'Cuba',
      ja: 'キューバ',
      it: 'Cuba',
      br: 'Cuba',
      pt: 'Cuba',
      nl: 'Cuba',
      hr: 'Kuba',
      fa: 'کوبا'
    },
    flag: 'https://restcountries.eu/data/cub.svg',
    regionalBlocs: [],
    cioc: 'CUB'
  },
  {
    name: 'Dominican Republic',
    topLevelDomain: ['.do'],
    alpha2Code: 'DO',
    alpha3Code: 'DOM',
    callingCodes: ['1809', '1829', '1849'],
    capital: 'Santo Domingo',
    altSpellings: ['DO'],
    region: 'Americas',
    subregion: 'Caribbean',
    population: 10075045,
    latlng: [19, -70.66666666],
    demonym: 'Dominican',
    area: 48671,
    gini: 47.2,
    timezones: ['UTC-04:00'],
    borders: ['HTI'],
    nativeName: 'República Dominicana',
    numericCode: '214',
    currencies: [
      {
        code: 'DOP',
        name: 'pesos Dominicanos',
        symbol: '$'
      }
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español'
      }
    ],
    translations: {
      de: 'Dominikanische Republik',
      es: 'República Dominicana',
      fr: 'République dominicaine',
      ja: 'ドミニカ共和国',
      it: 'Repubblica Dominicana',
      br: 'República Dominicana',
      pt: 'República Dominicana',
      nl: 'Dominicaanse Republiek',
      hr: 'Dominikanska Republika',
      fa: 'جمهوری دومینیکن'
    },
    flag: 'https://restcountries.eu/data/dom.svg',
    regionalBlocs: [
      {
        acronym: 'CARICOM',
        name: 'Caribbean Community',
        otherAcronyms: [],
        otherNames: [
          'Comunidad del Caribe',
          'Communauté Caribéenne',
          'Caribische Gemeenschap'
        ]
      },
      {
        acronym: 'CAIS',
        name: 'Central American Integration System',
        otherAcronyms: ['SICA'],
        otherNames: ['Sistema de la Integración Centroamericana,']
      }
    ],
    cioc: 'DOM'
  },
  {
    name: 'Ecuador',
    topLevelDomain: ['.ec'],
    alpha2Code: 'EC',
    alpha3Code: 'ECU',
    callingCodes: ['593'],
    capital: 'Quito',
    altSpellings: ['EC', 'Republic of Ecuador', 'República del Ecuador'],
    region: 'Americas',
    subregion: 'South America',
    population: 16545799,
    latlng: [-2, -77.5],
    demonym: 'Ecuadorean',
    area: 276841,
    gini: 49.3,
    timezones: ['UTC-06:00', 'UTC-05:00'],
    borders: ['COL', 'PER'],
    nativeName: 'Ecuador',
    numericCode: '218',
    currencies: [
      {
        code: 'USD',
        name: 'Dolares Estadounidenses',
        symbol: '$'
      }
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español'
      }
    ],
    translations: {
      de: 'Ecuador',
      es: 'Ecuador',
      fr: 'Équateur',
      ja: 'エクアドル',
      it: 'Ecuador',
      br: 'Equador',
      pt: 'Equador',
      nl: 'Ecuador',
      hr: 'Ekvador',
      fa: 'اکوادور'
    },
    flag: 'https://restcountries.eu/data/ecu.svg',
    regionalBlocs: [
      {
        acronym: 'USAN',
        name: 'Union of South American Nations',
        otherAcronyms: ['UNASUR', 'UNASUL', 'UZAN'],
        otherNames: [
          'Unión de Naciones Suramericanas',
          'União de Nações Sul-Americanas',
          'Unie van Zuid-Amerikaanse Naties',
          'South American Union'
        ]
      }
    ],
    cioc: 'ECU'
  },
  {
    name: 'El Salvador',
    topLevelDomain: ['.sv'],
    alpha2Code: 'SV',
    alpha3Code: 'SLV',
    callingCodes: ['503'],
    capital: 'San Salvador',
    altSpellings: ['SV', 'Republic of El Salvador', 'República de El Salvador'],
    region: 'Americas',
    subregion: 'Central America',
    population: 6520675,
    latlng: [13.83333333, -88.91666666],
    demonym: 'Salvadoran',
    area: 21041,
    gini: 48.3,
    timezones: ['UTC-06:00'],
    borders: ['GTM', 'HND'],
    nativeName: 'El Salvador',
    numericCode: '222',
    currencies: [
      {
        code: 'USD',
        name: 'Dolares Estadounidenses',
        symbol: '$'
      }
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español'
      }
    ],
    translations: {
      de: 'El Salvador',
      es: 'El Salvador',
      fr: 'Salvador',
      ja: 'エルサルバドル',
      it: 'El Salvador',
      br: 'El Salvador',
      pt: 'El Salvador',
      nl: 'El Salvador',
      hr: 'Salvador',
      fa: 'السالوادور'
    },
    flag: 'https://restcountries.eu/data/slv.svg',
    regionalBlocs: [
      {
        acronym: 'CAIS',
        name: 'Central American Integration System',
        otherAcronyms: ['SICA'],
        otherNames: ['Sistema de la Integración Centroamericana,']
      }
    ],
    cioc: 'ESA'
  },
  {
    name: 'Guatemala',
    topLevelDomain: ['.gt'],
    alpha2Code: 'GT',
    alpha3Code: 'GTM',
    callingCodes: ['502'],
    capital: 'Guatemala City',
    altSpellings: ['GT'],
    region: 'Americas',
    subregion: 'Central America',
    population: 16176133,
    latlng: [15.5, -90.25],
    demonym: 'Guatemalan',
    area: 108889,
    gini: 55.9,
    timezones: ['UTC-06:00'],
    borders: ['BLZ', 'SLV', 'HND', 'MEX'],
    nativeName: 'Guatemala',
    numericCode: '320',
    currencies: [
      {
        code: 'GTQ',
        name: 'Quetzal guatemalteco',
        symbol: 'Q'
      }
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español'
      }
    ],
    translations: {
      de: 'Guatemala',
      es: 'Guatemala',
      fr: 'Guatemala',
      ja: 'グアテマラ',
      it: 'Guatemala',
      br: 'Guatemala',
      pt: 'Guatemala',
      nl: 'Guatemala',
      hr: 'Gvatemala',
      fa: 'گواتمالا'
    },
    flag: 'https://restcountries.eu/data/gtm.svg',
    regionalBlocs: [
      {
        acronym: 'CAIS',
        name: 'Central American Integration System',
        otherAcronyms: ['SICA'],
        otherNames: ['Sistema de la Integración Centroamericana,']
      }
    ],
    cioc: 'GUA'
  },
  {
    name: 'Honduras',
    topLevelDomain: ['.hn'],
    alpha2Code: 'HN',
    alpha3Code: 'HND',
    callingCodes: ['504'],
    capital: 'Tegucigalpa',
    altSpellings: ['HN', 'Republic of Honduras', 'República de Honduras'],
    region: 'Americas',
    subregion: 'Central America',
    population: 8576532,
    latlng: [15, -86.5],
    demonym: 'Honduran',
    area: 112492,
    gini: 57,
    timezones: ['UTC-06:00'],
    borders: ['GTM', 'SLV', 'NIC'],
    nativeName: 'Honduras',
    numericCode: '340',
    currencies: [
      {
        code: 'HNL',
        name: 'Lempira hondureña',
        symbol: 'L'
      }
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español'
      }
    ],
    translations: {
      de: 'Honduras',
      es: 'Honduras',
      fr: 'Honduras',
      ja: 'ホンジュラス',
      it: 'Honduras',
      br: 'Honduras',
      pt: 'Honduras',
      nl: 'Honduras',
      hr: 'Honduras',
      fa: 'هندوراس'
    },
    flag: 'https://restcountries.eu/data/hnd.svg',
    regionalBlocs: [
      {
        acronym: 'CAIS',
        name: 'Central American Integration System',
        otherAcronyms: ['SICA'],
        otherNames: ['Sistema de la Integración Centroamericana,']
      }
    ],
    cioc: 'HON'
  },
  {
    name: 'Mexico',
    topLevelDomain: ['.mx'],
    alpha2Code: 'MX',
    alpha3Code: 'MEX',
    callingCodes: ['52'],
    capital: 'Mexico City',
    altSpellings: [
      'MX',
      'Mexicanos',
      'United Mexican States',
      'Estados Unidos Mexicanos'
    ],
    region: 'Americas',
    subregion: 'Central America',
    population: 122273473,
    latlng: [23, -102],
    demonym: 'Mexican',
    area: 1964375,
    gini: 47,
    timezones: ['UTC-08:00', 'UTC-07:00', 'UTC-06:00'],
    borders: ['BLZ', 'GTM', 'USA'],
    nativeName: 'México',
    numericCode: '484',
    currencies: [
      {
        code: 'MXN',
        name: 'pesos mexicanos',
        symbol: '$'
      }
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español'
      }
    ],
    translations: {
      de: 'Mexiko',
      es: 'México',
      fr: 'Mexique',
      ja: 'メキシコ',
      it: 'Messico',
      br: 'México',
      pt: 'México',
      nl: 'Mexico',
      hr: 'Meksiko',
      fa: 'مکزیک'
    },
    flag: 'https://restcountries.eu/data/mex.svg',
    regionalBlocs: [
      {
        acronym: 'PA',
        name: 'Pacific Alliance',
        otherAcronyms: [],
        otherNames: ['Alianza del Pacífico']
      },
      {
        acronym: 'NAFTA',
        name: 'North American Free Trade Agreement',
        otherAcronyms: [],
        otherNames: [
          'Tratado de Libre Comercio de América del Norte',
          'Accord de Libre-échange Nord-Américain'
        ]
      }
    ],
    cioc: 'MEX'
  },
  {
    name: 'Nicaragua',
    topLevelDomain: ['.ni'],
    alpha2Code: 'NI',
    alpha3Code: 'NIC',
    callingCodes: ['505'],
    capital: 'Managua',
    altSpellings: ['NI', 'Republic of Nicaragua', 'República de Nicaragua'],
    region: 'Americas',
    subregion: 'Central America',
    population: 6262703,
    latlng: [13, -85],
    demonym: 'Nicaraguan',
    area: 130373,
    gini: 40.5,
    timezones: ['UTC-06:00'],
    borders: ['CRI', 'HND'],
    nativeName: 'Nicaragua',
    numericCode: '558',
    currencies: [
      {
        code: 'NIO',
        name: 'Córdoba Nicaraguance',
        symbol: 'C$'
      }
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español'
      }
    ],
    translations: {
      de: 'Nicaragua',
      es: 'Nicaragua',
      fr: 'Nicaragua',
      ja: 'ニカラグア',
      it: 'Nicaragua',
      br: 'Nicarágua',
      pt: 'Nicarágua',
      nl: 'Nicaragua',
      hr: 'Nikaragva',
      fa: 'نیکاراگوئه'
    },
    flag: 'https://restcountries.eu/data/nic.svg',
    regionalBlocs: [
      {
        acronym: 'CAIS',
        name: 'Central American Integration System',
        otherAcronyms: ['SICA'],
        otherNames: ['Sistema de la Integración Centroamericana,']
      }
    ],
    cioc: 'NCA'
  },
  {
    name: 'Panama',
    topLevelDomain: ['.pa'],
    alpha2Code: 'PA',
    alpha3Code: 'PAN',
    callingCodes: ['507'],
    capital: 'Panama City',
    altSpellings: ['PA', 'Republic of Panama', 'República de Panamá'],
    region: 'Americas',
    subregion: 'Central America',
    population: 3814672,
    latlng: [9, -80],
    demonym: 'Panamanian',
    area: 75417,
    gini: 51.9,
    timezones: ['UTC-05:00'],
    borders: ['COL', 'CRI'],
    nativeName: 'Panamá',
    numericCode: '591',
    currencies: [
      {
        code: 'PAB',
        name: 'Balboa',
        symbol: 'B/.'
      },
      {
        code: 'USD',
        name: 'Dolar USA',
        symbol: '$'
      }
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español'
      }
    ],
    translations: {
      de: 'Panama',
      es: 'Panamá',
      fr: 'Panama',
      ja: 'パナマ',
      it: 'Panama',
      br: 'Panamá',
      pt: 'Panamá',
      nl: 'Panama',
      hr: 'Panama',
      fa: 'پاناما'
    },
    flag: 'https://restcountries.eu/data/pan.svg',
    regionalBlocs: [
      {
        acronym: 'CAIS',
        name: 'Central American Integration System',
        otherAcronyms: ['SICA'],
        otherNames: ['Sistema de la Integración Centroamericana,']
      }
    ],
    cioc: 'PAN'
  },
  {
    name: 'Paraguay',
    topLevelDomain: ['.py'],
    alpha2Code: 'PY',
    alpha3Code: 'PRY',
    callingCodes: ['595'],
    capital: 'Asunción',
    altSpellings: [
      'PY',
      'Republic of Paraguay',
      'República del Paraguay',
      'Tetã Paraguái'
    ],
    region: 'Americas',
    subregion: 'South America',
    population: 6854536,
    latlng: [-23, -58],
    demonym: 'Paraguayan',
    area: 406752,
    gini: 52.4,
    timezones: ['UTC-04:00'],
    borders: ['ARG', 'BOL', 'BRA'],
    nativeName: 'Paraguay',
    numericCode: '600',
    currencies: [
      {
        code: 'PYG',
        name: 'Guaraní',
        symbol: '₲'
      }
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español'
      },
      {
        iso639_1: 'gn',
        iso639_2: 'grn',
        name: 'Guaraní',
        nativeName: "Avañe'ẽ"
      }
    ],
    translations: {
      de: 'Paraguay',
      es: 'Paraguay',
      fr: 'Paraguay',
      ja: 'パラグアイ',
      it: 'Paraguay',
      br: 'Paraguai',
      pt: 'Paraguai',
      nl: 'Paraguay',
      hr: 'Paragvaj',
      fa: 'پاراگوئه'
    },
    flag: 'https://restcountries.eu/data/pry.svg',
    regionalBlocs: [
      {
        acronym: 'USAN',
        name: 'Union of South American Nations',
        otherAcronyms: ['UNASUR', 'UNASUL', 'UZAN'],
        otherNames: [
          'Unión de Naciones Suramericanas',
          'União de Nações Sul-Americanas',
          'Unie van Zuid-Amerikaanse Naties',
          'South American Union'
        ]
      }
    ],
    cioc: 'PAR'
  },
  {
    name: 'Peru',
    topLevelDomain: ['.pe'],
    alpha2Code: 'PE',
    alpha3Code: 'PER',
    callingCodes: ['51'],
    capital: 'Lima',
    altSpellings: ['PE', 'Republic of Peru', ' República del Perú'],
    region: 'Americas',
    subregion: 'South America',
    population: 31488700,
    latlng: [-10, -76],
    demonym: 'Peruvian',
    area: 1285216,
    gini: 48.1,
    timezones: ['UTC-05:00'],
    borders: ['BOL', 'BRA', 'CHL', 'COL', 'ECU'],
    nativeName: 'Perú',
    numericCode: '604',
    currencies: [
      {
        code: 'PEN',
        name: 'nuevos soles',
        symbol: 'S/.'
      }
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español'
      }
    ],
    translations: {
      de: 'Peru',
      es: 'Perú',
      fr: 'Pérou',
      ja: 'ペルー',
      it: 'Perù',
      br: 'Peru',
      pt: 'Peru',
      nl: 'Peru',
      hr: 'Peru',
      fa: 'پرو'
    },
    flag: 'https://restcountries.eu/data/per.svg',
    regionalBlocs: [
      {
        acronym: 'PA',
        name: 'Pacific Alliance',
        otherAcronyms: [],
        otherNames: ['Alianza del Pacífico']
      },
      {
        acronym: 'USAN',
        name: 'Union of South American Nations',
        otherAcronyms: ['UNASUR', 'UNASUL', 'UZAN'],
        otherNames: [
          'Unión de Naciones Suramericanas',
          'União de Nações Sul-Americanas',
          'Unie van Zuid-Amerikaanse Naties',
          'South American Union'
        ]
      }
    ],
    cioc: 'PER'
  },
  {
    name: 'Puerto Rico',
    topLevelDomain: ['.pr'],
    alpha2Code: 'PR',
    alpha3Code: 'PRI',
    callingCodes: ['1787', '1939'],
    capital: 'San Juan',
    altSpellings: [
      'PR',
      'Commonwealth of Puerto Rico',
      'Estado Libre Asociado de Puerto Rico'
    ],
    region: 'Americas',
    subregion: 'Caribbean',
    population: 3474182,
    latlng: [18.25, -66.5],
    demonym: 'Puerto Rican',
    area: 8870,
    gini: null,
    timezones: ['UTC-04:00'],
    borders: [],
    nativeName: 'Puerto Rico',
    numericCode: '630',
    currencies: [
      {
        code: 'USD',
        name: 'Dolares estadounidenses',
        symbol: '$'
      }
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español'
      },
      {
        iso639_1: 'en',
        iso639_2: 'eng',
        name: 'English',
        nativeName: 'English'
      }
    ],
    translations: {
      de: 'Puerto Rico',
      es: 'Puerto Rico',
      fr: 'Porto Rico',
      ja: 'プエルトリコ',
      it: 'Porto Rico',
      br: 'Porto Rico',
      pt: 'Porto Rico',
      nl: 'Puerto Rico',
      hr: 'Portoriko',
      fa: 'پورتو ریکو'
    },
    flag: 'https://restcountries.eu/data/pri.svg',
    regionalBlocs: [],
    cioc: 'PUR'
  },
  {
    name: 'Spain',
    topLevelDomain: ['.es'],
    alpha2Code: 'ES',
    alpha3Code: 'ESP',
    callingCodes: ['34'],
    capital: 'Madrid',
    altSpellings: ['ES', 'Kingdom of Spain', 'Reino de España'],
    region: 'Europe',
    subregion: 'Southern Europe',
    population: 46438422,
    latlng: [40, -4],
    demonym: 'Spanish',
    area: 505992,
    gini: 34.7,
    timezones: ['UTC', 'UTC+01:00'],
    borders: ['AND', 'FRA', 'GIB', 'PRT', 'MAR'],
    nativeName: 'España',
    numericCode: '724',
    currencies: [
      {
        code: 'EUR',
        name: 'Euros',
        symbol: '€'
      }
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español'
      }
    ],
    translations: {
      de: 'Spanien',
      es: 'España',
      fr: 'Espagne',
      ja: 'スペイン',
      it: 'Spagna',
      br: 'Espanha',
      pt: 'Espanha',
      nl: 'Spanje',
      hr: 'Španjolska',
      fa: 'اسپانیا'
    },
    flag: 'https://restcountries.eu/data/esp.svg',
    regionalBlocs: [
      {
        acronym: 'EU',
        name: 'European Union',
        otherAcronyms: [],
        otherNames: []
      }
    ],
    cioc: 'ESP'
  },
  {
    name: 'Uruguay',
    topLevelDomain: ['.uy'],
    alpha2Code: 'UY',
    alpha3Code: 'URY',
    callingCodes: ['598'],
    capital: 'Montevideo',
    altSpellings: [
      'UY',
      'Oriental Republic of Uruguay',
      'República Oriental del Uruguay'
    ],
    region: 'Americas',
    subregion: 'South America',
    population: 3480222,
    latlng: [-33, -56],
    demonym: 'Uruguayan',
    area: 181034,
    gini: 39.7,
    timezones: ['UTC-03:00'],
    borders: ['ARG', 'BRA'],
    nativeName: 'Uruguay',
    numericCode: '858',
    currencies: [
      {
        code: 'UYU',
        name: 'pesos',
        symbol: '$'
      }
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español'
      }
    ],
    translations: {
      de: 'Uruguay',
      es: 'Uruguay',
      fr: 'Uruguay',
      ja: 'ウルグアイ',
      it: 'Uruguay',
      br: 'Uruguai',
      pt: 'Uruguai',
      nl: 'Uruguay',
      hr: 'Urugvaj',
      fa: 'اروگوئه'
    },
    flag: 'https://restcountries.eu/data/ury.svg',
    regionalBlocs: [
      {
        acronym: 'USAN',
        name: 'Union of South American Nations',
        otherAcronyms: ['UNASUR', 'UNASUL', 'UZAN'],
        otherNames: [
          'Unión de Naciones Suramericanas',
          'União de Nações Sul-Americanas',
          'Unie van Zuid-Amerikaanse Naties',
          'South American Union'
        ]
      }
    ],
    cioc: 'URU'
  },
  {
    name: 'Venezuela (Bolivarian Republic of)',
    topLevelDomain: ['.ve'],
    alpha2Code: 'VE',
    alpha3Code: 'VEN',
    callingCodes: ['58'],
    capital: 'Caracas',
    altSpellings: [
      'VE',
      'Bolivarian Republic of Venezuela',
      'República Bolivariana de Venezuela'
    ],
    region: 'Americas',
    subregion: 'South America',
    population: 31028700,
    latlng: [8, -66],
    demonym: 'Venezuelan',
    area: 916445,
    gini: 44.8,
    timezones: ['UTC-04:00'],
    borders: ['BRA', 'COL', 'GUY'],
    nativeName: 'Venezuela',
    numericCode: '862',
    currencies: [
      {
        code: 'VEF',
        name: 'Bolivares',
        symbol: 'Bs F'
      }
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español'
      }
    ],
    translations: {
      de: 'Venezuela',
      es: 'Venezuela',
      fr: 'Venezuela',
      ja: 'ベネズエラ・ボリバル共和国',
      it: 'Venezuela',
      br: 'Venezuela',
      pt: 'Venezuela',
      nl: 'Venezuela',
      hr: 'Venezuela',
      fa: 'ونزوئلا'
    },
    flag: 'https://restcountries.eu/data/ven.svg',
    regionalBlocs: [
      {
        acronym: 'USAN',
        name: 'Union of South American Nations',
        otherAcronyms: ['UNASUR', 'UNASUL', 'UZAN'],
        otherNames: [
          'Unión de Naciones Suramericanas',
          'União de Nações Sul-Americanas',
          'Unie van Zuid-Amerikaanse Naties',
          'South American Union'
        ]
      }
    ],
    cioc: 'VEN'
  }
]

const countriesDataOriginal = countries
  .filter(country => {
    return country.region === 'Americas' || country.region === 'Europe'
  })
  .map(country => ({
    name: country.nativeName,
    code: country.currencies[0].code,
    flag: country.flag,
    callingCode: country.callingCodes[0]
  }))

module.exports = countriesDataOriginal
