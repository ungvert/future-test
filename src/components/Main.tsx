import React, { useState } from 'react';
import EnhancedTable from './EnhancedTable/Table';

const InitialData = [
  {
    id: 464,
    firstName: 'Connie',
    lastName: 'Sergent',
    email: 'DKlein@ac.com',
    phone: '(358)757-3803',
    address: {
      streetAddress: '7381 Et Ct',
      city: 'Palmer',
      state: 'AL',
      zip: '51279',
    },
    description:
      'dui sit placerat neque mattis sapien sollicitudin dolor quis curabitur amet fringilla et non massa placerat rutrum molestie odio dui odio pulvinar nec neque aliquam donec nunc curabitur mi aliquam scelerisque pulvinar',
  },
  {
    id: 286,
    firstName: 'Jeanneth',
    lastName: 'Bechtold',
    email: 'DBelcher@scelerisque.ly',
    phone: '(910)631-0366',
    address: {
      streetAddress: '3597 Lacus Dr',
      city: 'Edwards',
      state: 'MN',
      zip: '70824',
    },
    description:
      'aenean morbi adipiscing suspendisse lacus scelerisque scelerisque aliquam sapien augue elit mattis eget nunc sit hendrerit fringilla lacus massa at facilisis dui mattis pharetra pharetra et tincidunt lacus mattis magna sollicitudin in',
  },
  {
    id: 254,
    firstName: 'Beata',
    lastName: 'Levy',
    email: 'CRioux@adipiscing.gov',
    phone: '(466)786-7919',
    address: {
      streetAddress: '8980 Dolor Dr',
      city: 'Chicago',
      state: 'MD',
      zip: '84029',
    },
    description:
      'sit lacus pulvinar etiam massa facilisis suspendisse ipsum risus sed amet turpis massa suspendisse libero orci sed sed convallis turpis consectetur augue sit tincidunt ipsum mattis amet aliquam sit vel sollicitudin tortor',
  },
  {
    id: 129,
    firstName: 'Leticia',
    lastName: 'Wiedenmann',
    email: 'JCallison@odio.io',
    phone: '(797)647-4776',
    address: {
      streetAddress: '4085 Vestibulum St',
      city: 'Thornton',
      state: 'OH',
      zip: '26550',
    },
    description:
      'sapien ipsum vel non ipsum ac rutrum vel dolor sit et lacus ante malesuada elementum elit hendrerit facilisis mi suspendisse amet turpis turpis dolor convallis nullam eros amet elementum scelerisque orci magna',
  },
  {
    id: 6,
    firstName: 'Guillermina',
    lastName: 'Grimsley',
    email: 'PKieras@risus.net',
    phone: '(859)128-1380',
    address: {
      streetAddress: '7229 Dui Ct',
      city: 'Altoona',
      state: 'PA',
      zip: '76072',
    },
    description:
      'sagittis morbi risus aliquam nullam aenean aenean nullam donec eros donec augue eget ante porttitor non lectus sed odio nec ipsum at aliquam turpis elit eros neque amet sed et vestibulum pulvinar',
  },
  {
    id: 226,
    firstName: 'Drew',
    lastName: 'Suzanne',
    email: 'AJongco@pulvinar.net',
    phone: '(849)769-2645',
    address: {
      streetAddress: '6540 Eros St',
      city: 'Seattle',
      state: 'LA',
      zip: '21897',
    },
    description:
      'sed lectus amet et dolor lectus magna mattis egestas vitae risus augue non morbi donec magna lacus pharetra egestas amet tortor tortor tortor adipiscing at et sed hendrerit consequat mattis nullam elit',
  },
  {
    id: 981,
    firstName: 'Aroterick',
    lastName: 'Severson',
    email: 'DBurks@eget.net',
    phone: '(238)059-1333',
    address: {
      streetAddress: '2930 Lacus Ave',
      city: 'Oxford',
      state: 'NM',
      zip: '92952',
    },
    description:
      'curabitur sapien sit tellus lorem et consequat scelerisque elit nec elit ac et pretium consequat tempor lectus tellus aliquam malesuada dolor at morbi dolor sit sollicitudin mattis neque pulvinar sit vestibulum nullam',
  },
  {
    id: 755,
    firstName: 'Bonnie',
    lastName: 'Spataro',
    email: 'OHist@ac.io',
    phone: '(991)671-5617',
    address: {
      streetAddress: '9374 Vitae Dr',
      city: 'Armada',
      state: 'NY',
      zip: '20675',
    },
    description:
      'amet augue ac lectus lacus amet tellus sagittis elit tortor tortor mi aliquam dolor massa nullam dolor suspendisse aliquam nullam aenean elementum mattis elit sagittis pharetra id dolor velit nec orci pharetra',
  },
  {
    id: 429,
    firstName: 'Zhanna',
    lastName: 'Burgin',
    email: 'GFaust@ipsum.ly',
    phone: '(150)081-3690',
    address: {
      streetAddress: '3194 Hendrerit Ln',
      city: 'Vero Beach',
      state: 'IL',
      zip: '67659',
    },
    description:
      'dolor turpis tempor eget dui eget placerat mi fringilla massa pulvinar tortor convallis etiam eros magna facilisis tempor consequat id sit massa convallis pretium lacus sagittis sed consequat mattis consequat tincidunt rutrum',
  },
  {
    id: 893,
    firstName: 'Yauma',
    lastName: 'Liner',
    email: 'CYoung@amet.com',
    phone: '(991)356-1590',
    address: {
      streetAddress: '7751 Sed Ln',
      city: 'Central Lake',
      state: 'IA',
      zip: '85854',
    },
    description:
      'at amet pulvinar pharetra ac morbi lacus sed molestie odio scelerisque consequat sed malesuada sit dolor odio amet amet donec mi odio tincidunt lorem sit placerat tortor mattis pretium id sed ac',
  },
  {
    id: 712,
    firstName: 'Milind',
    lastName: 'Galligan',
    email: 'JJudy@nunc.io',
    phone: '(266)424-2487',
    address: {
      streetAddress: '9980 Donec St',
      city: 'Portland',
      state: 'RI',
      zip: '40307',
    },
    description:
      'nullam et hendrerit sagittis sed vel eros tempor nec lacus eget dui mattis lacus odio ipsum sit nec sit pharetra amet convallis hendrerit dolor velit amet malesuada augue et sollicitudin elit aenean',
  },
  {
    id: 207,
    firstName: 'Vittorio',
    lastName: 'Mitchell',
    email: 'ADavid@non.org',
    phone: '(748)651-9559',
    address: {
      streetAddress: '2555 Morbi Ave',
      city: 'Leawood',
      state: 'MI',
      zip: '49512',
    },
    description:
      'tortor tortor sit dolor in pulvinar elementum orci at risus etiam sagittis pharetra ipsum sollicitudin sit magna tellus lacus ac pulvinar magna massa tincidunt quis sollicitudin velit etiam odio consectetur turpis ipsum',
  },
  {
    id: 362,
    firstName: 'David',
    lastName: 'Maher',
    email: 'HGrund@libero.io',
    phone: '(115)747-6650',
    address: {
      streetAddress: '3850 Aliquam Ln',
      city: 'Waterford',
      state: 'RI',
      zip: '57941',
    },
    description:
      'ante placerat consectetur sed consectetur turpis ac sagittis vel velit porttitor et hendrerit egestas vitae etiam pharetra in mi nullam tempor elit malesuada ac tincidunt lectus dui lacus hendrerit placerat consectetur porttitor',
  },
  {
    id: 238,
    firstName: 'Emily',
    lastName: 'Sergent',
    email: 'CMorgan@sollicitudin.net',
    phone: '(969)682-7926',
    address: {
      streetAddress: '965 Sed Ct',
      city: 'Lexington',
      state: 'IL',
      zip: '75525',
    },
    description:
      'etiam non non turpis pulvinar tincidunt sapien lectus eget vitae consectetur lacus vestibulum sit vitae hendrerit massa lacus nec molestie amet amet nec ipsum eget augue eget mi massa aenean vestibulum sagittis',
  },
  {
    id: 293,
    firstName: 'Vinit',
    lastName: 'Haiduke',
    email: 'TIsham@neque.com',
    phone: '(367)827-5667',
    address: {
      streetAddress: '7406 Ante Ct',
      city: 'Paw Paw',
      state: 'MN',
      zip: '99558',
    },
    description:
      'sed mi ac sollicitudin et adipiscing elit eros nunc sollicitudin elit tincidunt risus sit magna libero eros quis sollicitudin tellus velit sagittis sed morbi nullam hendrerit sagittis odio amet molestie fringilla vestibulum',
  },
  {
    id: 212,
    firstName: 'Nirmal',
    lastName: 'Beverage',
    email: 'SAresti@consequat.net',
    phone: '(699)701-8404',
    address: {
      streetAddress: '356 Lacus Rd',
      city: 'Green Bay',
      state: 'OH',
      zip: '33017',
    },
    description:
      'neque non augue facilisis nullam lectus vel egestas consectetur dolor vitae pulvinar velit ipsum turpis placerat et convallis id tortor at lacus neque odio ac sed elementum vestibulum sed porta orci pretium',
  },
  {
    id: 435,
    firstName: 'Sharad',
    lastName: 'Cummings',
    email: 'LLiu@dolor.com',
    phone: '(299)570-8265',
    address: {
      streetAddress: '6366 Nunc Ct',
      city: 'Eglin Afb',
      state: 'PA',
      zip: '12714',
    },
    description:
      'pulvinar rutrum lorem sollicitudin tincidunt nec sed placerat nullam risus vitae vestibulum eget et pulvinar morbi sed sed pulvinar pulvinar magna sollicitudin eros tincidunt elementum hendrerit at pulvinar aenean mattis sed sed',
  },
  {
    id: 490,
    firstName: 'Carlo',
    lastName: 'Hafford',
    email: 'TYach@dolor.org',
    phone: '(322)113-6704',
    address: {
      streetAddress: '1531 At Ct',
      city: 'Warsaw',
      state: 'NC',
      zip: '74649',
    },
    description:
      'elementum odio lorem ipsum magna vel ac sollicitudin consequat pulvinar massa mattis magna aenean suspendisse dui id sed porta nunc odio lorem sit lacus fringilla aliquam at fringilla vestibulum sed tortor tincidunt',
  },
  {
    id: 81,
    firstName: 'Conrade',
    lastName: 'Willman',
    email: 'WDaniello@amet.gov',
    phone: '(726)247-3277',
    address: {
      streetAddress: '5018 Magna Ln',
      city: 'Lake Lillian',
      state: 'MI',
      zip: '50316',
    },
    description:
      'facilisis consequat lectus tortor at eros nunc eget malesuada tincidunt aliquam vitae nec odio donec ac sollicitudin tincidunt dui libero et etiam orci tincidunt augue tellus sapien rutrum nullam rutrum mattis pretium',
  },
  {
    id: 462,
    firstName: 'Rajesh',
    lastName: 'Hiles',
    email: 'NKoch@sed.org',
    phone: '(434)541-7081',
    address: {
      streetAddress: '5921 Consequat Ct',
      city: 'Rachel',
      state: 'MT',
      zip: '26641',
    },
    description:
      'pulvinar sed turpis donec odio at facilisis amet tortor tellus odio at aliquam consequat nullam suspendisse non morbi consequat sed pulvinar et sed turpis magna hendrerit magna sed et vestibulum amet nullam',
  },
  {
    id: 603,
    firstName: 'Delena',
    lastName: 'Mueske',
    email: 'MNutter@magna.org',
    phone: '(610)725-1064',
    address: {
      streetAddress: '2816 Ac Ct',
      city: 'Central Valley',
      state: 'NE',
      zip: '87259',
    },
    description:
      'aliquam sapien sollicitudin et tortor suspendisse amet at dolor ac dolor eros magna donec sit elementum eros elit turpis tincidunt hendrerit sed lacus at molestie pharetra massa at tincidunt etiam mattis velit',
  },
  {
    id: 722,
    firstName: 'Delena',
    lastName: 'Derucher',
    email: 'LTeixeira@fringilla.gov',
    phone: '(971)306-0641',
    address: {
      streetAddress: '9178 Nec Rd',
      city: 'State College',
      state: 'MO',
      zip: '68818',
    },
    description:
      'scelerisque aliquam eros amet dolor sagittis consequat sagittis mi pulvinar risus sapien mi libero consectetur vitae sed ac placerat pretium massa ac eget molestie libero lacus facilisis pulvinar magna at at ipsum',
  },
  {
    id: 280,
    firstName: 'Jane',
    lastName: 'Popsikle',
    email: 'ROrtiz@amet.io',
    phone: '(597)243-1735',
    address: {
      streetAddress: '7591 Quis Ln',
      city: 'Denton',
      state: 'SD',
      zip: '99215',
    },
    description:
      'et amet lacus dolor mi placerat donec rutrum ante pulvinar convallis amet scelerisque lectus porta ante sit eros amet magna donec consectetur tortor malesuada tortor dui tellus sollicitudin tempor odio vel nec',
  },
  {
    id: 717,
    firstName: 'Lontay',
    lastName: 'Fruscione',
    email: 'AJokisch@turpis.ly',
    phone: '(986)265-5646',
    address: {
      streetAddress: '744 Molestie Ct',
      city: 'Louisville',
      state: 'DE',
      zip: '11481',
    },
    description:
      'hendrerit in at risus non nunc ante tortor turpis nec ante nunc magna et vestibulum placerat turpis curabitur at turpis velit velit velit lacus pharetra hendrerit scelerisque et dolor suspendisse tincidunt amet',
  },
  {
    id: 803,
    firstName: 'Xiaoyan',
    lastName: 'Zachary',
    email: 'GGrubbs@dui.ly',
    phone: '(651)958-9616',
    address: {
      streetAddress: '4505 Elementum Ave',
      city: 'Wilmington',
      state: 'KS',
      zip: '49314',
    },
    description:
      'lacus sit elit libero dolor etiam et eros amet dolor pharetra sollicitudin in nullam libero curabitur odio pretium ante aliquam tortor ac at rutrum sed sollicitudin ac amet rutrum sed velit malesuada',
  },
  {
    id: 176,
    firstName: 'Wendy',
    lastName: 'Goodwin',
    email: 'JMarzolf@neque.ly',
    phone: '(228)980-1597',
    address: {
      streetAddress: '3281 In Ln',
      city: 'Mount Vernon',
      state: 'ID',
      zip: '45540',
    },
    description:
      'dui porttitor tincidunt rutrum sed at tincidunt augue donec ante quis facilisis vel dolor ipsum porta eros ac velit sed sagittis ipsum sed malesuada odio ipsum elementum tortor donec consequat dolor sit',
  },
  {
    id: 914,
    firstName: 'Heidi',
    lastName: 'May',
    email: 'FHumphrey@nec.gov',
    phone: '(708)885-1155',
    address: {
      streetAddress: '8633 Mi St',
      city: 'Rachel',
      state: 'IN',
      zip: '76464',
    },
    description:
      'tortor dolor tellus morbi sed lorem pharetra nec velit amet at etiam placerat ipsum tellus augue odio orci fringilla ipsum placerat tincidunt dolor odio vestibulum eros sed scelerisque donec aliquam sed donec',
  },
  {
    id: 7,
    firstName: 'Marcus',
    lastName: 'Heppelmann',
    email: 'SBlalock@vestibulum.org',
    phone: '(950)972-8366',
    address: {
      streetAddress: '8586 Fringilla Ln',
      city: 'Big Bear',
      state: 'WA',
      zip: '55254',
    },
    description:
      'lacus massa aliquam neque dui vel vestibulum nec massa ipsum vitae rutrum sed pharetra sed orci ipsum pretium at ipsum sed amet pretium scelerisque at et sit augue ipsum lorem porta lacus',
  },
  {
    id: 869,
    firstName: 'Judy',
    lastName: 'Karma',
    email: 'MBrazell@dolor.com',
    phone: '(618)085-1881',
    address: {
      streetAddress: '3047 Neque Dr',
      city: 'Middleburg',
      state: 'NC',
      zip: '92278',
    },
    description:
      'ante libero sapien elit consequat et ac amet amet nullam porttitor in lorem nec sed magna ipsum tortor massa hendrerit lacus orci sapien in lacus vitae in velit eget sed facilisis tortor',
  },
  {
    id: 696,
    firstName: 'Ravi',
    lastName: 'Hatter',
    email: 'DRipley@id.net',
    phone: '(227)848-5461',
    address: {
      streetAddress: '711 Porttitor St',
      city: 'Moulton',
      state: 'WI',
      zip: '46067',
    },
    description:
      'augue elit consequat ipsum id nec egestas mattis lectus vestibulum sapien et tincidunt nec vel pretium vestibulum pharetra sapien sollicitudin amet aliquam lacus tortor neque amet pulvinar id dolor pulvinar dolor malesuada',
  },
  {
    id: 798,
    firstName: 'LaNisha',
    lastName: 'Zeigler',
    email: 'JKilpatrick@pulvinar.com',
    phone: '(111)726-8224',
    address: {
      streetAddress: '2669 Mattis Ct',
      city: 'Wrentham',
      state: 'OR',
      zip: '47389',
    },
    description:
      'vitae porta mattis sollicitudin ac nunc orci mattis risus turpis id porttitor convallis sollicitudin lacus porttitor ac porta nunc at aliquam aliquam id orci non consectetur ipsum pretium massa vestibulum lorem adipiscing',
  },
  {
    id: 591,
    firstName: 'Yvette',
    lastName: 'Budgell',
    email: 'WFox@odio.org',
    phone: '(418)732-6799',
    address: {
      streetAddress: '3414 Lacus St',
      city: 'Hopatcong',
      state: 'ND',
      zip: '69632',
    },
    description:
      'suspendisse sed suspendisse odio nec rutrum tempor dolor sed rutrum libero donec in scelerisque consectetur molestie augue malesuada sit curabitur fringilla sagittis et aliquam lacus vitae sit etiam molestie ante tortor vitae',
  },
];

function Main() {
  const [data, setData] = useState(InitialData);
  return (
    <main>
      Test
      {/* <EnhancedTable data={data} setData={setData} /> */}
    </main>
  );
}

export default Main;
