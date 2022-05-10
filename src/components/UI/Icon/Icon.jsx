import React from 'react';
import { Image } from 'react-native';
import { ICONS } from './icons';

const Icon = ({ iconName, size = 24, style }) => {
  return (
    <Image
      source={ICONS[iconName].icon}
      resizeMode="contain"
      style={{ height: size, width: size, ...style }}
    />
  );
};
export default Icon;
