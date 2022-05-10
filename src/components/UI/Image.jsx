import React from 'react';
import { Image as ImageRN } from 'react-native';

const Image = ({ src, resizeMode, height, width, style }) => {
  return (
    <ImageRN
      source={src}
      resizeMode={resizeMode}
      style={{ height: height, width: width, ...style }}
    />
  );
};
export default Image;
