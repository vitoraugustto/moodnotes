import React from 'react';
import { Text } from 'react-native';
import { COLOR_BLACK, FONTS } from '../../themes/theme';

const MyText = ({
  flex,
  color = COLOR_BLACK,
  size = 16,
  spacing,
  lineHeight,
  align,
  font = FONTS.lato.regular,
  children,
}) => {
  return (
    <Text
      style={{
        flex: flex ? 1 : undefined,
        color: color,
        fontFamily: font,
        fontSize: size,
        lineHeight: lineHeight,
        letterSpacing: spacing,
        textAlign: align,
      }}>
      {children}
    </Text>
  );
};

export default MyText;
