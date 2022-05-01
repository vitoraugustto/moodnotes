import { Dimensions } from 'react-native';

export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const windowHeight = Dimensions.get('window').height;
export const windowWidth = Dimensions.get('window').width;
