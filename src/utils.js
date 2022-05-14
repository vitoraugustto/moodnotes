import { Dimensions } from 'react-native';

export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const windowHeight = Dimensions.get('window').height;
export const windowWidth = Dimensions.get('window').width;

export const MOODS = {
  sad: {
    text: 'Triste',
    emoji: 'sad-emoji',
  },
  happy: {
    text: 'Feliz',
    emoji: 'happy-emoji',
  },
  angry: {
    text: 'Bravo',
    emoji: 'angry-emoji',
  },
  surprised: {
    text: 'Surpreso',
    emoji: 'surprised-emoji',
  },
  indifferent: {
    text: 'Indiferente',
    emoji: 'indifferent-emoji',
  },
  inlove: {
    text: 'Apaixonado',
    emoji: 'inlove-emoji',
  },
};

export const FOODS = {
  fruit: {
    text: 'Frutas',
    icon: 'apple',
  },
  legume: {
    text: 'Legumes',
    icon: 'carrot',
  },
  chicken: {
    text: 'Carnes',
    icon: 'chicken',
  },
  candy: {
    text: 'Doces',
    icon: 'chocolate',
  },
  fastFood: {
    text: 'Fast-food',
    icon: 'french-fries',
  },
  liquid: {
    text: 'Líquidos',
    icon: 'juice',
  },
  pasta: {
    text: 'Massas',
    icon: 'pizza',
  },
  homemade: {
    text: 'Comida caseira',
    icon: 'rice',
  },
};
