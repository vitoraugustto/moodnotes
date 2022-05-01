import React from 'react';
import { Text } from 'react-native';
import { COLOR_BLACK, FONTS } from '../../themes/theme';

const MyText = ({
  color = COLOR_BLACK,
  size = 16,
  spacing,
  lineHeight,
  font = FONTS.lato.regular,
  children,
}) => {
  return (
    <Text
      style={{
        color: color,
        fontFamily: font,
        fontSize: size,
        lineHeight: lineHeight,
        letterSpacing: spacing,
      }}>
      {children}
    </Text>
  );
};

export default MyText;