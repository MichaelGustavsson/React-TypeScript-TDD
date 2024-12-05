import original from './assets/images/original.jpg';
import mandel from './assets/images/mandel.jpg';
import osotad from './assets/images/osotad.jpg';

export const DUMMY_PRODUCTS = [
  {
    id: 1,
    image: original,
    name: 'Original Skorpan',
    price: 32.95,
    description: 'Vår mest populära skorpa med smak av kardemumma',
  },
  {
    id: 2,
    image: mandel,
    name: 'Mandel Skorpan',
    price: 34.95,
    description: 'Vår sensationella mandelskorpa med underbar smak av mandel',
  },
  {
    id: 3,
    image: osotad,
    name: 'Osötade Skorpan',
    price: 28.95,
    description:
      'Bakad helt utan socker och sötningsmedel men massor av goda fröer',
  },
];
