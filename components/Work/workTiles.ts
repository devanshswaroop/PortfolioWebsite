export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    description: `Here are things`,
    title: `I've worked on`,
    image: {
      src: '/static/images/aphex-apps.webp',
      width: 600,
      height: 770,
    },
  },
  {
    description: 'I built',
    title: 'To Do List',
    image: {
      src: '/static/images/newsify.png',
      width: 600,
      height: 554,
    },
  },
  {
    description: `I built`,
    title: 'Currency Converter',
    image: {
      src: '/static/images/currencyconverter.png',
      width: 600,
      height: 717,
    },
  },
];
